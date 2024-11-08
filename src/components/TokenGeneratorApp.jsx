// src/components/TokenGeneratorApp.jsx
import React from 'react';
import TokenForm from './TokenForm';
import TokenDisplay from './TokenDisplay';
import { Container } from '@mui/material';
import '../styles/TokenGeneratorApp.css';
const TokenGeneratorApp = () => (
  <Container maxWidth="sm">
    <TokenForm />
    <TokenDisplay />
  </Container>
);

export default TokenGeneratorApp;
