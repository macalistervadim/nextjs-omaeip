import Link from "next/link"; 
 
const posts = [ 
  { slug: "first-post", title: "Первый пост" }, 
  { slug: "nextjs-guide", title: "Второй пост" }, 
  { slug: "dynamic-routing", title: "Третий пост" }, 
]; 
 
export default function BlogPage() { 
  return ( 
    <div> 
      <h1>Blog</h1> 
      <ul> 
        {posts.map((post) => ( 
          <li key={post.slug}> 
            <Link href={`/blog/${post.slug}`}>{post.title}</Link> 
          </li> 
        ))} 
      </ul> 
    </div> 
  ); 
} 