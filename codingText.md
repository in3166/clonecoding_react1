# 1. mongoDB 연결
 C/Users/yu/Desktop/study/react/inflearn/clonecoding_react1
 https://github.com/jaewonhimnae/react-movie-app-ko/blob/master/client/src/components/App.js
### useEffect
- Dom이 처음 Load되면 할 것들 (or Update 시?)
# 2. The Movie API 설명
 - themoviedb.org
 - 가입 후 로그인, API 키 받기
 - Text Editor에서 the Movie DB API 설정


# 3. Landing Page 만들기
  1. 전체적인 Template 만들기
    - Landing Page에서 return 안에 영화 내용 넣은 큰 틀 만듦 <div>

  2. Movie API에서 가져온 모든 데이터를 State에 넣기
    - useEffect와 config.js에 저장한 key, url로 api 연결하여 정보 받아와 useState에 배열형태로 저장

  3. Main Image Component 만들기
    - 메인 배너 만들기 (가장 유명한 영화를 메인 이미지로)
    - 따로 컴포넌트 만듦 /section/MainImage.js (함수형 컴포넌트 사용)
    - 메인 이미지를 Landing Page에서 props로 준다. (첫번째 영화)

# 4. Grid Card Component
  - Landing Page 메인 이미지 하단에 영화 리스트
  - GridCards(): Grid 하나의 UI를 만들어서 재사용 (/src/compoenet/view/commons) grid는 landingpage말고 다른곳에서도 사용 가능 rfce
  - grid: antd 사용 (and design) `<Col>`/ `<Row guffer>`
  - Landing page에서 props로 이미지 주소, 영화 아이디, 영화 제목을 넘겨준다. 
  - `<Row>` 안에 GridCards 넣어준다. (map 사용)

# 5. Load More Button 만들기
  - onclick 메서드 생성: loadMoreItems
  - 불러온 영화 정보 출력 메서드 생성: fetchMovies
  - currentPage State 추가

# 6. Movie Detail 페이지 만들기
# 7. 영화 출연진 가져오기

- views/MovieDetail/MovieDetail.js

- 특정 영화에 해당하는 자세한 정보 가져오기
  - url 파라미터로 id 가져오기 
  - fetch로 id에 맞는 정보 가져오기

- 무비 API에서 가져온 정보 State에 넣기

- 전체적 Template 만들기 (in return)
  - MainImage 컴포넌트 재사용해서 메인 이미지 올리기
        //let movie = props.movie;  same
    let { movie } = props; // 구조 분해 할당

- 영화에 나오는 Crews 정보 가져와 State에 넣기
  - 이미지가 없는 배우 최상위 폴더에 uploads 폴더 만들고 기본이미지 넣어준 후 express.static

- State에 보관된 Date들을 화면에 보여주기
  - 토글 버튼 만들기 (출연지 보여주기, 숨기기)


# 8. Favorite 버튼 만들기
- Facorite Model 만들기
- server/models/Favorite.js
  ```
  [Favorite]
  ----------------
  +userFrom
  +movieId
  +movieTitle
  +movieImage
  +movieRunTime
  ```

- Favorite Button UI 만들기


- 얼마나 많은 사람이 추가했는지 정보 얻기
  - Favorite 버튼 컴포넌트에 userFrom(loginPage에서 localStorage에 저장), Movie, movieId 정보를 props로 넘겨주고 서버에 인자로 줘서 정보 받아오기

- 내가 이 영화를 이미 Favorite 리스트에 넣었는지 정보 얻기
  - movieId와 userFrom 서버에 넘겨주고 두 개로 찾아서 나의 좋아요 여부 정보 가져오기
  - 이 좋아여 여부의 state를 변경하여 버튼의 글자 변경

- 위의 두 정보를 State에 저장 (userEffect - page load시 보여줘야 하니까)

- 버튼을 클릭했을 때 (문구와 숫자 변경)


# 9. Favorite List에 추가, 삭제


# 10. Favorite 페이지 만들기
- Favorite 페이지 Template 만들기
  - Table 형태

- Mongo DB에서 Favorite된 영화 정보 가져오기
  - useEffect 사용
  - localStorage 어디서 저장했드라
  - order-collapse: collapse; 

- 가져온 데이터 화면에 보여주기
  - 팝업창 생성 (antd framework)

- Remove 기능 만들기

## Q & A
React.Fragment

map

ref

hoc

mongo DB

Formik

Yup

useState
-  setState 바로 적용안되고 한 번에 적용 -> 순서대로 안됨 -> 그럼 그냥 변수 선언해서 사용? 그안에서?

payload
- 전송되는 데이터
-  HTTP 메시지의 페이로드는 본문(body)
- JSON 페이로드 사용자의 정보, 발화, 실행 블록, 파라미터 등의 정보를 포함
## 할 것들
1. moviedetail - toggle actor view 텍스트 변경
2. landingPage - 하트 표시
3. auth 로그인 먼저

## AWS EC2 배포 시 주의점
- 데이터 베이스 키 dev.js 만들기
- 포트 redirection (80 - 3000)
- 프록시 locahost 대신 private ip로 변경


<br><br>

<출처>
- https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%98%81%ED%99%94%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0/lecture/36375?tab=curriculum&q=29068