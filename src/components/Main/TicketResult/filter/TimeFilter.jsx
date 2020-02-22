import React from 'react';

const TimeFilter = props => {
  return (
    <dl>
      <div>
        <dt>
          <button>
            <span>출발 시간대 설정</span>
            <svg></svg>
          </button>
        </dt>
        <dd>
          <div>
            <div>
              <b>가는날 출발 시간</b>
              <p>오전 12:00 - 오후 11:59</p>
              <div>슬라이더</div>
            </div>
            <div>
              <b>오는날 출발 시간</b>
              <p>오전 12:00 - 오후 11:59</p>
              <div>슬라이더</div>
            </div>
          </div>
        </dd>
      </div>
    </dl>
  );
};

export default TimeFilter;
