import { useQuery } from '@tanstack/react-query';
const BASE_URL = "http://127.0.0.1:8000";

export const useFooterData = (id) => {
    return useQuery({
        queryKey: ['Footer', id],
        queryFn: () =>
            fetch(`${BASE_URL}/api/footers/${id}/`)
                .then(res => {
                    if (!res.ok) throw new Error('Error in catching data from API');
                    return res.json();
                }),
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
    });
};
