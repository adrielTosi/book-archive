import React from 'react'
import BookCard from './bookCard'
import Loading from '../../Loading/loading'
import '../style.css'


export default class BookList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading: true
        }
    }

    componentWillMount(){
        this.setState( { isLoading:true } )
    }

    componentDidMount(){
        this.setState( { isLoading: false } )
    }

    render(){
        if(this.state.isLoading){
            return (
            <div className = 'loading-page'>
                {Loading('bars', '#f6b564', '10%', '10%')}
            </div>)
        }else{
        return (
            <div className = 'map-bookcard'>
                    {this.props.userSearch.map((info, index) => (
                        <BookCard 
                            bookInfo = {info} //this info is in Redux State
                            key = {index}
                            canAddToHaveRead = {true} 
                            canDelete = {false}
                            handleAddToHaveRead = {this.props.handleAddToHaveRead}
                        />
                    ))}
            </div>
            )
        }
    }
}