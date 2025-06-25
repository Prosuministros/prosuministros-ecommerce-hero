
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Product {
  id: string
  name: string
  sku: string
  description: string
  price: number
  stock: number
  category: string
  images: string[]
  brand?: string
}

export interface CartItem extends Product {
  quantity: number
}

interface StoreState {
  // Cart
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
  
  // Products
  products: Product[]
  setProducts: (products: Product[]) => void
  
  // UI
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product: Product) => {
        const cart = get().cart
        const existingItem = cart.find(item => item.id === product.id)
        
        if (existingItem) {
          set({
            cart: cart.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          })
        } else {
          set({ cart: [...cart, { ...product, quantity: 1 }] })
        }
      },
      
      removeFromCart: (productId: string) => {
        set({ cart: get().cart.filter(item => item.id !== productId) })
      },
      
      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeFromCart(productId)
          return
        }
        
        set({
          cart: get().cart.map(item =>
            item.id === productId ? { ...item, quantity } : item
          )
        })
      },
      
      clearCart: () => set({ cart: [] }),
      
      getTotalItems: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0)
      },
      
      getTotalPrice: () => {
        return get().cart.reduce((total, item) => total + (item.price * item.quantity), 0)
      },
      
      products: [],
      setProducts: (products: Product[]) => set({ products }),
      
      isCartOpen: false,
      setIsCartOpen: (open: boolean) => set({ isCartOpen: open }),
    }),
    {
      name: 'prosuministros-store',
      partialize: (state) => ({ cart: state.cart }),
    }
  )
)
