import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/http';

interface TodayResultItem {
  result_id: number;
  kalyan36bazar_number_id: number;
  result_value: string;
  result_datetime: string;
}

interface ListTodayResponse {
  status_code: number;
  message: string;
  data: TodayResultItem[];
}

async function listTodayResults(admin_id: number): Promise<ListTodayResponse> {
  const { data } = await api.post('/admin/list/kalyan36bazar_today_result', { admin_id });
  return data as ListTodayResponse;
}

export function useListKalyan36BazarTodayResults(params: { admin_id: number }) {
  return useQuery<ListTodayResponse, Error>({
    queryKey: ['admin', 'kalyan36bazar', 'today-results', params.admin_id],
    queryFn: () => listTodayResults(params.admin_id),
    enabled: !!params.admin_id,
  });
}
