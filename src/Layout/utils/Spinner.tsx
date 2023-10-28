import React from 'react'

type Props = {}

const Spinner = (props: Props) => {
    return (
        <div className="spinner-border text-info d-flex container justify-content-center" role="status">
            <span className="sr-only">Carregando...</span>
        </div>
    )
}

export default Spinner