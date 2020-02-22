import React from 'react';

const DurationFilter = props => {
  return (
    <dl>
      <div>
        <dt>
          <button>
            <span>총 소요시간</span>
            <svg></svg>
          </button>
        </dt>
        <dd>
          <div>
            <div>
              <p>14.5시간 - 61.5시간</p>
            </div>
            <div>슬라이더</div>
          </div>
        </dd>
      </div>
    </dl>
  );
};

export default DurationFilter;
