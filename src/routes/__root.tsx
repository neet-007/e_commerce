import { createRootRoute, Outlet } from "@tanstack/react-router"
import { Navbar } from "../components/Navbar/Navbar"
import "../App.css"
import { Footer } from "../components/Footer/Footer"

export const Route = createRootRoute({
  component: () => {
    return (
      <div className="main-route">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }
})
