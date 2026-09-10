import { App } from './App';
import { useState } from 'react';
import { Provider } from 'react-redux';

export default function MainSetup() {
  const [stateFilter, usestateFilter] = useState<boolean>(true); ///обновление фильтров
  const changeFilter = () => usestateFilter(!stateFilter);

  return stateFilter ? (
    <div>
      <App funfilter={changeFilter}></App>
    </div>
  ) : (
    <App funfilter={changeFilter}></App>
  );
}
