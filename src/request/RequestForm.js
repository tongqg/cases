import React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Hostname from "./Hostname";
import ReqParam from "./ReqParam";
import Url from "./Url";
import Method from "./Method";
import Protocol from "./Protocol";

const styles = theme => ({
  root: {
    display: "flex",
    width: "100%"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  input: {
    margin: theme.spacing.unit,
    minWidth: "200px"
  },
  play: {
    float: "left"
  }
});

function RequestForm(props) {
  const { classes } = props;

  return (
    <div style={{ width: "100%" }}>
      <div className={classes.root}>
        <div className={classes.root}>
          <Method />
          <Protocol />
          <Hostname className={classes.input} />
          <Url className={classes.input} />
        </div>
        <div className={classes.play}>
          <Button mini aria-label="Add" color="primary">
            <Icon>play_arrow</Icon>
          </Button>
        </div>
      </div>
      <ReqParam />
      <Typography component="div" style={{ borderBottom: "1px solid #e8e8e8" }}>
        Response
      </Typography>
      <Typography component="div" style={{ color: "grey", fontSize: "10px" }}>
        content
      </Typography>
    </div>
  );
}

export default withStyles(styles)(RequestForm);
