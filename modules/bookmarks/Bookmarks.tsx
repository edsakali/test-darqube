import { useEffect, useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { bookmarksState } from "../../recoil/atoms";
import { Layout } from "../../components/Layout/Layout";
import { postsServices } from "../../api/posts/services";
import { NewsCard } from "../../components/common/PostsList/NewsCard/NewsCard";
import { NewsList } from "../../components/common/PostsList/NewsList";
import { PaginationComponent } from "../../components/common/Pagination/Pagination";
import { useSearchNews } from "../../core/hooks/useSearchNews";
import { utilityServices } from "../../core/services/utilityServices";
import { Spinner } from "../../components/common/Spinner/Spinner";

export const BookmarksPage = () => {
    const [page, setPage] = useState<number>(1)

    const {isLoading, data = []} = useQuery('posts', postsServices.getNewsRequest)

    const bookmarks = useRecoilValue(bookmarksState)

    const {
        newsData,
        setNewsData
    } = useSearchNews({news: utilityServices.getBookmarksNews(bookmarks, data?.filter((item) => item.id !== data[0]?.id))})

    useEffect(() => {
        !isLoading && setNewsData(utilityServices.getBookmarksNews(bookmarks, data?.filter((item) => item.id !== data[0]?.id)))
    }, [isLoading, bookmarks.length])

    const paginateNews = utilityServices.paginate(newsData, page)

    return <Layout>
        {isLoading ? <Spinner/> : <>
            <ContentLeft>{data[0] && <NewsCard isLatest news={data[0]}/>}</ContentLeft>
            {paginateNews.length ? <ContentRight>
                    <NewsList newsData={paginateNews}/>
                    <PaginationComponent totalElements={newsData ? newsData.length : 0} defaultPageSize={6}
                                         onChange={(page) => setPage(page)} current={page}/></ContentRight> :
                <EmptyContent>Empty bookmarks</EmptyContent>}
        </>}
    </Layout>
}

const ContentLeft = styled.div`
  margin: 0 18px;
`

const ContentRight = styled.div`
  margin: 18px;

  @media screen and (min-width: 850px){
    margin: 0;
  }
`

const EmptyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 20px;
  color: white;
  font-weight: bold;
  font-size: 20px;
`