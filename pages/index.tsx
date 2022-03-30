import type {NextPage} from 'next'
import Head from 'next/head'
import { PostsPage } from "../modules/posts/PostsPage";


const Home: NextPage = () => {

    return (
        <div>
            <PostsPage/>
        </div>
    )
}

export default Home
