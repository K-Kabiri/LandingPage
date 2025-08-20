import {useQuery, useMutation} from '@tanstack/react-query';
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

export const useNewslettersData = (id) => {
    return useQuery({
        queryKey: ['Newsletter', id],
        queryFn: () =>
            fetch(`${BASE_URL}/api/newsletter-sections/${id}/`)
                .then(res => {
                    if (!res.ok) throw new Error('Error in catching data from API');
                    return res.json();
                }),
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
    });
};


export const sendEmail = async (email) => {
    const formData = new FormData();
    formData.append("email", email);

    const res = await axios.post(
        `${BASE_URL}/api/emails/subscribe/`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return res.data;
};


