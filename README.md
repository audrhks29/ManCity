# [React] 20230619 맨체스터시티 선수정보 페이지
## 1. 사용기술
### 사용된 기술
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white">
### v1.2.0
1. <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"> 라이브러리 사용
2. GlobalStyle적용
   <pre>yarn add styled-components</pre>
   <pre>yarn add styled-reset</pre>

   ```js
   //App.jsx

   import Main from './components/Main'
   import GlobalStyles from './styled/GlobalStyle.js'

   const App = () => {
   return (
      <>
         <GlobalStyles /> //GlobalStyles적용
         <Main />
      </>
   );
   };

   export default App;
   ```
   ```js
   //GlobalStyle.js

   import { createGlobalStyle } from 'styled-components';
   import reset from 'styled-reset';
   const GlobalStyles = createGlobalStyle` 
   ${reset} //기본 스타일 초기화

      a{
         text-decoration: none;
         color: inherit;
      }
      *{
         box-sizing: border-box;
      }
      input, textarea { 
         -moz-user-select: auto;
         -webkit-user-select: auto;
         -ms-user-select: auto;
         user-select: auto;
      }
      input:focus {
         outline: none;
      }

      button {
         border: none;
         background: none;
         padding: 0;
         cursor: pointer;
      }
   `;
   export default GlobalStyles;
   ```
### v1.1.0
1. <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"> 라이브러리 사용

2. await axios.get 사용하여 선수 데이터 불러오기
[선수 데이터 주소](https://gist.githubusercontent.com/audrhks29/d85765f175243e27d4a84a76f44f4d75/raw/9fcf4b7ab83500d1ef15c12d32726e822e8c170a/playerData.json)

    ```js
    export const getPlayerData = createAsyncThunk(
        'player/getPlayerData',
        async () => {
            const res = await axios.get('https://gist.githubusercontent.com/audrhks29/d85765f175243e27d4a84a76f44f4d75/raw/9fcf4b7ab83500d1ef15c12d32726e822e8c170a/playerData.json')
            return res.data
        }
    )
    ```
### v1.0.0
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"> 
## 2. Version Update
### v1.2.0
   1. <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"> 삭제
   2. <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"> 추가
### v1.1.0
   1. <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"> 라이브러리 사용하여 리팩토링
   2. <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"> 사용
### v1.0.1
   1. 컴포넌트 폴더 분리작업
### v1.0.0
   1. 맨체스터시티 선수정보 페이지 업로드
