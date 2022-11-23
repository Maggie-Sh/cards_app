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
import { useSelector, useDispatch } from "react-redux";
import { hide } from "../../features/show-sidebar/showSidebarSlice";

const actionsInfo = [
  { id: 1, title: "Add item", description: "Click add item for adding cards." },
  {
    id: 2,
    title: "Sort item",
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

  return (
    <SideBarContainerWrapper className={showSidebar && "show"}>
      <SideBarContainer>
        <CloseButton onClick={() => dispatch(hide())}>close</CloseButton>
        <Heading>Hey there!</Heading>
        <Typo className="text-center">
          Here is a guide on how to manage the cards.
        </Typo>
        {actionsInfo.map((item) => (
          <Accordion key={item.id} onClick={() => handleExpand(item.id)}>
            <AccordionTitle>
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
