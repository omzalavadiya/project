import { useState } from "react"
var t = 0
function Game() {
  const [box, setbox] = useState('', '', '', '', '', '', '', '', '')
  const [xmove, setxmove] = useState("X")
  const [omove, setomove] = useState("O")

  const clickevent = (x) => {
    var n = [...box]
    console.log(x)
    if (t % 2 == 0) {
      n[x] = xmove
      setbox(n)
    } 
    else {
      n[x] = omove
      setbox(n)
    }
    t++
    wincheck()
  }
  const resetgame = () => {
    window.location.reload(false)
  }

  function wincheck() {
    if (box[0] == "X" && box[1] == "X" && box[2] == "X" || box[0] == "O" && box[1] == "O" && box[2] == "O") {
      alert("Win")
      resetgame()
    }
    else if (box[3] == "X" && box[4] == "X" && box[5] == "X" || box[3] == "O" && box[4] == "O" && box[5] == "O") {
      alert("Win")
      resetgame()
    }
    else if (box[6] == "X" && box[7] == "X" && box[8] == "X" || box[6] == "O" && box[7] == "O" && box[8] == "O") {
      alert("Win")
      resetgame()
    }
    else if (box[0] == "X" && box[3] == "X" && box[6] == "X" || box[0] == "O" && box[3] == "O" && box[6] == "O") {
      alert("Win")
      resetgame()
    }
    else if (box[1] == "X" && box[4] == "X" && box[7] == "X" || box[1] == "O" && box[4] == "O" && box[7] == "O") {
      alert("Win")
      resetgame()
    }
    else if (box[2] == "X" && box[5] == "X" && box[8] == "X" || box[2] == "O" && box[5] == "O" && box[8] == "O") {
      alert("Win")
      resetgame()
    }
    else if (box[0] == "X" && box[4] == "X" && box[8] == "X" || box[0] == "O" && box[4] == "O" && box[8] == "O") {
      alert("Win")
      resetgame()
    }
    else if (box[2] == "X" && box[4] == "X" && box[6] == "X" || box[2] == "O" && box[4] == "O" && box[6] == "O") {
      alert("Win")
      resetgame()
    }
  }

  return (
    <>
      <section className="game mt-5">
        <div className="box">
          <input type="button" value={box[0]} onClick={() => { clickevent(0) }} />
          <input type="button" value={box[1]} onClick={() => { clickevent(1) }} />
          <input type="button" value={box[2]} onClick={() => { clickevent(2) }} /><br></br>
          <input type="button" value={box[3]} onClick={() => { clickevent(3) }} />
          <input type="button" value={box[4]} onClick={() => { clickevent(4) }} />
          <input type="button" value={box[5]} onClick={() => { clickevent(5) }} /><br></br>
          <input type="button" value={box[6]} onClick={() => { clickevent(6) }} />
          <input type="button" value={box[7]} onClick={() => { clickevent(7) }} />
          <input type="button" value={box[8]} onClick={() => { clickevent(8) }} />
        </div>
        <div className="reset text-center mt-4">
          <input type="button" value={"Reset"} onClick={resetgame} />
        </div>
      </section>
    </>
  )
}

export default Game