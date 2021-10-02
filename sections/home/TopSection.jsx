import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import MainGraphic from "../../public/home/TopGraphic.png";
import { baseTheme } from "../../theme";
import { media, CONSTANTS } from "../../utils";
import { Text, Button } from "../../components";

export const TopSection = ({ ...props }) => (
  <MainContainer {...props}>
    <FirstColumn>
      <JosefinTitle size="4.5em" bold="true">
        {CONSTANTS.pump}
      </JosefinTitle>
      <SText size="default">{CONSTANTS.registered_charity_descr}</SText>
      <Button>
        <ButtonText size="default" bold="true">
          <Link href="/sponsors">
            <a style={{ color: baseTheme.colors.navy }}>About Us</a>
          </Link>
        </ButtonText>
      </Button>
    </FirstColumn>
    <SecondColumn>
      <Graphic
        src={MainGraphic}
        alt="Title graphic - Doctor with stethoscope"
        height={450}
        width={450}
      />
    </SecondColumn>
  </MainContainer>
);

const MainContainer = styled.div`
  display: flex;
  padding: 7% 12%;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  ${media(
    "tablet",
    `
        padding: 5%;
        margin: 0 7% 7% 7%;
        flex-direction: column-reverse;
        `
  )};
  ${media(
    500,
    `
        margin: 0 12% 12% 12%;
        `
  )};
`;

const SText = styled(Text)`
  ${({ theme }) => `
    font-family: ${theme.font.lato};
    color: ${theme.colors.navy};
    margin-top: 0;
		max-width: 25vw;
  `};
  ${media(
    "tablet",
    `
        line-height: 1.3;
				max-width: 100vw;
        `
  )};
`;

const JosefinTitle = styled(SText)`
  ${({ theme }) => `
    font-family: ${theme.font.josefin};
    margin: 1em 0 0 0;
		max-width: 30vw;
  `};
  ${media(
    1200,
    `
        font-size: 2.5rem;
				max-width: 100vw;
        `
  )};
`;

const ButtonText = styled(SText)`
  margin: 0 0 0 0;
`;

const Graphic = styled(Image)`
  ${media(
    1200,
    `
        max-width: 350px;
        `
  )};
  ${media(
    "tablet",
    `
        max-width: 200px;
        `
  )};
`;

const FirstColumn = styled.div`
  width: 50%;
  ${media(
    "tablet",
    `
        width: 100%;
        `
  )};
`;

const SecondColumn = styled.div`
  padding-left: 10em;
  flex: 1;
  ${media(
    1200,
    `
        padding-left: 8em;
        `
  )};
  ${media(
    "tablet",
    `
        padding: 0 0 0 0;
        `
  )};
`;
