
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DataTable } from '@/components/common/DataTable';
import { toast } from 'sonner';
import { confirmSwal } from '@/lib/ConfirmSwal';

const FreeFix = () => {
  const [formData, setFormData] = useState({
    resultDate: '',
    gameName: '',
    singleResult: '',
    jodiResult: '',
    pannaResult: '',
  });

  const [results, setResults] = useState([
    {
      id: 1,
      gameName: 'Kalyan Matka',
      singleResult: '123',
      jodiResult: '45',
      pannaResult: '678',
      date: '2024-12-01'
    },
    {
      id: 2,
      gameName: 'Milan Day',
      singleResult: '456',
      jodiResult: '78',
      pannaResult: '901',
      date: '2024-12-01'
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newResult = {
      id: Date.now(),
      gameName: formData.gameName,
      singleResult: formData.singleResult,
      jodiResult: formData.jodiResult,
      pannaResult: formData.pannaResult,
      date: formData.resultDate,
    };

    setResults((prev) => [...prev, newResult]);
    toast.success('Result uploaded successfully!');

    setFormData({
      resultDate: '',
      gameName: '',
      singleResult: '',
      jodiResult: '',
      pannaResult: '',
    });
  };

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
    { header: 'Single Result', accessor: 'singleResult' },
    { header: 'Jodi Result', accessor: 'jodiResult' },
    { header: 'Panna Result', accessor: 'pannaResult' },
  ];

  return (
    <div className="space-y-6">
      {/* Upload Result Form */}
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
           

              {/* Game Name */}
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
                    <SelectItem value="Kalyan Matka">Kalyan Matka</SelectItem>
                    <SelectItem value="Milan Day">Milan Day</SelectItem>
                    <SelectItem value="Rajdhani Day">Rajdhani Day</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Single Result */}
              <div className="space-y-2">
                <Label htmlFor="singleResult">Single Result *</Label>
                <Input
                  id="singleResult"
                  value={formData.singleResult}
                  onChange={(e) => setFormData(prev => ({ ...prev, singleResult: e.target.value }))}
                  placeholder="XXX"
                  required
                />
              </div>

              {/* Jodi Result */}
              <div className="space-y-2">
                <Label htmlFor="jodiResult">Jodi Result *</Label>
                <Input
                  id="jodiResult"
                  value={formData.jodiResult}
                  onChange={(e) => setFormData(prev => ({ ...prev, jodiResult: e.target.value }))}
                  placeholder="XX"
                  required
                />
              </div>

              {/* Panna Result */}
              <div className="space-y-2">
                <Label htmlFor="pannaResult">Panna Result *</Label>
                <Input
                  id="pannaResult"
                  value={formData.pannaResult}
                  onChange={(e) => setFormData(prev => ({ ...prev, pannaResult: e.target.value }))}
                  placeholder="XXX"
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
        onDelete={onDelete}
      />
    </div>
  );
};

export default FreeFix;
