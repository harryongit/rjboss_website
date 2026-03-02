import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/http';

interface ListRequest {
  admin_id: number;
}

interface RawItem {
  mainstarline_number_id?: number;
  number: number;
  result_time: string;
}

interface ListResponse {
  status_code: number;
  message: string;
  data: { items: RawItem[] };
}

async function postList(body: ListRequest): Promise<ListResponse> {
  const { data } = await api.post('/admin/list/mainstarline_numberlist', body);
  if (data?.status_code !== 200) {
    const message = typeof data?.message === 'string' ? data.message : 'Failed to fetch Main Star Line numbers';
    throw new Error(message);
  }
  return data as ListResponse;
}

export function useListMainStarLineNumbers(req: ListRequest) {
  return useQuery<ListResponse, Error>({
    queryKey: ['admin', 'mainstarline', 'list', req.admin_id],
    queryFn: () => postList(req),
    enabled: !!req.admin_id,
  });
}
