import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";
import { Task } from "@/types/Task";
import { Subquest } from "@/types/Subquest";
import { Quest } from "@/types/Quest";

const adminSession = "session_cnvdk9k69lbm5c1vej1g";

// Define a service using a base URL and expected endpoints
export const wishlistApi = createApi({
  reducerPath: "wishlistApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://84.38.183.178:7070" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentionals) => ({
        url: "/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
          headers: {
            "Content-Type": "application/json",
            Authorization: adminSession,
          },
          body: JSON.stringify(task),
        };
      },
      // transformResponse: (response: { data: Task }, meta, arg) => response.data,
    }),
    postTasks: builder.mutation({
      query: (task) => ({
        url: "/tasks",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: adminSession,
        },
        body: JSON.stringify({
          name: task.name,
          description: task.description,
        }),
      }),
      // transformResponse: (response: { data: Task }, meta, arg) => response.data,
    }),
    deleteOneTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
        headers: {
          Authorization: adminSession,
        },
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
    postSubquest: builder.mutation({
      query: (subquest) => {
        return {
          url: "/subquest",
          method: "POST",
          body: JSON.stringify({
            is_done: subquest.is_done,
            reward: subquest.reward,
            task_id: subquest.task_id,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: adminSession,
          },
        };
      },
      // transformResponse: (response: { data: Subquest }, meta, arg) =>
      //   response.data,
    }),
    deleteOneSubquest: builder.mutation({
      query: (id) => ({
        url: `/subquest/${id}`,
        method: "DELETE",
        headers: {
          Authorization: adminSession,
        },
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
          headers: {
            "Content-Type": "application/json",
            Authorization: adminSession,
          },
          body: JSON.stringify(quest),
        };
      },
    }),
    deleteOneQuest: builder.mutation({
      query: (id) => ({
        url: `/quest/${id}`,
        method: "DELETE",
        headers: {
          Authorization: adminSession,
        },
      }),
    }),
    postQuests: builder.mutation<Quest, Partial<Quest>>({
      query: (quest) => ({
        url: "/quest",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: adminSession,
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
    postOfflineShops: builder.mutation({
      query: (offlineshop) => ({
        url: "/offlineshops",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: adminSession,
        },
        body: JSON.stringify(offlineshop),
      }),
    }),
    getUser: builder.query({
      query: ({ authToken }) => ({
        url: "/users",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken ? authToken : "",
        },
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
  usePostOfflineShopsMutation,
  useGetUserQuery,
} = wishlistApi;
