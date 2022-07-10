// DELIVERABLES
// 01. timer increment every second once the page has loaded
// 02. manually increment and decrement the counter using +- buttons
// 03. like an individual number on counter.
//       a) see the count displayed of the number of likes associated with that number displayed
// 04. pause counter
//      a) pause the counter
//      b) disable all buttons except the pause button
//      c) switch the label on the button from "pause" to "resume"
// 05. restart button to restart the counter and re-enable buttons
// 06. leave comments
// hints: setTimeout , setInterval , clearInterval 
// ----------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    counter()
    let interval = setInterval(incrementCounter, 1000)
    const plus = document.getElementById("plus")
    plus.addEventListener("click", incrementCounter)

    const minus = document.getElementById("minus")
    minus.addEventListener("click", () => {
        let count = document.getElementById("counter")
        count.textContent = parseInt(count.textContent, 10) -1

    })
   
    const heart = document.getElementById("heart")
    const submit = document.getElementById("submit")
    const pause = document.querySelector("#pause")
   
    pause.addEventListener("click", () => {
       if ( pause.innerText === "resume") {
            pause.innerText = "pause"
            interval = setInterval(incrementCounter, 1000)
       } else {
            pause.innerText = "resume"
            clearInterval(interval)       
        }

        minus.disabled = !minus.disabled 
        plus.disabled = !plus.disabled
        heart.disabled = !heart.disabled 
        submit.disabled = !submit.disabled 
        clearInterval(interval)
    })

    let commentForm = document.querySelector("#comment-form")
    commentForm.addEventListener("submit", (e) =>{
        e.preventDefault()
        console.log("event =>", e)
    })
})

function counter() {
    incrementCounter()
}

function incrementCounter() {
    let count = document.getElementById("counter")
    count.textContent = parseInt(count.textContent, 10) +1
}

