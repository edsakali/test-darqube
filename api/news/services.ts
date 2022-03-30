import { API } from "../base";

export type NewsResponse = {
  category: string;
  datetime: number;
  headline: string;
  id: number;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
};

export const getNewsRequest = async (): Promise<Array<NewsResponse>> => {
  const res = await API.get(
    "/company-news?symbol=AAPL&from=2021-03-01&to=2021-03-15&token=bpjsf67rh5r9328ecgvg"
  );
  return res.data;
};
