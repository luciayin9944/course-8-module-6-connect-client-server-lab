//fetch data
document.getElementById('fetch-events').addEventListener("click", () =>{
  // fetch('/events')  // Relative Path
  fetch('http://localhost:5000/events') //Absolute Path
    .then(res => res.json())
    .then(data => {
      data.forEach(event => renderEvent(event))
    });
});

// add event
document.getElementById("event-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("event-title").value;
  // fetch("/events", {
  fetch('http://localhost:5000/events', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: input })
  })
  .then(res => res.json())
  .then(event => { 
    renderEvent(event)
  });
});


// render list
const renderEvent = (event) => {
  const list = document.getElementById("events-list");
  const item = document.createElement("li");
  item.textContent = event.title;
  list.appendChild(item)
}