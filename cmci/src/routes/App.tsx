import { useEffect } from "react";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <div className="App flex flex-col min-h-screen">
      <NavBar />
      <div className="flex flex-1 overflow-hidden">
        <SideBar />
        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
          <main className="container mx-auto my-2">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
