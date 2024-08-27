import { ItemType } from "../components/ItemCard/ItemCard";

type ReturnType = {
  results: ItemType[];
  page: number;
  carousel: ItemType[];
  filters: Map<string, string[]>
};

export async function fetchProducts(
  page: number,
  category: "men" | "women" | "kids" | "technology"
): Promise<ReturnType> {
  let data;

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
  const paginatedResults = data.slice(skip, skip + itemsPerPage) as ItemType[];
  const carousel = data.length >= 12 ? data.slice(0, 12) as ItemType[] : data.length >= 6 ? data.slice(0, 6) as ItemType[] : [];

  const filters = paginatedResults.reduce((prev: Map<string, string[]>, curr) => {
    const key = curr.optionsSelector.name;

    if (prev.has(key)) {
      const existingOptions = prev.get(key) || [];
      const newOptions = [...existingOptions, ...curr.optionsSelector.options];
      const uniqueOptions = Array.from(new Set(newOptions));
      prev.set(key, uniqueOptions);
    } else {
      prev.set(key, curr.optionsSelector.options);
    }

    return prev;
  }, new Map<string, string[]>());

  return {
    results: paginatedResults,
    page,
    carousel,
    filters
  };
}
