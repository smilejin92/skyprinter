## 메인 페이지

### 사용자 입력 값 

#### 메인화면

![MainPage](https://user-images.githubusercontent.com/31315644/73818427-b3c6c600-4830-11ea-96dd-51b8e8709034.jpeg)

- **왕복**

  1. **출발지** : 도시, 국가 
  2. **도착지** : 도시, 국가 [default : null]
  3. **가는날** : YYYY.MM.DD [default : 오늘 날짜]
  4. **오는날** : YYYY.MM.DD [default : 오늘 날짜]
  5. **좌석 등급 및 승객** :
     - 도착지가 국가일 경우 :  좌석등급을 고를 수 없음. 
     - 도착지가 도시일 경우 : **일반석**(economy), 프리미엄 일반석(preminum economy), 비즈니스석(business), 퍼스트(first) [default: 일반석]

  6. **항공권 검색 버튼** : API 요청 (session 생성 [POST] , Poll session results [Get])

- **편도**

  1. **출발지** : 도시, 국가 
  2. **도착지** : 도시, 국가 [default : null]
  3. **가는날** : YYYY.MM.DD [default : 오늘 날짜]
  4. **오는날** : 편도 [default: '' 빈문자열]  
  5. **좌석 등급 및 승객 **:
     - 도착지가 국가일 경우 :  좌석등급을 고를 수 없음. 
     - 도착지가 도시일 경우 : 일반석(economy), 프리미엄 일반석(preminum economy), 비즈니스석(business), 퍼스트(first)
  6. 항공권 검색 버튼** : API 요청 (session 생성 [POST] , Poll session results [Get]

- **다구간**

  다구간 추가 탭 당 요청의 갯수가 늘어난다.

<br/>

#### 서브 탭

![SubTab](https://user-images.githubusercontent.com/31315644/73818433-b6292000-4830-11ea-9f3d-2913b5ab5d6d.jpeg)

1. **언어** : 한국어 (대한민국) - **고정(API를 지원하지 않음.)** 
2. **국가/지역** : country [default : 대한민국]
3. **통화** : currency [default : KRW - 원]

<br/>

- 출발지 및 도착지 서브메뉴 리스트 (onChangeEvent - Axios : List Places)

![BoundList](https://user-images.githubusercontent.com/31315644/73818421-af9aa880-4830-11ea-8ac9-f6d7bc7f13c6.jpeg)

![Places-API](https://user-images.githubusercontent.com/31315644/73818432-b5908980-4830-11ea-9b43-62084066f80a.jpeg)

- `CityId` 가  `-sky` 일 경우, 국가를 의미

  구현 예상, onChangeEvent를 통해서 List Placese API를 호출한다.

  API =  https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/KR/KRW/ko-KR/?query=검색명

  해당 API를 통해 반화된 결과의 "CityId"가 `-sky`일 경우, **항공권 검색 버튼**을 클릭 했을 때, `Live Flight Search`가 아닌 

  `Browse Flight Prices - Brouse Routes` 를 사용한다.

-------------

**항공검색 폼**

1. 보완점 : 현재 Skyscanner 사이트는 출발지와 도착지를 입력 후 항공권을 검색을 한 후에  다시 뒤로가기 버튼을 클릭 ⇢ 검색 페이지로 오게 되면은 이전에 검색한 내용을 가지고 있지않음.

2. 검색창의 출발지와 도착지는 나라이름.

   (검색가능 국가,도시,공항이름) 검색가능한 **경우의 수는 총 9가지** 이다.

   1. 출발지 : 국가 

      도착지 : 국가  

      검색 결과는 도착지 (국가의 도시 가 결과로 나온다.)

   2. 출발지 : 국가 

      도착지 : 도시 

      검색결 과는 출발지의 도시를 선택하는 결과가 나온다.

   3. 출발지 : 국가 

      도착지 : 항공 

      검색 결과는 2번과 동일.

   4. 출발지 : 도시 

      도착지 : 국가

      검색 결과 1번과 1번과 동일.

   5. 출발지 : 도시 

      도착지 : 도시 

      검색 결과 일반 검색결과 (라이브 서치)

   6. 출발지 : 도시 

      도착지 : 항공 

      검색 결과 일반 검색결과 (라이브 서치)

   7. 출발지 : 특정 공항 

      도착지 : 국가 

      검색 결과 도착지의 도시 (1번 검색결과와 동일)

   8. 출발지 : 특정 공항 

      도착지 : 도시 

      검색 결과 일반 검색결과 (라이브 서치)

   9. 출발지 : 특정 공항 

      도착지 : 특정 공항

      검색결과 일반 검색 결과 (라이브 서치)