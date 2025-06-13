//display events list
fetch("/events")
  .then((res) => res.json())
  .then((events) => {
    events.forEach(event => {
      const item = document.createElement("li");
      item.textContent = `${id}: ${title}`;
      document.getElementById("event-list").append(item);
    });
  });

document.getElementById("event-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("input").value;
  fetch("/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: input })
  })
  .then(res => res.json())
  .then(event => {
    const item = document.createElement("li");
    item.textContent = `${id}: ${title}`;
    document.getElementById("event-list").append(item);
  });
});