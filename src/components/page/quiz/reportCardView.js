import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

export default ({ item }) => {
    return (
        <div>
                <div className="d-flex justify-content-around">
                    <div className="border text-center flex-fill mr-1 cardBoxText correctText">
                        {item.tCorrect}
                        <br/>
                        <span className="small">Correct</span>
                    </div>
                    <div className="border text-center flex-fill ml-1 cardBoxText incorrectText">
                        {item.tIncorrect}
                        <br/>
                        <span className="small">Incorrect</span>
                    </div>
                </div>
                <div className="d-flex justify-content-around border mt-2">
                    <div className="text-center flex-fill cardBoxText percentText">
                        {item.percentage}
                        <br/>
                        <span className="small">Percentage</span>
                    </div>
                    <div className="text-center flex-fill cardBoxText">
                        <CircularProgressbar
                        percentage={item.percentage}
                        />
                    </div>
                </div> 
            </div>  
    )
};