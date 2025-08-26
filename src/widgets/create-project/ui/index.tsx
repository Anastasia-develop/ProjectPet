import { DialogContent } from '@mui/material';
import { InputField } from '../../../shared/ui/input-field';
import { useState } from 'react';

type CreateProjectType = {
  action: (name: string) => void;
};

export const CreateProject = ({ action }: CreateProjectType) => {
  const [name, setName] = useState('');
  return (
    <DialogContent>
      <InputField
        label="Название проекта"
        value={name}
        onChange={setName}
        action={() => action(name)}
      />
      <button
        style={{
          marginTop: '16px',
          fontFamily: 'Inter-Medium',
          fontSize: '14px',
          backgroundColor: 'white',
          border: 'none',
          color: '#AEA5A5',
        }}
      >
        + Добавить участника
      </button>
      <button
        onClick={() => action(name)}
        style={{
          marginTop: '45px',
          width: '100%',
          height: '45px',
          border: 'none',
          borderRadius: '7px',
          backgroundColor: '#DFEDFD',
          fontFamily: 'Inter-SemiBold',
          fontSize: '16px',
        }}
      >
        Создать проект
      </button>
    </DialogContent>
  );
};
