import React, {PropTypes} from 'react';
const PageHeader = (props) => {
    return (
        <h1>
            {props.headerText}
        </h1>
    );
};

PageHeader.propTypes = {
    headerText: PropTypes.string.isRequired
};

export default PageHeader;
