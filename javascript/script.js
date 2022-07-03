let resp;
  let userId;
  userId = prompt("Inserisci l'ID desiderato(es. 4)")
  const containerEl = document.getElementById("container");

  // scarica post
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(response => response.json())
    .then(json => {
      resp = JSON.stringify(json);
   
      // salva post
      localStorage.setItem("item", resp);

      // visualizza post
      const post = localStorage.getItem("item");
      const respParsed = JSON.parse(post);//crea ARRAY respParsed

      // trovo id 4
      const result = respParsed.filter(checkID);
      function checkID(respParsed) {
        return respParsed.id == userId;
      }


      const h2El = document.createElement("h2");
      containerEl.appendChild(h2El);
      h2El.innerHTML = result[0].title;

      const checkBoxEl = document.createElement("input");
      checkBoxEl.setAttribute("type", "checkbox");
      checkBoxEl.setAttribute("checked", "false");
      if (result[0].completed == true) {
        checkBoxEl.checked = true;
      } else if (result[0].completed == false) {
        checkBoxEl.checked = false;

      }

      containerEl.appendChild(checkBoxEl);
    
    }
    )