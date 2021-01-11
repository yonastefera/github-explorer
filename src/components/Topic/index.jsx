import React from 'react';
import {
  Box,
  Button,
  Typography,
} from '@material-ui/core';

export const Topic = ({ topic, onClick }) => {
  return (
    <Button
      onClick={() => onClick(topic.name)}
    >
      <Box
        display="flex"
        flexDirection="column"
      >
        <Typography
          variant="button"
        >
          {topic.name}
        </Typography>
        <Typography>
          {`Stargazer Count ${topic.stargazerCount}`}
        </Typography>
      </Box>
    </Button>
  );
};
