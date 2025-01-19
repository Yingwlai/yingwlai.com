'use client'

import { useState, useEffect } from 'react';

import { navigationItems } from '../constants/navigation';

const useNavigationRedirect = (): boolean | undefined => {
  const [shouldRedirect, setShouldRedirect] = useState<boolean | undefined>(false);
  useEffect(() => {
    const currentPath = window?.location?.pathname;
    const isDisabled = navigationItems.find((item) => item.href === currentPath)?.disabled;

    setShouldRedirect(isDisabled);
  }, [])

  return shouldRedirect;
};

export default useNavigationRedirect;