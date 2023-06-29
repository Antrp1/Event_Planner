document.getElementById("checkout").addEventListener("click", () => {
  console.log("ok");
  fetch("/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [],
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json(); // Call res.json() to parse the response as JSON
      } else {
        throw new Error("Error: " + res.status); // Handle non-OK response
      }
    })
    .then((data) => {
      // Handle the parsed JSON data here
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch request
      console.error(error);
    });
});
