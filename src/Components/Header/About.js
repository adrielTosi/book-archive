import React from "react"

class About extends React.Component{
    
    componentDidMount(){
        this.props.toggleInside('inAbout')
    }
    
    componentWillUnmount(){
        this.props.toggleInside('inAbout')
    }


    
    render(){
        return (
            <div>
                This is the About page
            </div>
        )
        }
    }

export default About