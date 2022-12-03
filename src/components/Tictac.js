import { useState } from 'react'
import './Tictac.css'
const Tictac=()=>{

    const [turn,setTurn]=useState('X')

    const [cells,setCells]=useState(Array(9).fill(""))

    const [winmessage,setWinmessage]=useState('')


    console.log(cells)

const reloadgame=()=>{
    setTurn('X')
    setWinmessage('')
    setCells(Array(9).fill(""))
}

const checkforWinner=(cells)=>{
    if(
        cells[0]===cells[1] &&
        cells[1]===cells[2] &&
        cells[0] !== ''
    ){
        setWinmessage(`${cells[0]} has won`)
    }
    else if(
        cells[3]===cells[4] &&
        cells[4]===cells[5] &&
        cells[3] !== ''
    ){
        setWinmessage(`${cells[3]} has won`)
    }
    else if(
        cells[6]===cells[7] &&
        cells[7]===cells[8] &&
        cells[6] !== ''
    ){
        setWinmessage(`${cells[6]} has won`)
    }
    else if(
        cells[0]===cells[3] &&
        cells[3]===cells[6] &&
        cells[3] !== ''
    ){
        setWinmessage(`${cells[3]} has won`)
    }
    else if(
        cells[1]===cells[4] &&
        cells[4]===cells[7] &&
        cells[1] !== ''
    ){
        setWinmessage(`${cells[1]} has won`)
    }
    else if(
        cells[2]===cells[5] &&
        cells[5]===cells[8] &&
        cells[2] !== ''
    ){
        setWinmessage(`${cells[8]} has won`)
    }
    else if(
        cells[0]===cells[4] &&
        cells[4]===cells[8] &&
        cells[8] !== ''
    ){
        setWinmessage(`${cells[8]} has won`)
    }
    else if(
        cells[2]===cells[4] &&
        cells[4]===cells[6] &&
        cells[6] !== ''
    ){
        setWinmessage(`${cells[6]} has won`)
    }
}



    const handleclick=(num)=>{
        let newcells=[...cells]

        if(cells[num] !== ''){
            alert('already filled')
            return

        }

        if ( turn == 'X' ){

            newcells[num]='X'
            setTurn('O')
        }
        else{
            newcells[num]='O'
            setTurn('X')
        }
        console.log(newcells)
        setCells(newcells)
        checkforWinner(newcells)
    }


    const Cells=({num})=>{
        return(
            <td onClick={()=> handleclick(num)} className="cell">{cells[num]} </td>
        )
    }
    


    return (
        <div className='cell-container' >
            <table>
                <tbody>
                    <tr>
                        <Cells num={0} />
                        <Cells num={1} />
                        <Cells num={2} />
                    </tr>
                    <tr>
                        <Cells num={3} />
                        <Cells num={4} />
                        <Cells num={5} />
                    </tr>
                    <tr>
                        <Cells num={6} />
                        <Cells num={7} />
                        <Cells num={8} />
                    </tr>
                </tbody>
            </table>
            <h1>{winmessage} </h1>
            <button onClick={reloadgame}>Reload</button>
        </div>
    )
}

export default Tictac