// @ts-nocheck

import { useMachine } from "@xstate/react";
import { myMachine } from "@/machines/myFirstMachine";
import { NextPage } from "next";

const Home: NextPage = () => {
  const [state, send] = useMachine(myMachine);

  return (
    <div>
      {json.stringify(state.value)}

      <button onClick={() => send('MOUSEHOVER')}>HOVER</button>
    </div>
  );
}

export default Home
