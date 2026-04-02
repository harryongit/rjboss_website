import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/http';

interface CreateParams {
  admin_id: number;
  kalyan36bazar_number_id: number;
  result_value: string;
}

interface CreateResponse {
  status_code: number;
  message: string;
}

async function createResult(params: CreateParams): Promise<CreateResponse> {
  const { data } = await api.post('/admin/create/kalyan36bazar_result', params);
  return data as CreateResponse;
}

export function useCreateKalyan36BazarResult() {
  const queryClient = useQueryClient();
  return useMutation<CreateResponse, Error, CreateParams>({
    mutationFn: createResult,
    onSuccess: (_, variables) => {
      void queryClient.invalidateQueries({ queryKey: ['admin', 'kalyan36bazar', 'today-results', variables.admin_id] });
      void queryClient.invalidateQueries({ queryKey: ['common', 'kalyan36bazar', 'today'] });
    },
  });
}
