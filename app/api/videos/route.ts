import { NextRequest,NextResponse} from "next/server"
import { PrismaClient } from "@generated/prisma"; 


const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const videos = await prisma.video.findMany({
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