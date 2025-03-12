import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
export default function Navbar() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-center items-center">
        <Image
          src={"/b.png"}
          alt="photo"
          width={800}
          height={800}
          className="invert lg:hidden object-cover w-16 h-16"
        />
      </div>
      <HiMenuAlt3 size={120} className="pl-24 lg:hidden" />
    </div>
  );
}
