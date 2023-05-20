import { Copyright } from "@/components/Copyright"
import { EmptyMemories } from "@/components/EmptyMemories"
import { Hero } from "@/components/Hero"
import { Profile } from "@/components/Profile"
import { SingIn } from "@/components/SingIn"
import { cookies } from "next/dist/client/components/headers"


export default function Home() {
  const isAuthenticated = cookies().has("token")


  return (
    <main className='grid grid-cols-2 min-h-screen'>
      <div className='relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden border-r border-white/10 bg-[url(../assets/stars.svg)] bg-cover' >
        {/* BLUR */}
        <div className='absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 -translate-y-1/2 translate-x-1/2 rounded-full blur-full' />

        {/* Stripes */}
        <div className='absolute right-2 top-0 bottom-0 w-2 bg-stripes' />

        {isAuthenticated ? <Profile /> : <SingIn />}

        <Hero />

        <Copyright />
      </div>



      <div className='flex flex-col p-16 bg-[url(../assets/stars.svg)] bg-cover'>
        <EmptyMemories />
      </div>
    </main>
  )
}
