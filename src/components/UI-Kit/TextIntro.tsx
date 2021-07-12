import React from "react";

interface Props {
  text: string;
}

export const TextIntro = (props: Props) => {
  return <p className="sectionIntro">{props.text}</p>;
};
