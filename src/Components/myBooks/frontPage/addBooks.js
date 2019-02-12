import React from 'react'
import '../../../SASS/App.scss'
import { connect } from 'react-redux'
import  {changeSearch} from '../../../Redux/actionCreator'
import FormContainer from './FormContainer'
import fire from '../../../config/fire'
import dealWithProps from '../dealWithProps'
import BookList from './BookList'



class AddBooks extends React.Component {
    constructor (props){
        super(props)
    this.state = {
        username: '',
        isLoading: false
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

    handleAddToHaveRead(bookInfo){ 
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
        this.props.toggleInside('inAddBooks')
    }

    componentWillUnmount(){
        this.props.toggleInside('inAddBooks')
    }

    render(){
        return (
            <div className = "addBooks-container">
                
                <FormContainer handleFetch = {this.handleFetch}/>

                <BookList userSearch = {this.props.userSearch} 
                          handleAddToHaveRead = {this.handleAddToHaveRead}
                />
            </div>
        )
    }

}


function mapStateToProps (reduxState){
    return  { userSearch: reduxState.userSearch } 
}

export default connect(mapStateToProps, { changeSearch })(AddBooks)