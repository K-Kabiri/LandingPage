import { useQuery } from "@tanstack/react-query";
import { fetcher } from "./config";

const getFAQData = async (id) => {
  const { data } = await fetcher.get(`/questions-sections/${id}/`);
  return data;
};

export const useFAQData = (id) => {
  return useQuery({
    queryKey: ["FAQ", id],
    queryFn: () => getFAQData(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};
