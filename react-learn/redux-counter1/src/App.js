import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

class Count extends Component {
  state = {}
  handleIn = () => {
    // store.dispatch({ type: 'INCREMENT'})
    this.props.increment();
  }
  handleDe = () => {
    // store.dispatch({ type: 'DECREMENT'})
    this.props.decrement();
  }
  handleAddFilm = () => {
    // store.dispatch({
    //   type: 'ADD_FILM', 
    //   film: { name: '123'}
    // })
    this.props.addFilm();
  }
  render() {
    // console.log(this.props);
    const { count, films } = this.props;
    return (
      <div>
        count: {count}
        <button onClick={this.handleIn}>+</button>
        <button onClick={this.handleDe}>-</button>
        <button onClick={this.handleAddFilm}>添加电影</button>
        {
          // .map((film, i) => (<li></li>))
          films.map((film, i) => {
            return (
              <li key={i}>{film.name}</li>
            )
          })
        }
      </div>
    );
  }
}
//从store上拿变成了从函数的参数上拿
const mapStateToProps = (state) => {
  //可以添加判断
  return {
    count: state.count,
    films: state.films
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    foo: () => { console.log('foo') },
    increment: () => {
      dispatch({ type: 'INCREMENT' })
    },
    decrement: () => {
      dispatch({ type: 'DECREMENT' })
    },
    addFilm: () => {
      dispatch({
        type: 'ADD_FILM',
        film: { name: '123' }
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Count);
//接受一个组件作为参数
