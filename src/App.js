import React from "react";
import "./App.css";

import PostMatesLogo from "./assets/postmates-1.svg";
import StabLogo from "./assets/stab-logo-white.png";
import VansLogo from "./assets/vans.png";

import Photo_A from "./assets/surf/extra_1.JPG";
import Photo_B from "./assets/surf/extra_2.JPG";
import Photo_C from "./assets/surf/extra_3.JPG";

function App() {
  return (
    <div className="wrapper" testId="test-id-app">
      <div className="slider-container">
        <div className="logo-nav">
          <img className="stab" src={StabLogo} />
        </div>
        <h1>World Premier of Pentacoastal</h1>
      </div>
      <div className="content-container">
        <h3 style={{ textAlign: "center" }}>Mark your calendars.</h3>
        <img className="inline-photo" src={Photo_A} />
        <figcaption>Photo A – Some caption goes here</figcaption>
        <div className="flex-container">
          <div>
            <p>
              Pentacoastal, Wade Goodall's three-year-in-the-making magnum opus,
              starring Dane Reynolds, Nathan Fletcher, Harry Bryant and the rest
              of the Vans’ team, is <b>premiering online May 14th.</b>
            </p>
            <p>
              Since it wouldn’t be a surf film premiere without a party, on May
              14 Vans and Stab have partnered to bring you your own private
              in-home premiere, complete with pizza from a local favorite
              delivered straight to your door with the generous help from our
              friends at PostMates.{" "}
            </p>
            <p>
              And it’s all on us. Sign up for the premiere pizza party here,
              first come first serve.
            </p>

            <hr />

            <div className="flex-content">
              <div style={{ flex: "1" }}>
                <h3>General Information</h3>
                <p>
                  <div>
                    <b>Registration:</b> <br />
                    Starts May 1st — Ends May 8th (First come, first serve){" "}
                  </div>
                </p>
                <p>
                  <div>
                    <b>Premier Date:</b> <br />
                    Thursday, May 14th 8:00PM
                  </div>
                </p>

                <p>
                  <div>
                    <b>Premier Location:</b> <br />
                    Vans.com
                  </div>
                </p>
              </div>
              <div style={{ flex: "2" }}>
                <img className="inline-photo" src={Photo_B} />
                <figcaption>Photo B</figcaption>
              </div>
            </div>

            <hr />

            <div>
              <img className="inline-photo" src={Photo_C} />
              <figcaption>Photo C</figcaption>
            </div>

            <h3>The RVSP and How it Works</h3>

            <p>
              Vans and Stab are partnering up to deliver Wade’s favorite pizza
              (pepperoni, he also likes veggie, but who wants veggie?) to a
              select number of people the night of the premiere. Check out below
              to see if we’re in your area. If you’re not, sign up with your
              email below for a free delivery coupon from Postmates.
            </p>
            {/* <img className="postmates" src={PostMatesLogo} /> */}
            <h4>Postmates Details</h4>
            <p>
              Vans and Stab are partnering up to deliver Wade’s favorite pizza
              (pepperoni, he also likes veggie, but who wants veggie?) to a
              select number of people the night of the premiere. Check out below
              to see if we’re in your area.
            </p>
          </div>
        </div>

        <div className="form-container">
          <h3>RSVP</h3>
          <form>
            <label>Select pizza joint</label>
            <select>
              <option></option>
              <option>Robertas - Culver City, CA</option>
              <option>Robertas - Brooklyn, NY</option>
              <option>I don't see one in my area</option>
            </select>
            <label>What's your name?</label>
            <input type="text" />
            <label>How old are you?</label>
            <input type="text" />
            <label>Email address</label>
            <input type="text" />
            <label>Home address</label>
            <input type="text" />
            <label>Phone number</label>
            <input type="text" />
            <button type="submit">Submit</button>
          </form>
        </div>

        {/* <div className="logo-row">
          <img className="vans" src={VansLogo} />
          <span>x</span>
          <img className="postmates" src={PostMatesLogo} />
          <span>x</span>
          <img className="stab" src={StabLogo} />
        </div> */}
      </div>
    </div>
  );
}

export default App;
