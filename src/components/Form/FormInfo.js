import React from 'react'
import { useState } from 'react';
import Pierwszy from './Pierwszy';
import Drugi from './Drugi';
import Trzeci from './Trzeci';

const FormInfo = () => {
    const [page, setPage] = useState(0);
    const formPage = [<Pierwszy />, <Drugi />, <Trzeci />];

    return (
        <>
            <div>{formPage[page]}</div>
            <button 
                disabled={page === 0}
                onClick={() => {setPage((prev) => prev - 1)}}>
                prev
            </button>
            <button 
                disabled={page === formPage.length - 1}
                onClick={() => {setPage((prev) => prev + 1)}}>
                next
            </button>
        </>
    )
}

export default FormInfo;
