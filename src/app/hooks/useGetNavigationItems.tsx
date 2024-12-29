import { useState, useEffect } from 'react';

import { BASE_URL_PATH } from '../constants/navigation';

const useGetNavigationItems = () => {
  const [navigationItems, setNavigationItems] = useState([]);

  useEffect(() => {

    console.log('checking base url path?', BASE_URL_PATH, process.env);

    async function fetchNavigationItems() {
      const { navigationItems } = await fetch(`${BASE_URL_PATH}/api/app-navigation`)
        .then((response) => {
          console.log('checking response', response);
          return response.json()
        }).catch((error) => console.log('catching error', error));

      setNavigationItems(navigationItems);
    }

    fetchNavigationItems();
  }, []);

  return { navigationItems };
};

export default useGetNavigationItems;