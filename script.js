//your code here!
let infiList = document.getElementById("infi-list");

functin addListItem(count){
	for(let i = 0; i < count; i++){
		let list = document.createElement("li");
		list.textContent = `Item ${infiList.children.length + 1}`;
		infiList.appendChild(list);
	}
}

addListItem(10);

infiList.addEventListener("scroll", () => {
	if(infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight){
		addListItem(2);
	}
})
