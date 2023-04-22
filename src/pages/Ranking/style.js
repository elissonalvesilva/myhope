import styled from 'styled-components';

import { Colors } from '../../styles/colors';
 
const Content = styled.div`
  padding: 15px 24px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    color: ${Colors.White};
    font-size: 32px;
    font-weight: bold;
  }
`

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
  span {
    color: ${Colors.White};
    margin-right: 5px;
    font-size: 14px;
    font-weight: 300;
  }
  .icon {
    color: ${Colors.Purple};
    font-size: 26px;
  }
`;

const Champions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 60px;
`;

const Champion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  &.first {
    flex-grow: 3;
    position: relative;
    top: -49px;
    .crown {
      width: 70px;
      height: 58px;
      .crown-winner {
        width: 70px;
        height: 70px;
      }
    }
    .place {
      position: relative;
      bottom: 12px;
      padding: 5px 10px;
      background-color: #FEC828;
      box-shadow: 1px 1px 20px 3px rgba(242, 227, 7, 0.3);
    }
    .user-avatar {
      width: 120px;
      height: 120px;
      border: 5px solid #FEC828;
      box-shadow: 1px 1px 20px 3px rgba(242, 227, 7, 0.3);
    }
  }
  &.second {
    flex-grow: 1;
    .place {
      display: inline-block;
      position: relative;
      bottom: 12px;
      background-color: ${Colors.Green};
      box-shadow: 1px 1px 20px 3px rgba(100, 203, 169, 0.4);
    }
    .user-avatar {
      width: 80px;
      height: 80px;
      border: 5px solid ${Colors.Green};
      box-shadow: 1px 1px 20px 3px rgba(100, 203, 169, 0.4);
    }
  }
  &.third {
    flex-grow: 1;
    .place {
      position: relative;
      bottom: 12px;
      background-color: ${Colors.Purple};
      box-shadow: 1px 1px 20px 3px rgba(139, 65, 242, 0.4);
    }
    .user-avatar {
      width: 80px;
      height: 80px;
      border: 5px solid ${Colors.Purple};
      box-shadow: 1px 1px 20px 3px rgba(139, 65, 242, 0.4);
    }
  }
  .place {
    position: relative;
    top: -15px;
    padding: 5px 8px;
    border-radius: 50%;
    color: ${Colors.BackgroundColorPrimary};
    font-weight: bold;
    font-size: 14px;
  }
  .name {
    color: ${Colors.White};
    font-size: 12px;
    font-weight: 300;
    text-align: center;
    max-width: 90px;
    height: 20px;
    max-height: 60px;
    word-wrap: break-word;
    text-overflow: break-all;
  }
  .user-avatar {
    border-radius: 50%;
    object-fit: cover;
  }
`

const CurrentRank = styled.div`
  margin-top: -10px;
  background: linear-gradient(to right, #9F41FE 0%, 29.228591918945312%, #857FD7 58.457183837890625%, 79.22859191894531%, #64CBA9 100%);
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  color: ${Colors.White};
  border-radius: 15px;
  align-items: center;
  font-size: 14px;
  .position {
    font-weight: bold;
  }
`

const LoadingMore = styled.p`
  color: ${Colors.White};
  position: relative;
  bottom: calc(40vh - 100vh);
`

export {
  Content,
  Header,
  Info,
  Champions,
  Champion,
  CurrentRank,
  LoadingMore,
}