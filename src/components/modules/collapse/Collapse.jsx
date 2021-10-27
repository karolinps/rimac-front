import React from "react";

import {
  WrapperCollapseStyled,
  CardCollapseStyled,
  HeaderCollapseStyled,
  IconStyled,
  TitleStyled,
  RightStyled,
  LeftStyled,
  BodyCollapseStyled,
  AddOrRemoveStyled,
  TextAddOrRemoveStyled,
} from "./CollapseStyles";

import iconTheftSVG from "@assets/icons/icon_theft.svg";
import iconDamagetSVG from "@assets/icons/icon_damage.svg";
import iconPerdidaTotalSVG from "@assets/icons/icon_perdidatotal.svg";

import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";

const Collapse = () => {
  const [showHide, setShowHide] = React.useState(false);
  const listCoverages = [
    {
      name: "Llanta robada",
      icon: iconTheftSVG,
    },
    {
      name: "Choque y/o pasarte la luz roja ",
      icon: iconDamagetSVG,
    },
    {
      name: "Atropello en la vía Evitamiento ",
      icon: iconPerdidaTotalSVG,
    },
  ];

  const showHideCollapse = (i, action) => {
    if (action === 1) {
      setShowHide(() => {
        return { [i]: false };
      });
    } else if (action === 2) {
      setShowHide(() => {
        return { [i]: true };
      });
    }
  };

  return (
    <WrapperCollapseStyled>
      {listCoverages.map((el, i) => {
        return (
          <CardCollapseStyled key={i}>
            <HeaderCollapseStyled>
              <LeftStyled>
                <IconStyled src={el.icon} alt="icon" />
                <TitleStyled>{el.name}</TitleStyled>
              </LeftStyled>
              <RightStyled>
                {showHide[i] ? (
                  <MdKeyboardArrowUp
                    style={{
                      color: "#EF3340",
                      fontSize: 20,
                      cursor: "pointer",
                    }}
                    onClick={() => showHideCollapse(i, 1)}
                  />
                ) : (
                  <MdKeyboardArrowDown
                    style={{
                      color: "#EF3340",
                      fontSize: 20,
                      cursor: "pointer",
                    }}
                    onClick={() => showHideCollapse(i, 2)}
                  />
                )}
              </RightStyled>
            </HeaderCollapseStyled>
            <AddOrRemoveStyled>
              <MdRemoveCircleOutline
                style={{ color: "#939DFF", opacity: "0.6", fontSize: 20 }}
              />
              <TextAddOrRemoveStyled>quitar</TextAddOrRemoveStyled>
            </AddOrRemoveStyled>
            {showHide[i] ? (
              <BodyCollapseStyled>
                He salido de casa a las cuatro menos cinco para ir a la academia
                de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi
                bici, na llego a la academia que está en el centro del pueblo en
                una plaza medio-grande y dejo donde siempre la bici atada con
                una pitón a un sitio de esos de poner las bicis y mucho más
              </BodyCollapseStyled>
            ) : (
              <BodyCollapseStyled />
            )}
          </CardCollapseStyled>
        );
      })}
    </WrapperCollapseStyled>
  );
};

export default Collapse;
