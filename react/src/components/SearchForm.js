import React, {PropTypes} from 'react';
import SearchButton from './SearchButton';
import SearchInput from  './SearchInput';

class SearchForm extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSelectUnits = this.handleSelectUnits.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.state = {
            city: props.search.city,
            lat: props.search.lat,
            lng: props.search.lng,
            units:props.search.units
        };
    }


    handleSearchChange(value) {
        this.setState({city: value});
    }

    handleSelectUnits(e){
        this.setState({units: e.target.value});

    }

    handleSearchClick(e) {
        this.props.onSearchClick(e,this.state.city, this.state.units);
    }

    render() {
        return (
            <form name="form" className="form-inline" role="form" noValidate>
                <label className="margin-2 unitsLabel">Units</label>
                <select className="form-control" required onChange={this.handleSelectUnits}>
                    <option value="metric">Metric(°C)</option>
                    <option value="imperial">Imperial(°F)</option>
                </select>
                <label className="margin-2 cityLabel">City</label>
                <SearchInput onChange={this.handleSearchChange} search={this.props.search}/>
                <SearchButton onClick={this.handleSearchClick} disabled={this.props.disabled}
                              loading={this.props.loading}/>
            </form>
        );
    }
}


SearchForm.propTypes = {
    onSearchClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    search: PropTypes.object.isRequired
};

export default SearchForm;
