import React from 'react'; //optional

const Profile = function() {
  return (
    <aside>
    <div class="profile">
      <img className="profile__image" src="./profile-hex.png" />
    </div>
    <br />
    <div class="profile__name">
      <h2><span class="profile--bold">Amy</span> Mansell</h2>
    </div>
  </aside>
  );
};

export default Profile;