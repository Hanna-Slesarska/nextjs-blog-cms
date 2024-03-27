import fs from "fs";
import Link from "next/link";

const getPostsMetaData = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file)=> file.replace(".md", ""));
  return slugs;
}

export default function Home() {
  const postMetadata = getPostsMetaData();
  const postPreviews = postMetadata.map((slug) => (
    <div key={slug}>
      <Link  href={`posts/${slug}`}>
      <h2>{slug}</h2>
      </Link>
      
    </div>
  ))
  return (
    <div>{postPreviews}</div>
  );
}
