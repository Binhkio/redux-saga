import React from 'react';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import ShorterTooltip from 'components/ShorterTooltip';
import Tag from 'components/Tag';
import moment from 'moment';
import UserModal from '../UserModal';

const fakeData = [
  {
    field_name: 'Name',
    old_value: 'This is an old name',
    new_value: 'This is a new name',
    value_type: 'String',
    timestamp: moment().format('YYYY-MM-DD\th:mm:ss'),
  },
  {
    field_name: 'Number of questions',
    old_value: 12,
    new_value: 50,
    value_type: 'Number',
    timestamp: moment().format('YYYY-MM-DD\th:mm:ss'),
  },
  {
    field_name: 'Description',
    old_value: 'This is an old description',
    new_value: 'This is a new description',
    value_type: 'String',
    timestamp: moment().format('YYYY-MM-DD\th:mm:ss'),
  },
]

export const Row = ({ row, changeColor }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <ShorterTooltip content={row.id_address}/>
        </TableCell>
        <TableCell align="center">
          <ShorterTooltip content={row.entity_table}/>
        </TableCell>
        <TableCell align="center">
          <ShorterTooltip content={row.request_url} maxLength={20}/>
        </TableCell>
        <TableCell align="center">
          <ShorterTooltip content={row.description}/>
        </TableCell>
        <TableCell align="center">
          <Tag type="action" choice={row.action_name_tag} />
        </TableCell>
        <TableCell align="center">
          <Tag type="status" choice={row.status} />
        </TableCell>
        <TableCell align="center">
          <UserModal name='demo user' />
        </TableCell>
        <TableCell align="center">{row.timestamp}</TableCell>
      </TableRow>
      <TableRow sx={{ backgroundColor: '#fcfcfc' }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom component="div">
                Attribute log
              </Typography>
              <Table size="small" sx={{ width: '100%' }} aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className='th-bold' align="left">Field name</TableCell>
                    <TableCell className='th-bold' align="left">Old value</TableCell>
                    <TableCell className='th-bold' align="left">New value</TableCell>
                    <TableCell className='th-bold' align="center">Type of value</TableCell>
                    <TableCell className='th-bold' align="center">Timestamp</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {fakeData.map((attr, index) => (
                    <TableRow key={index}>
                      <TableCell align="left">
                        <ShorterTooltip content={attr.field_name} maxLength={20}/>
                      </TableCell>
                      <TableCell align="left">
                        <ShorterTooltip content={attr.old_value} maxLength={20}/>
                      </TableCell>
                      <TableCell align="left">
                        <ShorterTooltip content={attr.new_value} maxLength={20}/>
                      </TableCell>
                      <TableCell align="center">{attr.value_type}</TableCell>
                      <TableCell align="center">{attr.timestamp}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    id_address: PropTypes.string.isRequired,
    entity_table: PropTypes.string.isRequired,
    request_url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    action_name_tag: PropTypes.number.isRequired,
    status: PropTypes.number.isRequired,
    attribute_change_id: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
};