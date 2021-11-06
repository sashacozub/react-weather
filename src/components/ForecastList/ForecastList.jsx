import React from 'react';
import ForecastDay from '../ForecastDay/ForecastDay.jsx';
import './ForecastList.css';

const ForecastList = ({ forecast, isMetric, isLoading }) => {
  return (
    <table>
      <tbody>
        {isLoading ? (
          <tr>
            <td>Loading...</td>
          </tr>
        ) : (
          forecast.map((day, index) => {
            return (
              index > 0 && (
                <ForecastDay data={day} key={day.dt} isMetric={isMetric} />
              )
            );
          })
        )}
      </tbody>
    </table>
  );
};

export default ForecastList;
