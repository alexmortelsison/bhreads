import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Signin() {
  return (
    <div className="relative min-h-screen">
      <div className="">
        <Image
          src={"/t.avif"}
          alt="photo"
          width={2000}
          height={2000}
          className="absolute md:px-2 md:h-[50%] w-full lg:px-16 hidden md:inline-flex object-cover "
        />
        <Image
          src={"/b.png"}
          alt="photo"
          width={800}
          height={800}
          className="invert absolute lg:hidden object-cover p-32"
        />
      </div>
      <div className="flex flex-col justify-center items-center pt-90 font-bold mx-16">
        <p>Log in with your Google account</p>
        <Input
          className="lg:w-[400px] mt-4 py-8 bg-[#1e1e1e] border-none placeholder:text-base font-normal placeholder:px-2 rounded-2xl"
          placeholder="Username phone or email"
        />
        <Input
          className="lg:w-[400px] mt-2 py-8 bg-[#1e1e1e] border-none placeholder:text-base font-normal placeholder:px-2 rounded-2xl"
          placeholder="Password"
        />
        <Button className="lg:w-[400px] mt-2 py-8 bg-white text-gray-400 font-bold placeholder:px-2 rounded-2xl w-full">
          Log in
        </Button>
        <p className="text-gray-400 font-normal mt-4">Forgot password?</p>
        <p className="text-gray-400 font-normal mt-4">— or —</p>
        <Button className="lg:w-[400px] mt-2 py-8 bg-transparent border border-gray-400 placeholder:text-base font-normal placeholder:px-2 rounded-2xl w-full">
          <Image
            src={"/google.ico"}
            alt="logo"
            width={100}
            height={100}
            className="w-8"
          />
          <p className="text-normal font-bold">Sign in with Google</p>
        </Button>
      </div>
    </div>
  );
}
