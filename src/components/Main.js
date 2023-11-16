import { BsPlayCircle } from 'react-icons/bs';
import { VscDebugRestart } from 'react-icons/vsc';
import { AiOutlineArrowUp } from 'react-icons/ai';
import "./Main.css";
import { useState } from 'react';
import pic from "../assets/players ready.gif";
import pic2 from "../assets/fist.png";
import pic3 from "../assets/open.png";
import pic4 from "../assets/th.png";
import picChoose1 from "../assets/rock.png";
import picChoose2 from "../assets/paper.png";
import picChoose3 from "../assets/Scissors.png";
import sad from "../assets/ss.png";
import happy from "../assets/aa.png";
import ops from "../assets/dd.png";
import { useMediaQuery } from 'react-responsive';

function Main() {
    const [computerResult, setComputerResult] = useState("");
    const [clicked, setIClicked] = useState("Please choose befor start");
    const [playerResult, setPlayerResult] = useState("");
    const [result, setResult] = useState("");
    const [roundResult, setRoundResult] = useState("");
    const [playerWins, setPlayerWins] = useState(0);
    const [computerWins, setComputerWins] = useState(0);
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    function rock() {
        setPlayerResult("Rock");
        computerPlay();
    }
    function paper() {
        setPlayerResult("Paper");
        computerPlay();
    }
    function scissors() {
        setPlayerResult("Scissors");
        computerPlay();
    }
    function computerPlay() {
        let randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber) {
            case 0:
                setComputerResult(`Paper`);
                break;
            case 1:
                setComputerResult(`Rock`);
                break;
            case 2:
                setComputerResult(`Scissors`);
                break;
        }
        return computerResult;
    }
    function PlayRound() {
        switch (`${playerResult}${computerResult}`) {
            case `PaperRock`:
                setRoundResult(`YOU WIN! Paper beats Rock`);
                setPlayerWins(1);
                break;
            case `ScissorsRock`:
                setRoundResult(`YOU LOSE! Rock beats Scissors `);
                setComputerWins(1);
                break;
            case `PaperScissors`:
                setRoundResult(`YOU LOSE! Scissors beats Paper `);
                setComputerWins(1);
                break;
            case `ScissorsPaper`:
                setRoundResult(`YOU WIN! Scissors beats Paper`);
                setPlayerWins(1);
                break;
            case `RockPaper`:
                setRoundResult(`YOU LOSE! Paper beats Rock `);
                setComputerWins(1);
                break;
            case `RockScissors`:
                setRoundResult(`YOU WIN! Rock beats Scissors`);
                setPlayerWins(1);
                break;
            case `PaperPaper`:
                setRoundResult(`NO WINNER! DRAW`);
                setPlayerWins(1);
                setComputerWins(1);
                break;
            case `RockRock`:
                setRoundResult(`NO WINNER! DRAW`);
                setPlayerWins(1);
                setComputerWins(1);
                break;
            case `ScissorsScissors`:
                setRoundResult(`NO WINNER! DRAW`);
                setPlayerWins(1);
                setComputerWins(1);
                break;
        }
        console.log(result);
        return result;
    }
    function game() {
        setPlayerWins(0);
        setComputerWins(0);
        PlayRound();

        if (playerWins == computerWins) {
            setResult(`NO WINNER!`);
            return result;
        }
        if (playerWins > computerWins) {
            setResult(`YOU WIN!`);
            return result;
        }
        else {
            setResult(`YOU LOSE!`);
            setIClicked("done");
            return result;
        }
    }
    function refreshPage() {
        window.location.reload();
    }
    return (
        <main>
            {isDesktopOrLaptop && <div>
            <div className='container'>
                <div className='vs'>
                    <div className='player-container'>
                        <div className='title'>PLAYER</div>
                        {!playerResult && <img className='playerimg' src={pic} width={180} alt='pic'></img>}
                        {playerResult === `Rock` && <img className='playerimg' src={pic2} width={180} alt='pic'></img>}
                        {playerResult === `Paper` && <img className='playerimg' src={pic3} width={180} alt='pic'></img>}
                        {playerResult === `Scissors` && <img className='playerimg' src={pic4} width={180} alt='pic'></img>}
                    </div>
                    <div className='computer-container'>
                        <div className='title'>COMPUTER</div>
                        {!roundResult && <img src={pic} width={180} alt='pic'></img>}
                        {roundResult && computerResult === `Rock` && <img src={pic2} width={180} alt='pic'></img>}
                        {roundResult && computerResult === `Paper` && <img src={pic3} width={180} alt='pic'></img>}
                        {roundResult && computerResult === `Scissors` && <img src={pic4} width={180} alt='pic'></img>}
                    </div>
                </div>
            </div>
            {!roundResult && <div className='play-button' onClick={game}>
                <BsPlayCircle className='pointer-buttons pointer' size={100} />
            </div>}
            {roundResult && <div className='restart-button' onClick={refreshPage}>
                <VscDebugRestart className='pointer-buttons pointer' size={100} />
            </div>}
            <div className='res'>
            {playerWins == computerWins && roundResult && <img src={ops} width={80} alt='pic'></img>}
            {playerWins > computerWins && <img src={happy} width={100} alt='pic'></img>}
            {playerWins < computerWins && <img src={sad} width={100} alt='pic'></img>}
            <div className='result'>{roundResult}</div>
            </div>
            <div className='buttons'>
                {!roundResult && <img className='choice pointer' src={picChoose1} width={100} onClick={rock} alt='pic'></img>}
                {!roundResult && <img className='choice pointer' src={picChoose2} width={100} onClick={paper} alt='pic'></img>}
                {!roundResult && <img className='choice pointer' src={picChoose3} width={100} onClick={scissors} alt='pic'></img>}
                {roundResult && <img className='choice-disable' src={picChoose1} width={100} alt='pic'></img>}
                {roundResult && <img className='choice-disable' src={picChoose2} width={100} alt='pic'></img>}
                {roundResult && <img className='choice-disable' src={picChoose3} width={100} alt='pic'></img>}
            </div>
            {!playerResult && <div className='choose-title1'>{clicked} <AiOutlineArrowUp /></div>}
            </div>}
            {isTabletOrMobile && <div>
            <div className='container-mob'>
                <div className='vs-mob'>
                    <div className='player-container-mob'>
                        <div className='title'>PLAYER</div>
                        {!playerResult && <img className='playerimg-mob' src={pic}  alt='pic'></img>}
                        {playerResult === `Rock` && <img className='playerimg-mob' src={pic2}  alt='pic'></img>}
                        {playerResult === `Paper` && <img className='playerimg-mob' src={pic3}  alt='pic'></img>}
                        {playerResult === `Scissors` && <img className='playerimg-mob' src={pic4}  alt='pic'></img>}
                    </div>
                    <div className='computer-container-mob'>
                        <div className='title'>COMPUTER</div>
                        {!roundResult && <img className='computerimg-mob' src={pic}  alt='pic'></img>}
                        {roundResult && computerResult === `Rock` && <img className='Rock-mob' src={pic2}  alt='pic'></img>}
                        {roundResult && computerResult === `Paper` && <img className='Paper-mob' src={pic3}  alt='pic'></img>}
                        {roundResult && computerResult === `Scissors` && <img className='Scissors-mob' src={pic4}  alt='pic'></img>}
                    </div>
                </div>
            </div>
            {!roundResult && <div className='play-button-mob' onClick={game}>
                <BsPlayCircle className='pointer-buttons pointer' size={100} />
            </div>}
            {roundResult && <div className='restart-button' onClick={refreshPage}>
                <VscDebugRestart className='pointer-buttons pointer' size={100} />
            </div>}
            <div className='res'>
            {playerWins == computerWins && roundResult && <img src={ops} width={80} alt='pic'></img>}
            {playerWins > computerWins && <img src={happy} width={100} alt='pic'></img>}
            {playerWins < computerWins && <img src={sad} width={100} alt='pic'></img>}
            <div className='result'>{roundResult}</div>
            </div>
            <div className='buttons-mob'>
                {!roundResult && <img className='choice-mob pointer' src={picChoose1} onClick={rock} alt='pic'></img>}
                {!roundResult && <img className='choice-mob pointer' src={picChoose2} onClick={paper} alt='pic'></img>}
                {!roundResult && <img className='choice-mob pointer' src={picChoose3} onClick={scissors} alt='pic'></img>}
                {roundResult && <img className='choice-disable-mob' src={picChoose1}  alt='pic'></img>}
                {roundResult && <img className='choice-disable-mob' src={picChoose2}  alt='pic'></img>}
                {roundResult && <img className='choice-disable-mob' src={picChoose3}  alt='pic'></img>}
            </div>
            {!playerResult && <div className='choose-title1-mob'>{clicked} <AiOutlineArrowUp /></div>}
            </div>}
        </main>
    );
}

export default Main;