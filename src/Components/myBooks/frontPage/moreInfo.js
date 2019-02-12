import React from "react"
import '../../../SASS/App.scss'

export default function MoreInfo({Info}) {
        return (
            <div className = 'moreInfo'>
                               
                <div className = 'volume-info'>                
                    <p>
                        Description: {Info.volumeInfo.description}
                    </p>
                    <br/>
                </div>
                
            </div>
        )
    }