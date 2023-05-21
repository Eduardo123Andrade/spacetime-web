import { SING_IN_URL } from "@/utils/constants/singInUrl"
import { User } from "lucide-react"



export const SingIn = () => {

  console.log({ SING_IN_URL })
  return (
    <a href={SING_IN_URL} className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
        <User className="h-5 w-5 text-gray-500 " />
      </div>

      <p className="text-sm leading-snug max-w-[140px]">
        <span className="underline">Crie sua conta{" "}</span>e salve suas memórias
      </p>
    </a>

  )
}