import styled from 'styled-components';
import { FlexSection } from '.';

export const TripPlanSection = styled(FlexSection)`
  width: 1048px;
  margin: 0 auto;
  line-height: 1.5;
  margin-top: 7.2rem;
  margin-bottom: 9.6rem;
`;

export const HeadingName = styled.h3`
  margin-bottom: 1.2rem;
  font-size: 2.4rem;
  font-weight: 700;
`;

export const CityName = styled.h4`
  font-size: 2.4rem;
  font-weight: 700;
  padding-top: 1.6rem;
  padding-bottom: 0.8rem;
`;

export const PlanP = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2.4rem;
`;

export const PlanWrapper = styled.div`
  display: flex;
  justify-content: column;
  flex-wrap: wrap;
`;

export const CityWapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-right: ${props => props.right || '1.8rem'};
  margin-bottom: 1.8rem;
`;

export const CityImg = styled.img`
  width: 10rem;
  height: 10rem;
  border: none;
  border-radius: 0.375rem 0 0 0.375rem;
`;

export const CityPlan = styled.div`
  width: 23.7rem;
  height: 10rem;
  background: rgb(241, 242, 248);
  padding-left: 1.8rem;
  padding-right: 1.8rem;
  border-radius: 0 0.375rem 0.375rem 0;

  ul {
    display: flex;
    color: #ff7b59;
    font-weight: 700;

    li {
      &:nth-child(n + 2):before {
        content: '·';
        margin: 0.6rem;
        font-size: 1.2rem;
      }
      a:hover {
        color: #ff7b59;
      }
      span {
        font-size: 1.2rem;
      }
    }
  }
`;
