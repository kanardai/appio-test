import { x } from '@xstyled/emotion';

type Props = {
  title: string;
  body: string;
};

export const Card = (p: Props) => {
  return (
    <x.div
      display='flex'
      flexDirection='column'
      w='cardWidth'
      h='cardHeight'
      borderStyle='solid'
      borderColor='hero'
      borderWidth='cardBorder'
      padding='topbarItemPadding'
      margin='10px'
    >
      <x.h3 fontSize='medium' color='primary' pt='buttonPX'>
        {p.title}
      </x.h3>
      <x.p fontSize='sm' color='copy' mt='noteTop'>
        {p.body}
      </x.p>
    </x.div>
  );
};
