import type React from 'react';

type BlockType = {
  content?: React.ReactNode;
  Component?: React.ComponentType;
  shrink?: boolean;
};

export const Block = ({ content, Component, shrink = false }: BlockType) => {
  const base: React.CSSProperties = {
    backgroundColor: 'white',
    boxShadow: '0px 4px 4px 0px rgb(0 0 0 / 0.2)',
    borderRadius: '13px',
    padding: '5px 32px 20px 22px',
    flex: '0 0 auto',
    display: 'inline-flex',
    flexDirection: 'column',
  };

  const style: React.CSSProperties = shrink
    ? { ...base, width: 'max-content' }
    : { ...base, width: 272 };

  return (
    <div style={style}>
      {content}
      {Component && <Component />}
    </div>
  );
};
