import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

function SearchBar() {

    const [keyword, setKeyword] = useState('')

    const navigate = useNavigate()
    const { pathname, search } = useLocation();

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword) {
            navigate(`/?keyword=${keyword}&page=1`)
        } else {
            navigate(pathname)
        }
    }


    return (
        <Form onSubmit={submitHandler} className='d-flex'>
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className='me-sm-2 ms-sm-5'
            >
            </Form.Control>
            <Button
                type='submit'
                variant='secondary'
                className='p-2'
            >
                Search
            </Button>
        </Form>
    )
}

export default SearchBar
