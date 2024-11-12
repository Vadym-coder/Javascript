// let count = 1
// let ol = document.getElementById("todoList")

// function add() {
//     let val = document.getElementById("text").value
//     if (val) {
//         let item = document.createElement('li')
//         item.id = `Item${count}`
//         item.setAttribute("onclick", `changeStatus(${count})`)
//         item.textContent = val
//         count++
//         ol.append(item)
//     }
// }


// function changeStatus(arg) {
//     console.log(arg)
//     let elem = document.getElementById(`Item${arg}`)
//     elem.style.textDecoration = `line-through`
//     setTimeout(()=> elem.remove(), 1000)
// }

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

canvas.width = 700
canvas.height = 500
ctx.lineWidth = 10

ctx.moveTo(350, 250)
ctx.lineTo(400, 400)
ctx.lineTo(450, 150)


ctx.stroke()