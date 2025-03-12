import { HiMenuAlt2 } from "react-icons/hi";
import { BsPin } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { RiHome5Fill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

import DialogOpen from "./DialogOpen";

export default function SideBar() {
  return (
    <div className="flex flex-col items-start sticky justify-between h-[100vh]">
      <Link href={"/"}>
        <Image
          src={"/b.png"}
          alt="photo"
          width={800}
          height={800}
          className="invert object-cover w-20 h-20"
        />
      </Link>
      <div className="text-gray-400 ml-5 space-y-4 align-baseline">
        <Link href={"/"}>
          <RiHome5Fill
            size={48}
            className="hover:bg-[#161616] p-2 rounded-2xl"
          />
        </Link>
        <Link href={"/search"}>
          <AiOutlineSearch
            size={48}
            className="hover:bg-[#161616] p-2 rounded-2xl"
          />
        </Link>
        <div className="mt-3">
          <DialogOpen />
        </div>
        <Link href={"/favorites"}>
          <AiOutlineHeart
            size={48}
            className="hover:bg-[#161616] p-2 rounded-2xl"
          />
        </Link>
        <Link href={"/profile"}>
          <BsPerson size={48} className="hover:bg-[#161616] p-2 rounded-2xl" />
        </Link>
      </div>
      <div className="ml-5 text-gray-400">
        <div>
          <BsPin size={48} className="hover:bg-[#161616] p-2 rounded-2xl" />
        </div>
        <div>
          <HiMenuAlt2
            size={48}
            className="hover:bg-[#161616] p-2 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
