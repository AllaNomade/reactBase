import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../components';
import { userActions } from '../store/modules/user';

const LobbyPage = () => {
  const disPatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const handleLogOutClick = () => {
    disPatch(userActions.logOut());

    navigate('/');
  };

  const userName = user ? `Olá, ${user.name}!` : '';

  return (
    <div>
      <Header />
      <h1>{userName}</h1>
      <ul>
        <li>
          <Link to="/users">Usuários</Link>
        </li>
        <li>
          <button type="button" onClick={handleLogOutClick}>Sair</button>
        </li>
      </ul>
    </div>
  );
};

export default LobbyPage;
