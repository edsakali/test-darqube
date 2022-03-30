import moment from "moment";
import { NewsResponse } from "../../api/posts/PostsDto";

const formatDate = (datetime: number) => moment(new Date(datetime * 1000)).format('DD/MMM').replace('/', ' ').toString()

const paginate = (news: NewsResponse[], pageNumber: number) => news.slice((pageNumber - 1) * 6, pageNumber * 6)

const searchNews = (news: NewsResponse[], value: string) => news.filter((item: NewsResponse) => item.headline.toLowerCase().includes(value.toLowerCase()) || item.summary.toLowerCase().includes(value.toLowerCase()))

const getBookmarksNews = (bookmarksIds: number[], news: NewsResponse[]) => news.filter((item) => bookmarksIds.includes(item.id))

export const utilityServices = {
    paginate, searchNews, formatDate, getBookmarksNews

}