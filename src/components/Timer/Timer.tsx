import React, { useState } from 'react';
import './Timer.css';
import TimerButton from '../TimerButton/TimerButton';

export const Timer = () => {

    let [hour, setHour] = useState<number>(0);
    let [minutes, setMinutes] = useState<number>(0);
    let [seconds, setSeconds] = useState<number>(0);
    let [interv, setInterv] = useState<any>();
    let [isOn, setIsOn] = useState<number>(0);

    function startTimer() {
        if (isOn!==1){
            setIsOn(1);
            setInterv(
                setInterval(()=> {

                    if (seconds === 60) {
                        minutes++;
                        setMinutes(minutes);
                        seconds = 0;
                      }
                  
                    if (minutes === 60) {
                        hour++
                        setHour(hour);
                        minutes = 0;
                    }
                      
                    setSeconds(seconds++);
                  
                }, 1000)
            )

        }
    }

    function stopTimer(){
        if (isOn !== 0) {
            setIsOn(2);
            clearInterval(interv);
    }
}

    function resetTimer(){
        setIsOn(0);
        clearInterval(interv);
        setSeconds(0);
        setMinutes(0);
        setHour(0);
    }

    return (
            <div className="timer-container">
              <div className="time-display">
                {hour < 10 ? `0${hour}` : hour}:
                {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </div>
              <div className="timer-button-container">
                <TimerButton
                  className="start-timer"
                  buttonAction={startTimer}
                  buttonValue={isOn === 2 ? "Resume" : "Start"}

                />
                <TimerButton
                  className="stop-timer"
                  buttonAction={stopTimer}
                  buttonValue={'Stop'}
                />
                <TimerButton
                  className="reset-timer"
                  buttonAction={resetTimer}
                  buttonValue={'Reset'}
                />
              </div>
            </div>
          );
}
