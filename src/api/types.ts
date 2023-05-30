export interface RepoProps {
    name: string;
    description?: string;
    stargazers_count: number;
    id: number;
}
  
export interface UserProps {
    login: string
    id: number
}

export interface SearchUserResponse {
    items: UserProps[]
}

export type RepoByUsernameResponse = RepoProps[];