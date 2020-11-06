export function sortArrayByPopularity(data: any) {
    return data.sort((a: any, b: any) => (a.popularity > b.popularity ? -1 : 1)).slice(0, 10);
}
