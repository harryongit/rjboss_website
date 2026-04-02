import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/http';

interface TodayItem {
  result_time: string;
  result: string;
}

interface TodayResponse {
  status_code: number;
  message: string;
  data: { items: TodayItem[] } | TodayItem[];
}

async function getToday(): Promise<TodayResponse> {
  const { data } = await api.get('/common/kalyan36bazarresult/');
  if (data?.status_code !== 200) {
    const message = typeof data?.message === 'string' ? data.message : 'Failed to fetch Kalyan 36 Bazar results';
    throw new Error(message);
  }
  return data as TodayResponse;
}

export function useKalyan36BazarTodayResult() {
  return useQuery<TodayResponse, Error>({
    queryKey: ['common', 'kalyan36bazar', 'today'],
    queryFn: () => getToday(),
  });
}
