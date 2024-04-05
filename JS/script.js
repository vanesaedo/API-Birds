//Estructura para recoger datos de la API

async function getData () {
   let response = await fetch('url- ${key}');
   let data = await response.json();
   return data;
}

// Utilizando los datos de la API
getUserAsync("yourUsernameHere")
  .then((data) => console.log(data))
  .catch((error) => console.log("hubo un error" + error));


  // READING DATA WHEN I HAVE THEM

  async function functitonName() {
    try {
      // read our JSON
      let response = await fetch('/ruat a los datos/user.json');
      let user = await response.json();
    
      // read github user
      let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
      let githubUser = await githubResponse.json();
    
      // show the avatar
      let img = document.createElement('img');
      img.src = githubUser.avatar_url;
      img.className = "promise-avatar-example";
      document.body.append(img);
    
      // wait 3 seconds
      await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    
      img.remove();
        }
      return githubUser;
    
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
        }
    