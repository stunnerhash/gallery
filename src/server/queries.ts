import { auth } from "@clerk/nextjs/server";
import { db } from "./db";


function getAuth(){
  const user = auth();
  if(!user.userId) throw new Error("Unauthorized"); 
  return user;
}

export async function getMyImages(){
  const user = getAuth();
  const images =  await db.query.images.findMany({
    where:(modal, {eq})=>eq(modal.userId, user.userId),
    orderBy: (modal, { desc }) => desc(modal.id),
  });
  return images;
}

export async function getImage(id:number){
  const user = getAuth();
  const image = await db.query.images.findFirst({
    where: (modal, {eq})=>eq(modal.id, id),
  })
  if(!image) throw new Error("Image not found");
  return image;
}