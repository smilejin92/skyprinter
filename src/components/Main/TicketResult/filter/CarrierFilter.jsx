import React from 'react';

const CarrierFilter = props => {
  return (
    <dl>
      <div>
        <dt>
          <button>
            <span>항공사</span>
            <svg></svg>
          </button>
        </dt>
        <dd>
          <div>
            <button>모두선택</button>|<button>모두 지우기</button>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              대한항공
            </label>
            <span>₩1177800</span>
          </div>
        </dd>
      </div>
    </dl>
  );
};

export default CarrierFilter;
