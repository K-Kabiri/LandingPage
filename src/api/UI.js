import { useQuery } from '@tanstack/react-query';
const BASE_URL = "http://127.0.0.1:8000";

export const useUIData = (id) => {
    return useQuery({
        queryKey: ['UI', id],
        queryFn: () =>
            fetch(`${BASE_URL}/api/user_interface-sections/${id}/`)
                .then(res => {
                    if (!res.ok) throw new Error('Error in catching data from API');
                    return res.json();
                }),
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
    });
};
