import { fetcher } from "./config";
import { useQuery } from "@tanstack/react-query";

const getHeaderData = async (id) => {
  const { data } = await fetcher.get(`/headers/${id}/`);
  return data;
};

export const useHeaderData = (id) => {
  return useQuery({
    queryKey: ["header", id],
    queryFn: () => getHeaderData(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};
