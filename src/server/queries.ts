import { auth } from "@clerk/nextjs/server";
import { db } from "./db";

export async function getMyImages(){
  const user = auth();

  if(!user.userId) throw new Error("Unauthorized");

  const images =  await db.query.images.findMany({
    where:(modal, {eq})=>eq(modal.userId, user.userId),
    orderBy: (modal, { desc }) => desc(modal.id),
  });
  return images;
}