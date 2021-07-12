import React from "react";

interface Props {
  src: string;
  alt: string;
}

/**
 * Image (Imagen)
 * @param src - Fuente de la imagen
 * @param alt - Texto alternativo
 * @returns Imagen (img)
 */
export const Image = (props: Props) => {
  return <img className="centerImage" src={props.src} alt={props.alt}></img>;
};
