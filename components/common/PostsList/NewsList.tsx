import styled from "styled-components";
import { NewsResponse } from "../../../api/posts/PostsDto";
import { NewsCard } from "./NewsCard/NewsCard";

interface Props {
    newsData: NewsResponse[] | undefined
}

export const NewsList = ({newsData}: Props) => {
    return <PostsWrapper>
        {newsData?.map((news) => <div key={news.id}><NewsCard news={news}/></div>)}
    </PostsWrapper>
}

const PostsWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr;
  height: 100%;
  gap: 18px;

  @media screen and (min-width: 1130px){
    grid-template-columns: 1fr 1fr;
  }


  @media screen and (min-width: 1440px){
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  
`