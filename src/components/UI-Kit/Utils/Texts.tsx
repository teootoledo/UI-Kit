import React from "react";

interface Props {
  text: string;
}

/**
 * Headline (Título principal)
 * @param props - Texto a mostrar como Headline
 * @returns Headline (h1)
 */
export const Headline = (props: Props) => {
  return <h1 className="headline">{props.text}</h1>;
};

/**
 * Subtitle (Subtítulo)
 * @param props - Texto a mostrar como subtítulo
 * @returns Subtítulo (h2)
 */
export const Subtitle = (props: Props) => {
  return <h2 className="subtitle">{props.text}</h2>;
};

/**
 * TextIntro (Texto centrado introductivo)
 * @param props - Texto a mostrar como introducción
 * @returns Introducción (p)
 */
export const TextIntro = (props: Props) => {
  return <p className="sectionIntro">{props.text}</p>;
};

/**
 * TextIntroLight (Texto centrado introductivo en gris claro)
 * @param props - Texto a mostrar como introducción
 * @returns Introducción clara (p)
 */
export const TextIntroLight = (props: Props) => {
  return <p className="sectionIntroLight">{props.text}</p>;
};
