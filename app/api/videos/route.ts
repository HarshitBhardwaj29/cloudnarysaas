import { NextRequest,NextResponse} from "next/server"
import { PrismaClient } from "@generated/prisma"; 
import { auth } from "@clerk/nextjs/server"


const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    const videos = await prisma.video.findMany({
      where: { userId },  
      orderBy: { createdAt: "desc" }
    });

    console.log("Fetched videos:", videos); // log to debug

    return NextResponse.json(videos);
  } catch (error) {
    console.error("Error fetching videos:", error); // log actual error
    return NextResponse.json({ error: "Error Fetching videos" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}