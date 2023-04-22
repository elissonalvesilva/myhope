import { HiOutlineInformationCircle } from 'react-icons/hi';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';
import { useCallback, useContext, useEffect, useState } from 'react';

import Container from "../../components/Container";
import {
  Content,
  Header,
  Info,
  CurrentRank,
  LoadingMore,
} from "./style";

import UserList from '../../components/UserList';
import { UserContext } from '../../contexts/UserContext';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { configEnv } from '../../config';
import Loading from '../../components/Loading';
import {
  Champions,
  Champion,
} from "./style";

import crown from '../../assets/crown.gif';
import user2 from '../../assets/user2.jpg';

export default function Ranking() {
  const [user, storeUser] = useContext(UserContext);
  const [token, setToken] = useContext(AuthenticationContext);
  const [userRanking, setUsersRanking] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const options = {
    root: null,
    rootMargin: "30px",
    threshold: 1.0
  };
  const { ref, inView } = useInView(options);
  const [isRenderAll, setIsRenderAll] = useState(false);
  const [isInitial, setIsInitial] = useState(false);
  const limit = 10;
  const [isLoading, setIsLoading] = useState(true);

  const sendQuery = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`${configEnv.MYHOPE_API}/user/ranking`, {
        limit,
        page: currentPage,
      }, { headers: {
        Authorization: `Bearer ${token}`
      }});

      if(data.total < (data.page + limit)){
        setIsRenderAll(true);
      }
      setCurrentPage(data.page + 1);
      setIsInitial(true);
      setUsersRanking((prev) => [...prev, ...data.users]);
      setIsLoading(false);
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    if(inView && !isRenderAll && isInitial) {
      sendQuery();
    }
  }, [inView])

  useEffect(() => {
    if(!isInitial && isLoading) {
      sendQuery();
    }
  }, [isInitial, isLoading])

  return(
    <>
    {
      isLoading && (
        <Loading isActive={isLoading} />
      )
    }
    <Container>
      <Content>
        <Header>
          <h1>Ranking</h1>
          <Info>
            <span>Como funciona ?</span>
            <HiOutlineInformationCircle className='icon'/>
          </Info>
        </Header>
        <Champions>
          {
            userRanking.slice(0, 3).map((user, index) => {

              const className = {
                1: 'first',
                2: 'second',
                3: 'third',
              }[user.position]

              return (
                <Champion className={className} key={index}>
                  {
                    user.position === 1 ? (
                      <div className='crown'>
                        <img src={crown} className='crown-winner' alt='crown' />
                      </div>
                    ) : null
                  }
                  <img src={user2} className='user-avatar' alt='user avatar' />
                  <span className='place'>{user.position}</span>
                  <span className='name'>{user.name}</span>
                </Champion>
              )
            })
          }
        </Champions>
        <CurrentRank>
          <h2>Sua posição atual</h2>
          <span className='position'>{user.position}</span>
        </CurrentRank>
        <UserList users={userRanking} reference={null}/>
        <LoadingMore ref={ref}>Carregando mais usuarios...</LoadingMore>
      </Content>
    </Container>
    </>
  )
}