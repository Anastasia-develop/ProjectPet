import type { IProjectMain } from '../../../entities/project/model/project-main-type';
import './style.css';
import { PopoverCustom } from '../../../shared/ui/popover-custom';
import { useState } from 'react';

type ButtonProjectType = {
  project: IProjectMain;
  current: IProjectMain | null;
  setCurrent: (project: IProjectMain) => void;
  action?: () => void;
};

export const ButtonProject = ({
  project,
  current,
  setCurrent,
  action,
}: ButtonProjectType) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  return (
    <div
      style={{
        textAlign: 'left',
        padding: '8px 18px',
        fontSize: '14px',
        borderRadius: '9px',
        cursor: 'pointer',
      }}
      className={`${current === project ? 'current-button' : 'invisible-button'}`}
      onClick={() => setCurrent(project)}
    >
      {project.name}
      {current?.id === project.id && (
        <button
          style={{
            float: 'right',
            fontFamily: 'Inter-SemiBold',
            border: 'none',
            padding: '0',
            backgroundColor: '#F5F5F5',
            cursor: 'pointer',
          }}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          ...
        </button>
      )}
      <PopoverCustom
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        action={action}
      />
    </div>
  );
};
