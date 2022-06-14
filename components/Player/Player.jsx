import usePlayer from './usePlayer';
import LargeBlock from '../LargeBlock';
import PlayerControls from './PlayerControls';

const Player = ({ context, children, ...props }) => {
  return (
    <LargeBlock flex>
        { children }
        <PlayerControls context={context} />
    </LargeBlock>
  );

}

export default Player
