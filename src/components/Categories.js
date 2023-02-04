import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import { Button } from '@mantine/core';

const Categories = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);
    return (
        <div>
            <h3>{categories.status}</h3>
            <Button onClick={() => dispatch(checkStatus())}>
                Check Status
            </Button>
        </div>
    )
};

export default Categories