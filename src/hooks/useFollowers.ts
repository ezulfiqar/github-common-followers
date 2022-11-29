import { useEffect, useState } from "react";
import { FollowerType } from "../types";
import { githubApi } from "../api";

export type UseFollowersPropsType = {
  userOne: string;
  userTwo: string;
};

export type UseFollowersReturnType = {
  followers: FollowerType[];
  isLoading: boolean;
  hasLoaded: boolean;
};

export const useFollowers = ({
  userOne,
  userTwo,
}: UseFollowersPropsType): UseFollowersReturnType => {
  const [followers, setFollowers] = useState<FollowerType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setFollowers([]);
    setIsLoading(true);
    setHasLoaded(false);
  }, [userOne, userTwo]);

  useEffect(() => {
    let isCancelled = false;

    // Skip the iteration when data isn't loading or user one or two are empty
    if (!isLoading || userOne === "" || userTwo === "") {
      return () => undefined;
    }

    (async () => {
      try {
        const responseOne = await githubApi().fetchFollowers(userOne);
        const responseTwo = await githubApi().fetchFollowers(userTwo);

        if (isCancelled) {
          return;
        }

        const commonFollowers = responseOne.filter((follower) =>
          responseTwo.some((followerTwo) => follower.id === followerTwo.id)
        );

        setFollowers(commonFollowers);
        setHasLoaded(true);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
      }
    })();

    return () => {
      isCancelled = true;
    };
  }, [isLoading, userOne, userTwo]);

  return {
    followers,
    isLoading,
    hasLoaded,
  };
};
