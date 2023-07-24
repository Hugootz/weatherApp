import { styled } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { EvilIcons } from "@expo/vector-icons";
import theme from "../global/styles/theme";
import { ImageBackground, TouchableOpacity } from "react-native";

interface StyledProps {
  activeTheme: Boolean;
}

export const Container = styled.View<StyledProps>`
  flex: 1;
  align-items: center;
  background-color: ${({ activeTheme }) =>
    activeTheme ? theme.colors.background : theme.colors.background_light};
`;
export const Bg = styled(ImageBackground)`
  height: 100%;
`;
export const RefreshButton = styled(TouchableOpacity)`
  position: absolute;
  margin: 45px;
  align-self: flex-start;
`;
export const Refresh = styled(EvilIcons)<StyledProps>`
  font-size: ${RFValue(30)}px;
  color: ${({ activeTheme }) =>
    activeTheme ? theme.colors.title_light : theme.colors.title_dark};
  top: 215px;
  left: 40px;
`;
export const IconSun = styled(Feather)`
  color: ${({ theme }) => theme.colors.sun};
  margin-top: 80px;
  font-size: ${RFValue(60)}px;
  top: 10px;
`;
export const Header = styled.View`
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  top: 20px;
`;
export const Temperature = styled.Text<StyledProps>`
  font-size: ${RFValue(45)}px;
  color: ${({ activeTheme }) =>
    activeTheme ? theme.colors.title_light : theme.colors.title_dark};
`;
export const Symbol = styled.Text<StyledProps>`
  font-size: ${RFValue(18)}px;
  color: ${({ activeTheme }) =>
    activeTheme ? theme.colors.title_light : theme.colors.title_dark};
`;
export const Wrapper = styled.View<StyledProps>`
  color: ${({ activeTheme }) =>
    activeTheme ? theme.colors.title_dark : theme.colors.background_light};
  flex-direction: row;
  align-items: center;
  bottom: 30px;
`;
export const Info = styled.View<StyledProps>`
  align-items: center;
  background-color: ${({ activeTheme }) =>
    activeTheme ? theme.colors.info_dark : theme.colors.info_light};
  border-radius: 20px;
  width: 350px;
  height: 230px;
`;
export const InfoTitle = styled.Text<StyledProps>`
  color: ${({ activeTheme }) =>
    activeTheme ? theme.colors.title_light : theme.colors.background_light};
  margin: 15px;
  font-size: 20px;
  font-weight: bold;
`;
export const InfoView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
export const LocationTitle = styled.Text<StyledProps>`
  color: ${({ activeTheme }) =>
    activeTheme ? theme.colors.title_light : theme.colors.title_dark};
  font-size: ${RFValue(14)}px;
  bottom: 40px;
`;
export const ThemeButton = styled.View`
  margin: 10px;
  margin-left: 300px;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  bottom: 180px;
`;

export const SquareButton = styled.View<StyledProps>`
  background-color: ${({ activeTheme }) =>
    activeTheme ? theme.colors.background_light : theme.colors.info_light};
  justify-content: center;
  border-radius: 20px;
  margin-right: 20px;
  width: 50px;
  height: 25px;
`;

export const CircleButton = styled(TouchableOpacity)<StyledProps>`
  align-self: ${({ activeTheme }) => (activeTheme ? "flex-end" : "flex-start")};
  background-color: ${({ activeTheme }) =>
    activeTheme ? theme.colors.background : theme.colors.background_light};
  margin: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50px;
`;
