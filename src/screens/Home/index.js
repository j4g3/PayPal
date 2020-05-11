import React from "react";
import Bottom from "../../components/bottom/index";

import SvgUri from "react-native-svg-uri";

import PersonIcon from "./assets/user.svg";
import SettingsIcon from "./assets/settings.svg";
import NotificationsIcons from "./assets/notification.svg";
import StoreIcon from "./assets/store.svg";

import { useFonts } from "@use-expo/font";
import { SafeAreaView } from "react-native";
import { AppLoading } from "expo";
import {
  Header,
  User,
  Main,
  UserMoney,
  Title,
  BoxTitle,
  BoxMoney,
  TitleAtividade,
  BoxAtividadeTitles,
  BoxAtividade,
  MenuIcon,
  Real,
  Money,
  History,
  IconAtividade,
  ItemAtividade,
  StoreAtividade,
  TitleAtividadeItem,
  MoneyBuy,
  TypeBuy,
  BoxTypeBuy,
  OneLineBuy,
} from "./style";

export default function Home() {
  let [fontsLoaded] = useFonts({
    "PayPal-Font": require("./assets/fonts/PayPal.otf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <SafeAreaView
          style={{
            flex: 1,
            paddingTop: Platform.OS === "android" ? 0 : 0,
            backgroundColor: "#f5f6fa",
          }}
        >
          <Header>
            <SvgUri
              width="35"
              height="35"
              fill="#000"
              svgXmlData={NotificationsIcons}
            />
            <User width="35" height="35" fill="#333" svgXmlData={PersonIcon} />
            <SvgUri
              width="35"
              height="35"
              fill="#000"
              svgXmlData={SettingsIcon}
            />
          </Header>
          <Main>
            <UserMoney
              style={{
                shadowColor: "#000",
                shadowOpacity: 0.2,
                shadowOffset: {
                  width: 4,
                  height: 4,
                },
                elevation: 3,
              }}
            >
              <BoxTitle>
                <Title>Saldo do PayPal</Title>
                <MenuIcon name="dots-three-vertical" size={24} color="black" />
              </BoxTitle>
              <BoxMoney>
                <Real style={{ fontFamily: "PayPal-Font" }}>R$ </Real>
                <Money style={{ fontFamily: "PayPal-Font" }}>100.000,52</Money>
              </BoxMoney>
            </UserMoney>
            <History>
              <BoxAtividadeTitles>
                <TitleAtividade>Suas atividades</TitleAtividade>
                <IconAtividade name="arrowright" size={24} color="black" />
              </BoxAtividadeTitles>
              <BoxAtividade>
                <ItemAtividade>
                  <StoreAtividade
                    width="30"
                    height="30"
                    fill="#fff"
                    svgXmlData={StoreIcon}
                    style={{
                      shadowColor: "#000",
                      shadowOpacity: 0.6,
                      shadowOffset: {
                        width: 15,
                        height: 15,
                      },
                      elevation: 4,
                    }}
                  />
                  <OneLineBuy>
                    <TitleAtividadeItem>
                      Microsoft DO Brasil, Imp...
                    </TitleAtividadeItem>
                    <MoneyBuy style={{ fontFamily: "PayPal-Font" }}>
                      - R$ 199,99
                    </MoneyBuy>
                    <BoxTypeBuy>
                      <TypeBuy>Pagamento recorrente</TypeBuy>
                    </BoxTypeBuy>
                  </OneLineBuy>
                </ItemAtividade>
                <ItemAtividade>
                  <StoreAtividade
                    width="30"
                    height="30"
                    fill="#fff"
                    svgXmlData={StoreIcon}
                    style={{
                      shadowColor: "#000",
                      shadowOpacity: 0.6,
                      shadowOffset: {
                        width: 15,
                        height: 15,
                      },
                      elevation: 4,
                    }}
                  />
                  <OneLineBuy>
                    <TitleAtividadeItem>
                      Microsoft DO Brasil, Imp...
                    </TitleAtividadeItem>
                    <MoneyBuy style={{ fontFamily: "PayPal-Font" }}>
                      - R$ 199,99
                    </MoneyBuy>
                    <BoxTypeBuy>
                      <TypeBuy>Pagamento recorrente</TypeBuy>
                    </BoxTypeBuy>
                  </OneLineBuy>
                </ItemAtividade>
                <ItemAtividade>
                  <StoreAtividade
                    width="30"
                    height="30"
                    fill="#fff"
                    svgXmlData={StoreIcon}
                    style={{
                      shadowColor: "#000",
                      shadowOpacity: 0.6,
                      shadowOffset: {
                        width: 5,
                        height: 5,
                      },
                      elevation: 4,
                    }}
                  />
                  <OneLineBuy>
                    <TitleAtividadeItem>
                      Microsoft DO Brasil, Imp...
                    </TitleAtividadeItem>
                    <MoneyBuy style={{ fontFamily: "PayPal-Font" }}>
                      - R$ 199,99
                    </MoneyBuy>
                    <BoxTypeBuy>
                      <TypeBuy>Pagamento recorrente</TypeBuy>
                    </BoxTypeBuy>
                  </OneLineBuy>
                </ItemAtividade>
              </BoxAtividade>
            </History>
          </Main>
        </SafeAreaView>
        <Bottom />
      </>
    );
  }
}
