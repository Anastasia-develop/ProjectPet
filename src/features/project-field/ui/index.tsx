import { useEffect, useState } from 'react';
import type { IColumnType } from '../../../entities/column/model/column-type';
import { Column } from '../../../widgets/column/ui';
import { getColumns } from '../../../entities/api/api';
import { AddButton } from '../../../shared/ui/add-button';
import { Block } from '../../../shared/ui/block';

export const ProjectField = () => {
  const [column, setColumn] = useState<IColumnType[] | null>(null);

  useEffect(() => {
    getColumns()
      .then((data) => {
        if (data) {
          setColumn(data.columns || []);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {column && (
        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start' }}>
          <Block
            content={column.map((col) => (
              <div key={col.id} style={{ marginRight: '60px' }}>
                <Column {...col} />
              </div>
            ))}
          />
          <Block Component={AddButton} />
        </div>
      )}
    </div>
  );
};
