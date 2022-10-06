import { x } from '@xstyled/emotion';
import { HeadingNote } from './HeadingNote';
import { cardData } from '../data/cardData';
import { Card } from './Card';

export const SectionOne = () => {
  return (
    <x.div
      h='fullHeight'
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <x.h2 fontSize='h2' color='white' pt='heroLarge'>
        H2 Card stories
      </x.h2>

      <HeadingNote>
        Sérií místa by dostal stopa kotel soudí byl, miliony obou
        v superexpoloze s oborechjednou hibernujícím výborná slavný.
      </HeadingNote>

      <x.div
        mt='noteTop'
        display='flex'
        w='large'
        justifyContent='center'
        flexWrap='wrap'
      >
        {cardData.map((data) => (
          <Card title={data.title} body={data.body} />
        ))}
      </x.div>
    </x.div>
  );
};
