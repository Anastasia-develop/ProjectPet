import type { ICardType } from '../../../entities/card/model/card-type';
import ellipse from '../../assets/images/ellipse.svg';
import check from '../../assets/images/check.svg';
import { useEffect, useRef, useState } from 'react';

type CardType = {
  card: ICardType | null;
  button?: boolean;
  onSubmit?: (content: string) => void;
  onCancel?: () => void;
};

export const Card = ({ card, button = true, onSubmit, onCancel }: CardType) => {
  const [done, setDone] = useState<boolean>(card?.done ?? false);
  const [content, setContent] = useState<string>(card?.content ?? '');

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const closeWithSubmit = () => onSubmit?.(content);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') closeWithSubmit();
    if (e.key === 'Escape') onCancel?.();
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        closeWithSubmit();
      }
    };
    const id = setTimeout(
      () => document.addEventListener('click', handleClickOutside),
      0
    );
    return () => {
      clearTimeout(id);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [content]);

  return (
    <div
      style={{
        width: '273px',
        fontSize: '14px',
        fontFamily: 'Inter-Medium',
        color: '#AEA5A5',
        backgroundColor: '#F5F5F5',
        paddingTop: '10px',
        paddingBottom: '7px',
        paddingLeft: '10px',
        borderRadius: '4px',
        display: 'flex',
        gap: '7px',
      }}
    >
      <input
        ref={inputRef}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{
          width: '237px',
          border: 'none',
          backgroundColor: '#F5F5F5',
          fontFamily: 'Inter-Medium',
          color: '#AEA5A5',
        }}
      ></input>
      {button && (
        <button
          style={{
            marginTop: '3px',
            border: 'none',
            padding: '0px 0px',
            backgroundColor: '#F5F5F5',
          }}
          onClick={() => setDone(!done)}
        >
          {!done ? <img src={ellipse} /> : <img src={check} />}
        </button>
      )}
    </div>
  );
};
