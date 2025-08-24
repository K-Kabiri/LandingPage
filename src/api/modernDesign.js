import { useQuery } from "@tanstack/react-query";
import { fetcher } from "./config";

const getModernDesignData = async (id) => {
  const { data } = await fetcher.get(`/advantage-sections/${id}/`);
  return data;
};

export const useModerDesignData = (id) => {
  return useQuery({
    queryKey: ["modernDesign", id],
    queryFn: () => getModernDesignData(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};
