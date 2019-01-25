import React from 'react'
import BookCard from '../frontPage/bookCard';
import NOCOVER from '../../../NOCOVER.jpg'


export default class HaveRead extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            haveReadItens: []
        }
    this.handleDeleteFromHaveRead = this.handleDeleteFromHaveRead.bind(this)
    }

    handleDeleteFromHaveRead(id){
        let currentList = JSON.parse(localStorage.getItem('haveRead'))
        let newList = currentList.filter(elem => elem.id !== id)
        localStorage.setItem('haveRead', JSON.stringify(newList))
        this.setState( { haveReadItens: newList } )
    }

    componentDidMount(){
        let haveReadItens = JSON.parse(localStorage.getItem('haveRead'))
        this.setState( { haveReadItens } )
    }

    render(){
        return(
            <div>
                {this.state.haveReadItens == [] && (
                    <p>No books yet!</p>
                )}


                {this.state.haveReadItens !== [] && (
                    this.state.haveReadItens.map((info) =>
                    <BookCard
                        bookInfo = {info}
                        id = {info.id}
                        haveRead = {true}
                        canDelete = {true}
                        handleDeleteFromHaveRead = {this.handleDeleteFromHaveRead}
                     />)

                )}


               
            </div>
        )
    }
}