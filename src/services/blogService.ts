const API_URL =
  "https://dimgrey-eagle-927666.hostingersite.com/wp-json/wp/v2/posts?_embed";

export async function fetchPosts() {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await res.json();
  return data;
}

export function mapPosts(posts: any[]) {
  return posts.map((post) => ({
    id: post.id,
    title: post.title.rendered,
    slug: post.slug,
    category: post.category,
    excerpt: post.excerpt.rendered,
    content: post.content.rendered,
    date: post.date,
    image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
  }));
}
