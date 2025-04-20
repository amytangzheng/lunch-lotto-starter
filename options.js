document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get(["distance", "price"], (data) => {
    document.getElementById("distance").value = data.distance || 22000;
    document.getElementById("price").value = data.price || "2,3";
  });
});

document.getElementById("save").addEventListener("click", async () => {
    const distance = parseFloat(document.getElementById("distance").value);
    const price = document.getElementById("price").value;
  
    // Save the new settings in Chrome storage
    chrome.storage.sync.set({ distance, price }, async () => {
      // alert("Settings saved!");
      swal({
        title: `Settings saved!`,
        icon: "success",
        button: false, // Hide the default OK button
      });
  
      // Fetch new restaurants and update the wheel
      await fetchRestaurants();
    });
  });  

document.getElementById("settings").addEventListener("click", () => {
  chrome.runtime.openOptionsPage();
});

  