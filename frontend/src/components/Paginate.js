import React from 'react'
import { Pagination } from 'react-bootstrap'

function Paginate({pages, page, keyword='' , isAdmin=false}) {

    let url = !isAdmin ? '/' : '/admin/productlist/'

    if(keyword) {
        keyword = keyword.split('?keyword=')[1].split('&')[0]
    }

    console.log("KEYWORD:", keyword)

    return (
        (pages > 1 && (
            <Pagination>
                {[...Array(pages).keys()].map((x) => (
                    <Pagination.Item 
                        active={x+1 === page}
                        key={x + 1}
                        href={`${url}?keyword=${keyword}&page=${x + 1}`}
                    >
                        {x + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        ))
    )
}

export default Paginate
