import { createClient } from '@/lib/supabase/client'
import type { ApiResponse, PaginatedResponse } from '@/types'

const API_BASE_URL = '/api/v1'

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${API_BASE_URL}${endpoint}`
    
    const defaultHeaders: HeadersInit = {
      'Content-Type': 'application/json',
    }

    const response = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    })

    const data = await response.json()

    if (!response.ok) {
      return {
        data: null as T,
        success: false,
        error: data.error || 'An error occurred',
      }
    }

    return {
      data,
      success: true,
    }
  }

  // Auth endpoints
  async signIn(email: string, password: string) {
    const supabase = createClient()
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data, error }
  }

  async signUp(email: string, password: string, name: string) {
    const supabase = createClient()
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    })
    return { data, error }
  }

  async signOut() {
    const supabase = createClient()
    const { error } = await supabase.auth.signOut()
    return { error }
  }

  // User endpoints
  async getProfile() {
    return this.request('/users/profile')
  }

  async updateProfile(data: any) {
    return this.request('/users/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  // Reading endpoints
  async getReadings(page = 1, pageSize = 10) {
    return this.request<PaginatedResponse<any>>(
      `/readings?page=${page}&pageSize=${pageSize}`
    )
  }

  async getReading(id: string) {
    return this.request(`/readings/${id}`)
  }

  async createReading(data: any) {
    return this.request('/readings', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  // Session endpoints
  async getSessions(page = 1, pageSize = 10) {
    return this.request<PaginatedResponse<any>>(
      `/sessions?page=${page}&pageSize=${pageSize}`
    )
  }

  async getSession(id: string) {
    return this.request(`/sessions/${id}`)
  }

  async bookSession(data: any) {
    return this.request('/sessions', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  // Store endpoints
  async getProducts(page = 1, pageSize = 10) {
    return this.request<PaginatedResponse<any>>(
      `/store/products?page=${page}&pageSize=${pageSize}`
    )
  }

  async getProduct(id: string) {
    return this.request(`/store/products/${id}`)
  }

  async createOrder(data: any) {
    return this.request('/store/orders', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  // Wallet endpoints
  async getWalletBalance() {
    return this.request('/users/wallet')
  }

  async getTransactions(page = 1, pageSize = 10) {
    return this.request<PaginatedResponse<any>>(
      `/users/wallet/transactions?page=${page}&pageSize=${pageSize}`
    )
  }

  async addFunds(amount: number, paymentMethod: string) {
    return this.request('/users/wallet/add-funds', {
      method: 'POST',
      body: JSON.stringify({ amount, paymentMethod }),
    })
  }

  // Reader endpoints
  async getReaders(page = 1, pageSize = 10) {
    return this.request<PaginatedResponse<any>>(
      `/readers?page=${page}&pageSize=${pageSize}`
    )
  }

  async getReader(id: string) {
    return this.request(`/readers/${id}`)
  }

  // Blog endpoints
  async getBlogPosts(page = 1, pageSize = 10) {
    return this.request<PaginatedResponse<any>>(
      `/blog?page=${page}&pageSize=${pageSize}`
    )
  }

  async getBlogPost(slug: string) {
    return this.request(`/blog/${slug}`)
  }

  // AI endpoints
  async getAIGuidance(question: string) {
    return this.request('/ai/guidance', {
      method: 'POST',
      body: JSON.stringify({ question }),
    })
  }
}

export const apiService = new ApiService()
