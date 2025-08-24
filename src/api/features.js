import { useQuery } from "@tanstack/react-query";
import { fetcher } from "./config";

const getFeaturesData = async (id) => {
  const { data } = await fetcher.get(`/features-sections/${id}/`);
  return data;
};

export const useFeaturesData = (id) => {
  return useQuery({
    queryKey: ["feature", id],
    queryFn: () => getFeaturesData(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};
