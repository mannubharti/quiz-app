import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Box, Button, styled, Typography} from '@mui/material';
import { increment, decrement } from '@/src/common/redux/features/cart/cartSlice';
import { RootState } from '../../redux/store';
import Link from 'next/link';
import { useContent } from '../../redux/content/useContent';

const CustomButton = styled(Button)({
   background: '#ccc'
});

export const HomeComp: React.FC = () => {
  //const dispatch = useDispatch<AppDispatch>();
  const {data, error, loading} = useContent('https://jsonplaceholder.typicode.com/posts');
  const count = useSelector((state: RootState) => state.counter.value);
  console.log('data=', data);
  const dispatch = useDispatch();
  return (
    <Box>
        <Typography variant='h1'>Home count = {count}</Typography>
        <Box display="flex" gap={2} my={2}>
          <CustomButton onClick={() => dispatch(increment())}>Increment</CustomButton>
          <CustomButton onClick={() => dispatch(decrement())}>Decrement</CustomButton>
        </Box>

        <Link href="/about">Go to about</Link>

        {error && <Typography color="error">Error loading content</Typography>}
        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <Box>
            sadf
          </Box>
        )}
    </Box>
  );
};