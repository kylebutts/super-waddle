import { useState } from 'react'
import useInterval from '@use-it/interval'

const defaultSettings = {
  delay: 400,
}

export function usePlayer(steps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [settings, setSettings] = useState(defaultSettings)

  useInterval(
    () => {
      if (activeStepIndex < steps.length - 1) {
        setActiveStepIndex((index) => index + 1)
      } else {
        setIsPlaying(false)
      }
    },
    isPlaying ? settings.delay : null
  )

  const toggle = () => {
    if (activeStepIndex === steps.length - 1) {
      reset()
    }
    setIsPlaying((playing) => !playing)
  }

  const reset = () => {
    setIsPlaying(false)
    setActiveStepIndex(0)
  }

  const next = () => {
    if (activeStepIndex < steps.length - 1) {
      setActiveStepIndex((index) => index + 1)
    }
  }

  const prev = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex((index) => index - 1)
    }
  }

  return {
    models: {
      state: steps[activeStepIndex],
      activeStepIndex,
      isPlaying,
      steps,
      settings,
    },
    actions: {
      reset,
      toggle,
      next,
      prev,
      setSettings,
    },
  }
}
