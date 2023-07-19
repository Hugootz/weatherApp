import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";

export const Container = styled.View`
  background-color: red;
  justify-content: center;
  align-items: center;
  margin: 15px;
  width: 110px;
  height: 210px;
  border-radius: 15px;
`;
export const Title = styled.Text``;
export const IconMorning = styled(Feather)`
  color: ${({ theme }) => theme.colors.sun};
  font-size: ${RFValue(40)}px;
`;
export const TemperatureCard = styled.Text``;
