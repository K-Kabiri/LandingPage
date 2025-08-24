import { useQuery } from "@tanstack/react-query";
import { fetcher } from "./config";

const getHowItWorksData = async (id) => {
  const { data } = await fetcher.get(`/work_steps-sections/${id}/`);
  return data;
};

export const useHowItWorksData = (id) => {
  return useQuery({
    queryKey: ["howItWorks", id],
    queryFn: () => getHowItWorksData(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};
