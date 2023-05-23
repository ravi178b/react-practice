import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import { Card, CardContent, CardMedia, Typography  } from '@mui/material';
import { autoPlay} from 'react-swipeable-views-utils';
import { makeStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    margin: '0 auto',
    marginBottom: theme.spacing(4),
  },
  media: {
    height: 300,
  },

}));

const AboutPage = () => {
  const classes = useStyles();

  // Sample data for the image slider
  const images = [
    { src: 'https://w7.pngwing.com/pngs/752/651/png-transparent-angularjs-vue-js-others-angle-rectangle-triangle-thumbnail.png ', caption: 'Image 1' },
    { src: 'https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png', caption: 'Image 2' },
    { src: 'https://w7.pngwing.com/pngs/746/702/png-transparent-javascript-node-js-angularjs-jquery-github-angle-text-rectangle-thumbnail.png', caption: 'Image 3' },
    // ... more images
  ];

  return (
    <div>
      <Card className={classes.card}>
      <CardHeader
        avatar={<img src="https://media.istockphoto.com/id/615422436/photo/demo-sign-cubes.jpg?s=612x612&w=0&k=20&c=HHOLIiF8SmbIssxKv3G480EgTVub_v9cc1QME3Dn6XU=" alt="Logo" />}
        title="Card Title"
        subheader="May 18, 2023 - 12:00 PM"
      />
     
      <CardContent>
        <Typography variant="h5" component="div">
          Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Card content goes here...
        </Typography>
      </CardContent>
    </Card>

      <AutoPlaySwipeableViews>
        {images.map((image) => (
          <div key={image.src}>
            <img src={image.src} alt={image.caption} />
            <Typography variant="caption">{image.caption}</Typography>
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
};
export default AboutPage;
