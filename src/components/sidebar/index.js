import React, { useState } from "react";
import {
  SideBarContainerWrapper,
  SideBarContainer,
  Heading,
  Typo,
  Accordion,
  AccordionTitle,
  IconWrapper,
  AccordionContent,
  CloseButton,
} from "./styled";
import expandIcon from "../../assets/expandIcon.svg";
import closeIcon from "../../assets/closeIcon.svg";
import { useSelector, useDispatch } from "react-redux";
import { hide } from "../../features/show-sidebar/showSidebarSlice";

const actionsInfo = [
  { id: 1, title: "Add item", description: "Click add item for adding cards." },
  {
    id: 2,
    title: "Sort items",
    description: "Click sort items for sorting cards.",
  },
  { id: 3, title: "Refresh", description: "Click refresh to empty card list." },
];

const SideBar = () => {
  const [expanded, setExpanded] = useState(null);

  const dispatch = useDispatch();

  const showSidebar = useSelector((state) => state.showSidebar);

  const handleExpand = (id) => {
    expanded === id ? setExpanded(null) : setExpanded(id);
  };

  const handleHide = () => {
    setExpanded(null);
    dispatch(hide());
  };

  return (
    <SideBarContainerWrapper className={showSidebar && "show"}>
      <SideBarContainer>
        <CloseButton onClick={handleHide}>
          <img width="25" height="25" src={closeIcon} alt="x" />
        </CloseButton>
        <Heading>Hey there!</Heading>
        <Typo className="text-center">
          Here is a guide on how to manage the cards.
        </Typo>
        {actionsInfo.map((item) => (
          <Accordion key={item.id}>
            <AccordionTitle onClick={() => handleExpand(item.id)}>
              {item.title}
              <IconWrapper className={expanded === item.id && "expanded"}>
                <img width="10" height="10" src={expandIcon} alt="" />
              </IconWrapper>
            </AccordionTitle>
            <AccordionContent className={expanded === item.id && "expanded"}>
              {item.description}
            </AccordionContent>
          </Accordion>
        ))}
      </SideBarContainer>
    </SideBarContainerWrapper>
  );
};

export default SideBar;
