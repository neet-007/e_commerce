import { createFileRoute } from "@tanstack/react-router";
import { ItemsMain } from "../components/ItemsContainer/ItemsMain";
import { fetchSearch } from "../helperFunctions/fetchSearch";

export const Route = createFileRoute("/search")({
  component: SearchPage,
  validateSearch: ({ title, page, filter, sort, ...search }) => {
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

    const validatedTitle = title ? String(title).toLocaleLowerCase() : "";
    return { title: validatedTitle, page: validatedPage, sort: validatedSort, filter: filter || "none", ...search }
  },
  loaderDeps: ({ search: { title, page, filter, sort, ...search } }) => ({ title, page: Number(page), ...search }),
  loader: ({ deps: { title, page, ...search } }) => (fetchSearch(title, page, { ...search }))
})

function SearchPage() {
  const data = Route.useLoaderData();
  if (!data) {
    return (
      <div>
        error happed
      </div>
    )
  }
  console.log(data)
  return (
    <div className="flex f-d-column gap-2">
      <ItemsMain data={data} />
    </div>
  )
}
