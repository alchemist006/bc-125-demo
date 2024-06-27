import React from 'react';
import AdverseActionsTable from '.';
import { adverseActionsTableData } from '../../../mocks/mockData';

export default {
  title: 'organisms/Table',
  component: AdverseActionsTable,
  parameters: {
    layout: 'centered',
  },
};
  
export const AdverseActionTable = () => (
  <AdverseActionsTable
    adverseActionTableData={adverseActionsTableData}
    width="100%"
  />
);
