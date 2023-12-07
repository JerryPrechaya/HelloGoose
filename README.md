# DevFinder | React + Tailwind

---

Before we get started, download the starter template from the branch `template-start`. I suggested you to visit the final product to get the overview of this project.
 [Live Version Here](https://devfinder-template.vercel.app/)


### [GITHUB API DOCUMENT](https://docs.github.com/en/free-pro-team@latest/rest/users/users?apiVersion=2022-11-28#get-a-user)
In this practice workshop we'll learn how to fetch the data using GitHub API. we'll use this endpoint `https://api.github.com/users/${username}` and get the sample data like this
<br/>

### Sample JSON Data
```json
{
  "login": "octocat",
  "id": 1,
  "node_id": "MDQ6VXNlcjE=",
  "avatar_url": "https://github.com/images/error/octocat_happy.gif",
  "gravatar_id": "",
  "url": "https://api.github.com/users/octocat",
  "html_url": "https://github.com/octocat",
  "followers_url": "https://api.github.com/users/octocat/followers",
  "following_url": "https://api.github.com/users/octocat/following{/other_user}",
  "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
  "organizations_url": "https://api.github.com/users/octocat/orgs",
  "repos_url": "https://api.github.com/users/octocat/repos",
  "events_url": "https://api.github.com/users/octocat/events{/privacy}",
  "received_events_url": "https://api.github.com/users/octocat/received_events",
  "type": "User",
  "site_admin": false,
  "name": "monalisa octocat",
  "company": "GitHub",
  "blog": "https://github.com/blog",
  "location": "San Francisco",
  "email": "octocat@github.com",
  "hireable": false,
  "bio": "There once was...",
  "twitter_username": "monatheoctocat",
  "public_repos": 2,
  "public_gists": 1,
  "followers": 20,
  "following": 0,
  "created_at": "2008-01-14T04:33:35Z",
  "updated_at": "2008-01-14T04:33:35Z",
  "private_gists": 81,
  "total_private_repos": 100,
  "owned_private_repos": 100,
  "disk_usage": 10000,
  "collaborators": 8,
  "two_factor_authentication": true,
  "plan": {
    "name": "Medium",
    "space": 400,
    "private_repos": 20,
    "collaborators": 0
  }
}
```


## Code Overview

---

App.tsx
```tsx
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import SearchBox from "./components/SearchBox";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  // const [data, setData] = useState<CardType | null>(null);

  const fetchUser = () => {
    // Fetch user data from GitHub API
  };

  return (
    <section className="font-mono text-white">
      <div className="flex flex-col gap-10 px-5 mt-5 sm:mx-auto sm:max-w-[40rem]">
        <NavBar />
        <div className="flex flex-col gap-4">
          <SearchBox
            username={username}
            setUsername={setUsername}
            handleClick={fetchUser}
          />
          {/* <Card data={data} /> */}
        </div>
      </div>
    </section>
  );
}

export default App;
```
In this App.tsx, take a while to try and understand the code structure.

SearchBox.tsx
```tsx
import { FaSearch } from "react-icons/fa";

interface SearchBoxProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  handleClick: () => void;
}

const SearchBox = ({username, setUsername, handleClick}: SearchBoxProps) => {
  return (
    <div className="flex items-center justify-between gap-5 p-3 rounded-lg bg-primary-100">
      <div className="flex items-center rounded sm:ml-2">
        <FaSearch className="hidden sm:block"/>
        <input
          type="text"
          className="px-4 py-2 sm:min-w-[16rem] w-[8rem] bg-primary-100 onfocus:bg-primary-200 focus:outline-none"
          placeholder="Search username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button onClick={handleClick} className="p-3 rounded-lg bg-utility">
        Search
      </button>
    </div>
  );
};

export default SearchBox;
```
In this code, search box responsible for handling `username` state in App.tsx
and `<button>` tag is use for fetching data from the Github API.