import { NewsResponse } from "../../../../api/posts/PostsDto";
import styled from "styled-components";
import FavoriteIcon from '../../../../assets/icons/favorite.svg'
import UnFavoriteIcon from '../../../../assets/icons/unFavorite.svg'
import ArrowCircle from '../../../../assets/icons/arrowCircle.svg'
import { useRecoilState, useRecoilValue } from "recoil";
import { bookmarksState } from "../../../../recoil/atoms";
import { utilityServices } from "../../../../core/services/utilityServices";

interface Props {
    news: NewsResponse;
    isLatest?: boolean;
}

export const NewsCard = ({news, isLatest}: Props) => {
    const [bookmarks, setBookmarks] = useRecoilState(bookmarksState)

    const toggleFavorites = (isAddToFavorites: boolean)=>{
        if(isAddToFavorites){
            setBookmarks([...bookmarks, news.id])
        }else{
            setBookmarks(bookmarks.filter((item)=> item !== news.id))
        }
    }

    const addToBookmarks = ()=> toggleFavorites(true)

    const removeFromBookmarks = () => toggleFavorites(false)

    return <Card $latest={isLatest}
                 style={{backgroundImage: `url('${news.image}'), linear-gradient(180deg, rgba(28, 58, 82, 0) 0%, rgba(5, 20, 27, 0.5) 100%)`}}>
        <TopContent>
            <NewsRelated>{news.related}</NewsRelated>
            {isLatest && <NewsLatest>latest research</NewsLatest>}
        </TopContent>
        <BottomContent>
            <Headline $latest={isLatest} href={news.url} target="_blank">{news.headline}</Headline>
            <Summary $latest={isLatest}>{news.summary}</Summary>
            <ToolBar>
                {isLatest ? <ReadWrapper>
                    <ReadLink href={news.url} target="_blank"><ArrowCircleIcon/>Read the research</ReadLink><Divider/>
                    <Datetime>{utilityServices.formatDate(news.datetime)}</Datetime>
                </ReadWrapper> : <Datetime>{utilityServices.formatDate(news.datetime)}</Datetime>
                }
                {bookmarks.find((item) => item === news.id) ? <RemoveFavoriteIcon onClick={removeFromBookmarks}/> : <AddFavoriteIcon  onClick={addToBookmarks}/>}
            </ToolBar>
        </BottomContent>
    </Card>
}

const Card = styled.div<{ $latest?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({$latest}) => $latest ? '30px' : '25px'};
  width: ${({$latest}) => $latest ? '478px' : '280px'};
  height: ${({$latest}) => $latest ? '628px' : '425px'};
  border-radius: 6px;
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;

`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const NewsRelated = styled.div`
  padding: 5px 15px;
  border: 1px solid white;
  border-radius: 30px;
  font-size: 10px;
  color: white;
`
const NewsLatest = styled.div`
  padding: 4px 6px;
  font-size: 8px;
  letter-spacing: 0.06em;
  background: #B73556;
  color: white;
  text-transform: uppercase;
`

const BottomContent = styled.div``

const Headline = styled.a<{$latest?: boolean}>`
  font-size: ${({$latest}) => $latest ? '24px' : '20px'};
  line-height: ${({$latest}) => $latest ? '32px' : '28px'};
  color: white;
  line-height: 28px;
  text-decoration: none;
  cursor: pointer;
`

const Summary = styled.div<{$latest?: boolean}>`
  margin:  10px 0 20px 0;
  font-size: 12px;
  font-size: ${({$latest}) => $latest ? '14px' : '12px'};
  line-height: ${({$latest}) => $latest ? '18px' : '16px'};
  color: white;
  opacity: 0.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ToolBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ReadWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
`

const ReadLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 12px;
  line-height: 14px;
  font-weight: bold;
  cursor: pointer;

`

const ArrowCircleIcon = styled(ArrowCircle)`
  width: 18px;
  margin-right: 11px;
`

const Divider = styled.div`
  width: 2px;
  height: 18px;
  margin: 0 17px;
  background: white;
  opacity: .08;
`

const Datetime = styled.div`
  font-size: 12px;
  color: white;
  line-height: 14px;
  opacity: .75;
`

const AddFavoriteIcon = styled(FavoriteIcon)`
  width: 12px;
  color: white;
  cursor: pointer;
  opacity: 0.5;
`

const RemoveFavoriteIcon = styled(UnFavoriteIcon)`
  width: 12px;
  color: white;
  cursor: pointer;
  opacity: 0.5;`