'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Home = () => {
  const router = useRouter();
  // naviagate to the admin route and show the default page
  useEffect(() => {
    router.push('/admin/default');
  });

  return (
    <React.Fragment></React.Fragment>
  );
}

export default Home;
