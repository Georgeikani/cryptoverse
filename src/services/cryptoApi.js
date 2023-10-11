import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {

      'X-RapidAPI-Key': '7611f4872emsh190dc81b248c2d8p11b109jsnf53568adfda2',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

}
const baseUrl =  'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest (`/coins?limit=${count}`),
        })
    })
});

export const {
     useGetCryptosQuery,
} =  cryptoApi;