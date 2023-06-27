import { BlogPostsCard } from "./BlogPostsCard";
import { BlogPostContainer } from "./style";

export function BlogPosts() {
  return (
    <BlogPostContainer>
      <BlogPostsCard />
      <BlogPostsCard />
      <BlogPostsCard />
      <BlogPostsCard />
      <BlogPostsCard />
      <BlogPostsCard />
    </BlogPostContainer>
  );
}
