import axios from "axios";
import { FollowerType } from "../types";
import { API_URL } from "../constants";

export const githubApi = () => {
  return {
    fetchFollowers,
  };
};

const fetchFollowers = async (username: string): Promise<FollowerType[]> => {
  let followers: FollowerType[] = [];

  try {
    let page = 1;
    do {
      const response = await axios.get(
        `${API_URL}/users/${username}/followers`,
        {
          params: { per_page: 100, page },
        }
      );

      if (response.data.length === 0) {
        break;
      }

      followers = [...followers, ...response.data];
      page++;
    } while (true);
  } catch (e) {
    console.error(e);
  }

  return followers;
};
