import { css } from "linaria/";
import { styled } from "linaria/react";

const Heading = styled.h1`
  color: red;
  font-family: "Courier New", Courier, monospace;
`;

const paragraph = css`
  color: blue;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
export default function Home() {
  return (
    <>
      <Heading>Hello from styled Linaria Heading. </Heading>
      <p className={paragraph}>
        This is a paragraph from css module of linaria
      </p>
    </>
  );
}
