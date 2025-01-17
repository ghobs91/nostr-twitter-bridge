import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroTwoButton } from '../hero/HeroTwoButton';
import { Section } from '../layout/Section';
import Popup from '../popup/Popup';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="pt-20 pb-32">
      <HeroTwoButton
        title={
          <>
            {'Find your '} <span className="text-gray-600">twitter</span>{' '}
            {' follows on '}{' '}
            <a
              href="https://github.com/nostr-protocol/nostr"
              target="_blank"
              rel="noreferrer"
              className="text-nostr-light"
            >
              nostr
            </a>
            {/* {'\n'} */}
            {/* <span className="text-primary-500">React developers</span> */}
          </>
        }
        description={
          <>
            Add your nostr public key to the directory so your followers can
            find you at{' '}
            <span className="text-nostr-light">
              yourtwitterhandle@nostr.directory
            </span>
          </>
        }
        button={
          <Link href="https://twitter.com/intent/tweet?text=Verifying%20my%20account%20on%20nostr%0A%0AMy%20Public%20Key%3A%20%22Paste%20your%20nostr%20public%20key%20here%22%0A%0AFind%20others%20at%20https%3A%2F%2Fnostr.directory%20%40nostrdirectory%20%23nostr">
            <a target="_blank" rel="noreferrer" className="m-2">
              <Button xl>1. Tweet your nostr pubkey</Button>
            </a>
          </Link>
        }
        // button2={
        //   <Link href="https://www.nostr.net">
        //     <a target="_blank" rel="noreferrer" className="m-2">
        //       <OutlinedButton xl>Find a Client. Join nostr.</OutlinedButton>
        //     </a>
        //   </Link>
        // }
        button3={
          <Popup buttonText="2. Verify your pubkey on nostr" />
          // <OutlinedButton xl>Verify your pubkey on nostr</OutlinedButton>
        }
      />
    </Section>
  </Background>
);

export { Hero };
