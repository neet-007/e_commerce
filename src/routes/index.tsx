import React from "react"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: HomePage,
  validateSearch: ({ page }) => {
    const pageNumber = Number(page);
    if (isNaN(pageNumber) || pageNumber <= 0) {
      return { page: 1 };
    }
    return { page: pageNumber };
  },
})


function HomePage() {
  const { page } = Route.useSearch()
  console.log(page)
  return (
    <div>homepage</div>
  )
}

