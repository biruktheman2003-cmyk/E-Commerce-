getElementById("cart-button").addEventListener("click", function() {
    // Redirect to the cart page
    window.location.href = "Cart.html";
  });

  getElementById("profile-button").addEventListener("click", function() {
    // Redirect to the profile page
    window.location.href = "Profile.html";
  });

  getElementById("recommendation-button").addEventListener("click", function() {
    // Redirect to the recommendation page
    window.location.href = "Recommended.html";
  });
 
  function getElementById(id) {
    return document.getElementById(id);
  }

  if (window.location.pathname.endsWith("Cart.html")) {
    // Code specific to the Cart page
    console.log("You are on the Cart page.");
  }

    if (window.location.pathname.endsWith("Profile.html")) {
    // Code specific to the Profile page
    console.log("You are on the Profile page.");
  }

    if (window.location.pathname.endsWith("Recommended.html")) {
    // Code specific to the Recommended page
    console.log("You are on the Recommended page.");
  }

  getElementById("buy-now-button").addEventListener("click", function() {
    // Redirect to the Buy Now page
    window.location.href = "Buy Now";
  });
  if (window.location.pathname.endsWith("Buy Now")) {
    // Code specific to the Buy Now page
    console.log("You are on the Buy Now page.");
  }
  if (window.location.pathname.endsWith("Buy Now")) {
    // Check if there is no resume in the cart
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      alert("There are no resumes in the cart.");
    }
  }