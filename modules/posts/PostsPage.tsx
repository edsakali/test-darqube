import { Layout } from "../../components/Layout/Layout";
import { useQuery } from "react-query";
import { postsServices } from "../../api/posts/services";

export const PostsPage = () => {
    const {data} = useQuery('posts',postsServices.getNewsRequest )
    console.log(data)
    return <Layout>
        <div>PostsPage</div>
    </Layout>
}