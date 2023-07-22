import { styled } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin: 10px;
  min-width: 150px;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_card};
  margin: 5px;
  margin-left: 15px;
  font-size: ${RFValue(17)}px;
  font-weight: bold;
  bottom: 10px;
  align-self: center;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.text_card2};
  bottom: 10px;
  margin-left: 15px;
  font-size: ${RFValue(15)}px;
  align-self: center;
`;
