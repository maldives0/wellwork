import styled, { css } from "@emotion/native";

export const BasicButton = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: 3px;
  padding: 15px;
  margin: 5px;
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
  top: 16px;
  right: 50px;
`;
export const ProfileInfo = styled.Text`
  font-size: 20px;
  margin-top: 25px;
  text-align: center;
`;

// export const applyColorType = styled.View`
//   border-radius: 100%;
//   width: 10px;
//   height: 10px;
//   padding: 10px;

//   ${(props) =>
//     props.vacation &&
//     css`
//       background: orange;
//     `}

//   ${(props) =>
//     props.sickLeave &&
//     css`
//       background: blue;
//     `}

//   ${(props) =>
//     props.workout &&
//     css`
//       background: pink;
//     `}
//   ${(props) =>
//     props.halfWorkout &&
//     css`
//       background: skyblue;
//     `}
//   ${(props) =>
//     props.reserveTraining &&
//     css`
//       background: yellowgreen;
//     `}
//   ${(props) =>
//     props.etc &&
//     css`
//       background: violet;
//     `}
// `;
