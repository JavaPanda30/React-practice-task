const root = document.getElementById("root");
root.addEventListener("dragstart", dragStart);

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  setTimeout(() => {
    e.target.classList.add("hide");
  }, 0);
}

const drop = document.querySelectorAll("#drop");
drop.forEach((drop) => {
  drop.addEventListener("dragenter", dragEnter);
  drop.addEventListener("dragover", dragOver);
  drop.addEventListener("dragleave", dragLeave);
  drop.addEventListener("drop", dropped);
});

function dragEnter(e) {
  e.preventDefault();
  console.log("dragEnter");
  e.target.classList.add("drag-over");
}

function dragOver(e) {
  e.preventDefault();
  console.log("dragOver");
  e.target.classList.add("drag-over");
}
function dragLeave(e) {
  console.log("dragLeave");
  e.target.classList.remove("drag-over");
}

function dropped(e) {
  console.log("dropped");
  e.target.classList.remove("drag-over");
  const id = e.dataTransfer.getData("text/plain");
  const draggable = document.getElementById(id);
  e.target.appendChild(draggable);
  draggable.classList.remove("hide");
}
