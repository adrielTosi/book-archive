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
            <div className = 'about-page'>
                This is a pet project made to study React. It has used React, React-router, Redux, Firebase and Sass.
                <br/>
                <br/>
                Adriel Tosi. 
                <br/>
                <a href = 'https://www.upwork.com/freelancers/~01cf6056c175469e6a?viewMode=1'>Upwork profile </a>
                <br/>
                <br/>

                Book Archive 0.1
            </div>
        )
        }
    }

export default About