import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyAxEJE3yDyi7ahA8wQTNpox6vieW9gKBu8",
authDomain: "agency-data-24147.firebaseapp.com",
projectId: "agency-data-24147",
storageBucket: "agency-data-24147.appspot.com",
messagingSenderId: "750130268440",
appId: "1:750130268440:web:c2024af0ee930dc865766d",
measurementId: "G-9TMRPPE3FZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

    // Get a reference to the database service
    const database = getDatabase(app);

    // Handle form submission
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form data
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var topic = document.getElementById("topic").value;
        var details = document.getElementById("message").value;
    

        // Push data to Firebase
        push(ref(database, 'free-website-data'), {
            name: name,
            email: email,
            topic: topic,
            details: details
        });

        // Optionally, reset the form after submission
        document.getElementById("contactForm").reset();
alert("Your request has submitted! please be patient🙏🏻")
        popUp.classList.remove('hidden');
    });

   
 
