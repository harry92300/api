import React, { useState } from 'react';
import '../style/Meteo.css'


function meteo() {
  const url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=43ded06c80e8bc95e9c29b7e5b1714b4'

  return (
    <div>
      <h1>
        harry
        <label class="titre">Rechercher votre ville:</label>
       
<input type="search" id="site-search" name="q" placeholder='search city...' />

<button>Recherche</button>
        <article class="widget">
  <div class="weatherIcon"><i class="wi wi-day-cloudy"></i></div>
  <div class="weatherInfo">
    <div class="temperature"><span>25&deg;</span></div>
    <div class="description">    
      <div class="weatherCondition">Température</div>    
      <div class="place">France, Levallois-Perret(92)</div>
    </div>
  </div>
  <div class="date">4 Octobre</div>
</article>



      </h1>
    </div>
    
  )
}

export default meteo;
