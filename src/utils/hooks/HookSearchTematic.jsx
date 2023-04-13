import { useState, useMemo } from 'react';

const HookSearchTematic = (listTematic) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTematic = useMemo(() => {
    return listTematic.filter(
      (value) => value.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [listTematic, searchTerm]);

  return [searchTerm, setSearchTerm, filteredTematic];
};

export default HookSearchTematic;
