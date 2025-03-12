import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import SocialMedia from "./components/SocialMedia";

export default function Home() {
  return (
    <div className="grid grid-cols-7 place-items-center w-full h-screen">
      <div className="col-span-1 h-full hidden lg:inline-grid w-full mx-auto">
        <SideBar />
      </div>
      <div className="lg:col-span-4 col-span-7  lg:w-[70%] w-full  pt-16 lg:rounded-2xl lg:scroll-auto lg:overflow-y-auto lg:place-items-center lg:m-24 lg:ml-56 lg:mx-auto md:px-8 lg:px-0">
        <Feed />
      </div>
      <div className="col-span-2 h-screen hidden lg:inline-grid">
        <SocialMedia />
      </div>
    </div>
  );
}
