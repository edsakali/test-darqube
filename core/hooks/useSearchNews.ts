import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { searchState } from "../../recoil/atoms";

import { searchNews } from "../helpers/helpers";
import { NewsResponse } from "../../api/news/services";

interface Props {
  news: NewsResponse[];
}

export const useSearchNews = ({ news }: Props) => {
  const [newsData, setNewsData] = useState<NewsResponse[]>([]);

  const searchValue = useRecoilValue(searchState);

  useEffect(() => {
    setNewsData(news);
    searchValue && setNewsData(searchNews(news, searchValue));
  }, [searchValue]);

  return { newsData, setNewsData };
};
