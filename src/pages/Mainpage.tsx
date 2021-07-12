import React from "react";

import { Link, LinkInline } from "../components/UI-Kit/Utils/Links";
import {
  Headline,
  Subtitle,
  TextIntro,
  TextIntroLight,
} from "../components/UI-Kit/Utils/Texts";
import { Image } from "../components/UI-Kit/Utils/Image";
import { Video } from "../components/UI-Kit/Utils/Video";

/* Assets */
import Sensor from "../components/UI-Kit/assets/images/Sensor.png";

interface Props {}

export const Mainpage = (props: Props) => {
  return (
    <div>
      <Headline text="Headline" />
      <Subtitle text="Subtitle" />
      <TextIntro text="TextIntro" />
      <TextIntroLight text="TextIntroLight" />
      <div className="link-container">
        <Link text="This link" url="http://localhost:3000" />
        <LinkInline text="Another link" url="http://localhost:3000" />
      </div>
      {/* <Image src={Sensor} alt="Sensor" /> */}
      <Video />
    </div>
  );
};
