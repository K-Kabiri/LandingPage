import { useQuery } from "@tanstack/react-query";
import { fetcher } from "./config";

const getFooterData = async (id) => {
  const { data } = await fetcher.get(`/footers/${id}/`);
  return data;
};

export const useFooterData = (id) => {
  return useQuery({
    queryKey: ["Footer", id],
    queryFn: () => getFooterData(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};
