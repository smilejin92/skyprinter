import React from 'react';

const ParseWord = ({ word }) => {
  return word[0] === '#' || word[word.length - 1] === '#' ? (
    <strong>{word.replace(/[^(가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9)]/gi, '')}</strong>
  ) : (
    word
  );
};

export default ParseWord;
