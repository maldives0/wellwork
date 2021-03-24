import styled, { css } from "@emotion/native";

export const BasicButton = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: 3px;
  padding: 15px;
  margin: 10px;
  justify-content: center;
  align-content: center;
  width: 150px;
  background-color: #348f50;
`;
export const BorderButton = styled.TouchableOpacity`
  border: 2px solid #348f50;
  border-radius: 100px;
  margin-bottom: 16px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: 10px;
`;

export const CloseButtonCoord = styled.Text`
  position: absolute;
  right: 50px;
  top: 16px;

  ${(props) =>
    props.phone &&
    css`
      right: 20px;
      top: 13px;
    `}
`;
export const ProfileInfo = styled.Text`
  margin-top: 30px;
  font-size: 20px;
  text-align: center;
`;
