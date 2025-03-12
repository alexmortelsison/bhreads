import SideBar from "./components/SideBar";
import DialogOpen from "./components/DialogOpen";
import Feed from "./components/Feed";

export default function Home() {
  return (
    <div className="grid grid-cols-7 place-items-center w-full">
      <div className="col-span-1 h-full hidden lg:inline-grid w-full mx-auto">
        <SideBar />
      </div>
      <div className="lg:col-span-4 col-span-7 lg:w-[70%] w-full lg:bg-[#181818] lg:rounded-2xl lg:scroll-auto lg:overflow-y-auto lg:place-items-center lg:m-24 lg:ml-56 lg:mx-auto md:px-8 lg:px-0">
        <Feed />
      </div>
      <div className="col-span-2 h-[100vh] hidden lg:inline-grid">
        <DialogOpen />
      </div>
    </div>
  );
}
