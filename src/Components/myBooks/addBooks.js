import React from 'react'
import './style.css'
import BookCard from './bookCard'
import { connect } from 'react-redux'
import  {changeSearch} from '../../Redux/actionCreator'
import FormContainer from './FormContainer'

class AddBooks extends React.Component {
    constructor (props){
        super(props)
        this.state = { 
            listIsOpen: [false,false,false,false,false,false,false,false,false,false]
         }

    this.handleFetch = this.handleFetch.bind(this)
    }


    handleFetch (userInput){
        if(userInput !== ''){
            let ref = userInput.split(" ").join("+")
            let search = "https://www.googleapis.com/books/v1/volumes?q=" + ref
            fetch(search)
                .then(response => response.json())
                .then(data => {
                    console.log(this.props)
                    this.props.changeSearch(data.items)})
                .then(() => this.setState( { listIsOpen: [false,false,false,false,false,false,false,false,false,false] } ))
        }
    }

    changeIsOpen (index){
        let newListIsOpen = this.state.listIsOpen
        newListIsOpen[index] = !newListIsOpen[index] 
        for(let i = 0; i < 10; i++){
            if(i !== index) newListIsOpen[i] = false 
        }
        this.setState( { listIsOpen: newListIsOpen } )
    }


    render(){
        return (
            <div className = "addBooks-container">
                
                <FormContainer handleFetch = {this.handleFetch}/>

                <div className = 'map-bookcard'>
                    
                    {this.props.userSearch.map((info, index) => (
                        <BookCard 
                            key = {index}
                            bookInfo = {info}
                            index = {index}
                            state = {this.state.listIsOpen[index]}
                            changeIsOpen = {this.changeIsOpen.bind(this)}
                        />
                    ))}
                </div>
            </div>

        )
    }

}


function mapStateToProps (reduxState){
    return  { userSearch: reduxState.userSearch } 
}

export default connect(mapStateToProps, { changeSearch })(AddBooks)