import { useQuery } from "@tanstack/react-query";
import { fetcher } from "./config";

const getLandingData = async (landingId) => {
  const { data } = await fetcher.get(`/landing-pages/${landingId}/`);
  return data;
};

export const useLandingData = (landingId) => {
  return useQuery({
    queryKey: ["landingPage", landingId],
    queryFn: () => getLandingData(landingId),
    enabled: !!landingId,
    staleTime: 1000 * 60 * 5,
  });
};
