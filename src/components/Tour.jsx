import React from "react";
import { useSelector } from "react-redux";
import Joyride from "react-joyride";
import Content from "./Content";

const Tour = () => {
  const tourState = useSelector(state => state.tour);

  return (
    <div>
      <Joyride
        continuous={true}
        run={tourState.run}
        scrollToFirstStep={true}
        showSkipButton={true}
        steps={tourState.steps}
        styles={{
          options: { primaryColor: "darkturquoise" }
        }}
      />
      <Content />
    </div>
  );
};
export default Tour;