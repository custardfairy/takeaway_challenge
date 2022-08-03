// what are our variables?
// var name = "win"; - this is the condition for winning the game
// var name = "moves" - these are moves the user can make (2, 3, 5)

const win = n => {
    // if there are fewer than 2 stones, the active player loses. Return "false" to indicate win = false.
    if (n < 2) {
      return false
    }
  
    let moves = [2, 3, 5]
    // For each turn, if n >= 2 (losing condition), return boolean based on n (current number of stones) for active player
    moves.forEach(turn => {
        if (!win(n - turn)) {
            return true
        } else {
            return false
        }
    })
    }
    // console.log(win(5))