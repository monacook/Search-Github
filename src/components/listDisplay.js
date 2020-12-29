import React from 'react';

const ListDisplay = (props) => {
    const listDisplay = props.value.map(user => {
            return <div key={user.login}>
                <a href={user.html_url}>
                <img src={user.avatar_url} alt=""></img>
                <p>{user.login}</p>
                </a>
            </div>
    })
    
    return <div>{listDisplay}</div>
}

export default ListDisplay;