import { createRootRoute, Outlet } from "@tanstack/react-router"
import { Navbar } from "../components/Navbar/Navbar"
import "../App.css"

export const Route = createRootRoute({
  component: () => {
    return (
      <div className="main-route">
        <Navbar />
        <Outlet />
      </div>
    )
  }
})
