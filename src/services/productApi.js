import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productapi = createApi({
  reducerPath: 'productapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProductCategory: builder.query({
      query: () => `products/categories`,
    }),
    getProductByLimit: builder.query({
      query: (limit) => `products?limit=${limit}`,
      
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`
    }),
    getProductByCategory: builder.query({
      query: (category) => `products/category/${category}`
    }),
    getProductBySearch: builder.query({
      query: (searchTerm) => `products/search?q=${searchTerm}`
    }),

   
    
  }),



})

export const {useGetProductBySearchQuery, useGetProductCategoryQuery, useGetProductByLimitQuery, useGetProductByIdQuery , useGetProductByCategoryQuery } = productapi