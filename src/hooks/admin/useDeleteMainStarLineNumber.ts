import { useMutation } from '@tanstack/react-query';
import { api } from '@/lib/http';

interface DeleteRequest {
  admin_id: number;
  mainstarline_number_id: number;
}

interface DeleteResponse {
  status_code: number;
  message: string;
}

async function del(body: DeleteRequest): Promise<DeleteResponse> {
  const { data } = await api.delete('/admin/delete/mainstarline_numberlist', { data: body });
  if (data?.status_code !== 200) {
    const message = typeof data?.message === 'string' ? data.message : 'Failed to delete Main Star Line number';
    throw new Error(message);
  }
  return data as DeleteResponse;
}

export function useDeleteMainStarLineNumber() {
  return useMutation<DeleteResponse, Error, DeleteRequest>({
    mutationFn: (body) => del(body),
  });
}
