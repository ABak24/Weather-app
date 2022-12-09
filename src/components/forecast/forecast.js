import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.forecast.forecastday.map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    className="icon-small"
                    alt="weather"
                    src={data.forecast.forecastday[idx].day.condition.icon}
                  />
                  <label className="day">{forecastDays[idx]} </label>
                  <label className="description">
                    {data.forecast.forecastday[idx].day.condition.text}
                  </label>
                  <label className="min-max">
                    {Math.round(data.forecast.forecastday[idx].day.mintemp_c)}{" "}
                    °C /{" "}
                    {Math.round(data.forecast.forecastday[idx].day.maxtemp_c)}{" "}
                    °C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Humidity: </label>
                  <label>
                    {data.forecast.forecastday[idx].day.avghumidity} %
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sunrise: </label>
                  <label>{data.forecast.forecastday[idx].astro.sunrise}</label>
                </div>

                <div className="daily-details-grid-item">
                  <label>Max wind: </label>
                  <label>
                    {data.forecast.forecastday[idx].day.maxwind_kph} km/h
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label> Sunset: </label>
                  <label>{data.forecast.forecastday[idx].astro.sunset}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Daily chance of rain: </label>
                  <label>
                    {data.forecast.forecastday[idx].day.daily_chance_of_rain} %
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
        <AccordionItem></AccordionItem>
      </Accordion>
    </>
  );
};

export default Forecast;
