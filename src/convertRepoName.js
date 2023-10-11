function convertRepoName(repo_name) {
  let first_letter = true;
  let result = ""
  for (let i = 0; i < repo_name?.length; i++) {
    if (repo_name.substring(i) != "-") {
      if (first_letter) {
        result.concat(repo_name.substring(i).toUpperCase());
      }
      else {
        result.concat(repo_name.substring(i))
      }
      first_letter = false;
    } else { // if substring is “-”
      result.concat(" ")
      first_letter = true;
    }
  }
  return result
}
export default convertRepoName
// https://www.w3schools.com/jsref/jsref_replace.asp