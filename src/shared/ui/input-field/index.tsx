import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';

type InpueFieldType = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  action?: () => void;
};

export const InputField = ({
  label,
  value,
  onChange,
  action,
}: InpueFieldType) => {
  const [error, setError] = useState(false);
  const [wasFocused, setWasFocused] = useState(false);

  const checkValue = (item: string) => {
    if (item.trim() === '') return true;
    return false;
  };
  useEffect(() => {
    if (wasFocused) {
      setError(checkValue(value.toString()));
    }
  }, [value, wasFocused]);
  return (
    <TextField
      id="filled-basic"
      label={label}
      variant="filled"
      value={value}
      onChange={(e) => {
        setError(checkValue(e.target.value));
        onChange(e.target.value);
      }}
      onBlur={() => {
        setWasFocused(true);
        setError(checkValue(value));
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          action?.();
        }
      }}
      error={error}
      helperText={error ? 'Обязательное поле' : ''}
      sx={{
        width: '100%',
        border: 'none',
        borderBottom: 'none',
        '& .MuiInputBase-root.Mui-error': {
          backgroundColor: '#ffe5e9',
        },
        '& .MuiFormHelperText-root': {
          fontFamily: 'Inter-Medium',
        },
        '& .MuiFormHelperText-root.Mui-error': {
          color: 'red',
          fontFamily: 'Inter-Medium',
        },
        '& input:-webkit-autofill': {
          transition: 'background-color 9999s ease-out, color 9999s ease-out',
        },
        '& .MuiFilledInput-root': {
          borderRadius: '12px',
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: '#8F9399',
        },
        '& .MuiInputLabel-root': {
          fontFamily: 'Inter-Medium',
          fontSize: '14px',
          color: '#8F9399',
        },
        '& .MuiInputLabel-root.Mui-error': {
          color: 'red',
        },
        '& .MuiInputBase-input': {
          fontFamily: 'Inter-Medium',
          fontSize: '14px',
        },
        '& .MuiFilledInput-root::before': {
          border: 'none',
        },
        '& .MuiFilledInput-root::after': {
          border: 'none',
        },
        '& .MuiFilledInput-root:hover:not(.Mui-disabled):before': {
          border: 'none',
        },
      }}
    />
  );
};
