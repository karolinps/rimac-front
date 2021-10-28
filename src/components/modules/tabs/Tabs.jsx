import React from "react";
import Collapse from "@modules/collapse/Collapse";
import { WrapperTabStyled, TabStyled } from "./TabsStyles";

const Tabs = () => {
  const [tab, setTab] = React.useState(0);

  const listTabs = [
    {
      name: "Protege a tu auto",
    },
    {
      name: "Protege a los que te rodean",
    },
    {
      name: "Mejora tu plan",
    },
  ];

  const changeTab = (key) => {
    if (key === 0) setTab(key);
    else if (key === 1) setTab(key);
    else if (key === 2) setTab(key);
  };

  return (
    <>
      <WrapperTabStyled>
        {listTabs.map((el, i) => {
          return (
            <TabStyled
              key={i}
              onClick={() => changeTab(i)}
              style={{
                color: i === tab ? "#EF3340" : "#494f66",
                borderBottom:
                  i === tab ? "2px solid #EF3340" : "1px solid #e4e8f7",
              }}
            >
              {el.name}
            </TabStyled>
          );
        })}
      </WrapperTabStyled>
      <Collapse />
    </>
  );
};

export default Tabs;
