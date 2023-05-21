import { Copyright } from '@/components/Copyright'
import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SingIn } from '@/components/SingIn'
import { cookies } from "next/dist/client/components/headers"
import { Bai_Jamjuree as BaiJamjuree, Roboto_Flex as Roboto } from 'next/font/google'
import './globals.css'


const roboto = Roboto({ subsets: ['latin'], variable: "--font-roboto" })
const baiJamjuree = BaiJamjuree({ subsets: ['latin'], weight: "700", variable: "--font-bai-jamjuree" })

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo contruída com React, Next.js, Tailwind e TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isAuthenticated = cookies().has("token")

  console.log({ isAuthenticated })

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans text-gray-100 bg-gray-900`}>
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
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
