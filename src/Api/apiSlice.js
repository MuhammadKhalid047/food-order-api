import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'createApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => '/Data',
    }),
    getMeals: builder.query({
      query: () => '/Meals',
    }),
  }),
});

export const { useGetDataQuery, useGetMealsQuery } = apiSlice;
