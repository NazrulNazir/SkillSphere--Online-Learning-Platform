'use client'

import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const MyProfilePage = () => {
  const { data, isPending } = useSession();
  console.log(data);
  const user = data?.user;
  console.log(user);
  return (
    <div>
      {
        user ?
          <div className="flex justify-center items-center">
            <div className="w-80 bg-[#dfe6e9] mt-10 px-5 py-8 rounded-xl flex justify-center items-center flex-col gap-2">
              <Image className="rounded-full w-30 h-30" width={100} height={100} src={user.image || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'} alt={user.name}></Image>
              <h2 className="mt-3 text-neutral-800 font-bold text-3xl">{user.name}</h2>
              <p className="text-lg text-neutral-700">{user.email}</p>
              <button className="cursor-pointer bg-primary text-white w-full py-2 rounded-full font-semibold">Edit Profile</button>
            </div>
          </div> :
          <div className="h-[80vh] flex flex-col gap-3 justify-center items-center">
            <p className="text-4xl font-bold text-neutral-500">User Not Found</p>
            <Link href={'/login'} className="text-2xl font-bold text-primary">Please Login First.</Link>
          </div>
      }
    </div>
  )
}

export default MyProfilePage
