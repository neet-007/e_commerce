import { createFileRoute } from "@tanstack/react-router";
import { Cart } from "../components/Cart/Cart";
import { ItemsCarousel } from "../components/ItemsCarousel/ItemCarousel";
import { fetchCarousel } from "../helperFunctions/fetchCarousel";

export const Route = createFileRoute("/cart")({
  component: CartPage,
  loader: () => (fetchCarousel())
})

function CartPage() {
  const data = Route.useLoaderData();
  if (!data) {
    return (
      <div>
        error happed
      </div>
    )
  }

  return (
    <div className="flex f-d-column gap-2">
      <Cart />
      <ItemsCarousel items={data.carousel} />
    </div>
  )
}




