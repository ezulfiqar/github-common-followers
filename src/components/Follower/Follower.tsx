import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FollowerType } from "../../types";

type FollowerPropsType = {
  follower: FollowerType;
};

export const Follower = ({ follower }: FollowerPropsType) => {
  const followerAvatar = follower.avatar_url;
  return (
    <Card>
      {followerAvatar && (
        <CardMedia alt="book cover" component="img" image={followerAvatar} />
      )}
      <CardContent>
        <Typography title={follower.login} variant="h6">
          {follower.login}
        </Typography>
        <Typography>{follower.name}</Typography>
        <Typography>{follower.email}</Typography>
      </CardContent>
    </Card>
  );
};
