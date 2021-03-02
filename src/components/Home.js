import React, { useEffect, useState } from 'react'
import Infopage from './Infopage'
import './Home.css'
import Search from './Search'

export default function Infosearch() {

    const [user , setUser] = useState('')
    const [detail, setDetail] = useState('')
    const [online, setOnline] = useState(navigator.onLine)

    const inputHandler = (e) => {
        setUser(e.target.value)
    }
    

    const submitHandler = async () => {
        const data = await Search(user)
        setDetail(data)
        setUser('')
    }

    const reset = () => {
        setDetail('')
        setUser('')
    }

    const getStatus = () => {
        setOnline(navigator.onLine)
    }

    useEffect(() => {
        window.addEventListener('online', getStatus);
        window.addEventListener('offline', getStatus);
    })

    useEffect(() => {  
        if(detail){
        }
    }, [user,detail])

    return (
        <>
        {
            
            !detail ?
        
            <div className="wrapper">
                <div className="container">
                    <input className="git-id" type="text" name="git_id" id="git_id" onChange={inputHandler} value={user} placeholder="enter Github username"/>
                    <button type="button" className={user ? "btn btn-primary btn-large" : "btn btn-primary btn-large disabled" } onClick={user ? submitHandler : null}>Check</button>
                    <span  className={ online ? "online" : "back-lit offline"}>❗❗ Check your Internet ❗❗</span>
                </div>
            </div> 

            :

            <Infopage detail={detail} reset={reset} />

        }
        </>
    )
}
