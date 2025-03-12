import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BiPlus } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { TbDotsCircleHorizontal } from "react-icons/tb";

export default function DialogOpen() {
  return (
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
  );
}
