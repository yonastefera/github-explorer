import React from 'react';
import { CircularProgress, createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0, 0, 0, .5)',
  },
}));

export const Loader = () => {
  const styles = useStyles();
  return (
    <section className={styles.container}>
      <CircularProgress />
    </section>
  );
};
