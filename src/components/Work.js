import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    margin: theme.spacing(2),
  },
  list: {
    width: '200px',
  },
}));

const Work = () => {
  const classes = useStyles();
  const [leftItems, setLeftItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [rightItems, setRightItems] = useState([]);

  const handleAddItem = (item) => {
    setLeftItems(leftItems.filter((el) => el !== item));
    setRightItems([...rightItems, item]);
  };

  const handleRemoveItem = (item) => {
    setRightItems(rightItems.filter((el) => el !== item));
    setLeftItems([...leftItems, item]);
  };

  return (
    <div className={classes.root}>
      <List className={classes.list}>
        {leftItems.map((item) => (
          <ListItem key={item}>
            <ListItemText primary={item} />
            <Button variant="contained" color="primary" onClick={() => handleAddItem(item)}>
              Add
            </Button>
          </ListItem>
        ))}
      </List>
      <List className={classes.list}>
        {rightItems.map((item) => (
          <ListItem key={item}>
            <ListItemText primary={item} />
            <Button variant="contained" color="secondary" onClick={() => handleRemoveItem(item)}>
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Work;

