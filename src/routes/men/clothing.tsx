import { createFileRoute } from "@tanstack/react-router";
import { ItemsMain } from "../../components/ItemsContainer/ItemsMain";

export const Route = createFileRoute("/men/clothing")({
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
  }
})

function ClothingPage() {
  const { page, sort, filter } = Route.useSearch()
  console.log(page, sort, filter);
  return (
    <div>
      <ItemsMain />
    </div>
  )
}

