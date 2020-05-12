import React from "react";
import Bottom from "../../components/bottom/index";

import SvgUri from "react-native-svg-uri";

import PersonIcon from "./assets/user.svg";
import SettingsIcon from "./assets/settings.svg";
import NotificationsIcons from "./assets/notification.svg";
import StoreIcon from "./assets/store.svg";

import { useFonts } from "@use-expo/font";
import { SafeAreaView, Dimensions } from "react-native";
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
  Line,
} from "./style";

export default function Home() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  console.log(windowHeight, windowWidth);
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
                <Money style={{ fontFamily: "PayPal-Font" }}>752.586,52</Money>
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
                    <Line>
                      <TitleAtividadeItem
                        style={{
                          fontFamily: "PayPal-Font",
                          justifyContent: "space-between",
                        }}
                      >
                        Microsoft DO Brasil, Imp...
                      </TitleAtividadeItem>
                      <BoxTypeBuy>
                        <TypeBuy>Pagamento recorrente</TypeBuy>
                      </BoxTypeBuy>
                    </Line>
                    <MoneyBuy
                      style={{
                        fontFamily: "PayPal-Font",
                      }}
                    >
                      - R$ 199,99
                    </MoneyBuy>
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
                    <Line>
                      <TitleAtividadeItem
                        style={{
                          fontFamily: "PayPal-Font",
                          justifyContent: "space-between",
                        }}
                      >
                        Microsoft DO Brasil, Imp...
                      </TitleAtividadeItem>
                      <BoxTypeBuy>
                        <TypeBuy>Pagamento recorrente</TypeBuy>
                      </BoxTypeBuy>
                    </Line>
                    <MoneyBuy style={{ fontFamily: "PayPal-Font" }}>
                      - R$ 199,99
                    </MoneyBuy>
                  </OneLineBuy>
                </ItemAtividade>
                <ItemAtividade style={{}}>
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
                    <Line>
                      <TitleAtividadeItem
                        style={{
                          fontFamily: "PayPal-Font",
                          justifyContent: "space-between",
                        }}
                      >
                        Microsoft DO Brasil, Imp...
                      </TitleAtividadeItem>
                      <BoxTypeBuy>
                        <TypeBuy>Pagamento recorrente</TypeBuy>
                      </BoxTypeBuy>
                    </Line>
                    <MoneyBuy
                      style={{
                        fontFamily: "PayPal-Font",
                        alignItems: "flex-end",
                      }}
                    >
                      - R$ 199,99
                    </MoneyBuy>
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
