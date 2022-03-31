import { useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { Layout } from "../../components/Layout/Layout";
import { PaginationComponent } from "../../components/common/Pagination";
import { NewsList } from "../../components/common/NewsList/NewsList";
import { NewsCard } from "../../components/common/NewsList/NewsCard";
import { Spinner } from "../../components/common/Spinner";
import { getNewsRequest } from "../../api/news/services";
import { paginate, searchNews } from "../../core/helpers/helpers";
import { useRecoilValue } from "recoil";
import { searchState } from "../../recoil/atoms";

export const NewsPage = () => {
  const [page, setPage] = useState<number>(1);
  const searchValue = useRecoilValue(searchState);
  const { isLoading, data } = useQuery("news", getNewsRequest);

  const dataFiltered = data ? data.slice(1) : [];

  const newsData = searchValue
    ? searchNews(dataFiltered, searchValue)
    : dataFiltered;

  const paginateNews = paginate(newsData, page);

  return (
    <Layout>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ContentLeft>
            {data ? <NewsCard isLatest news={data[0]} /> : null}
          </ContentLeft>
          {paginateNews.length ? (
            <ContentRight>
              <NewsList newsData={paginateNews} />
              <PaginationComponent
                totalElements={newsData ? newsData.length : 0}
                defaultPageSize={6}
                onChange={(page) => setPage(page)}
                current={page}
              />
            </ContentRight>
          ) : (
            <EmptyContent>Empty</EmptyContent>
          )}
        </>
      )}
    </Layout>
  );
};

const ContentLeft = styled.div`
  margin: 0 18px;
`;

const ContentRight = styled.div`
  margin: 18px;

  @media screen and (min-width: 850px) {
    margin: 0;
  }
`;

const EmptyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: white;
  font-weight: bold;
  font-size: 20px;

  @media screen and (min-width: 1130px) {
    width: 578px;
  }

  @media screen and (min-width: 1440px) {
    width: 876px;
  }
`;
