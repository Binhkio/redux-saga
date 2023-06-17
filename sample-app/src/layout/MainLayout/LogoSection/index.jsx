import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import actions from 'redux/actions';
import config from '../../../config';
import Logo from '../../../ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //

function LogoSection() {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();
  return (
    <ButtonBase
      disableRipple
      onClick={() => dispatch({ type: actions.theme.MENU_OPEN, id: defaultId })}
      component={Link}
      to={config.defaultPath}
    >
      <Logo />
    </ButtonBase>
  );
}

export default LogoSection;
