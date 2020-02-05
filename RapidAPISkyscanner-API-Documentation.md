# RapidAPI-Skyscanner Flight Search API Documentation
Source from [RapidAPI](https://rapidapi.com/skyscanner/api/skyscanner-flight-search) and [Skyscanner](https://skyscanner.github.io/slate/#api-documentation).

## 1. Flights Live Prices

실시간 여행 일정(Itineraries)을 검색하기 위해서는 각 요청에 대한 세션을 우선적으로 생성해야한다. 검색 요청에는 장소, 날짜, 탑승 인원, 좌석 종류 등의 파라미터를 지정한다. 검색 요청에 대한 세션은 변경이 불가능하다 (단, 동일한 세션에 대하여 탑승 인원 파라미터는 변경이 가능하다).

#### 1.1. Create Session

**Method**: POST

**Description**: 실시간 여행 일정을 검색하기 위한 세션을 생성한다. Request 성공시 Response data는 빈 객체이다. 검색 결과를 취득(poll)하기 위한 **세션 키는 Response headers의 location 필드(string)를 '/'로 구분(split)했을 때의 마지막 문자열 요소이다**.

**요청 URL**: https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0

**Request Header**

| 필드             | 필수 | 값                                  |
| ---------------- | ---- | ----------------------------------- |
| 'Content-Type'   | O    | 'application/x-www-form-urlencoded' |
| 'X-RapidAPI-Key' | O    | 'RapidApi_토큰'                     |

**Request Parameters (form)**

| 필드             | 필수 | 타입   | 설명                                                         | 예제         |
| ---------------- | ---- | ------ | ------------------------------------------------------------ | ------------ |
| country          | O    | string | 사용자가 위치한 [두 자리 국가 코드](https://skyscanner.github.io/slate/#markets). | 'KR'         |
| currency         | O    | string | 검색 결과에 나타난 가격을 표시할 세 자리 [화폐 코드](https://skyscanner.github.io/slate/#currencies) | 'KRW'        |
| locale           | O    | string | 검색 결과를 표시할 언어 (ISO locale)                         | 'ko-KR'      |
| originPlace      | O    | string | 출발 [장소 ID](https://skyscanner.github.io/slate/#list-of-places) (공항, 도시) | 'SFO-sky'    |
| destinationPlace | O    | string | 도착 [장소 ID](https://skyscanner.github.io/slate/#list-of-places) (공항, 도시) | 'ICN-sky'    |
| outboundDate     | O    | string | 출발 날짜 (YYYY-MM-DD)                                       | '2020-02-06' |
| adults           | O    | number | 만 16세 이상 탑승 인원 수 (1 ~ 8)                            | 1            |
| inboundDate      | X    | string | 입국 날짜 (YYYY-MM-DD 혹은 빈 문자열 (편도))                 | '2020-02-09' |
| cabinClass       | X    | string | 좌석 종류 (economy, premiumeconomy, business, first)         | 'economy'    |
| children         | X    | number | 만 16세 미만 탑승 인원 (0 ~ 8)                               | 0            |
| infants          | X    | number | 생후 12개월 미만 탑승 인원 (0 ~ 8)                           | 0            |
| includeCarriers  | X    | string | [두 자리 항공사 코드](https://www.iata.org/en/publications/directories/code-search/). 2개 이상의 항공사 코드는 **쉼표**로 구분 (해당 항공사에 대한 정보만 검색). | 'KE,OZ'      |
| excludeCarriers  | X    | string | [두 자리 항공사 코드](https://www.iata.org/en/publications/directories/code-search/). 2개 이상의 항공사 코드는 **쉼표**로 구분 (해당 항공사에 대한 정보를 제외하고 검색). | 'KE,OZ'      |
| groupingPrice    | X    | string | "true" 요청시 입력된 탑승 인원 전체에 대한 가격 표시. "false" 요청시 탑승 인원 1인당 가격 표시 (기본값 "false"). | "false"      |

**Request 예제**

```javascript
import axios from 'axios';
import qs from 'query-string';

(async () => {
  try {
    const config = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'RAPID_API_KEY'
    };

    const params = {
      country: 'US',
      currency: 'USD',
      locale: 'en-US',
      originPlace: 'SFO-sky',
      destinationPlace: 'LHR-sky',
      outboundDate: '2020-02-06',
      adults: 1,
      inboundDate: '2020-02-09',
      cabinClass: 'business'
    };

    const { headers } = await axios.post(
      'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0',
      qs.stringify(params),
      { headers: config }
    );

    const locationToArr = headers.location.split('/');
    const session_key = locationToArr[locationToArr.length - 1];
    // const POLL_URL = headers.location.replace('hk2', 'uk2'); // 버그 가능성

    console.log(session_key); // 세션 키
  } catch (e) {
    console.error(e);
  }
})()
```

**Response Parameters (success)**

![](https://user-images.githubusercontent.com/32444914/73818156-123f7480-4830-11ea-8a5c-52e6a9b3026c.PNG)



### 1.2. Poll Session Results

**Method**: GET

**Description**: Create session에서 생성한 세션 키로 실시간 여행 일정 검색 결과를 조회한다. 파라미터를 지정하여 검색 결과를 필터할 수 있다.

**요청 URL**: https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/{session_key}

**Request Header**

| 필드             | 필수                                  | 값                                  |
| ---------------- | ------------------------------------- | ----------------------------------- |
| 'Content-Type'   | X (요청 parameter를 지정하지 않을 때) | 'application/x-www-form-urlencoded' |
| 'X-RapidAPI-Key' | O                                     | 'RapidApi_토큰'                     |

**Request Parameters (form)**

| 필드                    | 필수 | 타입   | 설명                                                         | 예제      |
| ----------------------- | ---- | ------ | ------------------------------------------------------------ | --------- |
| session_key             | O    | string | Create Session에서 생성한 세션 키를 요청 URL 뒤에 붙여 POLL한다. |           |
| sortType                | X    | string | 검색 결과 정렬 기준 (price-가격, duration-소요 시간, outbounddeparttime-출국편 이륙 시간, inbounddeparttime-입국편 이륙 시간) | 'price'   |
| sortOrder               | X    | string | 검색 결과 정렬 순서 (asc, desc)                              | 'asc'     |
| duration                | X    | number | 도착지까지 소요되는 시간(분). 0 ~ 1800                       | 1000      |
| includeCarriers         | X    | string | [두 자리 항공사 코드](https://www.iata.org/en/publications/directories/code-search/). 2개 이상의 항공사 코드는 **세미콜론**으로 구분 (해당 항공사에 대한 정보만 검색). | 'OZ;KE'   |
| excludeCarriers         | X    | string | [두 자리 항공사 코드](https://www.iata.org/en/publications/directories/code-search/). 2개 이상의 항공사 코드는 **세미콜론**으로 구분 (해당 항공사에 대한 정보를 제외하고 검색). | 'OZ;KE'   |
| originAirports          | X    | string | 출발 공항([세 자리 공항 코드](https://airportcod.es/)). 2개 이상의 공항 코드는 세미 콜론으로 구분. | 'ICN;CDG' |
| destinationAirports     | X    | string | 도착공항([세 자리 공항 코드](https://airportcod.es/)). 2개 이상의 공항 코드는 세미 콜론으로 구분. | 'ICN;CDG' |
| stops                   | X    | string | 최대 환승 횟수. 직항 = 0. 1회 환승 = 1. 미기입시 직항편과 환승편 모두 검색 결과에 포함. | '0'       |
| outboundDepartTime      | X    | string | 출국편 출발 시간 구간. morning, afternoon, evening 혹은 M, A, E을 세미콜론으로 구분. | 'A;E'     |
| outboundDepartStartTime | X    | string | 출국편 출발 시간 (구간 시작) . hh:mm 양식으로 입력.          | '13:30'   |
| outboundDepartEndTime   | X    | string | 출국편 출발 시간 (구간 끝). hh:mm 양식으로 입력.             | '18:00'   |
| inboundDepartTime       | X    | string | 귀국편 출발 시간 구간. morning, afternoon, evening 혹은 M, A, E을 세미콜론으로 구분. | 'M;A'     |
| inboundDepartStartTime  | X    | string | 귀국편 출발 시간 (구간 시작). hh:mm 양식으로 입력.           | '07:00'   |
| inboundDepartEndTime    | X    | string | 귀국편 출발 시간 (구간 끝). hh:mm 양식으로 입력.             | '14:00'   |

**Request 예제**

```javascript
import axios from 'axios';

// 2. Poll Session
(async () => {
  try {
    const SESSION_KEY = '6aa0be06-8526-4d52-a5d6-f70e5670046a';
    const POLL_URL = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/${SESSION_KEY}`;
    
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'RAPID_API_KEY'
    };

    // 아시아나, 대한항공
    // 직항
    const params = {
      includeCarriers: 'OZ;KE',
      stops: '0'
    };

    const { data } = await axios.get(POLL_URL, { 
      params,   
      headers 
    });

    console.dir(data);
  } catch (e) {
    console.error(e);
  }
})();
```

**Response Parameters (success)**

![](https://user-images.githubusercontent.com/32444914/73818169-208d9080-4830-11ea-95db-6dbccd96b9c7.PNG)

| 필드        | 타입   | 설명                                                         |
| ----------- | ------ | ------------------------------------------------------------ |
| SessionKey  | string | 실시간 여행 검색에 사용된 세션 키                            |
| Query       | object | 실시간 여행 검색에 사용된 쿼리                               |
| Status      | string | 세션의 상태. 'UpdatesPending' 혹은 'UpdatesComplete'. **UpdatesComplete이 될때까지 POLL해야한다 (최대 1분 소요).** |
| Itineraries | array  | 여행 일정 목록. 세부 내용은 Itineraries 테이블 참고.         |
| Legs        | array  | 각 여행 일정에 대한 모든 leg 목록. 각 leg는 공항, 출발 시간, 비행 시간, 경유지, 항공사 정보 등을 포함한다. |
| Segments    | array  | 각 leg의 대한 segment(segment가 모여 하나의 leg가 된다) . segment는 항공사(혹은 광고사), 운행사에 대한 정보 등을 갖는다. |
| Agents      | array  | 티켓 판매사(항공사 혹은 여행사) 목록                         |
| Places      | array  | 여행 일정에 나타나는 모든 장소                               |
| Currencies  | array  | response에 나타난 화폐 단위 목록 (A list of the currencies shown in the response). |

**Response Parameters - Itineraries**

| 필드               | 타입   | 설명                                                         |
| ------------------ | ------ | ------------------------------------------------------------ |
| OutboundLegId      | string | 출국편 leg id                                                |
| InboundLegId       | string | 귀국편 leg id                                                |
| PricingOptions     | array  | 하나의 여행 일정에 대한 가격 목록.  판매사, 가격, 예매 링크(deep link), QuoteAgeInMinutes(가격이 측정된 시간(분)) 정보를 포함 |
| BookingDetailsLink | object | (필요 없음)                                                  |

**Leg and Segment**

![](https://user-images.githubusercontent.com/32444914/73818178-271c0800-4830-11ea-8489-a2d5c55c90e5.png)



## 2. Flight Browse Prices

### 2.1. Browse Quotes

**Method**: GET

**Description**: 요청한 경로에 대한 최저가 상품(quote)을 캐시(cache) 데이터에서 조회한다.

**요청 URL**: https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/{country}/{currency}/{locale}/{originplace}/{destinationplace}/{outboundpartialdate}/{inboundpartialdate}

**Request Headers**

| 필드             | 필수 | 값              |
| ---------------- | ---- | --------------- |
| 'X-RapidAPI-Key' | O    | 'RapidApi_토큰' |

**Request Parameters**

| 필드                | 필수 | 타입   | 설명                                                         | 예제         |
| ------------------- | ---- | ------ | ------------------------------------------------------------ | ------------ |
| country             | O    | string | 사용자가 위치한 [국가 코드](https://skyscanner.github.io/slate/#markets). URL에 append하여 요청. | 'KR'         |
| currency            | O    | string | 검색 결과에 나타난 가격을 표시할 세 자리 [화폐 코드](https://skyscanner.github.io/slate/#currencies). URL에 append하여 요청. | 'KRW'        |
| locale              | O    | string | 검색 결과를 표시할 언어 (ISO locale). URL에 append하여 요청. | 'ko-KR'      |
| originplace         | O    | string | 출발 [장소 ID](https://skyscanner.github.io/slate/#list-of-places) (공항, 도시, 국가). URL에 append하여 요청. | 'SFO-sky'    |
| destinationplace    | O    | string | 도착 [장소 ID](https://skyscanner.github.io/slate/#list-of-places) (공항, 도시, 국가). URL에 append하여 요청. | 'ICN-sky'    |
| outboundpartialdate | O    | string | 출발 날짜 (YYYY-MM-DD, YYYY-MM, anytime). URL에 append하여 요청. | '2020-02-06' |
| inboundpartialdate  | X    | string | 입국 날짜 (YYYY-MM-DD, YYYY-MM, anytime, 혹은 빈 문자열(편도)). URL에 append하여 요청. | '2020-02-09' |

**Request 예제**

```javascript
import axios from 'axios';

(async () => {
  try {
    const country = 'KR';
    const currency = 'KRW';
    const locale = 'ko-KR';
    const originplace = 'KR-sky';
    const destinationplace = 'JP-sky';
    const outboundpartialdate = '2020-02-06';
    const inboundpartialdate = '2020-02-09'

    const GET_URL = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/${country}/${currency}/${locale}/${originplace}/${destinationplace}/${outboundpartialdate}/${inboundpartialdate}`;
    
    const headers = {
      'X-RapidAPI-Key': 'RAPID_API_KEY'
    };

    const { data } = await axios.get(GET_URL, {
      headers
    });

    console.log(data);

  } catch (e) {
    console.error(e);
  }
})();
```

**Response Parameters (success)**

![](https://user-images.githubusercontent.com/32444914/73818182-284d3500-4830-11ea-90ce-79d94614d2d3.PNG)



### 2.2. Browse Routes

**Method**: GET

**Description**: Browse Quotes와 동일하다. 또한 각 Quote에 대한 최저가 route(경로) 정보(cache)를 추가로 제공한다.

**요청 URL**: https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/{country}/{currency}/{locale}/{originplace}/{destinationplace}/{outboundpartialdate}/{inboundpartialdate}

**Request Headers**

| 필드             | 필수 | 값              |
| ---------------- | ---- | --------------- |
| 'X-RapidAPI-Key' | O    | 'RapidApi_토큰' |

**Request Parameters**

| 필드                | 필수 | 타입   | 설명                                                         | 예제         |
| ------------------- | ---- | ------ | ------------------------------------------------------------ | ------------ |
| country             | O    | string | 사용자가 위치한 [국가 코드](https://skyscanner.github.io/slate/#markets). URL에 append하여 요청. | 'KR'         |
| currency            | O    | string | 검색 결과에 나타난 가격을 표시할 세 자리 [화폐 코드](https://skyscanner.github.io/slate/#currencies). URL에 append하여 요청. | 'KRW'        |
| locale              | O    | string | 검색 결과를 표시할 언어 (ISO locale). URL에 append하여 요청. | 'ko-KR'      |
| originplace         | O    | string | 출발 [장소 ID](https://skyscanner.github.io/slate/#list-of-places) (공항, 도시, 국가). URL에 append하여 요청. | 'SFO-sky'    |
| destinationplace    | O    | string | 도착 [장소 ID](https://skyscanner.github.io/slate/#list-of-places) (공항, 도시, 국가). URL에 append하여 요청. | 'ICN-sky'    |
| outboundpartialdate | O    | string | 출발 날짜 (YYYY-MM-DD, YYYY-MM, anytime). URL에 append하여 요청. | '2020-02-06' |
| inboundpartialdate  | X    | string | 입국 날짜 (YYYY-MM-DD, YYYY-MM, anytime, 혹은 빈 문자열(편도)). URL에 append하여 요청. | '2020-02-09' |

**Request 예제**

```javascript
import axios from 'axios';

(async () => {
  try {
    const country = 'KR';
    const currency = 'KRW';
    const locale = 'ko-KR';
    const originplace = 'KR-sky';
    const destinationplace = 'JP-sky';
    const outboundpartialdate = '2020-02-06';
    const inboundpartialdate = '2020-02-09'

    const GET_URL = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/${country}/${currency}/${locale}/${originplace}/${destinationplace}/${outboundpartialdate}/${inboundpartialdate}`;
    
    const headers = {
      'X-RapidAPI-Key': 'RAPID_API_KEY'
    };

    const { data } = await axios.get(GET_URL, {
      headers
    });

    console.log(data);

  } catch (e) {
    console.error(e);
  }
})();
```

**Response Parameters (success)**

![](https://user-images.githubusercontent.com/32444914/73818183-28e5cb80-4830-11ea-94eb-b296fe053d79.PNG)

### 2.3. Browse Dates - DEPRECATED

**Method**: GET

**Description**: Browse Quotes와 동일하다. 또한 요청한 경로에 대한 최저가 날짜를 제공한다.

**요청 URL**: https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/{country}/{currency}/{locale}/{originplace}/{destinationplace}/{outboundpartialdate}/{inboundpartialdate}

**Request Headers**

| 필드             | 필수 | 값              |
| ---------------- | ---- | --------------- |
| 'X-RapidAPI-Key' | O    | 'RapidApi_토큰' |

**Request Parameters**

| 필드                | 필수 | 타입   | 설명                                                         | 예제         |
| ------------------- | ---- | ------ | ------------------------------------------------------------ | ------------ |
| country             | O    | string | 사용자가 위치한 [국가 코드](https://skyscanner.github.io/slate/#markets). URL에 append하여 요청. | 'KR'         |
| currency            | O    | string | 검색 결과에 나타난 가격을 표시할 세 자리 [화폐 코드](https://skyscanner.github.io/slate/#currencies). URL에 append하여 요청. | 'KRW'        |
| locale              | O    | string | 검색 결과를 표시할 언어 (ISO locale). URL에 append하여 요청. | 'ko-KR'      |
| originplace         | O    | string | 출발 [장소 ID](https://skyscanner.github.io/slate/#list-of-places) (공항, 도시, 국가). URL에 append하여 요청. | 'SFO-sky'    |
| destinationplace    | O    | string | 도착 [장소 ID](https://skyscanner.github.io/slate/#list-of-places) (공항, 도시, 국가). URL에 append하여 요청. | 'ICN-sky'    |
| outboundpartialdate | O    | string | 출발 날짜 (YYYY-MM-DD, YYYY-MM, anytime). URL에 append하여 요청. | '2020-02-06' |
| inboundpartialdate  | X    | string | 입국 날짜 (YYYY-MM-DD, YYYY-MM, anytime, 혹은 빈 문자열(편도)). URL에 append하여 요청. | '2020-02-09' |

**Request 예제**

```javascript
import axios from 'axios';

(async () => {
  try {
    const country = 'KR';
    const currency = 'KRW';
    const locale = 'ko-KR';
    const originplace = 'KR-sky';
    const destinationplace = 'JP-sky';
    const outboundpartialdate = '2020-02-06';
    const inboundpartialdate = '2020-02-09'

    const GET_URL = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/${country}/${currency}/${locale}/${originplace}/${destinationplace}/${outboundpartialdate}/${inboundpartialdate}`;
    
    const headers = {
      'X-RapidAPI-Key': 'RAPID_API_KEY'
    };

    const { data } = await axios.get(GET_URL, {
      headers
    });

    console.log(data);

  } catch (e) {
    console.error(e);
  }
})();
```

**Response parameters (fail)**

![](https://user-images.githubusercontent.com/32444914/73818181-284d3500-4830-11ea-8bbd-e6d34a75e21c.PNG)

## 3. Places

장소(place)는 네 가지 종류로 구분된다.

1. Country (국가)
2. City (도시)
3. Airpot (공항)
4. Anywhere (flight browse API)

### 3.1. List Places

**Method**: GET

**Description**: 쿼리 문자열과 매칭되는 장소 목록 조회한다.

**요청 URL**: https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/{country}/{currency}/{locale}/

**Request Headers**

| 필드             | 필수 | 값              |
| ---------------- | ---- | --------------- |
| 'X-RapidAPI-Key' | O    | 'RapidApi_토큰' |

**Request Parameters**

| 필드     | 필수 | 타입   | 설명                                               | 예제    |
| -------- | ---- | ------ | -------------------------------------------------- | ------- |
| query    | O    | string | 검색어 (at least 2 characters long)                | '서울'  |
| country  | O    | string | 사용자가 위치한 국가(마켓). 요청 URL에 append한다. | 'KR'    |
| currency | O    | string | 가격을 표시할 화폐 단위                            | 'KRW'   |
| locale   | O    | string | 결과를 표시할 언어 (ISO locale)                    | 'ko-KR' |
**Request 예제**

```javascript
import axios from 'axios';

(async () => {
  try {
    const country = 'KR';
    const currency = 'KRW';
    const locale = 'ko-KR';

    const GET_URL = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/${country}/${currency}/${locale}/`;
    
    const headers = {
      'X-RapidAPI-Key': 'RAPID_API_KEY'
    };

    const params = {
      query: '서울'
    };

    const { data } = await axios.get(GET_URL, {
      headers,
      params
    });

    console.log(data);

  } catch (e) {
    console.error(e);
  }
})();
```

**Response Parameters (success)**

![](https://user-images.githubusercontent.com/32444914/73818186-2a16f880-4830-11ea-990f-2588f3c7e31f.PNG)



## 4. Localisation

모든 Skyscanner 서비스는 국가(마켓), 언어, 화폐 단위로 localized(지역화)되어있다. 따라서 아래 세 가지 파라미터는 모든 API 요청(검색 세션 생성)에 포함되어 있어야 한다.

1. locale: 검색 결과를 표시할 언어 (ISO-locale)
2. currency: 검색 결과에 나타난 가격을 표시할 세 자리 화폐 코드
3. market: 사용자가 위치한 국가(마켓)

### 4.1. List markets

**Method**: GET

**Description**: Skyscanner에서 지원하는 모든 국가(마켓) 코드를 조회한다.

**요청 URL**:  https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/{locale}

**Request Headers**

| 필드             | 필수 | 값              |
| ---------------- | ---- | --------------- |
| 'X-RapidAPI-Key' | O    | 'RapidApi_토큰' |

**Request Parameters**

| 필드   | 필수 | 타입   | 설명                                                      |
| ------ | ---- | ------ | --------------------------------------------------------- |
| locale | O    | string | 검색 결과를 표시할 언어를 요청 URL에 append하여 요청한다. |

**Request 예제**

```javascript
import axios from 'axios';

(async () => {
  try {
    const locale = 'ko-KR';
    const GET_URL = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/${locale}`;
    
    const headers = {
      'X-RapidAPI-Key': 'RAPID_API_KEY'
    };

    const { data } = await axios.get(GET_URL, {
      headers
    });

    console.log(data);

  } catch (e) {
    console.error(e);
  }
})();
```

**Response Parameters (success)**

![](https://user-images.githubusercontent.com/32444914/73818184-297e6200-4830-11ea-886a-e46ba987cda3.PNG)



### 4.2. List Currencies

**Method**: GET

**Description**: Skyscanner에서 지원하는 모든 화폐 코드를 조회한다.

**요청 URL**: https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/currencies

**Request Headers**

| 필드             | 필수 | 값              |
| ---------------- | ---- | --------------- |
| 'X-RapidAPI-Key' | O    | 'RapidApi_토큰' |

**Request 예제**

```javascript
import axios from 'axios'
;
(async () => {
  try {
    const GET_URL = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/currencies`;
    
    const headers = {
      'X-RapidAPI-Key': 'RAPID_API_KEY'
    };

    const { data } = await axios.get(GET_URL, {
      headers
    });

    console.log(data);

  } catch (e) {
    console.error(e);
  }
})();
```

**Request parameters (success)**

![](https://user-images.githubusercontent.com/32444914/73818185-297e6200-4830-11ea-859f-d13712f124fa.PNG)

