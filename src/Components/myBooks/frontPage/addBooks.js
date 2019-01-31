import React from 'react'
import '../style.css'
import BookCard from './bookCard'
import { connect } from 'react-redux'
import  {changeSearch} from '../../../Redux/actionCreator'
import FormContainer from './FormContainer'
import fire from '../../../config/fire'
import dealWithProps from '../dealWithProps'

class AddBooks extends React.Component {
    constructor (props){
        super(props)
    this.state = {
        username: ''
    }
    this.handleFetch = this.handleFetch.bind(this)
    this.handleAddToHaveRead = this.handleAddToHaveRead.bind(this)

    }

    logout(){
        fire.auth().signOut()
    }


    handleFetch (userInput){
        if(userInput !== ''){
            let ref = userInput.split(" ").join("+")
            let search = "https://www.googleapis.com/books/v1/volumes?q=" + ref
            fetch(search)
                .then(response => response.json())
                .then(data => this.props.changeSearch(data.items))
        }
    }

    handleAddToHaveRead(bookInfo){ //modify to firebase
        let newStorage
        const database = fire.database().ref('/' + this.state.username + '/haveRead')
        
        newStorage =  {
            volumeInfo: {
                id: bookInfo.id,
                authors: bookInfo.volumeInfo.authors, 
                imageLinks: bookInfo.volumeInfo.imageLinks,
                title: bookInfo.volumeInfo.title,
                pageCount: bookInfo.volumeInfo.pageCount,
                description: bookInfo.volumeInfo.description,
                language:bookInfo.volumeInfo.language , 
                publisher: bookInfo.volumeInfo.publisher, 
                publishedDate: bookInfo.volumeInfo.publishedDate, 
                categories:bookInfo.volumeInfo.categories}
            }

        newStorage = dealWithProps(newStorage) //imported function to deal with undefined props
        database.update( { [bookInfo.id]: newStorage } )

    }


    componentDidMount(){
        fire.auth().onAuthStateChanged ( user => {
            if(user){
                this.setState( { username: user.displayName } )
            }
        })
    }

    render(){
        return (
            <div className = "addBooks-container">
                
                <FormContainer handleFetch = {this.handleFetch}/>

                <div className = 'map-bookcard'>
                    {this.props.userSearch.map((info, index) => (
                        <BookCard 
                            bookInfo = {info} //this info is in Redux State
                            key = {index}
                            canAddToHaveRead = {true} 
                            canDelete = {false}
                            handleAddToHaveRead = {this.handleAddToHaveRead}
                        />
                    ))}
                </div>
                <br/>
                <br/>
                <button onClick = {this.logout.bind(this)}>Log Out</button>
            </div>

        )
    }

}


function mapStateToProps (reduxState){
    return  { userSearch: reduxState.userSearch } 
}

export default connect(mapStateToProps, { changeSearch })(AddBooks)