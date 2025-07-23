import React from 'react';
import { NextPage } from 'next';
import { HomeComp } from '@/src/common/components/home';
import { Layout } from '@/src/layout';

const HomePage: NextPage = () =>{
  return <Layout><HomeComp /></Layout>
}
export default HomePage;