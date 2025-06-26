
import { create } from 'zustand'

interface AdminUser {
  id: string
  username: string
  role: 'admin' | 'editor'
}

interface Product {
  id: string
  name: string
  sku: string
  description: string
  price: number
  stock: number
  category: string
  images: string[]
  brand?: string
  specifications?: Record<string, string>
  featured?: boolean
}

interface Brand {
  id: string
  name: string
  logo: string
  description: string
  featured: boolean
}

interface AdminStore {
  // Auth
  user: AdminUser | null
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
  
  // Products
  products: Product[]
  addProduct: (product: Omit<Product, 'id'>) => void
  updateProduct: (id: string, product: Partial<Product>) => void
  deleteProduct: (id: string) => void
  
  // Brands
  brands: Brand[]
  addBrand: (brand: Omit<Brand, 'id'>) => void
  updateBrand: (id: string, brand: Partial<Brand>) => void
  deleteBrand: (id: string) => void
  
  // Stats
  getStats: () => {
    totalProducts: number
    totalBrands: number
    featuredProducts: number
    hardwareCount: number
    softwareCount: number
  }
}

export const useAdminStore = create<AdminStore>((set, get) => ({
  // Auth
  user: null,
  isAuthenticated: false,
  
  login: async (username: string, password: string) => {
    // Simulación de login - en producción conectar con Supabase
    if (username === 'admin' && password === 'admin123') {
      const user = { id: '1', username: 'admin', role: 'admin' as const }
      set({ user, isAuthenticated: true })
      return true
    }
    return false
  },
  
  logout: () => {
    set({ user: null, isAuthenticated: false })
  },
  
  // Products
  products: [
    {
      id: '1',
      name: 'MacBook Pro M3',
      sku: 'MBP-M3-001',
      category: 'hardware',
      price: 8500000,
      description: 'Laptop profesional con chip M3 de Apple',
      images: ['https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500'],
      featured: true,
      stock: 15,
      brand: 'Apple',
      specifications: {
        'Procesador': 'Apple M3',
        'RAM': '16GB',
        'Almacenamiento': '512GB SSD'
      }
    },
    {
      id: '2',
      name: 'Logitech MX Master 3S',
      sku: 'LOG-MX3S-001',
      category: 'hardware',
      price: 350000,
      description: 'Mouse inalámbrico profesional',
      images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500'],
      featured: true,
      stock: 25,
      brand: 'Logitech'
    },
    {
      id: '3',
      name: 'Microsoft Office 365',
      sku: 'MS-O365-001',
      category: 'software',
      price: 45000,
      description: 'Suite de productividad empresarial',
      images: ['https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500'],
      featured: true,
      stock: 100,
      brand: 'Microsoft'
    }
  ],
  
  addProduct: (product) => {
    const newProduct = { ...product, id: Date.now().toString() }
    set(state => ({ products: [...state.products, newProduct] }))
  },
  
  updateProduct: (id, updatedProduct) => {
    set(state => ({
      products: state.products.map(p => p.id === id ? { ...p, ...updatedProduct } : p)
    }))
  },
  
  deleteProduct: (id) => {
    set(state => ({
      products: state.products.filter(p => p.id !== id)
    }))
  },
  
  // Brands
  brands: [
    {
      id: '1',
      name: 'Apple',
      logo: 'https://images.unsplash.com/photo-1621768216002-5ac171876625?w=200&h=200&fit=crop',
      description: 'Innovación tecnológica de vanguardia',
      featured: true
    },
    {
      id: '2',
      name: 'Logitech',
      logo: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&h=200&fit=crop',
      description: 'Periféricos y accesorios de alta calidad',
      featured: true
    },
    {
      id: '3',
      name: 'Microsoft',
      logo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=200&fit=crop',
      description: 'Software y servicios empresariales',
      featured: true
    }
  ],
  
  addBrand: (brand) => {
    const newBrand = { ...brand, id: Date.now().toString() }
    set(state => ({ brands: [...state.brands, newBrand] }))
  },
  
  updateBrand: (id, updatedBrand) => {
    set(state => ({
      brands: state.brands.map(b => b.id === id ? { ...b, ...updatedBrand } : b)
    }))
  },
  
  deleteBrand: (id) => {
    set(state => ({
      brands: state.brands.filter(b => b.id !== id)
    }))
  },
  
  // Stats
  getStats: () => {
    const { products, brands } = get()
    return {
      totalProducts: products.length,
      totalBrands: brands.length,
      featuredProducts: products.filter(p => p.featured).length,
      hardwareCount: products.filter(p => p.category === 'hardware').length,
      softwareCount: products.filter(p => p.category === 'software').length
    }
  }
}))
