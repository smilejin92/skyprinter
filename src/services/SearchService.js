import axios from 'axios';

const SELECT_AREA_API_URL =
  'https://www.skyscanner.co.kr/g/autosuggest-flights';

export default class SearchService {
  static async SelectArea(country, language, area, isDestination) {
    return await axios.get(
      `${SELECT_AREA_API_URL}/${country}/${language}/${area}`,
      {
        isDestination: isDestination, // 출발지 도착지 여부
        enable_general_search_v2: true,
      },
    );
  }
}
