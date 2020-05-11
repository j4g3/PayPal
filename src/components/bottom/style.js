import styled from "styled-components";
import { View, Text } from "react-native";
import SvgUri from "react-native-svg-uri";
export const Container = styled(View)`
  position: relative;
  flex-direction: row;

  background: #fff;
  border-top-color: #babbbd;
  justify-content: space-between;
  border-top-width: 1px;
  padding: 0px;
  padding-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const BoxIcons = styled(View)`
  flex-wrap: wrap;
  align-items: flex-start;
`;
export const BoxIcons2 = styled(View)``;
export const Icon = styled(SvgUri)`
  padding: 5px;
  background: #0070ba;
  border-radius: 30px;
`;
export const Description = styled(Text)`
  color: #333;
  padding: 5px;
`;
