import React from 'react'; //optional
import Tweet from "./Tweet";

const TweetList = function(props) {
  return (
    <section className=" tweets">
      <Tweet />
      <Tweet />
    </section>
  );
}
export default TweetList;