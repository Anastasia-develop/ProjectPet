import { Popover } from '@mui/material';
import { useState } from 'react';
import './style.css';

type PopoverCustomType = {
  open: boolean;
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  action?: () => void;
};

export const PopoverCustom = ({
  open,
  anchorEl,
  setAnchorEl,
  action,
}: PopoverCustomType) => {
  const [list, setList] = useState<string[] | null>(['kozl0vaan4s@yandex.ru ']);
  const handleClose = (
    _event?: {},
    _reason?: 'backdropClick' | 'escapeKeyDown'
  ) => {
    setAnchorEl(null);
  };
  return (
    <Popover
      open={open}
      onClose={handleClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      slotProps={{
        paper: { sx: { borderRadius: '10px' } },
      }}
    >
      <div
        style={{
          paddingLeft: '15px',
          paddingRight: '15px',
          fontFamily: 'Inter-SemiBold',
        }}
      >
        <p style={{ fontSize: '12px' }}>Доступ</p>
        {list?.map((item) => (
          <div key={item} className="button-email">
            <span>{item}</span>
            <span style={{ paddingLeft: '20px' }} onClick={() => setList([])}>
              —
            </span>
          </div>
        ))}
        <p
          style={{
            fontSize: '12px',
            color: '#aea5a5',
            marginTop: '10px',
            cursor: 'pointer',
          }}
        >
          + Добавить участника
        </p>
        <button
          onClick={action}
          style={{
            marginBottom: '20px',
            width: '100%',
            border: 'none',
            backgroundColor: '#DFEDFD',
            fontFamily: 'Inter-SemiBold',
            fontSize: '12px',
            paddingTop: '6px',
            paddingBottom: '6px',
            borderRadius: '6px',
          }}
        >
          Удалить проект
        </button>
      </div>
    </Popover>
  );
};
