import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/http';

interface ChartItem {
  date: string;
  results: { result_time: string; result: string }[];
}

interface ChartResponse {
  status_code: number;
  message: string;
  data: ChartItem[];
}

async function getChart(): Promise<ChartResponse> {
  const { data } = await api.get('/common/kalyan36bazarresult/panel');
  if (data?.status_code !== 200) {
    const message = typeof data?.message === 'string' ? data.message : 'Failed to fetch Kalyan 36 Bazar chart results';
    throw new Error(message);
  }
  return data as ChartResponse;
}

export function useKalyan36BazarPanelResults() {
  return useQuery<ChartResponse, Error>({
    queryKey: ['common', 'kalyan36bazar', 'panel'],
    queryFn: () => getChart(),
  });
}
