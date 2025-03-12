import { MdOutlinePinDrop } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaHashtag } from "react-icons/fa";
import { AiOutlineFileGif } from "react-icons/ai";
import { HiOutlinePhotograph } from "react-icons/hi";
import Image from "next/image";
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
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { BiPlus } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default async function DialogOpen() {
  const session = await getServerSession(authOptions);
  return (
    <Dialog>
      <DialogTrigger>
        <div className="bg-[#161616] px-3 py-2 rounded-2xl cursor-pointer">
          <BiPlus size={35} />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>
          <div className="text-base font-normal flex w-full border-b justify-between pb-2 mt-4">
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
          <div>
            <div className="mt-4 flex">
              <Image
                src={session?.user?.image || ""}
                alt="avatar"
                width={100}
                height={100}
                className="object-cover rounded-full w-8 h-8"
              />
              <div className="ml-2">
                <p className="text-sm font-bold">{session?.user?.name}</p>
                <Input hidden />
                <p className="text-sm text-gray-600 font-normal leading-5">
                  What&apos;s new
                </p>
                <div className="flex text-gray-600 mt-4 justify-between w-full">
                  <div className="flex space-x-3 items-center">
                    <HiOutlinePhotograph size={24} />
                    <AiOutlineFileGif size={24} />
                    <FaHashtag size={24} />
                    <BiMenuAltLeft size={24} />
                    <MdOutlinePinDrop size={24} />
                  </div>
                  <div className="ml-48">
                    <Button className="border border-gray-600 rounded-xl">
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogTitle>
      </DialogContent>
    </Dialog>
  );
}
