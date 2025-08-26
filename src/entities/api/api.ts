export const getProjects = async () => {
  const res = await fetch('./projects.json');
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    return null;
  }
};

export const getColumns = async () => {
  const res = await fetch('./columns.json');
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    return null;
  }
};

export const getCards = async () => {
  const res = await fetch('./cards.json');
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    return null;
  }
};
