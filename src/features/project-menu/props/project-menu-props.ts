import type { IProjectMain } from '../../../entities/project/model/project-main-type';

export type ProjectMenuProps = {
  projects: IProjectMain[];
  current: IProjectMain | null;
  setCurrent: (project: IProjectMain | null) => void;
};
