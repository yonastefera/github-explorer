import React from 'react';
import {
  Box, createStyles, makeStyles, Typography,
} from '@material-ui/core';
import { Topic } from '../../components/Topic';
import { CustomBreadcrumbs } from '../../components/CustomBreadcrumbs';
import { Loader } from '../../components/Loader';
import { useTopicsApi } from './useTopicsApi';

const useStyles = makeStyles(() => createStyles({
  headerContainer: {
    borderBottom: '2px solid rgba(0, 0, 0, .8)',
    paddingBottom: 10,
    marginBottom: 10,
  },
  breadCrumbs: {
    position: 'absolute',
    top: 30,
  },
}));

export const TopicsPage = () => {
  const styles = useStyles();
  const {
    handleSelect,
    isLoading,
    data,
    topicsHistory,
    selectedTopic,
  } = useTopicsApi();

  if (!data) {
    return <Loader />;
  }

  return (
    <Box padding="70px">
      {
        isLoading && (
        <Loader />
        )
      }
      {
            topicsHistory.length > 1 && (
            <CustomBreadcrumbs
              topics={topicsHistory}
              selected={selectedTopic}
              onSelect={handleSelect}
            />
            )
        }
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <section className={styles.headerContainer}>
          <Typography variant="h2">
            {data.name}
          </Typography>
        </section>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          {
            data.relatedTopics.length === 0 && (
            <Typography>No related topics was found</Typography>
            )
          }
          {
              data.relatedTopics.map((x) => (
                <Topic key={x.name} topic={x} onClick={handleSelect} />
              ))
          }
        </Box>
      </Box>
    </Box>
  );
};
