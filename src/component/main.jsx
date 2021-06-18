import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card1 from "./card";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: "27%",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Main() {
  const [spacing, setSpacing] = React.useState(5);
  const classes = useStyles();
  const text = ["Sign up","Add Personal Detail","Add business Detail"]
  const caption = ["Create your Login Name and Password","Verify your personal identity and information","Tell us about your business and you'll use Holvi"]
  return (
    <Grid container className={` ${classes.root} my-4 `} spacing={2}>
      <Grid item xs={12}>
        <Grid container direction="row" justify="space-between" alignItems="center" >
          {[0, 1, 2].map((value,index) => (
            // <Grid key={value} item  className={`border ${classes.paper} bg-danger text-center`} >
              <Card1 value={value} textColor={index == 0 ? "green" : "white" } background = {index%2 == 0 ? "green" :"white"} text={text[index]} caption={caption[index]}/>
            // </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
