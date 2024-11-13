import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query<DATA.GetCoursesResponse, DATA.GetCoursesRequest>({
      query: () => ({
        url: "/courses/",
        method: "GET",
      }),
      providesTags: ["data"],
    }),
    getWorkshops: builder.query<
      DATA.GetWorkshopResponse,
      DATA.GetWorkshopRequest
    >({
      query: () => ({
        url: "/freeworkshops/",
        method: "GET",
      }),
      providesTags: ["data"],
    }),
    getArticles: builder.query<
      DATA.GetArticlesResponse,
      DATA.GetArticlesRequest
    >({
      query: () => ({
        url: "/articles/",
        method: "GET",
      }),
      providesTags: ["data"],
    }),
  }),
});

export const { useGetCoursesQuery, useGetWorkshopsQuery, useGetArticlesQuery } =
  api;
