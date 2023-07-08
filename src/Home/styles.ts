import { styled } from "styled-components/native";
import { TextInput, ImageBackground } from "react-native";

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View``;

export const Bg = styled(ImageBackground)`
  flex: 1;
  width: 420px;
  height: 860px;
  align-items: center;
`;

export const Input = styled(TextInput)`
  top: 60px;
  color: #fff;
`;
