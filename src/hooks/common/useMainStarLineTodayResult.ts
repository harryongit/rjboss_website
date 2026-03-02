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
  const { data } = await api.get('/common/mainstarlineresult/');
  if (data?.status_code !== 200) {
    const message = typeof data?.message === 'string' ? data.message : 'Failed to fetch today results';
    throw new Error(message);
  }
  return data as TodayResponse;
}

export function useMainStarLineTodayResult() {
  return useQuery<TodayResponse, Error>({
    queryKey: ['common', 'mainstarline', 'today'],
    queryFn: () => getToday(),
  });
}
