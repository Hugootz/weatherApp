import { Fontisto } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin: 15px;
  width: 110px;
  height: 210px;
  border-radius: 15px;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.background_light};
  font-size: ${RFValue(18)}px;
`;
export const IconCard = styled(Fontisto)`
  color: ${({ theme }) => theme.colors.background_light};
  font-size: ${RFValue(40)}px;
  margin: 20px;
`;
export const TemperatureCard = styled.Text`
  color: ${({ theme }) => theme.colors.background_light};
`;
