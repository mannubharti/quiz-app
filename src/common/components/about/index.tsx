import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Link from 'next/link';



export const AboutComp: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <div>
        <h1>About count = {count}</h1>
        <Link href="/">Back to home</Link>
       
    </div>
  );
};