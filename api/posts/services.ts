import {API} from '../base'
import {NewsResponse} from "./PostsDto";

export const getNewsRequest = async (): Promise<Array<NewsResponse>> => {
    const res = await API.get('/company-news?symbol=AAPL&from=2021-03-01&to=2021-03-15&token=bpjsf67rh5r9328ecgvg')
    return res.data
}
export const postsServices = {
    getNewsRequest
};