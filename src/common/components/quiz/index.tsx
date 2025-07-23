import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Link from 'next/link';
import { useContent } from '../../redux/content/useContent';



export const QuizComp: React.FC = () => {
   const {data, error, loading} = useContent('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple');
   console.log('data=', data);
  return (
    <div>
        <h1>Quiz</h1>
        <Link href="/">Back to home</Link>
       
    </div>
  );
};