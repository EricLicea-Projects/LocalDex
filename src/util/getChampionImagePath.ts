const getChampionImagePath = (championName: string): string => {
  const normalized = championName
    .toLowerCase()
    .replace(/['\u2019]/g, "")
    .replace(/,/g, "")
    .replace(/\s+/g, "-");
  return `/champion/${normalized}.png`;
};

export default getChampionImagePath;
