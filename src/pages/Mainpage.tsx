import React from "react";
import { Link, LinkInline } from "../components/UI-Kit/Link";
import {
  Headline,
  Subtitle,
  TextIntro,
  TextIntroLight,
} from "../components/UI-Kit/Texts";

interface Props {}

export const Mainpage = (props: Props) => {
  return (
    <div>
      <Headline text="Headline" />
      <Subtitle text="Subtitle" />
      <TextIntro text="TextIntro" />
      <TextIntroLight text="TextIntroLight" />
      <Link text="This link" url="http://localhost:3000" />
      <LinkInline text="Another link" url="http://localhost:3000" />
    </div>
  );
};
