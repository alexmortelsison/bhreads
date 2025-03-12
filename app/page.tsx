import SideBar from "./components/SideBar";
import DialogOpen from "./components/DialogOpen";

export default function Home() {
  return (
    <div className="grid grid-cols-7 place-items-center w-full">
      <div className="col-span-1 min-h-screen hidden lg:inline-grid w-full mx-auto">
        <SideBar />
      </div>
      <div className="lg:col-span-4 col-span-7 min-h-screen">B</div>
      <div className="col-span-2 min-h-screen hidden lg:inline-grid place-items-end items-end w-full p-8">
        <DialogOpen />
      </div>
    </div>
  );
}
