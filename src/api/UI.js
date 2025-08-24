import { useQuery } from "@tanstack/react-query";
import { fetcher } from "./config";

const getUIData = async (id) => {
  const { data } = await fetcher.get(`/user_interface-sections/${id}/`);
  return data;
};

export const useUIData = (id) => {
  return useQuery({
    queryKey: ["UI", id],
    queryFn: () => getUIData(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};
