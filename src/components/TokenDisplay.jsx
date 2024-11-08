import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Stack } from '@mui/material';
import '../styles/TokenDisplay.css';

const TokenDisplay = () => {
  const { blueTokens, redTokens } = useSelector((state) => state.tokens);

  const renderTokens = (tokens, color) => (
    tokens.map((row, rowIndex) => (
      <Stack
        direction="row"
        spacing={2}
        key={rowIndex}
        className="token-row"
      >
        {row.map((token, index) => (
          <Box
            key={index}
            sx={{
              padding: '10px 20px',
              backgroundColor: color,
              color: 'white',
              borderRadius: '8px',
              textAlign: 'center',
              fontSize: '1rem',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              minWidth: '50px',
              minHeight: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {token}
          </Box>
        ))}
      </Stack>
    ))
  );

  return (
    <div className="token-display-container">
      <Typography variant="h6" className="token-title">Blue Tokens</Typography>
      {renderTokens(blueTokens, '#1976d2')} {/* Blue color in MUI theme */}
      <Typography variant="h6" className="token-title" style={{ marginTop: '20px' }}>Red Tokens</Typography>
      {renderTokens(redTokens, '#d32f2f')} {/* Red color in MUI theme */}
    </div>
  );
};

export default TokenDisplay;
