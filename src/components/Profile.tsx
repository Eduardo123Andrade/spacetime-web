import { getUser } from "@/lib/auth"
import Image from "next/image"


export const Profile = () => {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        alt={avatarUrl}
        width={40}
        height={40}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400" />

      <p className="text-sm leading-snug max-w-[140px]">
        {name}
        <a
          href=""
          className="block text-red-400 hover:text-red-300"
        >Quero sair</a>
      </p>
    </div>

  )
}