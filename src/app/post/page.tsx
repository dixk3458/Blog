import FilterablePosts from '@/components/FilterablePosts';
import { getAllPosts } from '@/service/post';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posts Page',
  description: '정재웅의 All Posts',
};

export default async function PostPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map(post => post.category))];

  return (
    <section className='m-4'>
      <FilterablePosts posts={posts} categories={categories} />
    </section>
  );
}
