import styled from "styled-components";
import { View, Text } from "react-native";
import { Entypo, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import SvgUri from "react-native-svg-uri";

export const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-bottom-width: 2px;
  border-bottom-color: #babbbd;
  background: #fff;
`;

export const Main = styled(View)`
  margin-top: 15px;
  padding: 10px;
`;

export const UserMoney = styled(View)`
  background: #fff;
  padding: 20px;
  margin-top: 0px;
  border-color: #dfe0e2;
  border-radius: 5px;
  position: relative;
`;
export const Title = styled(Text)`
  padding: 5px;
  font-weight: bold;
  font-size: 23px;
`;
export const TitleAtividade = styled(Text)`
  font-weight: bold;
  font-size: 20px;
`;

export const Real = styled(Text)`
  font-weight: 100;
  font-size: 40px;
`;
export const Money = styled(Text)`
  font-weight: 100;
  font-size: 45px;
  position: relative;
`;

export const BoxTitle = styled(View)`
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`;
export const BoxMoney = styled(View)`
  flex-direction: row;
`;

export const MenuIcon = styled(Entypo)`
  padding: 5px;
`;
export const IconAtividade = styled(AntDesign)``;
export const User = styled(SvgUri)`
  background: #ebecf0;
  padding: 2px;
  border-radius: 20px;
`;
export const History = styled(View)`
  padding: 10px;
`;
export const BoxAtividadeTitles = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;
export const BoxAtividade = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
`;
export const ItemAtividade = styled(View)`
  flex-direction: row;
`;
export const StoreAtividade = styled(SvgUri)`
  position: relative;
  background: #697174;
  padding: 10px;
  margin-top: 20px;

  border-radius: 30px;
`;
export const TitleAtividadeItem = styled(Text)`
  margin-left: 5px;
  font-weight: bold;
  font-size: 15px;
`;
export const MoneyBuy = styled(Text)`
  font-size: 15px;
  margin-left: 10px;
`;
export const OneLineBuy = styled(View)`
  margin-top: 20px;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
export const BoxTypeBuy = styled(View)``;

export const TypeBuy = styled(Text)`
  color: #333;
  margin-left: 5px;
`;
