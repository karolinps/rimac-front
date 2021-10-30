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
  TextLookMoreOrLessStyled,
  WrapperFlexStyled,
  ShowIconDesktopStyled,
} from "./CollapseStyles";

import iconTheftSVG from "@assets/icons/icon_theft.svg";
import iconDamagetSVG from "@assets/icons/icon_damage.svg";
import iconPerdidaTotalSVG from "@assets/icons/icon_perdidatotal.svg";

import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdRemoveCircleOutline,
  MdAddCircleOutline,
} from "react-icons/md";

import Switch from "@elements/Switch";

const Collapse = () => {
  const [showHide, setShowHide] = React.useState(false);
  const [arrayCoverage, setArrayCoverage] = React.useState([]);

  const listCoverages = [
    {
      name: "Llanta robada",
      icon: iconTheftSVG,
      amount: 15,
    },
    {
      name: "Choque y/o pasarte la luz roja ",
      icon: iconDamagetSVG,
      amount: 20,
    },
    {
      name: "Atropello en la vía Evitamiento ",
      icon: iconPerdidaTotalSVG,
      amount: 50,
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

  const addOrRemoveCoverage = (i, iamount) => {
    if (arrayCoverage.includes(i)) {
      setArrayCoverage((prevSelected) =>
        arrayCoverage.filter((el) => el !== i)
      );
    } else {
      setArrayCoverage((prevSelected) => [...prevSelected, i]);
    }
  };

  /*Llanta robada= $15.00
Choque y/o pasartre la luz roja = $20.00
Atrolpello en vía Evitamiento = $50.00*/
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
                <Switch />
                <ShowIconDesktopStyled>
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
                </ShowIconDesktopStyled>
              </RightStyled>
            </HeaderCollapseStyled>
            {arrayCoverage.includes(i) ? (
              <AddOrRemoveStyled
                onClick={() => addOrRemoveCoverage(i, el.amount)}
              >
                <MdRemoveCircleOutline
                  style={{ color: "#939DFF", opacity: "0.6", fontSize: 20 }}
                />
                <TextAddOrRemoveStyled>quitar</TextAddOrRemoveStyled>
              </AddOrRemoveStyled>
            ) : (
              <AddOrRemoveStyled
                onClick={() => addOrRemoveCoverage(i, el.amount)}
              >
                <MdAddCircleOutline
                  style={{ color: "#939DFF", opacity: "0.6", fontSize: 20 }}
                />
                <TextAddOrRemoveStyled>agregar</TextAddOrRemoveStyled>
              </AddOrRemoveStyled>
            )}

            {showHide[i] ? (
              <BodyCollapseStyled>
                He salido de casa a las cuatro menos cinco para ir a la academia
                de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi
                bici, na llego a la academia que está en el centro del pueblo en
                una plaza medio-grande y dejo donde siempre la bici atada con
                una pitón a un sitio de esos de poner las bicis y mucho más
              </BodyCollapseStyled>
            ) : null}
            {/*mobile*/}
            {showHide[i] ? (
              <WrapperFlexStyled onClick={() => showHideCollapse(i, 1)}>
                <TextLookMoreOrLessStyled>ver menos</TextLookMoreOrLessStyled>
                <MdKeyboardArrowUp
                  style={{
                    color: "#6F7DFF",
                    fontSize: 20,
                    cursor: "pointer",
                  }}
                />
              </WrapperFlexStyled>
            ) : (
              <WrapperFlexStyled onClick={() => showHideCollapse(i, 2)}>
                <TextLookMoreOrLessStyled>ver mas</TextLookMoreOrLessStyled>
                <MdKeyboardArrowDown
                  style={{
                    color: "#6F7DFF",
                    fontSize: 20,
                    cursor: "pointer",
                  }}
                />
              </WrapperFlexStyled>
            )}
          </CardCollapseStyled>
        );
      })}
    </WrapperCollapseStyled>
  );
};

export default Collapse;
