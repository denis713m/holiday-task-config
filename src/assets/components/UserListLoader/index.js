import { appendById, loadJSON } from '../../../utils';
import createUsersList          from '../UsersList';

loadJSON( './data/employees.json' )
  .then( (employees) => {
    if (Array.isArray( employees )) {
      appendById( 'teamContainer', createUsersList( employees ) );
    }
  } );