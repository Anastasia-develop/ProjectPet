import type { IColumnType } from '../../../entities/column/model/column-type';
import { Card } from '../../../shared/ui/card';
import { useEffect, useState } from 'react';
import { getCards } from '../../../entities/api/api';
import type { ICardType } from '../../../entities/card/model/card-type';
import { AddButton } from '../../../shared/ui/add-button';

export const Column = (column: IColumnType) => {
  const [cards, setCards] = useState<ICardType[]>([]);
  const [add, setAdd] = useState(false);

  const createCard = (content: string) => {
    if (!content.trim()) {
      setAdd(false);
      return;
    }
    const newCard: ICardType = {
      id: Date.now().toString(),
      content,
      done: false,
    };
    setCards((prev) => [...prev, newCard]);
    setAdd(false);
  };

  useEffect(() => {
    getCards().then((data) => {
      if (data) {
        setCards(data.cards || []);
      }
    });
  }, []);

  return (
    <div>
      <h3
        style={{
          fontFamily: 'Inter-Medium',
          fontSize: '16px',
          wordBreak: 'break-all',
        }}
      >
        {column.title}
      </h3>
      {cards && (
        <div>
          {cards.map((item) => (
            <div key={item.id} style={{ marginBottom: '15px' }}>
              <Card card={item} />
            </div>
          ))}
        </div>
      )}
      {add ? (
        <div>
          <Card
            card={null}
            button={false}
            onSubmit={createCard}
            onCancel={() => setAdd(false)}
          />
        </div>
      ) : (
        <div
          onClick={(e) => {
            setAdd(true);
            e.stopPropagation();
          }}
        >
          <AddButton />
        </div>
      )}
    </div>
  );
};
