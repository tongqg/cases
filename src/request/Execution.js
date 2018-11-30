import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/core/styles";
import JsonBinding from "../util/redux";

const styles = theme => ({
  root: {
    width: "100%"
  },
  summary: {
    minHeight: "24px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "20%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    flexBasis: "65%"
  },
  section: {
    borderLeft: "5px solid red"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  column: {
    flexBasis: "50%"
  }
});

const binding = new JsonBinding("$");

class ExecutionSection extends React.Component {
  state = {
    expanded: true
  };
  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <ExpansionPanel
        key={this.props.value.execution_id}
        className={classes.section}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          className={classes.summary}
        >
          <Typography className={classes.heading}>
            {this.props.value.request.method}
          </Typography>
          <Typography className={classes.secondaryHeading} />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails />
      </ExpansionPanel>
    );
  }
}
const Execution = withStyles(styles)(ExecutionSection);

export default binding.connect(Execution);
