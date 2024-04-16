import { db } from "~/server/db";

export const dynamic = "force-dynamic";


export default async function  HomePage() {
  const images = await db.query.images.findMany({
    orderBy:(modal, {desc})=>desc(modal.id),
  });
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
       
        { images.map(image=>(
          <div key={image.id} className="p-4">
            <img src={image.url} alt=""/>
            <div>{image.name}</div>
          </div>
        ))
      }</div>
    </main>
  );
}
