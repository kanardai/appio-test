import { x } from '@xstyled/emotion';

const react_icon = require('../../images/react-logo.png') as string;

export const Logo = () => {
  return (
    <x.div>
      <x.img src={react_icon} alt='react-icon' h='logoHeight' />
    </x.div>
  );
};
