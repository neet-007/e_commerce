import { createFileRoute } from "@tanstack/react-router";
import { Cart } from "../components/Cart/Cart";
import { ItemsCarousel } from "../components/ItemsCarousel/ItemCarousel";

export const Route = createFileRoute("/cart")({
  component: CartPage
})

function CartPage() {

  return (
    <div className="flex f-d-column gap-2">
      <Cart />
      <ItemsCarousel />
    </div>
  )
}




