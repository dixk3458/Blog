import { Post, getFeaturedPosts } from '@/service/post';
import PostsGrid from './PostsGrid';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
