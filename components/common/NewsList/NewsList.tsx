import styled from "styled-components";
import { NewsResponse } from "../../../api/news/services";
import { NewsCard } from "./NewsCard";

interface Props {
  newsData?: NewsResponse[];
}

export const NewsList = ({ newsData }: Props) => {
  return (
    <PostsWrapper>
      {newsData?.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </PostsWrapper>
  );
};

const PostsWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr;
  height: 100%;
  gap: 18px;

  @media screen and (min-width: 1130px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
