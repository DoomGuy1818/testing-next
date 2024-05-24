import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";
import { Task } from "@/types/Task";
import { Subquest } from "@/types/Subquest";
import { Quest } from "@/types/Quest";

// Define a service using a base URL and expected endpoints
export const wishlistApi = createApi({
  reducerPath: "wishlistApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://84.38.183.178:7777" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentionals) => ({
        url: "/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
        body: JSON.stringify({
          login: credentionals.login,
          password: credentionals.password,
        }),
      }),
    }),
    getTasks: builder.query({
      query: () => "/tasks",
      // transformResponse: (response: { data: Task[] }, meta, arg) => response.data,
    }),
    getOneTask: builder.query({
      query: (id) => `/tasks/${id}`,
      // transformResponse: (response: { data: Task }, meta, arg) => response.data,
    }),
    updateOneTask: builder.mutation({
      query: (data) => {
        const { id, ...task } = data;
        return {
          url: `/tasks/${id}`,
          method: "PATCH",
          body: task,
        };
      },
      // transformResponse: (response: { data: Task }, meta, arg) => response.data,
    }),
    postTasks: builder.mutation<Task, Partial<Task>>({
      query: (task) => ({
        url: "/tasks",
        method: "POST",
        body: task,
      }),
      // transformResponse: (response: { data: Task }, meta, arg) => response.data,
    }),
    deleteOneTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
    }),
    getSubquests: builder.query({
      query: () => ({
        url: "/subquest",
        method: "GET",
      }),
    }),
    getOneSubquest: builder.query({
      query: (id) => ({
        url: `/subquest/${id}`,
        method: "GET",
      }),
    }),
    postSubquest: builder.mutation<Subquest, Partial<Subquest>>({
      query: (subquest) => ({
        url: "/subquest",
        method: "POST",
        body: subquest,
      }),
      // transformResponse: (response: { data: Subquest }, meta, arg) =>
      //   response.data,
    }),
    deleteOneSubquest: builder.mutation({
      query: (id) => ({
        url: `/subquest/${id}`,
        method: "DELETE",
      }),
    }),
    getQuests: builder.query({
      query: () => ({
        url: "/quest",
        method: "GET",
      }),
      transformResponse: (response: { data: Quest }, meta, arg) =>
        response.data,
    }),
    getOneQuest: builder.query({
      query: (id) => ({
        url: `/quest/${id}`,
        method: "GET",
      }),
    }),
    updateOneQuest: builder.mutation({
      query: (data) => {
        const { id, ...quest } = data;
        return {
          url: `/quest/${id}`,
          method: "PATCH",
          body: quest,
        };
      },
    }),
    deleteOneQuest: builder.mutation({
      query: (id) => ({
        url: `/quest/${id}`,
        method: "DELETE",
      }),
    }),
    postQuests: builder.mutation<Quest, Partial<Quest>>({
      query: (quest) => ({
        url: "/quest",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quest),
      }),
      transformResponse: (response: { data: Quest }, meta, arg) =>
        response.data,
    }),
    getOfflineShops: builder.query({
      query: () => ({
        url: "/offlineshops",
        method: "GET",
      }),
    }),
    posOfflineShops: builder.mutation({
      query: (offlineshop) => ({
        url: "/offlineshops",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(offlineshop),
      }),
    }),
  }),
});
export const {
  useGetTasksQuery,
  usePostTasksMutation,
  usePostSubquestMutation,
  usePostQuestsMutation,
  useGetQuestsQuery,
  useDeleteOneQuestMutation,
  useDeleteOneSubquestMutation,
  useDeleteOneTaskMutation,
  useGetOneQuestQuery,
  useGetOneSubquestQuery,
  useGetOneTaskQuery,
  useGetSubquestsQuery,
  useUpdateOneQuestMutation,
  useUpdateOneTaskMutation,
  useLoginUserMutation,
  useGetOfflineShopsQuery,
} = wishlistApi;
