
function storageAvailable(type) {
  
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      storage &&
      storage.length !== 0
    );
  }
}
if (storageAvailable("localStorage")) {
  console.log("// Yippee! We can use localStorage awesomeness")
} else {
  console.log("// Too bad, no localStorage for us")
}
let color = "boliviano"
localStorage.setItem("preferencia",color)
let retrievedColor = localStorage.getItem("preferencia")


export {retrievedColor}