'use client';

import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { TbEdit } from "react-icons/tb";
const MyProfilePage = () => {
  const { data, isPending } = useSession();
  console.log(data);
  const user = data?.user;
  console.log(user);
  return (
    <div className="my-10">
      {
        user &&
          <div className="flex justify-center items-center">
            <div className="w-80 bg-[#dfe6e9] px-5 py-8 rounded-xl flex justify-center items-center flex-col gap-2">
              <h2 className="mb-3 text-blue-600 font-bold text-3xl">{user.name}</h2>
              <Image className="rounded-full w-30 h-30" width={100} height={100} src={user.image || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'} alt={user.name}></Image>
              <p className="text-lg text-neutral-700 my-1">{user.email}</p>
              <Link href={'/myprofile/updateuser'} className="cursor-pointer bg-primary text-white w-full py-2 rounded-full font-semibold flex justify-center items-center gap-2"><TbEdit /> Edit Profile</Link>
            </div>
          </div>
      }
    </div>
  )
}

export default MyProfilePage
