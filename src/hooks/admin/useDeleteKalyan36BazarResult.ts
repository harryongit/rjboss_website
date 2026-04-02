import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/http';

interface DeleteParams {
  admin_id: number;
  result_id: number;
}

interface DeleteResponse {
  status_code: number;
  message: string;
}

async function deleteResult(params: DeleteParams): Promise<DeleteResponse> {
  const { data } = await api.delete('/admin/delete/kalyan36bazar_result', { data: params });
  return data as DeleteResponse;
}

export function useDeleteKalyan36BazarResult() {
  const queryClient = useQueryClient();
  return useMutation<DeleteResponse, Error, DeleteParams>({
    mutationFn: deleteResult,
    onSuccess: (_, variables) => {
      void queryClient.invalidateQueries({ queryKey: ['admin', 'kalyan36bazar', 'today-results', variables.admin_id] });
      void queryClient.invalidateQueries({ queryKey: ['common', 'kalyan36bazar', 'today'] });
    },
  });
}
