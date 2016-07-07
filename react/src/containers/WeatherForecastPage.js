import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/weatherForecastActions';
import  PageHeader from '../components/PageHeader';
import  SearchForm from '../components/SearchForm';
import  WeeklyForecast from '../components/WeeklyForecast';
import  HourlyForecast from '../components/HourlyForecast';

export const WeatherForecastPage = (props) => {
    const handleShowHourly = (e)=> {
        props.actions.showHourly(e);
    };
    const handleShowWeekly = ()=> {
        props.actions.showWeekly();
    };

    const handleSearchClick = (e, city, units) => {
        e.preventDefault();
        props.actions.toggleLoading(city);
        props.actions.setSelectedCity(city);
        props.actions.setSelectedUnits(units);
        props.actions.fetchWeatherForecast(props.search);
    };
    return (
        <div className="container">
            <PageHeader headerText="React JS Weather Forecast Sample APP"/>
            <div className="padding-top">
                {props.showWeekly &&
                <SearchForm onSearchClick={handleSearchClick}
                            search={props.search}
                            disabled={props.disabled}
                            loading={props.loading}/>}
                {(props.daily != null && props.daily.length > 0 && props.showWeekly ) &&
                <WeeklyForecast unitFlag={props.search.units} city={props.search.city} daily={props.daily}
                                onClick={handleShowHourly}/>
                }
                {(props.list != null && props.list.length > 0 && props.showHourly) &&
                <HourlyForecast unitFlag={props.search.units} city={props.search.city} date={props.date}
                                list={props.daily} onClick={handleShowWeekly}/>
                }
            </div>
        </div>
    );
};

WeatherForecastPage.propTypes = {
    actions: PropTypes.object.isRequired,
    search: PropTypes.object.isRequired,
    city: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    daily: PropTypes.array.isRequired,
    disabled: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    date: PropTypes.string.isRequired,
    showHourly: PropTypes.bool.isRequired,
    showWeekly: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
    return {
        search: state.weatherForecast.search,
        loading: state.weatherForecast.loading,
        city: state.weatherForecast.city,
        list: state.weatherForecast.list,
        daily: state.weatherForecast.daily,
        disabled: state.weatherForecast.disable,
        date: state.weatherForecast.date,
        showHourly: state.weatherForecast.showHourly,
        showWeekly: state.weatherForecast.showWeekly
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherForecastPage);