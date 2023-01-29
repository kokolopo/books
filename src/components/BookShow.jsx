import React from 'react'
import { useState } from 'react'
import BookEdit from './BookEdit'

const BookShow = ({ book, onDelete, onEdit }) => {
    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick = () => {
        onDelete(book.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false)
        onEdit(id, newTitle)
    }

    let content = <div> 
        <h2><b>Title</b></h2>
        <h3>{book.title}</h3>
    </div>

    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit}/>
    }

    return (
        <div className='book-show'>
            <img src={`https://picsum.photos/seed/${book.id}/200/200`} alt="gambar" />
            {content}
            <div className='actions'>
                <button className='edit' onClick={handleEditClick}>Edit</button>
                <button className='delete' onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
            
        </div>
    )
}

export default BookShow