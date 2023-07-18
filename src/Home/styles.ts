import { styled } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { EvilIcons } from "@expo/vector-icons";
import theme from "../global/styles/theme";
import { TouchableOpacity } from "react-native";

interface StyledProps {
  isActive: Boolean;
}

export const Container = styled.View<StyledProps>`
  flex: 1;
  align-items: center;
  background-color: ${({ isActive }) =>
    isActive ? theme.colors.background : theme.colors.background_light};
`;
export const RefreshButton = styled(TouchableOpacity)`
  position: absolute;
  margin: 45px;
  align-self: flex-start;
`;
export const Refresh = styled(EvilIcons)<StyledProps>`
  font-size: ${RFValue(35)}px;
  color: ${({ isActive }) =>
    isActive ? theme.colors.title : theme.colors.title_dark};
`;
export const IconSun = styled(Feather)`
  color: ${({ theme }) => theme.colors.sun};
  margin-top: 80px;
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
