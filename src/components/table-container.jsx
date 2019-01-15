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
    this.props.data.items.sort( (a,b) => {
            return a.id - b.id
    })
    // console.log(this.props.data.items)
  }
  sortable = () =>{
    this.props.data.items.sort( (a,b) => {
       return  a.firstName.localeCompare(b.firstName)
})


  }
  render() {
    return (
      <App 
        data={this.props.data}
        sort={this.sort}
        sortable={this.sortable}
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
