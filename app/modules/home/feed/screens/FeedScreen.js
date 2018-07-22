import firebase from 'firebase';
import React, { Component } from 'react';
import { LayoutAnimation, RefreshControl } from 'react-native';

import List from '../components/List';
import Fire from '../Fire';

// Set the default number of images to load for each pagination.
const PAGE_SIZE = 5;

export default class FeedScreen extends Component {
  state = {
    loading: false,
    posts: [],
    data: {},
  };

  componentDidMount() {
    if (Fire.shared.uid) {
      // If we are, then we can get the first 5 posts
      this.makeRemoteRequest();
    }
  }

  // Append the item to our states `data` prop
  addPosts = posts => {
    this.setState(previousState => {
      let data = {
        ...previousState.data,
        ...posts,
      };
      return {
        data,
        // Sort the data by timestamp
        posts: Object.values(data).sort((a, b) => a.timestamp < b.timestamp),
      };
    });
  };

  makeRemoteRequest = async lastKey => {
    // If we are currently getting posts, then bail out..
    if (this.state.loading) {
      return;
    }
    this.setState({ loading: true });

    // The data prop will be an array of posts, the cursor will be used for pagination.
    const { data, cursor } = await Fire.shared.getPaged({
      size: PAGE_SIZE,
      start: lastKey,
    });

    this.lastKnownKey = cursor;
    // Iteratively add posts
    let posts = {};
    for (let child of data) {
      posts[child.key] = child;
    }
    this.addPosts(posts);
    this.setState({ loading: false });
  };

  _onRefresh = () => this.makeRemoteRequest();

  // If we press the "Load More..." footer then get the next page of posts
  onPressFooter = () => this.makeRemoteRequest(this.lastKnownKey);

  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <List
        refreshControl={
          <RefreshControl
            refreshing={this.state.loading}
            onRefresh={this._onRefresh}
          />
        }
        onPressFooter={this.onPressFooter}
        data={this.state.posts}
      />
    );
  }
}
