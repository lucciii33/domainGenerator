/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let pronoun = ["the", "our", "his"];
  let adj = ["great", "big", "cool"];
  let noun = ["jogger", "racoon", "blog"];
  let hacks = [".com", ".net", ".uk"];

  //let finalDomainGenerator = [];

  for (let pronoun of pronoun) {
    for (let adj of adj) {
      for (let noun of noun) {
        for (let hacks of hacks) {
          document.querySelector(
            "#domains"
          ).innerHTML += `<ul>${pronoun}${adj}${noun}${hacks}</ul>`;
          //console.log("<ul>" + pronoun + adj + noun + hacks + "</ul>");
        }
      }
    }
  }
};
