

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DataTable } from '@/components/common/DataTable';
import { toast } from 'sonner';
import { confirmSwal } from '@/lib/ConfirmSwal';

const AddUserMarket = () => {
  const [formData, setFormData] = useState({
    userName: '',
    game: '',
    noOfDays: '30',
  });

  const [userMarkets, setUserMarkets] = useState([
    { id: 1, userName: 'john_doe', game: 'Kalyan Matka', addedOn: '2024-11-01', status: 'Active till 16-12-2025' },
    { id: 2, userName: 'jane_smith', game: 'Milan Day', addedOn: '2024-11-15', status: 'Active till 20-12-2025' },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMarket = {
      id: Date.now(),
      userName: formData.userName,
      game: formData.game,
      addedOn: new Date().toISOString().slice(0, 10),
      status: `Active till ${new Date(Date.now() + parseInt(formData.noOfDays) * 86400000).toLocaleDateString()}`,
    };
    setUserMarkets(prev => [...prev, newMarket]);
    toast.success('User market added successfully!');
    setFormData({ userName: '', game: '', noOfDays: '30' });
  };

  // DELETE USER MARKET WITH CONFIRMATION
  const onDelete = async (row: any) => {
    const confirmed = await confirmSwal({
      title: 'Delete User Market?',
      text: `This will remove ${row.userName} from ${row.game}.`,
      confirmText: 'Delete',
      icon: 'warning',
    });

    if (!confirmed) return;

    setUserMarkets(prev => prev.filter((m) => m.id !== row.id));
    toast.success(`${row.userName} removed from ${row.game} successfully!`);
  };

  const columns = [
    { header: 'User Name', accessor: 'userName' },
    { header: 'Game', accessor: 'game' },
    { header: 'Added On', accessor: 'addedOn' },
    {
      header: 'Status',
      accessor: 'status',
      cell: (value: string) => <span className="text-success font-medium">{value}</span>,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Add User Market Form */}
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="userName">User Name *</Label>
                <Select
                  value={formData.userName}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, userName: value }))}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select user" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john_doe">john_doe</SelectItem>
                    <SelectItem value="jane_smith">jane_smith</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="game">Game *</Label>
                <Select
                  value={formData.game}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, game: value }))}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select game" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kalyan">Kalyan Matka</SelectItem>
                    <SelectItem value="milan">Milan Day</SelectItem>
                    <SelectItem value="rajdhani">Rajdhani Day</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="noOfDays">No. of Days (Default 30) *</Label>
                <Input
                  id="noOfDays"
                  name="noOfDays"
                  type="number"
                  value={formData.noOfDays}
                  onChange={(e) => setFormData(prev => ({ ...prev, noOfDays: e.target.value }))}
                  placeholder="30"
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

      {/* User Markets Table */}
      <DataTable
        title="User Market Report"
        columns={columns}
        data={userMarkets}
        onDelete={onDelete} // delete with confirmation
      />
    </div>
  );
};

export default AddUserMarket;
