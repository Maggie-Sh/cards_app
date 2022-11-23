import styled from "styled-components";

export const SideBarContainerWrapper = styled.div`
  max-width: 250px;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  border-left: 1px solid #bababa;
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    overflow: hidden;
    transition: width 300ms ease-in;
    &.show {
      width: 100%;
      height: 100vh;
    }
  }
  @media (max-width: 420px) {
    max-width: 100%;
  }
`;

export const SideBarContainer = styled.div`
  position: relative;
  padding: 100px 10px;
  width: 100%;
  height: 100%;
`;

export const Heading = styled.h3`
  color: #000;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const Typo = styled.p`
  font-size: 18px;
  text-decoration: uppercase;
  &.text-center {
    text-align: center;
  }
`;

export const Accordion = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #373e4b;
  padding: 10px;
  margin-top: 10px;
`;

export const AccordionTitle = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: #373e4b;
  width: 100%;
  text-align: left;
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #fff;
  }
  &.expanded {
    img {
      transform: rotate(180deg);
    }
  }
`;

export const AccordionContent = styled.p`
  overflow: hidden;
  font-size: 16px;
  color: #373e4b;
  display: none;
  margin-top: 10px;
  &.expanded {
    transform: scale(1);
    display: block;
  }
`;

export const CloseButton = styled.button`
  @media (min-width: 768px) {
    display: none;
  }
  position: absolute;
  top: 20px;
  right: 20px;
  color: red;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
`;
