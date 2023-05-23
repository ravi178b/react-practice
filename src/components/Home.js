import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';

const Home = () => {
  return (
    <Card>
      <CardHeader
        avatar={<img src="https://media.istockphoto.com/id/615422436/photo/demo-sign-cubes.jpg?s=612x612&w=0&k=20&c=HHOLIiF8SmbIssxKv3G480EgTVub_v9cc1QME3Dn6XU=" alt="Logo" />}
        title="Card Title"
        subheader="May 18, 2023 - 12:00 PM"
      />
      <CardMedia
        component="img"
        alt="Image"
        height="130"
        image="https://media.istockphoto.com/id/828156368/photo/demo.jpg?s=612x612&w=0&k=20&c=JIREJlrI5vY33-hLNn8vz_GREOoTIFLfSsOSkgYJ_ms="
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Card description goes here.
        </Typography>
        <Typography variant="caption" color="textSecondary">
          By John Doe
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Home;
