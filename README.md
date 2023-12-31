# 리액트로 유튜브 사이트 만들기
## 완성작 보기 미리보기 : https://youtubeproject2023.netlify.app
<img src="https://jeong202.github.io/youtube-project2/src/assets/img/coverimg.jpg">

리액트와 유튜브 API를 이용하여 기타리스트의 기타연주와 관련된 사이트를 만들었습니다.      
1. 리액트 기초 및 구성 요소 관리:   
리액트에서 컴포넌트를 어떻게 작성하고 관리하는지 학습할 수 있습니다.
상태(state)와 속성(props)의 사용법을 익힐 수 있습니다.   
2. 라우팅 및 페이지 내비게이션:   
리액트 라우터를 사용하여 여러 페이지 간의 내비게이션을 구현할 수 있습니다.
3. API 통신:   
YouTube API와의 통신을 통해 외부 데이터를 가져오는 방법을 배울 수 있습니다.
비동기 작업 및 데이터 상태 관리를 다룰 수 있습니다.
4. 스타일링 및 디자인:   
CSS 또는 SASS를 사용하여 페이지를 스타일링하는 방법을 익힐 수 있습니다.   
5. 배포 및 호스팅:   
서버에 배포하고 호스팅하는 방법을 배울 수 있습니다. 예를 들면 Netlify, Vercel, 또는 GitHub Pages 등을 사용할 수 있습니다.   
6. 반응성 및 접근성:   
반응형 웹 디자인 및 웹 사이트의 접근성에 대한 고려 사항을 적용하여 사용자 경험을 향상시킬 수 있습니다.   



## 작업순서
1. `npx create-react-app .`   
현재 디렉토리에 React 앱을 생성합니다.   

2. `npm start`   
개발 모드에서 앱을 실행합니다.   
브라우저에서 http://localhost:3000을 열어 확인할 수 있습니다.   

3. `npm run build`   
앱을 프로덕션 모드로 빌드합니다.   
React를 프로덕션 모드로 올바르게 번들링하며, 최적화된 빌드를 생성합니다.   
빌드된 파일은 build 폴더에 저장됩니다.   

## 라이브러리 설치
1. react-router-dom   
`npm install react-router-dom`   
설명: React 기반의 웹 애플리케이션에서 라우팅을 관리하는 데 사용됩니다. 다양한 페이지 간의 네비게이션을 쉽게 처리할 수 있도록 도와줍니다.   
   
2. react-axios   
`npm install react-axios`   
설명: Axios는 HTTP 클라이언트 라이브러리로, React 애플리케이션에서 서버와의 HTTP 요청을 간편하게 처리할 수 있도록 도와줍니다.   
   
3. react-icons   
`npm install react-icons`   
설명: React 애플리케이션에서 아이콘을 사용할 수 있도록 하는 라이브러리입니다. 다양한 아이콘 라이브러리를 React에서 손쉽게 사용할 수 있습니다.   
   
4. react-player   
`npm install react-player`   
설명: 동영상 및 오디오를 재생하는 데 사용되는 React 컴포넌트입니다. 다양한 미디어 소스와 호환되어 다양한 형식의 미디어를 처리할 수 있습니다.   
   
5. sass   
`npm install sass`   
설명: CSS의 확장인 Sass를 사용할 수 있도록 도와주는 패키지입니다. Sass는 변수, 중첩, 믹스인 등의 기능을 제공하여 스타일 시트를 더 쉽게 작성할 수 있게 해줍니다.   
   
6. react-helmet-async   
`npm install react-helmt-async`   
설명: 동적으로 페이지의 <head> 태그를 관리하기 위한 라이브러리로, React Helmet의 비동기 버전입니다. 페이지 제목, 메타 태그 등을 동적으로 변경할 수 있습니다.   
   
7. react-swiper   
`npm install react-swiper`   
설명: 스와이프 기능을 제공하는 React용 이미지 슬라이드 라이브러리입니다. 터치 이벤트를 지원하여 모바일에서의 사용에 적합합니다.   

