import React from 'react';

const ListDisplay = (props) => {
    const listDisplay = props.value.map(user => {
            return <div key={user.login}>
                <p>{user.login}</p>
                <a href={user.html_url}>
                <img src={user.avatar_url} alt=""></img>
                </a>
            </div>
    })
    
    return <div>{listDisplay}</div>
}


export default ListDisplay;