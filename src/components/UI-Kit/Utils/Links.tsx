import React from "react";
import LinkArrow from "../assets/icons/ChevronRightSB.svg";

interface Props {
  text: string;
  url: string;
}

export const Link = (props: Props) => {
  return (
    <span className="link">
      <a href={props.url}>
        {props.text}
        <img className="svgIcon" src={LinkArrow} alt="" />
      </a>
    </span>
  );
};

export const LinkInline = (props: Props) => {
  return (
    <span className="link secondLink">
      <a href={props.url}>
        {props.text}
        <img className="svgIcon" src={LinkArrow} alt="" />
      </a>
    </span>
  );
};
