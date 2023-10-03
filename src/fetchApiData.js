import { Octokit } from "https://esm.sh/@octokit/core";
// import { Octokit } from "@octokit/rest";

const my_top_repos = ["slack-note-v2", "stock-price-scraper", "my-portfolio"]

const fetchApiData = async () => {
  const octokit = new Octokit({
    auth: "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"
  });
  const response = await octokit.request("GET /users/shosukenoma/repos", {
    headers: {
      authorization: "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",
    }
  });
  const all_repo_list = response.data
  const my_repo_list = all_repo_list.filter(repo => {
    if (my_top_repos.includes(repo.name)) {
      return repo
    } else {
      return
    }
  })

  console.log(all_repo_list);
  console.log(my_repo_list)
}

export default fetchApiData