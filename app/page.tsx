import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <div className="grid grid-cols-7 place-items-center">
      <div className="col-span-1 min-h-screen hidden lg:inline-grid w-full mx-auto">
        <SideBar />
      </div>
      <div className="lg:col-span-4 col-span-7 min-h-screen">B</div>
      <div className="col-span-2 min-h-screen hidden lg:inline-grid">C</div>
    </div>
  );
}
