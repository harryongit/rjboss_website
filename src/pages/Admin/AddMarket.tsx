
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { DataTable } from "@/components/common/DataTable";
import { toast } from "sonner";
import { confirmSwal } from "@/lib/ConfirmSwal";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const AddMarket = () => {
  const [formData, setFormData] = useState({
    gameName: "",
    gameDays: "",
    openTime: "",
    closeTime: "",
    openStartTime: "",
    openStopTime: "",
    closeStartTime: "",
    closeStopTime: "",
    chart: "",
    liveResultSequence: "",
    sequenceNumber: "",
    color: "",
    domain: "smboss.net",
  });

  const [markets, setMarkets] = useState([
    { id: 1, gameName: "Kalyan Matka", openTime: "09:30 AM", closeTime: "11:30 PM" },
    { id: 2, gameName: "Milan Day", openTime: "10:00 AM", closeTime: "12:00 PM" },
    { id: 3, gameName: "Kalyan Matka", openTime: "09:30 AM", closeTime: "11:30 PM" },
  ]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.chart) {
      toast.error("Please select chart type");
      return;
    }

    if (!formData.color) {
      toast.error("Please select color");
      return;
    }

    // Add new market
    const newMarket = {
      id: Date.now(),
      gameName: formData.gameName,
      openTime: formData.openTime,
      closeTime: formData.closeTime,
    };

    setMarkets((prev) => [...prev, newMarket]);
    toast.success("Market added successfully!");

    // Reset form
    setFormData({
      gameName: "",
      gameDays: "",
      openTime: "",
      closeTime: "",
      openStartTime: "",
      openStopTime: "",
      closeStartTime: "",
      closeStopTime: "",
      chart: "",
      liveResultSequence: "",
      sequenceNumber: "",
      color: "",
      domain: "smboss.net",
    });
  };

  // Delete market with confirmation
  const onDelete = async (row: any) => {
    const confirmed = await confirmSwal({
      title: "Delete Market?",
      text: `This will permanently delete ${row.gameName}.`,
      confirmText: "Delete",
      icon: "warning",
    });

    if (!confirmed) return;

    setMarkets((prev) => prev.filter((m) => m.id !== row.id));
    toast.success(`${row.gameName} deleted successfully!`);
  };

  const columns = [
    { header: "Game Name", accessor: "gameName" },
    { header: "Open Time", accessor: "openTime" },
    { header: "Close Time", accessor: "closeTime" },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Game Name */}
              <div className="space-y-2">
                <Label>Game Name *</Label>
                <Input
                  name="gameName"
                  value={formData.gameName}
                  onChange={handleInputChange}
                  placeholder="Enter game name"
                  required
                />
              </div>

              {/* Game Days Number */}
              <div className="space-y-2">
                <Label>Game Days</Label>
                <Input
                  type="number"
                  min="1"
                  max="7"
                  name="gameDays"
                  value={formData.gameDays}
                  onChange={handleInputChange}
                  placeholder="1–7"
                />
              </div>

              {/* Open Time */}
              <div className="space-y-2">
                <Label>Open Time *</Label>
                <Input
                  type="time"
                  name="openTime"
                  value={formData.openTime}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Close Time */}
              <div className="space-y-2">
                <Label>Close Time *</Label>
                <Input
                  type="time"
                  name="closeTime"
                  value={formData.closeTime}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Open Start Time */}
              <div className="space-y-2">
                <Label>Open Start Time</Label>
                <Input
                  type="time"
                  name="openStartTime"
                  value={formData.openStartTime}
                  onChange={handleInputChange}
                />
              </div>

              {/* Open Stop Time */}
              <div className="space-y-2">
                <Label>Open Stop Time</Label>
                <Input
                  type="time"
                  name="openStopTime"
                  value={formData.openStopTime}
                  onChange={handleInputChange}
                />
              </div>

              {/* Close Start Time */}
              <div className="space-y-2">
                <Label>Close Start Time</Label>
                <Input
                  type="time"
                  name="closeStartTime"
                  value={formData.closeStartTime}
                  onChange={handleInputChange}
                />
              </div>

              {/* Close Stop Time */}
              <div className="space-y-2">
                <Label>Close Stop Time</Label>
                <Input
                  type="time"
                  name="closeStopTime"
                  value={formData.closeStopTime}
                  onChange={handleInputChange}
                />
              </div>

              {/* Chart Dropdown */}
              <div className="space-y-2">
                <Label>Chart *</Label>

                <Select
                  value={formData.chart}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, chart: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Chart Type" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="Normal">Normal</SelectItem>
                    <SelectItem value="Extra">Extra</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Sequence Number */}
              <div className="space-y-2">
                <Label>Sequence Number *</Label>
                <Input
                  type="number"
                  name="sequenceNumber"
                  value={formData.sequenceNumber}
                  onChange={handleInputChange}
                  placeholder="Enter sequence number"
                  required
                />
              </div>

              {/* Live Result Sequence */}
              <div className="space-y-2">
                <Label>Live Result Sequence</Label>
                <Input
                  type="number"
                  name="liveResultSequence"
                  value={formData.liveResultSequence}
                  onChange={handleInputChange}
                  placeholder="Enter sequence"
                />
              </div>

              {/* Color Dropdown */}
              <div className="space-y-2">
                <Label>Color *</Label>

                <Select
                  value={formData.color}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, color: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Color" />
                  </SelectTrigger>

                  <SelectContent>
  <SelectItem value="Red">
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-red-500"></span>
      Red
    </div>
  </SelectItem>

  <SelectItem value="Green">
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-green-500"></span>
      Green
    </div>
  </SelectItem>

  <SelectItem value="Blue">
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-blue-500"></span>
      Blue
    </div>
  </SelectItem>

  <SelectItem value="Yellow">
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
      Yellow
    </div>
  </SelectItem>

  <SelectItem value="Orange">
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-orange-500"></span>
      Orange
    </div>
  </SelectItem>

  <SelectItem value="Pink">
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-pink-500"></span>
      Pink
    </div>
  </SelectItem>

  <SelectItem value="Purple">
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-purple-500"></span>
      Purple
    </div>
  </SelectItem>

  <SelectItem value="Black">
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-black"></span>
      Black
    </div>
  </SelectItem>

  <SelectItem value="White">
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-white border border-gray-400"></span>
      White
    </div>
  </SelectItem>
</SelectContent>


                </Select>
              </div>
            </div>

            {/* Domain */}
            <div className="space-y-2">
              <Label>Domain (Fixed)</Label>
              <Input
                value="smboss.net"
                readOnly
                className="bg-muted cursor-not-allowed"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-success hover:bg-success/90 text-success-foreground px-8"
              >
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Table */}
      <DataTable
        title="Market Report"
        columns={columns}
        data={markets}
        onEdit={(row) => toast.info(`Editing ${row.gameName}`)}
        onDelete={onDelete} 
      />
    </div>
  );
};

export default AddMarket;
