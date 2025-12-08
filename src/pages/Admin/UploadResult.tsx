

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DataTable } from '@/components/common/DataTable';
import { toast } from 'sonner';
import { confirmSwal } from '@/lib/ConfirmSwal';

const UploadResult = () => {
  const [formData, setFormData] = useState({
    resultDate: '',
    gameName: '',
    resultNumber: '',
  });

  const [results, setResults] = useState([
    { id: 1, gameName: 'Kalyan Matka', number: '123-45-678', date: '2024-12-01' },
    { id: 2, gameName: 'Milan Day', number: '456-78-901', date: '2024-12-01' },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newResult = {
      id: Date.now(),
      gameName: formData.gameName,
      number: formData.resultNumber,
      date: formData.resultDate,
    };

    setResults((prev) => [...prev, newResult]);
    toast.success('Result uploaded successfully!');

    setFormData({
      resultDate: '',
      gameName: '',
      resultNumber: '',
    });
  };

  // DELETE WITH SWEETALERT CONFIRMATION
  const onDelete = async (row: any) => {
    const confirmed = await confirmSwal({
      title: 'Delete Result?',
      text: `This will delete the result for ${row.gameName}.`,
      confirmText: 'Delete',
      icon: 'warning',
    });

    if (!confirmed) return;

    setResults((prev) => prev.filter((r) => r.id !== row.id));
    toast.success(`Result for ${row.gameName} deleted successfully!`);
  };

  const columns = [
    { header: 'Game Name', accessor: 'gameName' },
    { header: 'Result Number', accessor: 'number' },
   
  ];

  return (
    <div className="space-y-6">
      {/* Upload Result Form */}
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
                  onChange={(e) => setFormData(prev => ({ ...prev, resultDate: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gameName">Game Name *</Label>
                <Select
                  value={formData.gameName}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, gameName: value }))}
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
                <Label htmlFor="resultNumber">Result Number *</Label>
                <Input
                  id="resultNumber"
                  name="resultNumber"
                  value={formData.resultNumber}
                  onChange={(e) => setFormData(prev => ({ ...prev, resultNumber: e.target.value }))}
                  placeholder="XXX-XX-XXX"
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

      {/* Results Table */}
      <DataTable
        title="Result Report"
        columns={columns}
        data={results}
        onDelete={onDelete} // Delete with confirmation
      />
    </div>
  );
};

export default UploadResult;
