import { useQuery } from "@tanstack/react-query";
import { fetcher } from "./config";

const getContactUsData = async (id) => {
  const { data } = await fetcher.get(`/form-sections/${id}/`);
  return data;
};

export const useContactUsData = (id) => {
  return useQuery({
    queryKey: ["ContactUs", id],
    queryFn: () => getContactUsData(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};

export const contactEmail = async ({ name, email, message, landingId }) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);
  formData.append("landing_page_id", landingId);

  const { data } = await fetcher.post("/emails/contact/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
