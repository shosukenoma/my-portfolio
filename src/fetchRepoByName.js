import { Octokit } from "https://esm.sh/@octokit/core";

async function fetchRepoByName(repo_name) {
  const octokit = new Octokit({
    auth: import.meta.env.VITE_GITHUB_TOKEN
  });
  const response = await octokit.request("GET /users/shosukenoma/repos", {});
  const repo_data = response.data.filter(repo => repo.name == repo_name)

  // console.log(response.data); // full list or repos
  console.log("Inside js function. ", repo_data[0]) // selected repos

  return repo_data[0] // Returns object directly
}

export default fetchRepoByName