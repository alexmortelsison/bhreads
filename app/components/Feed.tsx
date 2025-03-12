import { Input } from "@/components/ui/input";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default async function Feed() {
  const session = await getServerSession(authOptions);
  return (
    <div className="lg:border lg:border-gray-500 lg:w-full lg:rounded-4xl min-h-screen lg:px-8">
      <div className="flex justify-between py-4 w-full border-b border-gray-500">
        <Image
          src={session?.user?.image || ""}
          alt="avatar"
          width={100}
          height={100}
          className="object-cover rounded-full w-10 h-10"
        />
        <Input placeholder="What's new?" className="border-none flex-1" />
        <Button className="border cursor-pointer">Post</Button>
      </div>
      <div className="space-y-4 py-8">
        <div>
          <Image
            src={session?.user?.image || ""}
            alt="avatar"
            width={100}
            height={100}
            className="object-cover rounded-full w-10 h-10"
          />
        </div>
        <div>
          <Image
            src={session?.user?.image || ""}
            alt="avatar"
            width={100}
            height={100}
            className="object-cover rounded-full w-10 h-10"
          />
        </div>
        <div>
          <Image
            src={session?.user?.image || ""}
            alt="avatar"
            width={100}
            height={100}
            className="object-cover rounded-full w-10 h-10"
          />
        </div>
        <div>
          <Image
            src={session?.user?.image || ""}
            alt="avatar"
            width={100}
            height={100}
            className="object-cover rounded-full w-10 h-10"
          />
        </div>
        <div>
          <Image
            src={session?.user?.image || ""}
            alt="avatar"
            width={100}
            height={100}
            className="object-cover rounded-full w-10 h-10"
          />
        </div>
      </div>
    </div>
  );
}
