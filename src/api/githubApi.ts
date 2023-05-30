import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SearchUserResponse, RepoByUsernameResponse } from './types'

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://api.github.com/',
    prepareHeaders: (headers) => {
        headers.set('Accept', 'application/vnd.github+json');
        headers.set('X-GitHub-Api-Version', '2022-11-28');
        return headers;
    }}),
    endpoints: (builder) => ({
        getSearchUserByUsername: builder.query<SearchUserResponse, string>({
            query: (name) => `search/users?q=${name}`,
        }),
        getRepoByUsername: builder.query<RepoByUsernameResponse, string>({
            query: (name) => `users/${name}/repos`,
        }),
    }),
})

export const { useGetSearchUserByUsernameQuery, useGetRepoByUsernameQuery } = githubApi;
export default githubApi