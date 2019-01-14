import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/get-data';
import './table.scss';
import App from './App';


class TableSort extends PureComponent {
  componentDidMount() {
    this.props.getData();
  }
  sort = () => {
    this.props.data.items.filter( (item) => {
      return item.sort()
    })
  }
  render() {
    return (
      <App 
        data={this.props.data}
        sort={this.sort}
      />
    ) 
  }
}
const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = {
  getData
};
export default connect(mapStateToProps, mapDispatchToProps)(TableSort);
