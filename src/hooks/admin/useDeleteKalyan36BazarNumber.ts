import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/http';

interface DeleteParams {
  admin_id: number;
  kalyan36bazar_number_id: number;
}

interface DeleteResponse {
  status_code: number;
  message: string;
}

async function deleteNumber(params: DeleteParams): Promise<DeleteResponse> {
  const { data } = await api.delete('/admin/delete/kalyan36bazar_numberlist', { data: params });
  return data as DeleteResponse;
}

export function useDeleteKalyan36BazarNumber() {
  const queryClient = useQueryClient();
  return useMutation<DeleteResponse, Error, DeleteParams>({
    mutationFn: deleteNumber,
    onSuccess: (_, variables) => {
      void queryClient.invalidateQueries({ queryKey: ['admin', 'kalyan36bazar', 'numbers', variables.admin_id] });
    },
  });
}
