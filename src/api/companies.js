import { useQuery } from "@tanstack/react-query";
import { fetcher } from "./config";

const getCompaniesData = async (id) => {
  const { data } = await fetcher.get(`/companies-sections/${id}/`);
  return data;
};

export const useCompaniesData = (id) => {
  return useQuery({
    queryKey: ["Companies", id],
    queryFn: () => getCompaniesData(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};
