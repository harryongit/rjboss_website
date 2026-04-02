import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/http';

interface DropdownItem {
  kalyan36bazar_number_id: number;
  number: number;
  result_time: string;
  display_label?: string;
}

interface DropdownResponse {
  status_code: number;
  message: string;
  data: { items: DropdownItem[] };
}

async function getDropdown(admin_id: number): Promise<DropdownResponse> {
  const { data } = await api.post('/admin/dropdown/kalyan36bazar_numberlist', { admin_id });
  return data as DropdownResponse;
}

export function useDropdownKalyan36BazarNumberList(params: { admin_id: number }) {
  return useQuery<DropdownResponse, Error>({
    queryKey: ['admin', 'kalyan36bazar', 'dropdown', params.admin_id],
    queryFn: () => getDropdown(params.admin_id),
    enabled: !!params.admin_id,
  });
}
