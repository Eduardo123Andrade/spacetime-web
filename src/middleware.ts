import { NextRequest, NextResponse } from "next/server";
import { SING_IN_URL } from "./utils/constants/singInUrl";

export const middleware = (request: NextRequest) => {
  const token = request.cookies.get("token")?.value

  if (!token)
    return NextResponse.redirect(SING_IN_URL, {
      headers: {
        "Set-Cookie": `redirectTo=${request.url}; Path=/; HttpOnly max-age=20;`
      }
    })

  return NextResponse.next()
}

export const config = {
  matcher: "/memories/:path*"
}