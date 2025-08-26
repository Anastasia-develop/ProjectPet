import { Dialog, DialogActions, DialogTitle } from '@mui/material';
import bigX from '../../assets/images/big-x.svg';

type ModalType = {
  isOpen: boolean;
  onClose: () => void;
  dialogTitle: string;
  dialogContent: React.ReactNode;
};

export const Modal = ({
  isOpen,
  onClose,
  dialogTitle,
  dialogContent,
}: ModalType) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      slotProps={{ paper: { sx: { borderRadius: '20px', width: '350px' } } }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <DialogTitle style={{ fontFamily: 'Inter-Bold', fontSize: '20px' }}>
          {dialogTitle}
        </DialogTitle>
        <DialogActions>
          <img
            src={bigX}
            onClick={onClose}
            style={{ cursor: 'pointer', paddingRight: '10px' }}
          />
        </DialogActions>
      </div>
      <div>{dialogContent}</div>
    </Dialog>
  );
};
