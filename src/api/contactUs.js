import { useQuery } from '@tanstack/react-query';
const BASE_URL = "http://127.0.0.1:8000";

export const useContactUsData = (id) => {
    return useQuery({
        queryKey: ['ContactUs', id],
        queryFn: () =>
            fetch(`${BASE_URL}/api/form-sections/${id}/`)
                .then(res => {
                    if (!res.ok) throw new Error('Error in catching data from API');
                    return res.json();
                }),
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
    });
};
