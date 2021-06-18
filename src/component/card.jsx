import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: "31%",
    },
}));
const Card1 = (props) => {
    const classes = useStyles()
    const bc = props.background
    return (
        <>
            <Grid item container direction="row" justify="flex-end" alignItems="flex-start" className={`border ${classes.paper} rounded bg-white p-3 text-center`} >
                <Grid item xs={9}>
                    {/* <Paper className={classes.paper} ></Paper> */}
                    <img src={""} />
                    <div className="h5 fw-bold my-4 ">{props.text}</div>
                    <div className="my-3">{props.caption}</div>
                    <Button className="my-4" style={{backgroundColor:{bc}}} >Compeleted</Button>
                </Grid>
                <Grid item xs={1}  >
                    <span className="rounded-circle p-1 px-2 small bg-danger  ">
                        {props.value}
                    </span>
                </Grid>
            </Grid>
        </>);
}
export default Card1;