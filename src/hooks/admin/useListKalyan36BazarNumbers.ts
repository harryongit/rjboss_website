import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/http';

interface NumberItem {
  kalyan36bazar_number_id: number;
  number: number;
  result_time: string;
}

interface ListResponse {
  status_code: number;
  message: string;
  data: { items: NumberItem[] };
}

async function listNumbers(admin_id: number): Promise<ListResponse> {
  const { data } = await api.post('/admin/list/kalyan36bazar_numberlist', { admin_id });
  return data as ListResponse;
}

export function useListKalyan36BazarNumbers(params: { admin_id: number }) {
  return useQuery<ListResponse, Error>({
    queryKey: ['admin', 'kalyan36bazar', 'numbers', params.admin_id],
    queryFn: () => listNumbers(params.admin_id),
    enabled: !!params.admin_id,
  });
}
