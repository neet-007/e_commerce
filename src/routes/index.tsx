import { createFileRoute } from "@tanstack/react-router"
import { ItemsCarousel } from "../components/ItemsCarousel/ItemCarousel"
import { fetchHomepage } from "../helperFunctions/fetchHomePage"

export const Route = createFileRoute("/")({
  component: HomePage,
  loader: () => fetchHomepage()
})


function HomePage() {
  const data = Route.useLoaderData();
  if (!data) {
    return (
      <div>
        error
      </div>
    )
  }
  return (
    <div className="hompage-container">
      <div className="hompage-hero">
        <img src="/hero.webp" alt="" />
      </div>
      <div className="hompage-slogan">
        winning is winning
      </div>
      <div className="hompage-discount">
        <img src="/discount.webp" alt="" />
      </div>
      <div className="hompage-carousel">
        <ItemsCarousel items={data.carousel1} />
      </div>
      <div className="hompage-carousel">
        <ItemsCarousel items={data.carousel2} />
      </div>
      <div className="hompage-carousel">
        <ItemsCarousel items={data.carousel3} />
      </div>
    </div>
  )
}

