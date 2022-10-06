import { x } from '@xstyled/emotion';
import { ButtonFA } from './ButtonFA';
import { HeadingNote } from './HeadingNote';

export const Hero = () => {
  return (
    <x.div
      bg='hero'
      h='heroHeight'
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <x.div fontSize='xlg' color='white' pt='heroLarge'>
        Nauč se React s námi!
      </x.div>
      <HeadingNote>
        Sérií místa by dostal stopa kotel soudí byl, miliony obou
        v superexpoloze s oborechjednou hibernujícím výborná slavný.
      </HeadingNote>

      <ButtonFA>C2A Fun Academy</ButtonFA>
    </x.div>
  );
};
