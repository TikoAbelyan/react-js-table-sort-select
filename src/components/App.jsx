import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class App extends Component {
  // state = {
  //   up: true
  // }
  // toggle = () => {
  //   this.setState({
  //     up: !this.state.up
  //   })
  // }
  render() {
    const { classes } = this.props;
    return (
      <main className="content">
        { 
          this.props.data.items !== undefined
          ? 
          null 
          :
          <CircularProgress className={classes.progress} /> 
        }
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>
                  ID
                </TableCell>
                <TableCell align="right">
                  <i className="material-icons arrow" onClick={this.props.sort}>
                    {/* { this.state.up ? 'arrow_drop_up' : 'arrow_drop_down' } */}
                    arrow_drop_up
                  </i>
                  first name
                </TableCell>
                <TableCell align="right">
                  last name
                </TableCell>
                <TableCell align="right">
                  email
                </TableCell>
                <TableCell align="right">
                  phone
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                this.props.data.items
                ?
                this.props.data.items.map( (item , i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell component="th" scope="row">
                        {item.id}
                      </TableCell>
                      <TableCell align="right">{item.firstName}</TableCell>
                      <TableCell align="right">{item.lastName}</TableCell>
                      <TableCell align="right">{item.email}</TableCell>
                      <TableCell align="right">{item.phone}</TableCell>
                    </TableRow>
                  );
                })
                :
                null
              }
            </TableBody>
          </Table>
        </Paper>
      </main>
    ) 
  }
}
export default withStyles(styles)(App);
