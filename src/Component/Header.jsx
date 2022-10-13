import React from "react";
import './Header.css'
const Header = () => {
  return (
    <div className="head_component" style={{backgroundImage:`url("https://assets.nflxext.com/ffe/siteui/vlv3/afc06103-4d6a-4236-b496-34b671a7e9ba/383fc36a-aa04-4dfd-95a0-a4b71bc21eed/IN-en-20221003-popsignuptwoweeks-perspective_alpha_website_medium.jpg")`}}>
     <div className="Title">
        <h1 className="Title_first">Unlimited movies, TV</h1>
        <h2 className="Title_second">shows and more.</h2>
        <h3 className="Title_third">Watch anywhere. Cancel anytime.</h3>
     </div>
     <div className="Story">
     <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
       <div className="Story_title">
      <input type={"text"} placeholder="Email address "/> 
      <button>Get Started</button>
      </div>
      </div>

    </div>
  );
};

export default Header;