### Suspense   
React의 Suspense는 웹 애플리케이션이 데이터를 불러오는 동안 일시적으로 UI를 중단시켜 로딩 상태를 표시하는 기능입니다. 비동기 작업을 보다 효율적으로 다루며, 여러 데이터 소스를 동시에 처리할 수 있게 해줍니다. Suspense를 사용하면 로딩 중에 화면을 간편하게 처리하고, 데이터가 준비되면 자동으로 UI를 갱신할 수 있습니다. 컴포넌트 기반의 리액트 생태계에서 비동기 데이터 처리를 쉽게 구현할 수 있도록 지원합니다.   
1. 로딩 시간이 걸리는 데이터 처리:   
예를 들어, 웹 애플리케이션이 서버에서 데이터를 받아오는 동안 사용자는 대기해야 할 수 있습니다. Suspense를 사용하면 데이터가 로딩되는 동안 로딩 상태를 표시하고, 데이터가 로드되면 자동으로 해당 데이터로 UI를 갱신할 수 있습니다.   
2. 여러 데이터 소스를 병렬로 로드:   
여러 개의 데이터 소스를 동시에 로드해야 할 때, Suspense는 여러 비동기 작업을 조정하는 데 도움을 줄 수 있습니다. 이를 통해 더 효율적으로 데이터를 가져와 화면을 업데이트할 수 있습니다.   
### react-helmet-async  
react-helmet-async은 React 애플리케이션에서 동적으로 문서의 <head> 부분을 관리하는 라이브러리로, 서버 사이드 렌더링(SSR) 및 비동기 작업에 특히 유용합니다. 이를 사용하여 페이지의 제목, 메타 태그, 스타일시트, 스크립트 등을 동적으로 조작할 수 있습니다. HelmetProvider는 여러 컴포넌트 간에 Helmet 상태를 공유하도록 도와주며, 서버에서도 사용 가능한 서버 사이드 렌더링을 지원합니다. 다양한 컴포넌트 간에 문서 헤드를 일관되게 관리할 수 있어 개발자에게 편의성을 제공합니다. 또한, 비동기 작업 중에도 문서 헤드를 효과적으로 업데이트할 수 있어 사용자 경험을 향상시킵니다.   

### Postman
Postman은 API 개발을 위한 도구로, 사용자가 HTTP 요청을 만들고 테스트할 수 있게 해주는 플랫폼입니다. Postman을 사용하면 API 엔드포인트에 대한 다양한 요청을 간편하게 생성하고 관리할 수 있습니다. 또한, 컬렉션 기능을 통해 API 요청을 그룹화하고, 환경 변수를 활용하여 다양한 환경에서 일관된 테스트를 수행할 수 있습니다. 테스트 스크립트를 활용하여 API 응답을 검증하고, 협업 및 공유 기능을 통해 팀원들과 협업할 수 있습니다. 더불어, 자동화 및 CI/CD에 통합하여 개발 프로세스를 효율적으로 관리할 수 있습니다.     
### Rapid API
RapidAPI는 다양한 분야의 웹 API를 통합하고 제공하는 플랫폼으로, 개발자들이 쉽게 API를 찾아 사용하고 관리할 수 있게 도와주는 서비스입니다. API 마켓플레이스를 통해 다양한 기능과 데이터에 접근할 수 있으며, 간편한 통합된 개발 환경과 API 관리 도구를 제공하여 개발 효율성을 높입니다. 또한 코드 예제와 문서를 제공하여 개발자들이 신속하게 API를 활용할 수 있습니다. RapidAPI는 팀 협업을 지원하며, API 사용량을 추적하고 성능을 모니터링하는 기능을 제공합니다.   
### 환경변수(configuration variables)
.env 파일은 환경 변수를 저장하는 파일로, 주로 애플리케이션의 설정 정보나 민감한 데이터(예: API 키, 비밀번호)를 안전하게 보관하는 데 사용됩니다. 이 파일은 주로 로컬 개발 환경과 운영 환경 간에 설정을 구분하고, 중요 정보를 코드에서 분리하여 보안을 강화합니다. 키-값 쌍으로 이루어져 있으며, 주석을 통해 설명을 추가할 수 있습니다. .env 파일은 프로그램 언어나 프레임워크에서 읽혀져서 환경 변수를 설정하므로, 코드에 민감한 정보를 하드코딩하지 않고 안전하게 관리할 수 있습니다.   

