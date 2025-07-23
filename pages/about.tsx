import React from 'react';
import { NextPage } from 'next';
import { AboutComp } from '@/src/common/components/about';
import { Layout } from '@/src/layout';

const AboutPage: NextPage = () =>{
  return <Layout><AboutComp /></Layout>
}
export default AboutPage;