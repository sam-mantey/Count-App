let count = 0
let totalCount = 0
let countEl = document.getElementById("counter")

function counting() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    countEl.textContent = 0
    document.getElementById("saved").textContent += `${count} - `
    totalCount += count
    count = 0 
    document.getElementById("total-count").textContent = totalCount
}

function reset() {
    count = 0;
    totalCount = 0;
    document.getElementById("saved").textContent = '';
    document.getElementById("total-count").textContent = count

}