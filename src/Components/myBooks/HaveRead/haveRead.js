import React from 'react'
import BookCard from '../frontPage/bookCard';
import fire from '../../../config/fire'
import '../style.css'
import NOCOVER from '../../../NOCOVER.jpg'
import Loading from '../../Loading/loading'

export default class HaveRead extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            haveReadItens: {},
            username: '',
            isLoading: false
        }
    this.handleDeleteFromHaveRead = this.handleDeleteFromHaveRead.bind(this)
    this.handleObjectToArray = this.handleObjectToArray.bind(this)
    this.database = fire.database()
    }

    handleDeleteFromHaveRead(id){ 
        this.database.ref(`/${this.state.username}/haveRead/` + id).remove()
        .then(() => {
            let newItens = this.state.haveReadItens
            delete newItens[id]
            this.setState( { haveReadItens: newItens } )
        })
        
    }

    componentDidMount(){ 
        fire.auth().onAuthStateChanged ( user => {
            if(user){
                this.database.ref(`/${user.displayName}/haveRead`).once('value')
                .then(snap => this.setState( { haveReadItens: snap.val(), username: user.displayName } ))  
                .then(() => this.setState( { isLoading: false } )) 
            }
        })
    }
    componentWillMount(){
        this.setState( { isLoading: true } )
    }

    handleObjectToArray(obj){ //makes data from firebase (JSON-like tree) an array of objects
        let arrayHaveRead = []
        for(let keys in obj){
            arrayHaveRead.push(obj[keys])
        }
        return arrayHaveRead
    }
                 
    render(){
        if(this.state.isLoading){
            return (
            <div className = 'loading-page'>
                {Loading('bars', '#f6b564', '10%', '10%')}
            </div>)
        }else{
        let arrayOfBooks = this.handleObjectToArray(this.state.haveReadItens)
        return(
            <div>
                {this.state.haveReadItens === [] && ( //no working. find out why
                    <p>No books yet!</p>
                )}


                {this.state.haveReadItens !== {} && (
                    arrayOfBooks.map( info => 
                        <BookCard
                        bookInfo = {info}
                        id = {info.id}
                        canAddToHaveRead = {false}
                        canDelete = {true}
                        handleDeleteFromHaveRead = {this.handleDeleteFromHaveRead}
                        /> )
                )}
            </div>
            )
        }
    }
}