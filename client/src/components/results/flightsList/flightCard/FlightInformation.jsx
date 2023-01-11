import React from "react";
import styles from "./flightCard.module.css";
import format from "date-fns/format";

export default function FlightInformation({
  date,
  fromCode,
  destinationCode,
  duration,
}) {
  const getTime = (date) => {
    const time = format(new Date(date), "hh:mm");
    return time;
  };

  return (
    <div className={styles.flightInformationUpperPartWrap}>
      <div className={styles.flightInformationUpperPart}>
        <div className={styles.takeoff}>
          <span className={styles.flightTime}> {getTime(date.takeoff)}</span>
          <span className={styles.flightCode}>{fromCode}</span>
        </div>
        <div className={styles.duration}>
          <span className={styles.durationTime}>
            {`${duration.hours}h ${duration.minutes.toFixed(0)}m`}
          </span>
          <div className={styles.stopLine}>
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 12 12"
              enableBackground="new 0 0 12 12"
              className={styles.planeSvg}
            >
              <path
                fill="#898294"
                d="M3.922,12h0.499c0.181,0,0.349-0.093,0.444-0.247L7.949,6.8l3.233-0.019C11.625,6.791,11.989,6.44,12,6 c-0.012-0.44-0.375-0.792-0.818-0.781L7.949,5.2L4.866,0.246C4.77,0.093,4.602,0,4.421,0L3.922,0c-0.367,0-0.62,0.367-0.489,0.71 L5.149,5.2l-2.853,0L1.632,3.87c-0.084-0.167-0.25-0.277-0.436-0.288L0,3.509L1.097,6L0,8.491l1.196-0.073 C1.382,8.407,1.548,8.297,1.632,8.13L2.296,6.8h2.853l-1.716,4.49C3.302,11.633,3.555,12,3.922,12"
              ></path>
            </svg>
          </div>
          <div className={styles.stopsWrap}>
            <span className={styles.stops}>Non-stop</span>
          </div>
        </div>
        <div className={styles.landing}>
          <span className={styles.flightTime}> {getTime(date.landing)}</span>
          <span className={styles.flightCode}>{destinationCode}</span>
        </div>
      </div>
    </div>
  );
}
