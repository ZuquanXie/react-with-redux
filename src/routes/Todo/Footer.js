import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => {
    return(
        <p>
            Show:{'  '}
            <FilterLink filter="SHOW_ALL">
                all
            </FilterLink>
            {'  |  '}
            <FilterLink filter="SHOW_ACTIVE">
                active
            </FilterLink>
            {'  |  '}
            <FilterLink filter="SHOW_COMPLETED">
                completed
            </FilterLink>
        </p>
    )
};

export default Footer
