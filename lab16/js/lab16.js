// Author: Nicholas Hetter
// Date: Dec 1st, 2024.

// Function to fetch and display the comic
function loadComic() {
    // API URL for retrieving a specific comic by its number
    var apiUrl = `https://xkcd.com/${614}/info.0.json`;

    // Make the AJAX request using Fetch API
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then((data) => {
            // Extract necessary data from the response
            var imgUrl = data.img;
            var title = data.title;
            var altText = data.alt;

                 // Create an image element and set its source, title, and alt attributes
        
          const comicImage=document.createElement('img');
          comicImage.src=imgUrl;
          comicImage.title=title;  // Set title attribute for hover text
      
      const imageContainerDiv=document.getElementById('imageContainer');  // Get reference to container div
      
      imageContainerDiv.innerHTML='';  // Clear previous content of container div

      
imageContainerDiv.appendChild(comicImage);  // Append new image element

 
   alert(
                "Title: " +
                title +
                "\n\nAlt Text: " +
                altText +
                "\n\nImage URL: " +
                imgUrl
         
         );
     
          })
        .catch((error) => console.error("Error fetching XKCD Data:", error));
}

// Add event listener to button click to trigger fetching a new comic when clicked.
document.getElementById("myButton").addEventListener("click", loadComic);