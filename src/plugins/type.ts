export interface Product {
  Cart: {
    id: number,
    productCount: Number,
  },
  Category: Object,
  categoryId: number,
  description: string,
  id: number,
  image: string,
  isCart: boolean,
  isFavorited: boolean,
  isOpen: false,
  og_price: number,
  price: number,
  short_intro: string,
  title: string,
  viewCounts: number,
  count: number,
  total: number
}

export interface User {
  currentUser: object|null,
  carts: Product[],
  isAuthenticated: boolean,
  token: string
}
