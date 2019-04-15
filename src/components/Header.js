import propTypes from 'prop-types';
import React from 'react';

const color = Math.random() <= 0.5 ? 'blue' : 'green';

const Header = ({message}) => {
    return (
        <h2 style={{color: color}} className='Header text-center'>
            {message}
        </h2>
    );
};

Header.propTypes = {
    message: propTypes.PropTypes.string.isRequired
};

export default Header;
