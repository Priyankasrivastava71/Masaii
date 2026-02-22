function createCountdown(seconds, onTick, onComplete) {
  let remaining = seconds;
  let timerId = null;
  let isPaused = false;
  let expectedTime = Date.now() + 1000;

  function tick() {
    if (isPaused) return;

    const drift = Date.now() - expectedTime;
    expectedTime += 1000;

    remaining--;

    if (remaining >= 0) {
      onTick(remaining);
    }

    if (remaining <= 0) {
      onComplete();
      return;
    }

    timerId = setTimeout(tick, Math.max(0, 1000 - drift));
  }

  timerId = setTimeout(tick, 1000);

  return {
    pause() {
      isPaused = true;
      clearTimeout(timerId);
    },
    resume() {
      if (!isPaused) return;
      isPaused = false;
      expectedTime = Date.now() + 1000;
      timerId = setTimeout(tick, 1000);
    }
  };
}

