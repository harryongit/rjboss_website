

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DataTable } from "@/components/common/DataTable";
import { toast } from "sonner";
import { confirmSwal } from "@/lib/ConfirmSwal";

const AddFinalAnk = () => {
  const [formData, setFormData] = useState({
    gameName: "",
    finalAnk: "",
    resultDate: "",
  });

  const [finalAnks, setFinalAnks] = useState([
    { id: 1, gameName: "Kalyan Matka", finalAnk: "123", resultDate: "2025-12-05" },
    { id: 2, gameName: "Milan Day", finalAnk: "456", resultDate: "2025-12-05" },
  ]);

  // HANDLE INPUT CHANGE
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // HANDLE SUBMIT
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.gameName || !formData.finalAnk || !formData.resultDate) {
      toast.error("Please fill in all fields!");
      return;
    }

    const newRecord = {
      id: Date.now(),
      gameName: formData.gameName,
      finalAnk: formData.finalAnk,
      resultDate: formData.resultDate,
    };

    setFinalAnks((prev) => [...prev, newRecord]);
    toast.success("Final ank added successfully!");
    setFormData({ gameName: "", finalAnk: "", resultDate: "" });
  };

  // DELETE RECORD WITH CONFIRMATION
  const onDelete = async (row: any) => {
    const confirmed = await confirmSwal({
      title: "Delete Final Ank?",
      text: `This will delete the final ank number "${row.finalAnk}" for ${row.gameName}.`,
      confirmText: "Delete",
      icon: "warning",
    });

    if (!confirmed) return;

    setFinalAnks((prev) => prev.filter((r) => r.id !== row.id));
    toast.success(`Deleted final ank ${row.finalAnk} for ${row.gameName}`);
  };

  // TABLE COLUMNS
  const columns = [
   
    { header: "Game Name", accessor: "gameName" },
    { header: "Number", accessor: "finalAnk" },
   
  ];

  return (
    <div className="space-y-6">
      {/* Add Final Ank Form */}
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
                <Label htmlFor="resultDate">Result Date *</Label>
                <Input
                  id="resultDate"
                  name="resultDate"
                  type="date"
                  value={formData.resultDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gameName">Game Name *</Label>
                <Select
                  value={formData.gameName}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, gameName: value }))}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select game" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Kalyan Matka">Kalyan Matka</SelectItem>
                    <SelectItem value="Milan Day">Milan Day</SelectItem>
                    <SelectItem value="Rajdhani Day">Rajdhani Day</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="finalAnk">Final Ank Number *</Label>
                <Input
                  id="finalAnk"
                  name="finalAnk"
                  type="text"
                  value={formData.finalAnk}
                  onChange={handleInputChange}
                  placeholder="Enter final ank number"
                  required
                />
              </div>

             
            </div>

            <div className="flex justify-center">
              <Button type="submit" className="bg-success hover:bg-success/90 text-success-foreground px-8">
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Final Ank Table */}
      <DataTable
        title="Final Ank Report"
        columns={columns}
        data={finalAnks}
        onDelete={onDelete} // delete with confirmation
      />
    </div>
  );
};

export default AddFinalAnk;
