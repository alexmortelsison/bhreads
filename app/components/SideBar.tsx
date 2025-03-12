import { HiMenuAlt2 } from "react-icons/hi";
import { BsPin } from "react-icons/bs";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import { IoIosPaper } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { RiHome5Fill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function SideBar() {
  return (
    <div className="flex flex-col justify-between items-start py-8">
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
          <Dialog>
            <DialogTrigger>
              <div className="bg-[#161616] px-3 py-2 rounded-2xl cursor-pointer">
                <BiPlus size={35} />
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>
                <div className="text-base font-normal flex w-full border-b justify-between pb-2">
                  <p>Cancel</p>
                  <p className="font-bold">New bhread</p>
                  <div className="flex space-x-2 items-center">
                    <IoIosPaper size={20} />
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <TbDotsCircleHorizontal size={20} />
                      </DropdownMenuTrigger>
                    </DropdownMenu>
                  </div>
                </div>
              </DialogTitle>
            </DialogContent>
          </Dialog>
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
