
function dealWithProps(obj) {
    if(obj.volumeInfo.authors === undefined){
        obj.volumeInfo.authors = 'no author'
    }
    if(obj.volumeInfo.imageLinks === undefined){
        obj.volumeInfo.imageLinks = 'no cover'
    }
    if(obj.volumeInfo.title === undefined){
        obj.volumeInfo.title = 'no title'
    }
    if(obj.volumeInfo.pageCount === undefined){
        obj.volumeInfo.pageCount = 'unknown'
    }
    if(obj.volumeInfo.description === undefined){
        obj.volumeInfo.description = 'no description available'
    }
    if(obj.volumeInfo.language === undefined){
        obj.volumeInfo.language = 'unknown'
    }
    if(obj.volumeInfo.publisher === undefined){
        obj.volumeInfo.publisher = 'unknown'
    }
    if(obj.volumeInfo.publishedDate === undefined){
        obj.volumeInfo.publishedDate = 'unknown'
    }
    if(obj.volumeInfo.categories === undefined){
        obj.volumeInfo.categories = 'unknown'
    }

    return obj
}

export default dealWithProps



// newStorage =  {
//     volumeInfo: {
//         authors: author, //if no author insert 'no author'
//         imageLinks: {thumbnail: thumbnail} , // if no imageLinks insert NOCOVER -- NOT WORKING
//         title: bookInfo.volumeInfo.title,
//         pageCount: bookInfo.volumeInfo.pageCount,
//         description: bookInfo.volumeInfo.description,
//         language:bookInfo.volumeInfo.language , 
//         publisher: bookInfo.volumeInfo.publisher, 
//         publishedDate: bookInfo.volumeInfo.publishedDate, 
//         categories:bookInfo.volumeInfo.categories}
//     }