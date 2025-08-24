import { fetcher } from "./config";
import { useQuery } from "@tanstack/react-query";

const getAboutData = async (id) => {
  const { data } = await fetcher.get(`/about-sections/${id}/`);
  return data;
};

export const useAboutData = (id) => {
  return useQuery({
    queryKey: ["about", id],
    queryFn: () => getAboutData(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};
