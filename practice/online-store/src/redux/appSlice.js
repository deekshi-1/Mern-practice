import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const apiBaseUrl ='https://localhost:3001'

const catalogApi = createApi({
    reducerPath:'catalogApi',
    baseQuery:fetchBaseQuery({
        baseUrl:apiBaseUrl,
        prepareHeaders:(headers)=>{
            headers.set('Content-Type','application/json')
            headers.set('Accept','application/json')
            return headers
        }
    }),
    endpoints:(build)=>({
        getProducts: build.query({
            query:()=>'products',
            providesTags:['Product']
        }),
        getProduct:build.query({
            query:(id)=>`product/${id}`,
            providesTags:['Products']
        }),
        updateLikes:build.mutation({
           query:({id,likes}) =>{
            return{
                url:`product/${id}`,
                method:"PATCH",
                body:{likes:likes >=0 ? likes:0}
            }
           },
           invalidatesTags:['Products','Product']
        })
    })
})


export const{useGetProductQuery,useGetProductsQuery,useUpdateLikesMutation}=catalogApi