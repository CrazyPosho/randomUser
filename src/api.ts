export async function fetchData<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("La red tiene es un bobo");
    }
    const data = (await response.json()) as T;
    return data;
  } catch (error) {
    console.error("Hubo un error:", error);
    return null;
  }
}
