import React from "react"

export default function Description ({Info}){
    return(
        <div className = 'description'>
            <p>Page: {Info.volumeInfo.pageCount }</p>
            <p>Language: {Info.volumeInfo.language}</p>
            <p>Publisher: {Info.volumeInfo.publisher}</p>
        </div>
    )
}