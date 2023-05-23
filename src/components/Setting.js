import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Slider, Grid, IconButton } from '@material-ui/core';
import { ArrowBack, Home } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  sliderContainer: {
    marginBottom: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
    marginBottom: theme.spacing(2),
  },
  sidebar: {
    width: 250,
    marginRight: theme.spacing(2),
  },
  mainContent: {
    flexGrow: 1,
  },
  footer: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
}));

const Setting = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.sliderContainer}>
        {/* Slider */}
        <Slider defaultValue={50} />
      </div>

      <Grid container spacing={2}>
        <Grid item xs={3}>
          {/* Sidebar */}
          <Card className={classes.sidebar}>
            <CardContent>
              <IconButton>
                <ArrowBack />
              </IconButton>
              <IconButton>
                <Home />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={9}>
          {/* Main Content */}
          <div className={classes.mainContent}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                {/* Card */}
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Card 1
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                      posuere erat a ante.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={4}>
                {/* Card */}
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Card 2
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                      posuere erat a ante.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={4}>
                {/* Card */}
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Card 3
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                      posuere erat a ante.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>

      <div className={classes.footer}>
        {/* Footer */}
        <Typography variant="body2" color="textSecondary" component="p">
          Footer Content
        </Typography>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      </div>
    </div>
  );
};

export default Setting;
