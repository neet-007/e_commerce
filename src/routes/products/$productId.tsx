import { createFileRoute } from "@tanstack/react-router";
import { ItemCard } from "../../components/ItemCard/ItemCard"
import { ItemsCarousel } from "../../components/ItemsCarousel/ItemCarousel";


export const Route = createFileRoute("/products/$productId")({
  component: ProductPage
})

function ProductPage() {
  const { productId } = Route.useParams()
  console.log(productId)
  return (
    <div className="flex f-d-column gap-2">
      <ItemCard />
      <ItemsCarousel />
    </div>
  )
}

