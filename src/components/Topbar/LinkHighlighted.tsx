import { x } from '@xstyled/emotion';

type Props = {
  children: string;
};

export const LinkHighlighted = (p: Props) => {
  return (
    <x.div
      fontWeight='bolder'
      color='dark'
      bg='magenta'
      px='topbarItemPadding'
      minHeight='topbar'
      display='flex'
      alignItems='center'
    >
      {p.children}
    </x.div>
  );
};
