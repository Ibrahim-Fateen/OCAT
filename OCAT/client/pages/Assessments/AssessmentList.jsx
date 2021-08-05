import React, { useEffect, useMemo, useState } from 'react';
import { useTable } from 'react-table';
import { AssessmentService } from '../../services/AssessmentService';

export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);

  const COLUMNS = [
    {
      Header: `Cat Name`,
      accessor: `cat_name`,
    },
    {
      Header: `Cat Date of Birth`,
      accessor: `cat_date_of_birth`,
    },
    {
      Header: `Risk Level`,
      accessor: `risk_level`,
    },
    {
      Header: `Score`,
      accessor: `score`,
    },
    {
      Header: `Created at`,
      accessor: `created_at`,
    },
    {
      Header: `Delete assessment`,
    },
  ];

  // fetch all assessments using the AssessmentService.getList function from OCAT/client/services/AssessmentService.js
  useEffect(() => {
    const fetchAssessments = async () => {
      setAssessments(await AssessmentService.getList());
    };
    fetchAssessments();
  }, []);

  const columns = useMemo(() => COLUMNS, []);

  const tableInstance = useTable({
    columns,
    data: assessments,
  });

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
  } = tableInstance;

  return (
    <div class="table-responsive">
      <table {...getTableProps()} class="table table-bordered table-hover">
        <thead>
          {headerGroups.map(headerGroup =>
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column =>
                <th {...column.getHeaderProps()}>{column.render(`Header`)}</th>)}
            </tr>)}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => <td {...cell.getCellProps()}>{cell.render(`Cell`)}</td>)}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
