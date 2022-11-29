import React, { useState } from "react";
import { Follower, UsernameSearch } from "../../components";
import { Grid, Skeleton } from "@mui/material";
import { useFollowers } from "../../hooks";

export const CommonFollowers = () => {
  const [userOne, setUserOne] = useState("");
  const [userTwo, setUserTwo] = useState("");

  const { isLoading, followers } = useFollowers({
    userOne,
    userTwo,
  });

  const isApiLoading = isLoading && userOne !== "" && userTwo !== "";

  const loadingFollowers = (
    <React.Fragment>
      {[0, 1, 2, 3, 4, 5].map((item) => (
        <Grid item md={2} sm={3} xs={6} key={item}>
          <Skeleton variant="rounded" height={198} width={126} />
        </Grid>
      ))}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <UsernameSearch
        setUserOne={setUserOne}
        setUserTwo={setUserTwo}
        userOne={userOne}
        userTwo={userTwo}
      />
      <Grid container spacing={2} paddingY={2}>
        {isApiLoading
          ? loadingFollowers
          : followers.map((follower) => (
              <Grid item md={2} sm={3} xs={6} key={follower.id}>
                <Follower follower={follower} />
              </Grid>
            ))}
      </Grid>
    </React.Fragment>
  );
};
