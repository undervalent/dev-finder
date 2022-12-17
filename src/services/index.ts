import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { usernameState } from "../state";
import { GithubInt } from "../types";

function fetchGithubUser({queryKey}:{queryKey: string[]}) {
  const [, username] = queryKey;
  return axios.get<GithubInt>(`https://api.github.com/users/${username}`);
}

export function useFetchGithubUser() {
  const username = useRecoilValue(usernameState);

  return useQuery({queryFn: fetchGithubUser, queryKey: ['user',username]})
}




