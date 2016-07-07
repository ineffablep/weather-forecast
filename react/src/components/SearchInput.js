import React, {PropTypes} from 'react';

class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.state={
            value:props.search.city
        };
    }


    handleSearchChange(e) {
        this.setState({value: e.target.value});
        this.props.onChange(e.target.value);
    }


    render() {

        return (
            <input
                type="text"
                className="form-control"
                value={this.state.value}
                onChange={this.handleSearchChange}
            />
        );
    }
}

SearchInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    search: PropTypes.object.isRequired
};

export default SearchInput;