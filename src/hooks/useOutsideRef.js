import { useEffect } from 'react';

function useOutsideRef(ref, close) {
  function handleClickOutside({ target }) {
    if (ref.current && !ref.current.contains(target)) {
      close();
    }
  }

  useEffect(() => {
    // Bind the event listener
    console.log(ref);
    document.addEventListener('click', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside);
    };
  });
}

export default useOutsideRef;
