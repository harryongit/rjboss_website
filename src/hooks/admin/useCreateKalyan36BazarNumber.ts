import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/http';

interface CreateParams {
  admin_id: number;
  number: number;
  result_time: string;
}

interface CreateResponse {
  status_code: number;
  message: string;
  data: { kalyan36bazar_number_id: number };
}

async function createNumber(params: CreateParams): Promise<CreateResponse> {
  const { data } = await api.post('/admin/create/kalyan36bazar_numberlist', params);
  return data as CreateResponse;
}

export function useCreateKalyan36BazarNumber() {
  const queryClient = useQueryClient();
  return useMutation<CreateResponse, Error, CreateParams>({
    mutationFn: createNumber,
    onSuccess: (_, variables) => {
      void queryClient.invalidateQueries({ queryKey: ['admin', 'kalyan36bazar', 'numbers', variables.admin_id] });
    },
  });
}
