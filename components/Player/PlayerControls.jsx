import {
  PlayIcon,
  PauseIcon,
  RefreshIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/solid";

// context comes from usePlayer()
const PlayerControls = ({ context, ...props }) => {
  let { actions, models } = context;

  return (
    <div className="flex flex-row gap-x-4">
      <button
        className="rounded-md bg-mine-shaft-100 p-2 dark:bg-mine-shaft-600"
        onClick={actions.toggle}
      >
        {models.isPlaying ? (
          <PauseIcon className="h-6 w-6 text-mine-shaft-500 dark:text-mine-shaft-200" />
        ) : (
          <PlayIcon className="h-6 w-6 text-mine-shaft-500 dark:text-mine-shaft-200" />
        )}
      </button>

      <button className="rounded-md bg-mine-shaft-100 p-2 dark:bg-mine-shaft-600" onClick={actions.reset}>
        <RefreshIcon className="h-6 w-6 text-mine-shaft-500 dark:text-mine-shaft-200" />
      </button>

      <button className="rounded-md bg-mine-shaft-100 p-2 dark:bg-mine-shaft-600">
        <ArrowLeftIcon className="h-6 w-6 text-mine-shaft-500 dark:text-mine-shaft-200" onClick={actions.prev}/>
      </button>
      <button className="rounded-md bg-mine-shaft-100 p-2 dark:bg-mine-shaft-600">
        <ArrowRightIcon className="h-6 w-6 text-mine-shaft-500 dark:text-mine-shaft-200" onClick={actions.next} />
      </button>
      <div className="rounded-md bg-mine-shaft-100 p-2 dark:bg-mine-shaft-600">
        <span className="h-6 px-2 text-lg text-mine-shaft-500 dark:text-mine-shaft-200">
          {models.activeStepIndex + 1} / {models.steps.length}
        </span>
      </div>
    </div>
  );
};

export default PlayerControls;
