import { x } from '@xstyled/emotion';

type Props = {
  children: string;
};

export const ButtonFA = (p: Props) => {
  return (
    <x.button
      bg='primary'
      color='dark'
      fontWeight='bolder'
      px='buttonPX'
      py='buttonPY'
      fontSize='button'
      mt='buttonPX'
    >
      {p.children}
    </x.button>
  );
};
