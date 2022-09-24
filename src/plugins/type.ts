export interface Products {
  Category: object,
  categoryId: number,
  description: string,
  id: number,
  image: string,
  isOpen: boolean,
  og_price: number,
  price: number,
  short_intro: string,
  title: string
}
export interface Product {
  Cart: {
    id: number,
    productCount: number,
  },
  Comments: {
    text: string
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
export interface OrderInfo {
  id: number,
  name: string,
  phone: number,
  address: string,
  total: number,
  isOpen: boolean
}
export interface SearchItem {
  id: number,
  title: string,
  short_intro: string,
  image: string,
  price: number,
  og_price: number
}
export interface SearchProducts {
  products: SearchItem[]
}
