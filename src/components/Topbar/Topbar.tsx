import { x } from '@xstyled/emotion';
import { LinkHighlighted } from './LinkHighlighted';
import { Logo } from './Logo';
import { TopbarItem } from './TopbarItem';

export const Topbar = () => {
  return (
    <x.div
      color='primary'
      bg='dark'
      w='fullWidth'
      h='topbar'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <x.div
        w='large'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Logo />

        <x.div h='19px'>
          <x.ul display='flex' listStyleType='none'>
            <TopbarItem>Objevuj</TopbarItem>
            <TopbarItem>Nauč se</TopbarItem>
            <TopbarItem>Otestuj se</TopbarItem>
            <TopbarItem>Pracuj</TopbarItem>
          </x.ul>
        </x.div>

        <LinkHighlighted>Pracuj v Reactu</LinkHighlighted>
      </x.div>
    </x.div>
  );
};
