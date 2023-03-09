// snake water gun

let player_w = 0
let computer_w = 0
const winning_score = 3

while(player_w<winning_score && computer_w<winning_score){ 

    console.log(`Player Score:${player_w} Computer Score:${computer_w}`)
    let computer;
    let player = prompt("Enter your choice: ").toLowerCase()

    if (player == "quit" || player=="q"){
        break
    }

    let rnd = Math.round(Math.random()*2)

    if (rnd == 0){ 
        computer = "snake"
    }
    else if(rnd ==1){
        computer ="water"
    }
    else if(rnd ==2){
        computer ="gun"
    }

    console.log(`The computer plays: ${computer}`)

    if (player == computer){
        console.log("Its a tie!")
    }
    // 1
    else if(player=="snake"){
        if(computer=="water"){
            console.log("Computer won!")
            computer_w +=1
        }
        else{
            console.log("player won!")
            player_w+=1
        }
    }
    else if(player=="water"){
        if(computer=="snake"){
            console.log("player won!")
            player_w+=1
        }
        else{
            console.log("Computer won!")
            computer_w +=1
        }
    }
    else if(player=="gun"){
        if (computer=="water"){
            console.log("Computer won!")
            computer_w +=1
        }
        else{
            console.log("player won!")
            player_w+=1
        }
    }
    else{
        console.alert("Invalid move")
    }

    if (player_w>computer_w){
        console.log("Congradulations. You won!")
    }
    else if(player==computer_w){
        console.log("Its a tie.")
    }
    else{
        console.log("Bad luck, You lost!")
    }

    console.log(`FINAL SCORE : Player: ${player_w}, Computer: ${computer_w}`)
}