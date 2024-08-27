import { createFileRoute } from "@tanstack/react-router";
import { ItemCard } from "../../components/ItemCard/ItemCard"
import { ItemsCarousel } from "../../components/ItemsCarousel/ItemCarousel";
import { fetchProduct } from "../../helperFunctions/fetchProduct";


export const Route = createFileRoute("/technology/$productId")({
  component: ProductPage,
  loader: ({ params: { productId } }) => (fetchProduct(Number(productId), "men"))
})

function ProductPage() {
  const data = Route.useLoaderData();
  if (!data) {
    return (
      <div>not found</div>
    )
  }

  return (
    <div className="flex f-d-column gap-2">
      <ItemCard item={data} />
      <ItemsCarousel />
    </div>
  )
}
