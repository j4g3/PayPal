import styled from "styled-components";
import { View } from "react-native";
import { Feather, Fontisto } from "@expo/vector-icons";

export const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-bottom-width: 2px;
  border-bottom-color: #babbbd;
  background: #fff;
`;
export const Right = styled(View)`
  text-align: center;
`;
export const Settings = styled(Feather)`
  text-align: right;
`;
export const Bell = styled(Fontisto)`
  text-align: left;
`;
