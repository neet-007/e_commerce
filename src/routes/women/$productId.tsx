import { createFileRoute } from "@tanstack/react-router";
import { ItemsCarousel } from "../../components/ItemsCarousel/ItemCarousel";
import { fetchProduct } from "../../helperFunctions/fetchProduct";
import { PageItemCard } from "../../components/ItemCard/PageItemCard";


export const Route = createFileRoute("/women/$productId")({
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
      <PageItemCard item={data.results} />
      <ItemsCarousel items={data.carousel} />
    </div>
  )
}
