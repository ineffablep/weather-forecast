import React, {PropTypes} from 'react';
export const WeeklyForecast = (props) => {

    const  handleHourlyView=(date)=>{
        props.onClick(date);
    };

    return (
        <div className="container">
            <h2>Weather forecast for {props.city}</h2>
            <h6>Please click on row for hourly forecast</h6>

            <table className="table table-condensed table-hover table-responsive">
                <thead>
                <tr>
                    <th>Day</th>
                    <th>Weather</th>
                    <th>Max</th>
                    <th>Min</th>
                    <th>
                        Wind
                        Pressure
                        Perception
                    </th>
                </tr>
                </thead>

                <tbody>
                {props.daily.map(day=>
                    <tr className="cursor" onClick={()=>handleHourlyView(day.date)} key={day.id}>
                        <td>{day.day}</td>
                        <td>
                            <img src={'http://openweathermap.org/img/w/'+day.icon+'.png'}/>
                        </td>
                        <td>
                            <h4 className="label label-success">{day.tmax} {props.unitFlag}</h4>
                        </td>
                        <td>
                            <h4 className="label label-warning">{day.tmin} {props.unitFlag}</h4>
                        </td>
                        <td>
                            <span className="badge">{day.gust} m/s</span>
                            <span className="badge">{day.pressure} hpa</span>
                            <span className="badge">{day.perception *100} %</span>
                        </td>
                        <td>
                            <a className="btn">
                                <i className="glyphicon glyphicon-chevron-right"></i> </a>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

WeeklyForecast.propTypes = {
    unitFlag:PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    daily: PropTypes.array.isRequired

};

export default WeeklyForecast;
