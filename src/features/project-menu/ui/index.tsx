import type { IProjectMain } from '../../../entities/project/model/project-main-type';
import type { IUserType } from '../../../entities/user/model/user-type';
import { Modal } from '../../../shared/ui/modal';
import { ButtonProject } from '../../../widgets/button-project/ui';
import { CreateProject } from '../../../widgets/create-project/ui';
import { Profile } from '../../../widgets/profile/ui';
import type { ProjectMenuProps } from '../props/project-menu-props';
import { useEffect, useState } from 'react';

export const ProjectMenu = ({
  projects,
  current,
  setCurrent,
}: ProjectMenuProps) => {
  const user: IUserType = {
    id: 1,
    firstName: 'Имя',
    secondName: 'Пользователя',
    email: 'kozl0vaan4s@yandex.ru',
  };

  const [currentProjects, setCurrentProjects] = useState<IProjectMain[]>(() =>
    Array.isArray(projects) ? projects : []
  );
  const [modal, setModal] = useState(false);

  const createProject = (name: string) => {
    if (!name) return;
    const nextId =
      currentProjects.length > 0
        ? Math.max(...currentProjects.map((p) => Number(p.id))) + 1
        : 1;
    const project: IProjectMain = {
      id: nextId,
      name,
      columns: [],
    };
    const updated = [...currentProjects, project];
    setCurrentProjects(updated);
    setCurrent(project);
    setModal(false);
  };

  const deleteProject = (id: number) => {
    const updated = currentProjects.filter((p) => p.id !== id);
    setCurrentProjects(updated);
    if (current?.id === id) {
      setCurrent(updated[0] ?? null);
    }
  };

  useEffect(() => {
    setCurrentProjects(Array.isArray(projects) ? projects : []);
  }, [projects]);

  useEffect(() => {
    if (currentProjects.length === 0) {
      if (current !== null) setCurrent(null);
      return;
    }
    const exists = current
      ? currentProjects.some((p) => p.id === current.id)
      : false;
    if (!current || !exists) {
      setCurrent(currentProjects[0]);
    }
  }, [currentProjects, current, setCurrent]);

  return (
    <div style={{ height: '100vh', width: '300px' }}>
      <button
        style={{
          fontFamily: 'Inter-SemiBold',
          fontSize: '12px',
          color: '#C0BBBB',
          backgroundColor: 'white',
          border: 'none',
          marginLeft: '190px',
          marginTop: '15px',
        }}
      >
        Выйти
      </button>

      <div style={{ marginLeft: '23px', marginRight: '23px', flex: 1 }}>
        <Profile {...user} />

        <div>
          <h2
            style={{
              fontSize: '24px',
              fontFamily: 'Inter-SemiBold',
              marginTop: '25%',
            }}
          >
            Мои проекты
          </h2>
          <div
            style={{
              marginTop: '20%',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
            }}
          >
            {currentProjects.map((item) => (
              <div key={item.id}>
                <ButtonProject
                  project={item}
                  current={current}
                  setCurrent={setCurrent}
                  action={() => deleteProject(item.id)}
                />
              </div>
            ))}
          </div>

          <button
            style={{
              backgroundColor: '#DFEDFD',
              border: 'none',
              fontFamily: 'Inter-SemiBold',
              fontSize: '16px',
              borderRadius: '10px',
              paddingTop: '13px',
              paddingBottom: '13px',
              marginTop: '70%',
              width: '100%',
            }}
            onClick={() => setModal(true)}
          >
            Создать проект
          </button>

          <p
            style={{
              fontFamily: 'Inter-Medium',
              fontSize: '14px',
              position: 'absolute',
              bottom: '1%',
            }}
          >
            kozl0vaan4s@yandex.ru
          </p>
        </div>
      </div>
      <Modal
        isOpen={modal}
        onClose={() => setModal(false)}
        dialogTitle="Новый проект"
        dialogContent={<CreateProject action={createProject} />}
      />
    </div>
  );
};
