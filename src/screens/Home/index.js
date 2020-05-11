import React from "react";
import Bottom from "../../components/bottom/index";

import SvgUri from "react-native-svg-uri";

import PersonIcon from "./assets/user.svg";
import SettingsIcon from "./assets/settings.svg";
import NotificationsIcons from "./assets/notification.svg";

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
  MenuIcon,
  Real,
  Money,
  Makert,
} from "./style";

export default function Home() {
  let [fontsLoaded] = useFonts({
    "PayPal-Font": require("./assets/fonts/PayPal.otf"),
    "PPUI-Icon": require("./assets/fonts/PPUI-Icons.otf"),
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
          </Main>
        </SafeAreaView>
        <Bottom />
      </>
    );
  }
}
