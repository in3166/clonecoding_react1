# 1. mongoDB 연결
 C/Users/yu/Desktop/study/react/inflearn/clonecoding_react1
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
- State에 보관된 Date들을 화면에 보여주기

# 7. 영화 출연진 가져오기


# 8. Favorite 버튼 만들기


# 9. Favorite List에 추가, 삭제


# 10. Favorite 페이지 만들기

<br><br>
<출처>
- https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%98%81%ED%99%94%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0/lecture/36375?tab=curriculum&q=29068