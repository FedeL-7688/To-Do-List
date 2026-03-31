function print(task) {
  const taskCard = document.createElement("div");
  taskCard.classList.add("task-card");

  const header = document.createElement("div");
  header.classList.add("task-header");

  const title = document.createElement("h1");
  title.textContent = task.name;

  const due = document.createElement("span");
  due.textContent = `due: ${task.dueDate.toLocaleDateString("es-AR")}`;

  const arrow = document.createElement("span");
  arrow.textContent = "▼";
  arrow.classList.add("arrow");

  header.append(title, due, arrow);

  const details = document.createElement("div");
  details.classList.add("task-details");

  let desc = document.createElement("p");
  desc.textContent = task.description;
  let calendar = document.createElement("p");
  calendar.textContent = `created: ${task.date.toLocaleDateString("es-AR")} `;

  details.append(desc, calendar);

  header.addEventListener("click", () => {
    details.classList.toggle("show")
    arrow.classList.toggle("open")

  });

  taskCard.append(header, details);

  const container = document.querySelector("#mainContainer");
  container.append(taskCard);
}

export { print };
