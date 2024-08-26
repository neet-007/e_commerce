import { createFileRoute } from "@tanstack/react-router";
import { ItemsMain } from "../../components/ItemsContainer/ItemsMain";
import { fetchProducts } from "../../helperFunctions/fetchProducts";

export const Route = createFileRoute("/kids/clothing")({
  component: ClothingPage,
  validateSearch: ({ page, filter, sort }) => {
    let validatedPage = Number(page);
    if (isNaN(validatedPage) || validatedPage <= 0) {
      validatedPage = 1;
    }
    let validatedSort = "";
    try {
      validatedSort = String(sort);
    } catch {
      validatedSort = "none"
    }
    if (validatedSort !== "none" && validatedSort != "asc" && validatedSort != "dsc") {
      validatedSort = "none"
    }

    return { page: validatedPage, sort: validatedSort, filter: "none" }
  },
  loaderDeps: ({ search: { page } }) => ({ page: Number(page) }),
  loader: ({ deps: { page } }) => (fetchProducts(page, "kids"))
})

function ClothingPage() {
  const data = Route.useLoaderData();
  if (!data) {
    return (
      <div>not found</div>
    )
  }

  return (
    <div>
      <ItemsMain data={data} />
    </div>
  )
}

