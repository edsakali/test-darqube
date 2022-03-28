import { Layout } from "../../components/Layout/Layout";
import { useQuery } from "react-query";
import { postsServices } from "../../api/posts/services";

export const BookmarksPage = () => {
    const {data, error, isLoading} = useQuery('posts',postsServices.getNewsRequest,{} )
    return <Layout>
        <div>Bookmarks</div>
    </Layout>
}