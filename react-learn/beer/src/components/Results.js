import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';
class Results extends Component {
  static propTypes = {
    // static声明了才会给
    loading:PropTypes.bool.isRequired,
    beers:PropTypes.array.isRequired
  }
  state = {  }
  render() { 
    if(this.props.loading) {
      return ( 
        <Loader message="加载中..."/>
       );
    }
    
  }
}
 
export default Results;