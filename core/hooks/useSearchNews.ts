import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { searchState } from "../../recoil/atoms";
import { NewsResponse } from "../../api/posts/PostsDto";
import { utilityServices } from "../services/utilityServices";

interface Props {
 news: NewsResponse[]
}

export const useSearchNews = ({news }: Props) => {
    const [newsData, setNewsData] = useState<NewsResponse[]>([])

    const searchValue = useRecoilValue(searchState)

    useEffect(()=> {
        setNewsData(news)
        searchValue && setNewsData(utilityServices.searchNews(news, searchValue))
    }, [searchValue])

    return {newsData, setNewsData}
}