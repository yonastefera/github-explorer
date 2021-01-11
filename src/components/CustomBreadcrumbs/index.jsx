import React from 'react';
import {
  Button, createStyles, makeStyles, Typography,
} from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const useStyles = makeStyles(() => createStyles({
  breadCrumbs: {
    position: 'absolute',
    top: 30,
  },
}));

export const CustomBreadcrumbs = ({ topics, selected, onSelect }) => {
  const styles = useStyles();
  return (
    <Breadcrumbs className={styles.breadCrumbs} aria-label="breadcrumb">
      {
          topics.map((x) => (x !== selected
            ? (
              <Button key={x} color="inherit" onClick={() => onSelect(x)}>
                {x}
              </Button>
            )
            : <Typography key={x} color="textPrimary">{x}</Typography>))
            }
    </Breadcrumbs>
  );
};
