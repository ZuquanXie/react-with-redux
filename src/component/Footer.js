import React from 'react';
import FilterLink from '../container/FilterLink';

const Footer = () => {
    return(
        <p>
            SHOW:{'  '}
            <FilterLink filter="SHOW_ALL">
                all
            </FilterLink>
            {'  '}
            <FilterLink filter="SHOW_ACTIVE">
                active
            </FilterLink>
            {'  '}
            <FilterLink filter="SHOW_COMPLETED">
                completed
            </FilterLink>
        </p>
    )
};

export default Footer
