import {Outlet} from "react-router";
import Header from "../components/Header";

function MainLayout () {
  return <div className="min-h-screen flex flex-col">
  <Header />
  <main className="flex-grow bg-amber-400">
     <Outlet />
  </main>
  <p>footer</p>
  </div>
}

export default MainLayout