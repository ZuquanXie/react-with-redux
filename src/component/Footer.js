import React from 'react';
import PropTypes from 'prop-types';
import FilterLink from '../container/FilterLink';

const Footer = () => {
    return(
        <p>
            <FilterLink filter="SHOW_ALL">
                Show:
                {''}
                all
            </FilterLink>
            <FilterLink filter="SHOW_ACTIVE">
                Show:
                {','}
                active
            </FilterLink>
            <FilterLink filter="SHOW_NORMAL">
                Show:
                {','}
                all
            </FilterLink>
        </p>
    )
};

Footer.propTypes = {

};

export default Footer
