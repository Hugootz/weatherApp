import { styled } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { EvilIcons } from "@expo/vector-icons";
import theme from "../global/styles/theme";

interface StyledProps {
  isActive: Boolean;
}

export const Container = styled.View<StyledProps>`
  flex: 1;
  align-items: center;
  background-color: ${({ isActive }) =>
    isActive ? theme.colors.background : theme.colors.background_light};
`;
export const Refresh = styled(EvilIcons)`
  font-size: ${RFValue(35)}px;
  color: #fff;
`;
export const IconSun = styled(Feather)`
  color: #ffe338;
  margin-top: 50px;
  font-size: ${RFValue(40)}px;
`;
export const Header = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;
export const Temperature = styled.Text<StyledProps>`
  font-size: ${RFValue(45)}px;
  color: ${({ isActive }) =>
    isActive ? theme.colors.title : theme.colors.title_dark};
`;
export const Symbol = styled.Text<StyledProps>`
  font-size: ${RFValue(18)}px;
  color: ${({ isActive }) =>
    isActive ? theme.colors.title : theme.colors.title_dark};
`;
