import styled, { css } from "styled-components";
import { useRecoilState } from "recoil";
import { bookmarksState } from "../../../recoil/atoms";
import { NewsResponse } from "../../../api/news/services";
import FavoriteIcon from "../../../assets/icons/favorite.svg";
import UnFavoriteIcon from "../../../assets/icons/unFavorite.svg";
import ArrowCircle from "../../../assets/icons/arrowCircle.svg";
import { formatDate } from "../../../core/helpers/helpers";

interface Props {
  news: NewsResponse;
  isLatest?: boolean;
}

export const NewsCard = ({ news, isLatest }: Props) => {
  const [bookmarks, setBookmarks] = useRecoilState(bookmarksState);

  const toggleFavorites = (isAddToFavorites: boolean) => {
    if (isAddToFavorites) {
      setBookmarks([...bookmarks, news.id]);
    } else {
      setBookmarks(bookmarks.filter((item) => item !== news.id));
    }
  };

  const addToBookmarks = () => toggleFavorites(true);

  const removeFromBookmarks = () => toggleFavorites(false);

  return (
    <Card
      $latest={isLatest}
      style={{
        backgroundImage: `url('${news.image}'), linear-gradient(180deg, rgba(28, 58, 82, 0) 0%, rgba(5, 20, 27, 0.5) 100%)`,
      }}
    >
      <TopContent>
        <NewsRelated>{news.related}</NewsRelated>
        {isLatest && <NewsLatest>latest research</NewsLatest>}
      </TopContent>
      <div>
        <HeadlineLink $latest={isLatest} href={news.url} target="_blank">
          {news.headline}
        </HeadlineLink>
        <Summary $latest={isLatest}>{news.summary}</Summary>
        <ToolBar>
          {isLatest ? (
            <ReadWrapper>
              <ReadLink href={news.url} target="_blank">
                <ArrowCircleIcon />
                Read the research
              </ReadLink>
              <Divider />
              <Datetime>{formatDate(news.datetime)}</Datetime>
            </ReadWrapper>
          ) : (
            <Datetime>{formatDate(news.datetime)}</Datetime>
          )}
          {bookmarks.find((item) => item === news.id) ? (
            <StyledUnFavoriteIcon onClick={removeFromBookmarks} />
          ) : (
            <StyledFavoriteIcon onClick={addToBookmarks} />
          )}
        </ToolBar>
      </div>
    </Card>
  );
};

const Card = styled.div<{ $latest?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6px;
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  ${({ $latest }) => css`
    padding: ${$latest ? "30px" : "25px"};
    width: ${$latest ? "478px" : "280px"};
    height: ${$latest ? "628px" : "425px"};
  `}
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const NewsRelated = styled.div`
  padding: 5px 15px;
  border: 1px solid white;
  border-radius: 30px;
  font-size: 10px;
  color: white;
`;
const NewsLatest = styled.div`
  padding: 4px 6px;
  font-size: 8px;
  letter-spacing: 0.06em;
  background: #b73556;
  color: white;
  text-transform: uppercase;
`;

const HeadlineLink = styled.a<{ $latest?: boolean }>`
  ${({ $latest }) => css`
    font-size: ${$latest ? "24px" : "20px"};
    line-height: ${$latest ? "32px" : "28px"};
  `}
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

const Summary = styled.div<{ $latest?: boolean }>`
  margin: 10px 0 20px 0;
  ${({ $latest }) => css`
    font-size: ${$latest ? "14px" : "12px"};
    line-height: ${$latest ? "18px" : "16px"};
  `}
  color: white;
  opacity: 0.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ToolBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReadWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

const ReadLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 12px;
  line-height: 14px;
  font-weight: bold;
  cursor: pointer;
`;

const ArrowCircleIcon = styled(ArrowCircle)`
  width: 18px;
  margin-right: 11px;
`;

const Divider = styled.div`
  width: 2px;
  height: 18px;
  margin: 0 17px;
  background: white;
  opacity: 0.08;
`;

const Datetime = styled.div`
  font-size: 12px;
  color: white;
  line-height: 14px;
  opacity: 0.75;
`;

const StyledFavoriteIcon = styled(FavoriteIcon)`
  width: 12px;
  color: white;
  cursor: pointer;
  opacity: 0.5;
`;

const StyledUnFavoriteIcon = styled(UnFavoriteIcon)`
  width: 12px;
  color: white;
  cursor: pointer;
  opacity: 0.5;
`;
