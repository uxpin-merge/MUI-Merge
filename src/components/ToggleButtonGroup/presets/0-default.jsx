import ToggleButtonGroup from '../ToggleButtonGroup';
import ToggleButton from '../../ToggleButton/ToggleButton';
import Icon from '../../Icon/Icon';

export default (
  <ToggleButtonGroup uxpId="Toggle-Button-Group-1">
    <ToggleButton uxpId="Toggle-Button-1" value="home">
      <Icon uxpId="Toggle-Button-Icon1">home</Icon>
    </ToggleButton>
    <ToggleButton uxpId="Toggle-Button-2" value="star">
      <Icon uxpId="Toggle-Button-Icon2">star</Icon>
    </ToggleButton>
    <ToggleButton uxpId="Toggle-Button-3" value="navigation" >
      <Icon uxpId="Toggle-Button-Icon3">navigation</Icon>
    </ToggleButton>
  </ToggleButtonGroup>
);
