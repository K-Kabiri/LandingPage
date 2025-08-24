import { useQuery } from "@tanstack/react-query";
import { fetcher } from "./config";

const getNewslettersData = async (id) => {
  const { data } = await fetcher.get(`/newsletter-sections/${id}/`);
  return data;
};

export const useNewslettersData = (id) => {
  return useQuery({
    queryKey: ["Newsletter", id],
    queryFn: () => getNewslettersData(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};

export const sendEmail = async ({ email, landingId }) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("landing_page_id", landingId);

  const { data } = await fetcher.post("/emails/subscribe/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
