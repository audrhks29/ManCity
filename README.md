# [React] 20230619 맨체스터시티 선수정보 페이지
## 1. 사용기술
### v1.0.0
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"> 

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

## Version
<details>
<summary>[v1.1.0] Update 20230824</summary>
<div markdown="1">
Redux 라이브러리로 변환
</div>
</details>
<details>
<summary>[v1.0.1] Update 20230822</summary>
<div markdown="1">
컴포넌트 폴더 분리작업
</div>
</details>
<details>
<summary>[v1.0.0] Upload 20230619</summary>
<div markdown="1">
맨체스터시티 선수정보 페이지 업로드
</div>
</details>
