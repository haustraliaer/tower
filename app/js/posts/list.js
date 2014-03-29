

/** @jsx React.DOM */

var React = require('react'),
    $     = require('jquery'),
    Item  = require('./item'),
    List;

List = React.createClass({

  getInitialState: function () {
    return { posts: [] };
  },
  
  componentWillMount: function () {
    this.fetch_local_data();
  },

  fetch_local_data: function() {
    this.fetch_latest_posts();
  },
  
  fetch_latest_posts: function () {
    $.ajax({
      url:       'http://api.tumblr.com/v2/blog/haustraliaer.tumblr.com/posts/text?api_key=CC7nUBprgWxMr9hA85r5uqmXikN9GcSwlrygvmFKVGdFjE7cPy&filter=text',
      dataType:  'jsonp',
      data:      { format: 'jsonp' },

      success: function (result) {
        this.setState({ posts: result.response.posts });
        console.log(result.response.posts);
      }.bind(this),

      error: function () {
        console.log("nope - couldn't connect");
      }.bind(this)
    });
  },

  // --- render component ---------------------------------------- //

  render: function () {
    return <div className="posts">
      {this.state.posts.map(function (post) {
        return <Item key={post.id} post={post}/>
      })}
    </div>;
  }
});

module.exports = List;















// backup ajax

// $.ajax({
//   url:       'backup-data.json',
//   dataType:  'json',
//   data:      { format: 'json' },

//   success: function (result) {
    
//     console.log(result.posts);
//     this.setState({ posts: result.posts });
//   }.bind(this),
  
//   error: function () {
//     console.log('no local data found');
//   }.bind(this)
// });