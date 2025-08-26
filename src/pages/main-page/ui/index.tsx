import { useEffect, useState } from 'react';
import type { IProjectMain } from '../../../entities/project/model/project-main-type';
import { ProjectMenu } from '../../../features/project-menu/ui';
import { Search } from '../../../widgets/search/ui';
import { ProjectField } from '../../../features/project-field/ui';
import { getProjects } from '../../../entities/api/api';

export const MainPage = () => {
  const [list, setList] = useState<IProjectMain[]>([]);
  const [current, setCurrent] = useState<IProjectMain | null>(null);

  const [find, setFind] = useState('');

  useEffect(() => {
    getProjects()
      .then((data) => {
        if (data) {
          setList(data.projects || []);
          if (data.projects?.length) setCurrent(data.projects[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ display: 'flex', height: 'auto' }}>
      <ProjectMenu projects={list} current={current} setCurrent={setCurrent} />
      <div style={{ backgroundColor: '#E8EBF2', width: '100%' }}>
        {current && (
          <div style={{ marginLeft: '37px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginRight: '45px',
                marginTop: '35px',
                marginLeft: '45px',
              }}
            >
              <Search find={find} setFind={setFind} />
            </div>

            <h1
              style={{
                marginTop: '20px',
                fontFamily: 'Inter-Bold',
                fontSize: '32px',
              }}
            >
              {current?.name}
            </h1>
            <ProjectField />
          </div>
        )}
      </div>
    </div>
  );
};
