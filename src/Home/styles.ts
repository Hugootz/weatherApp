import { styled } from "styled-components/native";
import { TextInput, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";
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
  color: #cecece;
  background-color: rgba(0, 0, 0, 0.3);
  width: 350px;
  height: 45px;
  align-items: center;
  border-radius: 15px;
  padding: 12px;
`;
export const InputButton = styled.TouchableOpacity`
  align-self: flex-end;
  top: 65px;
  left: 140px;
`;
export const IconButton = styled(AntDesign)``;
export const Locations = styled.View``;
export const Press = styled.TouchableOpacity``;
export const Title = styled.Text`
  color: #fff;
  top: 42px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  height: 50px;
  padding: 12px;
`;
