//your code here!
const infiList = document.getElementById("infi-list");

function addListItems(count) {
  for (let i = 0; i < count; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `List Item ${infiList.children.length + 1}`;
    infiList.appendChild(listItem);
  }
}

addListItems(10);

infiList.addEventListener("scroll", () => {
	if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
		addListItems(2);
	}
})
