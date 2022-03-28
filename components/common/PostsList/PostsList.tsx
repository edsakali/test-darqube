import styled from "styled-components";
import { PostsParams } from "../../../api/posts/PostsDto";
import { PostCard } from "./PostCard/PostCard";

interface Props {
    posts: PostsParams[]
}

export const PostsList = ({posts}: Props) => {
return <PostsWrapper>
    {posts.map((post)=> <div key={post.id}><PostCard post={post}/></div> )}
</PostsWrapper>
}

const PostsWrapper = styled.div``