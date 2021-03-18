import React from "react";
import "./Data.css";
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';

function Data({ title, stat1, stat2, hasIcon }) {
  return (
    <div className="data">
      <h3 className="data__title">{title}</h3>
      <div className="data__bottom">
        <div>
          {hasIcon ? (
            <div className="data__statDiv">
              <ArrowUpwardRoundedIcon className="data_statArrowIcon" />
              <h4 className="data__stat">{stat1}</h4>
            </div>
          ) : (
            <h4 className="data__stat">{stat1}</h4>
          )}
          {hasIcon ? (
            <div className="data__statDiv">
              <ArrowDownwardRoundedIcon className="data_statArrowIcon" />
              <h4 className="data__stat">{stat2}</h4>
            </div>
          ) : (
            <h4 className="data__stat">{stat2}</h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default Data;
