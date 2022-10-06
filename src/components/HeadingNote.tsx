import { x } from '@xstyled/emotion';

type Props = {
  children: string;
};

export const HeadingNote = (p: Props) => {
  return (
    <x.div
      color='copy'
      fontSize='note'
      w='noteWidth'
      textAlign='center'
      mt='noteTop'
    >
      {p.children}
    </x.div>
  );
};
