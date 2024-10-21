// src = "https://unavatar.io/readcv/elenatorro" 
import{useState} from 'react'
export function TwitterFollowCard({ userName = 'unknow' , name = 'unknow', initialFollowing}) {
    
    const [isFollowing, setFollowing] = useState(initialFollowing)

    /*const state = useState(false)
    const initialFollowing = state[0]
    const setFollowing = state[1]*/

    const handleClick = () => {
        setFollowing(!isFollowing)
    }

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonColor = isFollowing 
        ? 'tw-followCard-button is-following' 
        : 'tw-followCard-button'


    return(
    <article className='tw-followCard'>   
        <header className='tw-followCard-header'>
            <img 
                className='tw-followCard-avatar'
                alt = "imagen de usuario" 
                src = {`https://unavatar.io/readcv/${userName}`}
            />  
            <div className='tw-followCard-info'>  
                <strong/>{name} <strong/>
                <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
        </header>
        <aside className='asaid'/>
            <div className='tw-followCard-footer'>
            <button className={buttonColor} onClick = {handleClick}> 
                <span className='followText'>{text}</span> 
                <span className='stopFollow'>Dejar de Seguir</span> 
            </button>
            </div>
        <aside/>
    </article>    
    )
}