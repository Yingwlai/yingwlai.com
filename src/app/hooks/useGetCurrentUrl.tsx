'use client'

import { useState, useEffect } from 'react';

const useGetCurrentPath = () => {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [])
  return { currentPath };
};

export default useGetCurrentPath;