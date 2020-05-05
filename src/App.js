import React from "react";
import "./App.css";

import PostMatesLogo from "./assets/postmates-1.svg";
import StabLogo from "./assets/stab-logo-white.png";
import VansLogo from "./assets/vans.png";

import Photo_A from "./assets/surf/extra_1.JPG";
import Photo_B from "./assets/surf/extra_2.JPG";
import Photo_C from "./assets/surf/extra_3.JPG";

function App() {
  const renderSuccess = () => {
    const submitted = window.location.search.includes("submitted=true");

    return submitted ? <div className="submitted">RSVP SENT!</div> : null;
  };

  return (
    <div className="wrapper" testId="test-id-app">
      {renderSuccess()}
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
              of the Vans’ team – is{" "}
              <b>premiering online May 14th at 7pm PSt.</b>
            </p>
            <p>
              It wouldn’t be a surf film premiere without a party. But since
              we’re all self-isolating, Vans and Stab have partnered to bring
              viewers their own private, in-home premiere, complete with pizza
              from a local pie shop.
            </p>
            <p>
              The pizza’s on us, and it will be delivered straight to your door.
            </p>
            <p>
              Sign up for the premiere pizza party below—first come first
              served—and set an alarm to watch Pentacoastal live: 7 pm PST,
              Thursday, May 14.
            </p>

            <hr />

            <div className="flex-content">
              <div style={{ flex: "1" }}>
                <h3>General Information</h3>
                <p>
                  <div>
                    <b>Registration:</b> <br />
                    Starts May 6th — Ends May 12th (First come, first served)
                  </div>
                </p>
                <p>
                  <div>
                    <b>Premier Date:</b> <br />
                    Thursday, May 14th 7:00PM
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
          <form name="contact" method="post" action="/?submitted=true">
            <input type="hidden" name="form-name" value="contest" />
            <label>Select pizza joint</label>
            <select name="location">
              <option></option>
              <option>The Pizza Place at Noriega - San Francisco, CA</option>
              <option>Pleasure Pizza - Santa Cruz, CA</option>
              <option>Woodstock's - Santa Cruz, CA</option>
              <option>Gino's Sicilian Express - Santa Barbara, CA</option>
              <option>Pizza Man Dan - Carpentteria, CA</option>
              <option>Pizza Man Dan - Ventura, CA</option>
              <option>Dagwoods - Santa Monica, CA</option>
              <option>Manhattan Pizzeria - Manhattan Beach, CA</option>
              <option>Pizzanista - Loong Beach, CA</option>
              <option>Al's New York Cafe - Newport Beach, CA</option>
              <option>Sgt Pepperoni - Costa Mesa, CA</option>
              <option>Surfside Pizzeria - San Clemente, CA</option>
              <option>San Clemente Pizza Co - San Clemente, CA</option>
              <option>Privateer - Oceanside, CA</option>
              <option>Best Pizza & Brew - Cardiff, CA</option>
              <option>Vinnies Styles - Brooklyn, NY</option>
              <option>Pizza Village - Montauk, NY</option>
              <option>Lenny's Pizza - Lavalette, NJ</option>
              <option>Nini's Pizza - Jacksonville Beach, FL</option>
              <option>Flagler Avenue Pizza Co - New Smyrna, FL</option>
              <option>Basic Goodness - Tofino, Canada</option>
              <option>Pi Artisan Pizza - Lahaina, HI</option>
              <option>Rhonda's - Terrigal, AUS</option>
              <option>Justin Lane - Burleigh Heads, AUS</option>
              <option>Legend Pizza - Byron Bay, AUS</option>
              <option>Bondi, AUS</option>
              <option>Noosa Heads, AUS</option>
              <option>Melbourne, AUS</option>
              <option>Coff's Harbour, AUS</option>
              <option>Torquay, AUS</option>
            </select>
            <label>What's your name?</label>
            <input name="name" type="text" />
            <label>How old are you?</label>
            <input name="age" type="text" />
            <label>Email address</label>
            <input name="email" type="email" />
            <label>Delivery address</label>
            <input name="address" type="text" />
            <label>Phone number</label>
            <input name="phone" type="text" />
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
