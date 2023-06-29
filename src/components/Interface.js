import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Interface = () => {
  const [buttonText,setButtonText]=useState(["","","","","","","","",""])
  const [count, setCount]=useState(null)
  const [firstClicked, setFirstClicked]=useState()
  const [lastClicked,setLastClicked]=useState()
  const [buttonStatus, setButtonStatus]=useState([false,false,false,false,false,false,false,false,false])

  const cross=<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16" id="1">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
      </svg> 

  const zero= <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16" id="0">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
</svg>
  const logic=(index)=>{
    const newButtonText = [...buttonText];
    const newButtonStatus=[...buttonStatus]
    setCount(count+1)
    if(count%2===0){
      newButtonText[index] = cross;
    setButtonText(newButtonText)
    newButtonStatus[index]=true
    setButtonStatus(newButtonStatus)
    setLastClicked(1)
      }
    else{
      newButtonText[index] = zero;
      newButtonStatus[index]=true
    setButtonStatus(newButtonStatus)
    setButtonText(newButtonText)
     setLastClicked(0)
    }
    console.log(count)
    
  }
    useEffect(()=>{
      if((buttonText[0] !== "" && buttonText[1] && buttonText[0].props.id === buttonText[1].props.id && buttonText[2] && buttonText[2].props.id === buttonText[1].props.id)||(buttonText[3] !== "" && buttonText[4] && buttonText[4].props.id === buttonText[3].props.id && buttonText[5] && buttonText[4].props.id === buttonText[5].props.id)||(buttonText[6] !== "" && buttonText[7] && buttonText[6].props.id === buttonText[7].props.id && buttonText[8] && buttonText[7].props.id === buttonText[8].props.id)||(buttonText[0] !== "" && buttonText[3] && buttonText[0].props.id === buttonText[3].props.id && buttonText[6] && buttonText[3].props.id === buttonText[6].props.id)||(buttonText[1] !== "" && buttonText[4] && buttonText[1].props.id === buttonText[4].props.id && buttonText[7] && buttonText[4].props.id === buttonText[7].props.id)||(buttonText[2] !== "" && buttonText[5] && buttonText[2].props.id === buttonText[5].props.id && buttonText[8] && buttonText[5].props.id === buttonText[8].props.id)||(buttonText[0] !== "" && buttonText[4] && buttonText[0].props.id === buttonText[4].props.id && buttonText[8] && buttonText[4].props.id === buttonText[8].props.id)||(buttonText[2] !== "" && buttonText[4] && buttonText[2].props.id === buttonText[4].props.id && buttonText[6] && buttonText[4].props.id === buttonText[6].props.id)
        ){
      console.log("win")
      toast.success('🦄 Congrats! Mr.  ' +  (lastClicked===1? "X":"O") + ' You have done it.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setCount(null)
      setButtonText(["","","","","","","","",""])
      setButtonStatus([false,false,false,false,false,false,false,false,false])
    }
    else if((count===9&&firstClicked===1)||(count===10&&firstClicked===0)){
      toast.success('Match Drawn! Try Again', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setCount(null)
      setButtonText(["","","","","","","","",""])
      setButtonStatus([false,false,false,false,false,false,false,false,false])
    }

       
        },[buttonText,lastClicked,count,firstClicked])
         

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
      <div className="card d-flex justify-content-center align-items-center" style={{width: "25rem", height:"32rem", backgroundColor:"#F5F5F5", border:"10px solid rgb(65, 101, 101)"}}>
        <h3 className='fw-bold' >Tic Tac Toe</h3>
        <div className='text-center' style={{color:"#000080"}}>
        {count===null? (<div> <h5 className='mb-3 fw-semibold '>Which Player Do You Want to Choose?</h5>
        <button disabled={count!==null} type="button" className="btn btn-dark mx-1 mb-4" onClick={()=>{setCount(0); setFirstClicked(1)}}> {cross} </button>
        <button disabled={count!==null} type="button" className="btn btn-dark mb-4" onClick={()=>{setCount(1); setFirstClicked(0)}} > {zero} </button></div>):(<h4 className='mb-3 fw-semibold'> Now it's your turn Mr. {count %2 === 0? "X" : "O"} </h4>)}
        </div>
        

        <div>
          <button className='m-1 btn btn-dark' disabled={buttonStatus[0]||count===null} type="button" onClick={()=> logic(0)}>{buttonText[0]}</button>
          <button className='m-1 btn btn-dark' disabled={buttonStatus[1]||count===null} type="text" onClick={()=> logic(1)}>{buttonText[1]}</button>
          <button className='m-1 btn btn-dark' disabled={buttonStatus[2]||count===null} type="button" onClick={()=> logic(2)}>{buttonText[2]}</button>
        </div>
        <div>
        <button className='m-1 btn btn-dark' disabled={buttonStatus[3]||count===null} type="button" onClick={()=> logic(3)}>{buttonText[3]}</button>
        <button className='m-1 btn btn-dark' disabled={buttonStatus[4]||count===null} type="button" onClick={()=> logic(4)}>{buttonText[4]}</button>
        <button className='m-1 btn btn-dark' disabled={buttonStatus[5]||count===null} type="button" onClick={()=> logic(5)}>{buttonText[5]}</button>
        </div>
        <div>
        <button className='m-1 btn btn-dark' disabled={buttonStatus[6]||count===null} type="button" onClick={()=> logic(6)}>{buttonText[6]}</button>
        <button className='m-1 btn btn-dark' disabled={buttonStatus[7]||count===null} type="button" onClick={()=> logic(7)}>{buttonText[7]}</button>
        <button className='m-1 btn btn-dark' disabled={buttonStatus[8]||count===null} type="button" onClick={()=> logic(8)}>{buttonText[8]}</button>
        </div>
      </div>
        
          <ToastContainer />

    </div>
  )
}

export default Interface



