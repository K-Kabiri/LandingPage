import { useQuery } from "@tanstack/react-query";
import { fetcher } from "./config";

const getBannerData = async (id) => {
  const { data } = await fetcher.get(`/banner-sections/${id}/`);
  return data;
};

export const useBannerData = (id) => {
  return useQuery({
    queryKey: ["banner", id],
    queryFn: () => getBannerData(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};

export const sendEmail = async ({ email, landingId }) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("landing_page_id", landingId);

  const { data } = await fetcher.post("/emails/send/welcome", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
