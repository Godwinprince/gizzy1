import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
import shodrex_img from './images/shodrexlogo-small.png';
import sho_abt from './images/about.png';
import back_cover from './images/back_cover.png';
import './fontawesome.css';

function screen_size(){
  document.body.clientwidth()
}

function App() {
  return (
   <div class="mother">
        <div class="container">
                <header>
                    <div class="shodrex_icon"> 
                        <img src={shodrex_img} alt="shodrex logo icon" />
                    </div>

                    <div class="right_content_header">
                        <ul>
                            <li> Home </li>
                            <li> About us </li>
                            <li> Contact us </li>
                            <li>Log in </li>
                            <li> Help </li>
                            <li class="own_st_btn"> <button class="primary-button ui_button">Own a store</button></li>
                        </ul>
                          <div class="clearfix"></div>
                    </div>
                  <div class="clearfix"></div>
                </header>
                <middle>
                    <div class="middli_mother">
                        <div class="abt_lft_img">
                            <div>
                                <img src={sho_abt} alt="shodrex about" />  
                            </div>
                        </div>
                        <div class="right_mid_wrtup">
                            <div>
                            <span class="subheading">Welcome to Shodrex</span>
                            <h2 class="abt_h2">About Us</h2>
                            <p>Now you can easily sell your items, receive bookings and manage orders & inventory anywhere anytime. Your customers can buy from you directly!</p>
                            
                                   <div class="writeup_right">
                    <div class="" id="home1">
                      <p> Starting an online business has never been so easy. People plug-in to online trading daily from our categories ranging from ticketing; Movie Tickets, Event Tickets, Room reservations, Hospitality, Fashion, food, etc. 
                      <br/> <br/>
We have made it easier for merchants to own a self-managed online store / an extension of a website with 2 clicks (less than 5mins) to trade with the customers and communicate with fans. Since the world is becoming more In sequence with global digitization, we have developed options to track and monitor payments and orders from anywhere. 
                      <br/> <br/>
Your fans and customers can easily buy items within clicks. "This is the first time I have purchased an item online so fast in less than 2mins". As exclaimed by a customer that paid for an event ticket on Ustaz Pharuk Nigeria Ticket store.
                      <br/> <br/>
So merchants and business professionals can now focus on sales rather than be bothered with the technicality or a platform to sell.
                      <br/>  <br/>
            Are you an Artist or an Entertainer?<br/>
Are you having issues with capital or cost involved in starting an online store or website? <br/>
Are you afraid to start trading online? <br/>
Are you a Hotelier or Reservation Brand? <br/>
Are you a Fashionista? <br/>
Are you a Ticketing company? <br/>
Are you a Food company? <br/>
Are you trying to build a new brand? 
<br/> <br/>
Start today and give your business more presence by owning a store in 2 clicks (less than 5mins) to run your business online...
<a href="https://www.shodrex.com"> www.shodrex.com </a> 

<br/> <br/>
We have employed state of the art technology, software tools, and Artificial Intelligence to make this possible. We are proud of our team and desire to hire dedicated professionals to join our workforce to take commerce to the next level in Africa.
                      <br/>  <br/>
 From the first day inception of operations, merchants started owning stores. We appreciate many of our stores which includes:   www.ustazpharuknigeria.shodrex (Tickets),
 www.foodcentralabuja.shodrex.com (Food reservation), 
 www.nordichotelabuja.shodrex.com (Hotel/Hospitality), 
 www.stacydikescollection.shodrex.com (Fashion), 
 www.tubascinema.shodrex.com (Cinema), and so on.

                      <br/>  <br/>
Currently, we have 60+ active merchants running their businesses already engaging in our service. Not just because they want to, but because it provides a seamless operation to run their business from their self-managed online store/website. 
                      <br/>  <br/>
We believe it’s our responsibility to help people develop dream business into reality." To bring people's dream business to reality". Our focus remains to keep creating innovative online tools to help merchants generate, secure, monitor, manage, and increase their sales online. 
                      <br/>  <br/>
We are revolutionizing the way people sell items, receive bookings and manage orders online. Shodrex helps anyone anywhere set up their business very fast and build their brand.
                      <br/>  <br/>
Thank you for being part of our journey!        
            </p>
                    
          
          
          </div>
                  </div>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </middle>
            </div>
    </div>
  );
}

/*
 <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/

export default App;
