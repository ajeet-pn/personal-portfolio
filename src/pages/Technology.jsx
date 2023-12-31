import React from 'react';

import  BallCanvas  from '../canvas/ball';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className="flex justify-center flex-wrap gap-10">
      {technologies?.map((technology, index) => (
        <div key={index} className="w-28 h-28">
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;