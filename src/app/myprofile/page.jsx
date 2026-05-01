'use client'

import { useSession } from "@/lib/auth-client";
import Image from "next/image";

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
              <Image className="rounded-full w-30 h-30" width={100} height={100} src={user.image} alt={name}></Image>
              <h2 className="my-3 text-black font-bold">{user.name}</h2>
              <button className="cursor-pointer bg-base-100 w-full py-2 rounded-full font-semibold">Edit Profile</button>
            </div>
          </div> :
          <div className="h-[80vh] flex flex-col gap-3 justify-center items-center">
            <p className="text-4xl font-bold text-neutral-500">User Not Found</p>
            <p className="text-2xl font-bold text-primary">Please Login First.</p>
          </div>
      }
    </div>
  )
}

export default MyProfilePage
