import { ItemType } from "../components/ItemCard/ItemCard";

type ReturnType = {
  results: ItemType[];
  page: number;
  carousel: ItemType[];
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

  const itemsPerPage = 20;
  const skip = page * itemsPerPage;
  const paginatedResults = data.slice(skip, skip + itemsPerPage);
  const carousel = data.length >= 12 ? data.slice(0, 12) : data.length >= 6 ? data.slice(0, 6) : [];

  return {
    results: paginatedResults,
    page,
    carousel
  };
}
