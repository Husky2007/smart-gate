import React, { MouseEvent, useCallback, useState } from 'react';

import { RippleContainer } from './RippleEffect.styled';
import { Ripple, RippleEffectProps } from './RippleEffect.types';
import useDebouncedRippleCleanUp from './useDebounceRippleCleanUp';

const RippleEffect = ({ color = '#fff', duration = 850 }: RippleEffectProps) => {
  const [rippleArray, setRippleArray] = useState<Array<Ripple>>([]);
  const rippleTotals = rippleArray.length;
  useDebouncedRippleCleanUp(rippleTotals, duration, () => setRippleArray([]));

  const addRipple = useCallback(
    ({ currentTarget, pageX, pageY }: MouseEvent) => {
      const { width, height, x: containerX, y: containerY } = currentTarget.getBoundingClientRect();

      const size = width > height ? width : height;
      const x = pageX - containerX - width / 2;
      const y = pageY - containerY - width / 2;
      const newRipple = {
        id: rippleTotals,
        x,
        y,
        size,
      };

      setRippleArray((prevState) => [...prevState, newRipple]);
    },
    [rippleTotals],
  );

  return (
    <RippleContainer
      data-testid="rippleEffect"
      duration={duration}
      color={color}
      onMouseDown={addRipple}
    >
      {rippleTotals > 0 &&
        rippleArray.map(({ x, y, size, id }) => (
          <span
            key={`ripple_${id}`}
            style={{
              top: y,
              left: x,
              width: size,
              height: size,
            }}
          />
        ))}
    </RippleContainer>
  );
};

RippleEffect.displayName = 'RippleEffect';

export default RippleEffect;
