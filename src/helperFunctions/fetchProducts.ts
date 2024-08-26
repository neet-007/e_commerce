import { ItemCardProps } from "../components/ItemCard/ItemCard";

type ApiResponse = {
  items: ItemCardProps[]; // API response contains an array of products
};

type ReturnType = {
  results: ItemCardProps[]; // Paginated results
  page: number;            // Current page number
};

export async function fetchProducts(
  page: number,
  category: "men" | "women" | "kids" | "technology"
): Promise<ReturnType> {
  let res: Response;

  // Fetch the products based on the category
  switch (category) {
    case "men":
      res = await fetch("/api/menProducts.json");
      break;
    case "women":
      res = await fetch("/api/womenProducts.json");
      break;
    case "kids":
      res = await fetch("/api/kidsProducts.json");
      break;
    case "technology":
      res = await fetch("/api/technologyProducts.json");
      break;
    default:
      throw new Error(`Unknown category: ${category}`);
  }

  // Check if the response is OK
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.statusText}`);
  }

  // Parse the JSON response
  const data: ApiResponse = await res.json();

  // Calculate pagination parameters
  const itemsPerPage = 20; // Number of items per page
  const skip = page * itemsPerPage; // Calculate how many items to skip
  const paginatedResults = data.items.slice(skip, skip + itemsPerPage);

  // Return the paginated results and current page
  return {
    results: paginatedResults,
    page
  };
}
