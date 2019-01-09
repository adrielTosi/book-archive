import React from 'react'
import './style.css'
import BookCard from './bookCard'

export default class AddBooks extends React.Component {
    constructor (props){
        super(props)

        this.state = { 
            userInput: '',
            userSearch: [],
            listIsOpen: [false,false,false,false,false,false,false,false,false,false]
         }
    }

    handleChange (e){
        let val = e.target.value
        this.setState({ userInput: val })
    }

    handleSubmit (e){
        e.preventDefault()
        
        let val = this.state.userInput
        let ref = val.split(" ").join("+")
        let search = "https://www.googleapis.com/books/v1/volumes?q=" + ref
        fetch(search)
            .then(response => response.json())
            .then(data => this.setState( { userSearch: data.items, listIsOpen: [false,false,false,false,false,false,false,false,false,false] } ) )
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
                <div>
                    <form onSubmit = {this.handleSubmit.bind(this)}>
                    
                    <label>Name:  </label>
                    <input  
                    type = "text" 
                    placeholder = "Book's name" 
                    onChange = {this.handleChange.bind(this)}
                    value = {this.state.userInput} />   
                    

                    <input type ="submit" value = "Search" />
                    </form>
                </div>

                <div className = 'map-bookcard'>
                    
                    {this.state.userSearch.map((info, index) => (
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