import React from 'react';
import { NextPage } from 'next';
import { Layout } from '@/src/layout';
import { QuizComp } from '@/src/common/components/quiz';

const QuizPage: NextPage = () =>{
  return <Layout><QuizComp /></Layout>
}
export default QuizPage;