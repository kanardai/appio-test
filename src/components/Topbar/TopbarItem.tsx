import { x } from '@xstyled/emotion';

type Props = {
  children: string;
};

export const TopbarItem = (p: Props) => {
  return (
    <x.li fontSize='sm' px='20'>
      <x.a
        href=''
        textDecoration={{ '&': 'none', '&:hover': 'underline' }}
        color='primary'
      >
        {p.children}
      </x.a>
    </x.li>
  );
};
