import plus from '../../assets/images/plus.svg';

export const AddButton = () => {
  return (
    <button
      style={{
        padding: '0px',
        border: 'none',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '10px',
        gap: '5px',
      }}
    >
      <img src={plus} />
      <span
        style={{
          color: '#AEA5A5',
          fontSize: '14px',
          fontFamily: 'Inter-Medium',
        }}
      >
        Добавить элемент
      </span>
    </button>
  );
};
