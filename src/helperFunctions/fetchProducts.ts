import { ItemCardProps } from "../components/ItemCard/ItemCard";

type ReturnType = {
  results: ItemCardProps[]; // Paginated results
  page: number;            // Current page number
};

export async function fetchProducts(
  page: number,
  category: "men" | "women" | "kids" | "technology"
): Promise<ReturnType> {
  let data;

  // Use dynamic imports for local JSON files
  switch (category) {
    case "men":
      data = (await import("../api/menProducts.json")).default;
      break;
    case "women":
      data = (await import("../api/womenProducts.json")).default;
      break;
    case "kids":
      data = (await import("../api/kidsProducts.json")).default;
      break;
    case "technology":
      data = (await import("../api/technologyProducts.json")).default;
      break;
    default:
      throw new Error(`Unknown category: ${category}`);
  }

  // Calculate pagination parameters
  const itemsPerPage = 20; // Number of items per page
  const skip = page * itemsPerPage; // Calculate how many items to skip
  const paginatedResults = data.slice(skip, skip + itemsPerPage);

  // Return the paginated results and current page
  return {
    results: paginatedResults,
    page,
  };
}
