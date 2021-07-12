import React from "react";
import LinkArrow from "./assets/icons/ChevronRight.svg";

interface Props {
  text: string;
  url: string;
}

export const Link = (props: Props) => {
  return (
    <span>
      <a className="link" href={props.url}>
        {props.text}
      </a>
    </span>
  );
};

export const LinkInline = (props: Props) => {
  return (
    <span className="link">
      <a href={props.url}>{props.text}</a>
      <img src={LinkArrow} alt="" />
    </span>
  );
};
