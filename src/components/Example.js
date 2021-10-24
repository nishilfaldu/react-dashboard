import React from "react";
import { ThemeProvider } from "styled-components";
import SimpleCard from "./SimpleCard.js";
import theme from "./themeDark"

const Example = function(){
  return (
    <div className="col-lg-8 offset-lg-2">
    <ThemeProvider theme={theme}>    
        <SimpleCard cardTitle="Registrants" noBottomMargin>
            Today
        </SimpleCard>
    </ThemeProvider>
    </div>
  );
};

export default Example;