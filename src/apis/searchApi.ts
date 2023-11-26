import searchAxiosInstance from "./searchAxiosInstance";

export const SearchApi = (keyword: string) => searchAxiosInstance.get(`m=searchHistory&service=list&d=${encodeURIComponent(keyword)}&_=${Date.now()}&v=3.0`);
