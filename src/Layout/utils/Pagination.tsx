import React from 'react'

type Props = {
    currentPage: number,
    totalPages: number,
    onPageChange: any
}

const Pagination = (props: Props) => {

    const getPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= props.totalPages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className={"page-item " + (props.currentPage === 1? "disabled": "")}>
                    <span className="page-link" onClick={() => props.onPageChange(props.currentPage - 1)}>Previous</span>
                </li>
                {getPageNumbers().map((page) => (
                    <li onClick={() => props.onPageChange(page)} className={"page-item "+ (page===props.currentPage? "active":"")}>
                        <span className='page-link'>{page}</span>
                    </li>
                ))}

                <li className={"page-item " + (props.currentPage === props.totalPages? "disabled": "")}>
                    <span className="page-link" onClick={() => props.onPageChange(props.currentPage + 1)}>Next</span>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination