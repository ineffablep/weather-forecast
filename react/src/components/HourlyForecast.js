import React, {PropTypes} from 'react';
export const HourlyForecast = (props) => {

    const  handleWeeklyForecast=()=>{
        props.onClick();
    };

    return (
        <div className="container">
            <div className="panel-heading bg-primary cursor" onClick={handleWeeklyForecast}>
                <span className="glyphicon glyphicon-circle-arrow-left"> </span>
                <strong> {props.city} </strong> {props.date}
            </div>

            <table className="table table-condensed table-hover table-responsive">
                <thead>
                <tr>
                    <th>Time</th>
                    <th>Weather</th>
                    <th>Temperature {props.unitFlag}</th>
                    <th>
                        Pressure <br/>
                        Humidity<br/>
                        Wind<br/>
                    </th>
                </tr>
                </thead>

                <tbody>
                {props.list.map(item=>
                    <tr key={item.id}>
                        <td>{item.time}</td>
                        <td>
                            <img src={'http://openweathermap.org/img/w/'+item.icon+'.png'}/>
                            <span className="margin-2"> {item.text}</span>
                        </td>
                        <td>
                            {item.temp} {props.unitFlag}
                        </td>
                        <td>
                            <span className="badge">{item.gust} m/s</span>
                            <span className="badge">{item.pressure} hpa</span>
                            <span className="badge">{item.perception *100} %</span>
                        </td>

                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

HourlyForecast.propTypes = {
    unitFlag:PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired

};

export default HourlyForecast;
