import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/e77e70b3-fe6c-40f6-a36f-b21469a87e10-1d.webp",
  "https://utfs.io/f/32e86c09-37ec-42b6-b774-40d969684f85-1e.webp",
  "https://utfs.io/f/d40fb498-d2f2-48d1-b23b-28c9ac372c6d-1f.webp",
  "https://utfs.io/f/351ce533-9377-428a-9ad4-c1a7ba6d0c60-1g.webp",
]


const mockImages = mockUrls.map((url, index)=>({
  id:index,
  url,
}))

export default async function  HomePage() {
  const posts = await db.query.posts.findMany();
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map(post=>(
          <div key={post.id}>{post.name}</div>
        ))}
        { mockImages.map(image=>(
          <div key={image.id} className="p-4">
            <img src={image.url} alt=""/>
          </div>
        ))
      }</div>
    </main>
  );
}
