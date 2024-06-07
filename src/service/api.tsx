import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";
import { CreateTask, Task } from "@/types/Task";
import { CreateSubquest, Subquest } from "@/types/Subquest";
import { CreateQuest, Quest } from "@/types/Quest";
import { Login, LoginReturn } from "@/types/Login";
import { CreateOfflineShop, OfflineShop } from "@/types/OfflineShops";
import { User } from "@/types/User";

const adminSession = "session_cnvdk9k69lbm5c1vej1g";

// Define a service using a base URL and expected endpoints
export const wishlistApi = createApi({
  reducerPath: "wishlistApi",
  tagTypes: ["Task", "Subquest", "Quest", "OfflineShop"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://84.38.183.178:7070" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<LoginReturn, Login>({
      query: ({ login, password }) => ({
        url: "/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login,
          password,
        }),
      }),
    }),
    getTasks: builder.query<Task[], null>({
      query: () => "/tasks",
      providesTags: ["Task"],
      // transformResponse: (response: { data: Task[] }, meta, arg) => response.data,
    }),
    getOneTask: builder.query<Task, string>({
      query: (id) => `/tasks/${id}`,
      providesTags: (result, error, id) => [{ type: "Task", id }],
      // transformResponse: (response: { data: Task }, meta, arg) => response.data,
    }),
    updateOneTask: builder.mutation<Task, Task>({
      query: (data) => {
        const { id, description, name } = data;
        return {
          url: `/tasks/${id}`,
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: adminSession,
          },
          body: {
            id,
            description,
            name,
          },
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Task", id }],
      // transformResponse: (response: { data: Task }, meta, arg) => response.data,
    }),
    postTasks: builder.mutation<Task, CreateTask>({
      query: ({ name, description }) => ({
        url: "/tasks",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: adminSession,
        },
        body: JSON.stringify({
          name,
          description,
        }),
      }),
      invalidatesTags: ["Task"],
      // transformResponse: (response: { data: Task }, meta, arg) => response.data,
    }),
    deleteOneTask: builder.mutation<null, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
        headers: {
          Authorization: adminSession,
        },
      }),
      invalidatesTags: ["Task"],
    }),
    getSubquests: builder.query<Subquest[], null>({
      query: () => ({
        url: "/subquest",
        method: "GET",
      }),
      providesTags: ["Subquest"],
    }),
    getOneSubquest: builder.query<Subquest, string>({
      query: (id) => ({
        url: `/subquest/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Subquest", id }],
    }),
    postSubquest: builder.mutation<Subquest, CreateSubquest>({
      query: ({ is_done, reward, task_id }) => {
        return {
          url: "/subquest",
          method: "POST",
          body: JSON.stringify({
            is_done,
            reward,
            task_id,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: adminSession,
          },
        };
      },
      invalidatesTags: ["Subquest"],
      // transformResponse: (response: { data: Subquest }, meta, arg) =>
      //   response.data,
    }),
    deleteOneSubquest: builder.mutation<null, string>({
      query: (id) => ({
        url: `/subquest/${id}`,
        method: "DELETE",
        headers: {
          Authorization: adminSession,
        },
      }),
      invalidatesTags: ["Subquest"],
    }),
    updateOneSubquest: builder.mutation<Subquest, Subquest>({
      query: ({ id, is_done, reward, task_id }) => ({
        url: `/subquest/${id}`,
        method: "PATCH",
        headers: {
          Authorization: adminSession,
        },
        body: {
          id,
          is_done,
          reward,
          task_id,
        },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Subquest", id }],
    }),
    getQuests: builder.query<Quest[], null>({
      query: () => ({
        url: "/quest",
        method: "GET",
      }),
      providesTags: ["Quest"],
      transformResponse: (response: { data: Quest[] }, meta, arg) =>
        response.data,
    }),
    getOneQuest: builder.query<Quest, string>({
      query: (id) => ({
        url: `/quest/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Quest", id }],
    }),
    updateOneQuest: builder.mutation<Quest, Quest>({
      query: (data) => {
        const { id, is_done, subquest_id, user_id } = data;
        return {
          url: `/quest/${id}`,
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: adminSession,
          },
          body: {
            id,
            is_done,
            subquest_id,
            user_id,
          },
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Quest", id }],
    }),
    deleteOneQuest: builder.mutation<null, string>({
      query: (id) => ({
        url: `/quest/${id}`,
        method: "DELETE",
        headers: {
          Authorization: adminSession,
        },
      }),
      invalidatesTags: ["Quest"],
    }),
    postQuests: builder.mutation<Quest, CreateQuest>({
      query: (quest) => ({
        url: "/quest",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: adminSession,
        },
        body: JSON.stringify(quest),
      }),
      invalidatesTags: ["Quest"],
      transformResponse: (response: { data: Quest }, meta, arg) =>
        response.data,
    }),
    getOfflineShops: builder.query<OfflineShop[], null>({
      query: () => ({
        url: "/offlineshops",
        method: "GET",
      }),
      providesTags: ["Quest"],
    }),
    getOneOfflineShop: builder.query<OfflineShop, string>({
      query: (id) => ({
        url: `/offlineshops/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "OfflineShop", id }],
    }),
    postOfflineShops: builder.mutation<OfflineShop, CreateOfflineShop>({
      query: ({ location, name }) => ({
        url: "/offlineshops",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: adminSession,
        },
        body: JSON.stringify({ location, name }),
      }),
      invalidatesTags: ["OfflineShop"],
    }),
    updateOfflineShop: builder.mutation<OfflineShop, OfflineShop>({
      query: ({ id, location, name }) => ({
        url: `/offlineshops/${id}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: adminSession,
        },
        body: {
          id,
          location,
          name,
        },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "OfflineShop", id }],
    }),
    deleteOfflineShop: builder.mutation<null, string>({
      query: (id) => ({
        url: `/offlineshops/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: adminSession,
        },
      }),
      invalidatesTags: ["OfflineShop"],
    }),
    getUser: builder.query<User, string>({
      query: (authToken) => ({
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
  useUpdateOneSubquestMutation,
  useGetOneOfflineShopQuery,
  useDeleteOfflineShopMutation,
  useUpdateOfflineShopMutation,
} = wishlistApi;
