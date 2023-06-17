import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './Row';
import moment from 'moment/moment';

function createData(
  id_address,
  entity_table,
  request_url,
  description,
  action_name_tag,
  status,
  attribute_change_id,
  timestamp)
  {
  return {
    id_address,
    entity_table,
    request_url,
    description,
    action_name_tag,
    status,
    attribute_change_id,
    timestamp,
  };
}

const rows = [
  createData(
    '1.53.6.147',
    'quizzes',
    'localhost:3001/quiz/add',
    'Add more quizzes',
    2,
    1,
    [1,2,3,4],
    moment().format('YYYY-MM-DD\th:mm:ss')
  ),
  createData(
    '1.23.5.117',
    'questions',
    'localhost:3001/questions/add',
    'Add more quizzes',
    2,
    1,
    [1,2,3,4],
    moment().format('YYYY-MM-DD\th:mm:ss')
  ),
  createData(
    '1.52.6.347',
    'quizzes',
    'localhost:3001/quiz/add',
    'Add more quizzes',
    2,
    1,
    [1,2,3,4],
    moment().format('YYYY-MM-DD\th:mm:ss')
  ),
  createData(
    '1.52.6.347',
    'quizzes',
    'localhost:3001/quiz/add',
    'Add more quizzes',
    2,
    1,
    [1,2,3,4],
    moment().format('YYYY-MM-DD\th:mm:ss')
  ),
  createData(
    '1.52.6.347',
    'quizzes',
    'localhost:3001/quiz/add',
    'Add more quizzes',
    2,
    1,
    [1,2,3,4],
    moment().format('YYYY-MM-DD\th:mm:ss')
  ),
  createData(
    '1.52.6.347',
    'quizzes',
    'localhost:3001/quiz/add',
    'Add more quizzes',
    2,
    1,
    [1,2,3,4],
    moment().format('YYYY-MM-DD\th:mm:ss')
  ),
  createData(
    '1.52.6.347',
    'quizzes',
    'localhost:3001/quiz/add',
    'Add more quizzes',
    2,
    1,
    [1,2,3,4],
    moment().format('YYYY-MM-DD\th:mm:ss')
  ),
];

export default function CollapseTable() {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '360px' }}>
      <Table aria-label="collapsible table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell className='th-bold' align="center">IP address</TableCell>
            <TableCell className='th-bold' align="center">Entity table</TableCell>
            <TableCell className='th-bold' align="center">Request URL</TableCell>
            <TableCell className='th-bold' align="center">Description</TableCell>
            <TableCell className='th-bold' align="center">Action</TableCell>
            <TableCell className='th-bold' align="center">Status</TableCell>
            <TableCell className='th-bold' align="center">Changed by</TableCell>
            <TableCell className='th-bold' align="center">Timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <Row key={idx} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}