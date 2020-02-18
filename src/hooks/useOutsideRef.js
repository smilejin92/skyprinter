import { useEffect } from 'react';

function useOutsideRef(ref, close) {
  function handleClickOutside({ target }) {
    if (ref.current && !ref.current.contains(target)) {
      close();
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
}

export default useOutsideRef;
