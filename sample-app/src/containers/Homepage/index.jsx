import React from 'react';
import CollapseTable from 'components/CollapseTable';
import MainCard from 'ui-component/cards/MainCard';

const App = () => {
  return (
    <MainCard title="Event log">
      <CollapseTable />
    </MainCard>
  );
};

export default App;
