import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import uuid from 'uuid';

const SelectArrageStandard = styled.div`
  display: flex;
  align-items: center;
`;

const ArrangeSortButtonWapper = styled.div`
  display: block;
  margin-bottom: 1.2rem;
  height: 10rem;
  width: 100%;
  background: #fff;
  border-radius: 0.6rem 0.6rem;
`;

const SortPriceButton = styled.button`
  padding: 1.2rem 1.8rem;
  width: 33.3%;
  text-align: left;
  ${({ toggle, id }) =>
    toggle
      ? css`
          border-radius: ${id === 'mostCheapest'
            ? '0.4rem 0 0 0.4rem'
            : id === 'departure'
            ? '0 0.4rem 0.4rem 0'
            : 'none'};
          background: #042759;

          span {
            color: #fff;
          }
          p {
            color: #fff;
          }
        `
      : css`
          span {
            color: #0770e3;
          }
        `}
  p {
    font-size: 1.2rem;
  }

  span {
    font-weight: 700;
    font-size: 2.4rem;
  }

  &:nth-child(2n) {
    border-right: 0.5px solid #ddddef;
    border-left: 0.5px solid #ddddef;
  }
`;

function Sorts() {
  const [sort, setSort] = useState([
    {
      id: 'mostCheapest',
      name: '최저가순',
      price: null,
      time: null,
      toggle: true
    },
    {
      id: 'shortTrip',
      name: '최단여행시간순',
      price: null,
      time: null,
      toggle: false
    },
    {
      id: 'departure',
      name: '출국:출발시간',
      price: null,
      time: null,
      toggle: false
    }
  ]);
  const changeSort = id => {
    if (id === 'mostCheapest') {
      const params = {
        sortType: 'duration',
        sortOrder: 'asc'
      };
      getFlight(params);
      setSort(prevFilter =>
        prevFilter.map(filterItem =>
          filterItem.id === id
            ? { ...filterItem, toggle: true }
            : { ...filterItem, toggle: false }
        )
      );
    } else if (id === 'shortTrip') {
      const params = {
        sortType: 'duration',
        sortOrder: 'asc'
      };
      getFlight(params);
      setSort(prevFilter =>
        prevFilter.map(filterItem =>
          filterItem.id === id
            ? { ...filterItem, toggle: true }
            : { ...filterItem, toggle: false }
        )
      );
    } else if (id === 'departure') {
      const params = {
        sortType: 'duration',
        sortOrder: 'asc'
      };
      getFlight(params);
      setSort(prevFilter =>
        prevFilter.map(filterItem =>
          filterItem.id === id
            ? { ...filterItem, toggle: true }
            : { ...filterItem, toggle: false }
        )
      );
    } else {
      setSort(prevFilter =>
        prevFilter.map(filterItem => ({ ...filterItem, toggle: false }))
      );
    }
  };

  const selectTypeSort = ({ target }) => {
    if (target.value === '최단여행시간순') {
      const params = {
        sortType: 'duration',
        sortOrder: 'asc'
      };
      getFlight(params);
    } else if (target.value === '출국:출발시간') {
      const params = {
        sortType: 'outbounddeparttime',
        sortOrder: 'asc'
      };
      getFlight(params);
    } else if (target.value === '귀국:출발시간') {
      const params = {
        sortType: 'inbounddeparttime',
        sortOrder: 'asc'
      };
      getFlight(params);
    } else {
      const params = {
        sortType: 'price',
        sortOrder: 'asc'
      };
      getFlight(params);
    }

    setSort(prevFilter =>
      prevFilter.map(filterItem =>
        filterItem.name === target.value
          ? { ...filterItem, toggle: true }
          : { ...filterItem, toggle: false }
      )
    );
  };

  const getFlight = async params => {
    const SESSION_KEY = 'fd6860da-6ff4-47e2-a396-6a6f56eaab88';
    const POLL_URL = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/${SESSION_KEY}`;

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '6add32701fmsh97fc79500331376p15b684jsn8ec7fcda9082'
    };

    while (true) {
      const { data } = await axios.get(POLL_URL, {
        params,
        headers
      });

      console.log('2', data);
      if (data.Status === 'UpdatesComplete') break;
    }
  };

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const params = {
  //         sortType: 'price',
  //         sortOrder: 'asc'
  //       };
  //       getFlight(params);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   })();
  // }, [setFilter,filter]);

  return (
    <>
      <SelectArrageStandard>
        <label htmlFor="arrangedStandard">정렬기준</label>
        {console.log(sort)}
        {console.log('ada', sort.filter(filterItem => filterItem.toggle)[0])}
        <select
          value={
            sort.filter(filterItem => filterItem.toggle)[0]
              ? sort.filter(filterItem => filterItem.toggle)[0].name
              : '귀국:출발시간'
          }
          id="arrangedStandard"
          onChange={selectTypeSort}
        >
          <option value="최저가순">최저가순</option>
          <option value="최단여행시간순">최단여행시간순</option>
          <option value="출국:출발시간">출국:출발시간</option>
          <option value="귀국:출발시간">귀국:출발시간</option>
        </select>
      </SelectArrageStandard>

      <ArrangeSortButtonWapper>
        {sort.map(filterItem => (
          <SortPriceButton
            key={uuid.v4()}
            id={filterItem.id}
            toggle={filterItem.toggle}
            onClick={() => changeSort(filterItem.id)}
            className={filterItem.toggle ? 'active' : null}
          >
            <p>{filterItem.name}</p>
            <span>₩533,800</span>
            <p>{`${filterItem.time}`}</p>
          </SortPriceButton>
        ))}
      </ArrangeSortButtonWapper>
    </>
  );
}
export default Sorts;
