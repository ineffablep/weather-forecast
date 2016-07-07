import React, {PropTypes} from 'react';

const SearchButton = (props) => {

    let content = props.loading ?
        ( <button className="btn btn-primary margin-2"
                 role="Search">
            <i className="glyphicon glyphicon-refresh spin"></i>
            Loading ...
        </button> )
        :
        ( <button disabled={props.disabled} className="btn btn-primary margin-2" 
                  onClick={props.onClick} role="Search">
            <i className="glyphicon glyphicon-search"> </i>
             Search
        </button>);

    return (content);
};

SearchButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired
};

export default SearchButton;
