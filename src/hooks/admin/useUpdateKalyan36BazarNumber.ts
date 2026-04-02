import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/http';

interface UpdateParams {
  admin_id: number;
  kalyan36bazar_number_id: number;
  number: number;
  result_time: string;
}

interface UpdateResponse {
  status_code: number;
  message: string;
}

async function updateNumber(params: UpdateParams): Promise<UpdateResponse> {
  const { data } = await api.put('/admin/update/kalyan36bazar_numberlist', params);
  return data as UpdateResponse;
}

export function useUpdateKalyan36BazarNumber() {
  const queryClient = useQueryClient();
  return useMutation<UpdateResponse, Error, UpdateParams>({
    mutationFn: updateNumber,
    onSuccess: (_, variables) => {
      void queryClient.invalidateQueries({ queryKey: ['admin', 'kalyan36bazar', 'numbers', variables.admin_id] });
    },
  });
}
