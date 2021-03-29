//import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from "axios";
import React, {useState,useEffect} from "react";

export default class TweetList extends React.Component {
  state = {
    tweets: []
  }

  componentDidMount() {
    Axios.get('http://localhost:9000/testAPI')
      .then(res => {
        const tweets = res.data;
        this.setState({ tweets });
      })
  }

  render() {
    return (
      <div>
        <h1>Live Person Twitter Feed(Recent)</h1>
      {this.state.tweets.map(data => (
        <p><b>Tweet ID: </b> {data.tweetid} <b>|Twitter ID:</b> {data.twitterid} |<b>Tweet: </b> {data.tweet} |<b>Created At: </b> {data.createddate}</p>
      ))}
    </div>

    )
  }
}

