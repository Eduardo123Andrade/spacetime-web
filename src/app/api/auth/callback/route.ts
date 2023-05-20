import { api } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")

  const registerResponse = await api.post("/register", { code })

  const { token } = registerResponse.data

  const redirectURL = new URL("/", request.url)

  const cookiesExpiresInSeconds = 60 * 60 * 24 * 30

  console.log({ cookiesExpiresInSeconds })

  return NextResponse.redirect(redirectURL, {
    headers: {
      "Set-Cookie": `token=${token}; Path=/; max-age=${cookiesExpiresInSeconds};`
    }
  })
}