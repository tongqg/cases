import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Hostname from "./Hostname";
import ReqParam from "./ReqParam";
import Url from "./Url";
import Method from "./Method";
import Protocol from "./Protocol";
import { update } from "./store";
import store from "./store";

const gateway_server = "https://virtserver.swaggerhub.com/tongqg/cases/1.0.1";
const gateway_url = "/gateway";

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

function getResponse() {
  console.log(store.getState());
  fetch(gateway_server + gateway_url, {
    method: "post",
    body: JSON.stringify(store.getState().request)
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      store.dispatch(update("$.response", data));
    });
}
const mapStateToProps = store => {
  return {
    content: JSON.stringify(store.response)
  };
};

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
          <Button mini aria-label="Add" color="primary" onClick={getResponse}>
            <Icon>play_arrow</Icon>
          </Button>
        </div>
      </div>
      {/*<ReqParam />*/}
      <Typography component="div" style={{ borderBottom: "1px solid #e8e8e8" }}>
        Response
      </Typography>
      <Typography component="div" style={{ color: "grey", fontSize: "10px" }}>
        {props.content}
      </Typography>
    </div>
  );
}

const Request = withStyles(styles)(RequestForm);

export default connect(
  mapStateToProps,
  null
)(Request);
