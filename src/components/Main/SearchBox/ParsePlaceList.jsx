const ParsePlaceList = (place, suggestion) => {
  const Result = {};
  const insertTag = (highlightings, str) => {
    const starts = [];
    const ends = [];

    highlightings.forEach(highlighting => {
      starts.push(highlighting[0]);
      ends.push(highlighting[1]);
    });

    return str
      .split('')
      .map((chr, pos) => {
        if (starts.indexOf(pos) !== -1) chr = '<strong>' + chr;
        if (ends.indexOf(pos) !== -1) chr = '</strong>' + chr;
        return chr;
      })
      .join('');
  };

  const WordArray = insertTag(
    suggestion.Highlighting,
    suggestion.ResultingPhrase,
  );

  if (place === 'Country') {
    Result.CountryName = WordArray.split('|');
  } else {
    const ResultingArray = WordArray.split('|');
    Result.PlaceName = ResultingArray[0].includes(',')
      ? ResultingArray[0].split(',')[0].split('(')[0]
      : ResultingArray[0];
    Result.CountryName = ResultingArray[ResultingArray.length - 1];
  }

  return Result;
};

export default ParsePlaceList;
