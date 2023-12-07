export interface IShop {
  id: number;
  name: string;
  lastOnline: number; // In minutes
  shopProfileImg?: string;
}

export const defaultShop:IShop = {
    id: -1,
    name: "",
    lastOnline: -1
}

export const ShopData: IShop[] = [
  { id: 1, name: "Fashion Boutique", lastOnline: 15, shopProfileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYZcjeeAweirM8P17qQpZeLH81SxBkMRYQFsyB6iQY2ZaRVl8Ah_vluyOjpXS7-vSP5o&usqp=CAU" },
  { id: 2, name: "Tech Haven", lastOnline: 30 },
  { id: 3, name: "Greenery Garden Center", lastOnline: 60 },
  { id: 4, name: "Books & Beyond", lastOnline: 120 },
  { id: 5, name: "Culinary Delights", lastOnline: 240 },
];
