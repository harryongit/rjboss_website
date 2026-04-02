import { useEffect, useMemo, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DataTable } from '@/components/common/DataTable';
import { Toast } from '@/components/ui/ToastProvider';
import { confirmSwal } from '@/lib/ConfirmSwal';
import { RefreshButton } from '@/components/ui/refresh-admin';
import { useDropdownKalyan36BazarNumberList } from '@/hooks/admin/useDropdownKalyan36BazarNumberList';
import { useListKalyan36BazarTodayResults } from '@/hooks/admin/useListKalyan36BazarTodayResults';
import { useCreateKalyan36BazarResult } from '@/hooks/admin/useCreateKalyan36BazarResult';
import { useDeleteKalyan36BazarResult } from '@/hooks/admin/useDeleteKalyan36BazarResult';
import { Loader2 } from 'lucide-react';

const UploadKalyan36BazarResult = () => {
  const [formData, setFormData] = useState({
    slotId: '',
    resultValue: '',
  });

  const [results, setResults] = useState([] as { id: number; slotId: number; slotLabel: string; value: string; datetime: string }[]);

  let adminId = 1;
  try {
    const saved = localStorage.getItem('admin');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed?.id) adminId = parsed.id as number;
    }
  } catch {
    adminId = 1;
  }

  const dropdownQuery = useDropdownKalyan36BazarNumberList({ admin_id: adminId });
  const listQuery = useListKalyan36BazarTodayResults({ admin_id: adminId });
  const createMutation = useCreateKalyan36BazarResult();
  const deleteMutation = useDeleteKalyan36BazarResult();

  const slotMap = useMemo(() => {
    const items = dropdownQuery.data?.data?.items ?? [];
    const map = new Map<number, string>();
    items.forEach((it: any) => {
      const label = it.display_label ?? `${it.number} (${formatTimeLabel(it.result_time)})`;
      map.set(it.kalyan36bazar_number_id, label);
    });
    return map;
  }, [dropdownQuery.data]);

  useEffect(() => {
    const raw: any = listQuery.data?.data;
    const items: any[] = Array.isArray(raw) ? raw : (raw?.items ?? []);
    setResults(items.map((r: any) => ({
      id: r.result_id,
      slotId: r.kalyan36bazar_number_id,
      slotLabel: slotMap.get(r.kalyan36bazar_number_id) ?? String(r.kalyan36bazar_number_id),
      value: r.result_value,
      datetime: r.result_datetime,
    })));
  }, [listQuery.data, slotMap]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.slotId || !formData.resultValue) {
      Toast.error('Please select time slot and enter result');
      return;
    }
    try {
      const resp = await createMutation.mutateAsync({
        admin_id: adminId,
        kalyan36bazar_number_id: parseInt(formData.slotId, 10),
        result_value: formData.resultValue,
      });
      Toast.success(resp.message || 'Result uploaded successfully');
      await listQuery.refetch();
      setFormData({ slotId: '', resultValue: '' });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to upload result';
      Toast.error(message);
    }
  };

  const onDelete = async (row: any) => {
    const confirmed = await confirmSwal({
      title: 'Delete Result?',
      text: `This will delete the result for ${row.slotLabel}.`,
      confirmText: 'Delete',
      icon: 'warning',
    });
    if (!confirmed) return;
    try {
      const resp = await deleteMutation.mutateAsync({ admin_id: adminId, result_id: row.id });
      Toast.success(resp.message || `Result deleted successfully`);
      await listQuery.refetch();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to delete result';
      Toast.error(message);
    }
  };

  const columns = [
    { header: 'Time Slot', accessor: 'slotLabel' },
    { header: 'Result', accessor: 'value' },
    { header: 'Date Time', accessor: 'datetime' },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="slotId">Time Slot *</Label>
                <Select
                  value={formData.slotId}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, slotId: value }))}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {(dropdownQuery.data?.data?.items ?? []).map((it) => (
                      <SelectItem key={it.kalyan36bazar_number_id} value={String(it.kalyan36bazar_number_id)}>
                        {it.display_label ?? `${it.number} (${formatTimeLabel(it.result_time)})`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="resultValue">Result *</Label>
                <Input
                  id="resultValue"
                  value={formData.resultValue}
                  onChange={(e) => setFormData((prev) => ({ ...prev, resultValue: e.target.value }))}
                  placeholder="XXX"
                  required
                />
              </div>
              <div className="flex items-end">
                <Button type="submit" className="w-full" disabled={createMutation.isPending}>
                  {createMutation.isPending ? (
                    <span className="flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" /> Submitting...</span>
                  ) : 'Submit'}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      <DataTable
        title="Kalyan 36 Bazar Today Results"
        columns={columns}
        data={results}
        onDelete={onDelete}
        headerRight={<RefreshButton onClick={() => { void listQuery.refetch(); }} loading={listQuery.isFetching} />}
      />
    </div>
  );
};

export default UploadKalyan36BazarResult;

function formatTimeLabel(t: string): string {
  if (!t) return '';
  const [h, m] = t.split(':');
  const hh = Number(h);
  const suffix = hh >= 12 ? 'PM' : 'AM';
  const displayHour = hh % 12 === 0 ? 12 : hh % 12;
  return `${String(displayHour).padStart(2, '0')}:${m} ${suffix}`;
}
