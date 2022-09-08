import React from 'react'; //optional

const TweetForm = function() {
  return (
    <main class="container">
    <section class="newtweet">
    <form method="post" action="/tweets" class="newtweet__form">
      <textarea class="form__textarea" name="text" placeholder="What are you humming about?"></textarea>
      <input type="submit" value="Tweet" class="form__input" />
      <span class="form__counter">140</span>
    </form>
  </section>
  </main>
  );
};

export default TweetForm;