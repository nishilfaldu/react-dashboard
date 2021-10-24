import React from "react";
import { ThemeProvider } from "styled-components";
import SimpleCard from "./SimpleCard.js";
import theme from "./themeDark"

const Example = function(){

    const series = [
        {
          name: "series1",
          data: [10, 35, 10, 44, 10, 10, 20, 30, 35, 10, 44, 10, 20, 30],
        },
        {
          name: "series2",
          data: [30, 45, 35, 10, 64, 10, 40, 30, 35, 10, 44, 10, 20, 10],
        },
      ];

    return (
        <div className="col-lg-8 offset-lg-2">
        <ThemeProvider theme={theme}>    
            <SimpleCard cardTitle="Registrants" series={series}>
                Today
                <br></br>
                250
            </SimpleCard>
        </ThemeProvider>
        </div>
    );
};

export default Example;