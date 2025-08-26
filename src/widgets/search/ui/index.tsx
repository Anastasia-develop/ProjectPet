import searchWindow from '../../../shared/assets/images/search.svg';
import x from '../../../shared/assets/images/x.svg';
import './style.css';

type SearchType = {
  find: string;
  setFind: (value: React.SetStateAction<string>) => void;
};

export const Search = ({ find, setFind }: SearchType) => {
  return (
    <div style={{ position: 'relative', display: 'inline-flex' }}>
      <input
        id="user-search"
        name="search"
        type="text"
        autoComplete="off"
        value={find}
        onChange={(e) => {
          setFind(e.target.value);
        }}
        placeholder="Поиск"
        className="search-input"
      />
      <img
        src={searchWindow}
        style={{ position: 'absolute', left: '18px', top: '9px' }}
      />
      {find && (
        <img
          src={x}
          style={{
            position: 'absolute',
            right: '18px',
            top: '9px',
            cursor: 'pointer',
          }}
          onClick={() => setFind('')}
        />
      )}
    </div>
  );
};
