import * as React from "react";
import { Container, BoxIcons, BoxIcons2, Icon, Description } from "./style";
import Send from "./assets/send.svg";
import Request from "./assets/request.svg";
import Donate from "./assets/donate.svg";

export default function Bottom({ navigation }) {
  return (
    <Container>
      <BoxIcons2
        style={{
          flexDirection: "column",
        }}
      >
        <BoxIcons>
          <Icon width="35" height="35" svgXmlData={Send} fill="#fff" />
        </BoxIcons>
        <Description>Enviar</Description>
      </BoxIcons2>
      <BoxIcons
        style={{
          alignItems: "center",
        }}
      >
        <Icon width="35" height="35" svgXmlData={Request} fill="#fff" />
        <Description>Pedir</Description>
      </BoxIcons>
      <BoxIcons>
        <Icon width="35" height="35" svgXmlData={Donate} fill="#fff" />
        <Description>Doar</Description>
      </BoxIcons>
    </Container>
  );
}
