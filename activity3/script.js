const GITHUB_API = "https://api.github.com/users";

/**
 * Return an array of usernames fetched from the Github API
 * https://api.github.com/users
 */
async function getGithubUsernames() {
  // 1. Get the API response

  const response = await fetch(GITHUB_API);
  console.log(response);
  const data = await response.json();
  //return data;
  // 2. Get the usernames array
  const usernames = data.map((dataobj) => {
    return dataobj.login;
  });
  // 3.. Return the usernames array
  return usernames;
}

/**
 * Display the values passed as arguments as a list on the screen
 * @param {Array} values
 */
function displayValuesAsList(values) {
  // 1. Get the parent element
  const parent = document.getElementById("usernames-list");
  // 2. For each element in “values”
  values.forEach((element) => {
    const list = document.createElement("li");

    // 2.1 Create an <li> element with text as the value
    list.textContent = element;
    // 2.2 Append the element to the parent element
    parent.append(list);
  });
}
async function main() {
  const usernamesArray = await getGithubUsernames();
  console.log(usernamesArray);

  displayValuesAsList(usernamesArray);
}

main();
