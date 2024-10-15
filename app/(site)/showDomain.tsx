import { getData, getDomain } from "@/lib/data";

export async function showDomain() {
  const c = await getData();
  const domain = getDomain();
  return {
    domain
  }
}