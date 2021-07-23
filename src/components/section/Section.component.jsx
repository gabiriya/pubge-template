import React from "react";
import sniper from "../../components/sniper2.jpg";
import m416 from "../../components/m416.jpg";
import "./section.styles.css";

function Section() {
 return (
  <div>
   <section>
    <div className="container">
     <h1>FAVOURITE GUNS</h1>
     <div className="awm">
      <div className="awm-title">
       <h2>AWM</h2>

       <p>
        The AWM is the most powerful gun in PUBG, period. the AX series new
        chassis system provided more flexibility to utilize(future) low light
        and day light aiming optics, laser designators, and other accessories
        without the need for custom made mounting interface kits. The right
        folding AX series chassis system was also more compact in the folder
        configuration making it more portable and concealable, and featured a
        pistol grip.
       </p>
      </div>
      <div className="sniper">
       <img src={sniper} alt="" width="500" />
      </div>
     </div>
     <div className="m416">
      <div className="buggy">
       <img src={m416} alt="" width="100" />
      </div>
      <div className="m416-title">
       <h2>M416</h2>
       <p>
        The AWM is the most powerful gun in PUBG, period. the AX series new
        chassis system provided more flexibility to utilize(future) low light
        and day light aiming optics, laser designators, and other accessories
        without the need for custom made mounting interface kits. The right
        folding AX series chassis system was also more compact in the folder
        configuration making it more portable and concealable, and featured a
        pistol grip.
       </p>
      </div>
     </div>
    </div>
   </section>
  </div>
 );
}

export default Section;
