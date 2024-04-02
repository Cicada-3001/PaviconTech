'use client'
import React from 'react'
import { useForm } from 'react-hook-form';
import EmailTemplate from './EmailTemplate';

function Test() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      return (
        <EmailTemplate username={'pablo'} code={'300201'}/>
      );
}

export default Test
