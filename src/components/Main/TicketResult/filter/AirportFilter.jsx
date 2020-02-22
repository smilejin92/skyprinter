import React from 'react';

const AirportFilter = props => {
  return (
    <dl>
      <div>
        <dt>
          <button>
            <span>공항</span>
            <svg></svg>
          </button>
        </dt>
        <dd>
          <div>
            <label>
              <input type="checkbox" />
              출국 및 입국 시 <b>같은 공항</b>이용
            </label>
          </div>
          <div>
            <p>도착지</p>
            <div>
              <label>
                <input type="checkbox" />
                출국 및 입국 시 <b>같은 공항</b>이용
              </label>
              <p>뉴욕 뉴왁</p>
            </div>
            <div>
              <label>
                <input type="checkbox" />
                출국 및 입국 시 <b>같은 공항</b>이용
              </label>
              <p>뉴욕 존에프케네디</p>
            </div>
            <div>
              <label>
                <input type="checkbox" />
                출국 및 입국 시 <b>같은 공항</b>이용
              </label>
              <p>뉴욕 라과디아</p>
            </div>
          </div>
        </dd>
      </div>
    </dl>
  );
};

export default AirportFilter;
