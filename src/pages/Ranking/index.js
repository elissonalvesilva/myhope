import { HiOutlineInformationCircle } from 'react-icons/hi';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';
import { useCallback, useContext, useEffect, useState } from 'react';

import Container from "../../components/Container";
import {
  Content,
  Header,
  Info,
  Champions,
  Champion,
  CurrentRank,
  LoadingMore,
} from "./style";

import crown from '../../assets/crown.gif';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import UserList from '../../components/UserList';
import { UserContext } from '../../contexts/UserContext';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { configEnv } from '../../config';
import Loading from '../../components/Loading';


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
  const limit = 2;
  const [isLoading, setIsLoading] = useState(true);

  const sendQuery = useCallback(async () => {
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
      
      setUsersRanking((prev) => [...prev, ...data.users]);
      setIsLoading(false);
    } catch (err) {
      console.log(err)
    }
  }, [currentPage]);

  useEffect(() => {
    console.log(inView, isRenderAll);
    if(inView && isRenderAll === false) {
      sendQuery();
    }
  }, [inView])

  useEffect(() => {
    if(!isRenderAll) {
      sendQuery();
    }
  }, [])

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
          <Champion className='second'>
            <img src={user2} className='user-avatar' alt='user avatar' />
            <span className='place'>2</span>
            <span className='name'>Roberta Henriksen</span>
          </Champion>
          <Champion className='first'>
            <div className='crown'>
              <img src={crown} className='crown-winner' alt='crown' />
            </div>
            <img src={user} className='user-avatar' alt='user avatar' />
            <span className='place'>1</span>
            <span className='name'>Jhon Doe</span>
          </Champion>
          <Champion className='third'>
            <img src={user3} className='user-avatar' alt='user avatar' />
            <span className='place'>3</span>
            <span className='name'>Desirae Davis</span>
          </Champion>
        </Champions>
        <CurrentRank>
          <h2>Sua posição atual</h2>
          <span className='position'>1</span>
        </CurrentRank>
        <UserList users={userRanking} reference={null}/>
        <LoadingMore ref={ref}>Carregando mais episodios...</LoadingMore>
      </Content>
    </Container>
    </>
  )
}