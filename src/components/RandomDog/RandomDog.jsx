import { useState, useEffect } from 'react';
import * as Style from './RandomDog.style';

const RamdomDog = () => {
  const [currentImage, setCurrentImage] = useState('');
  const [loading, setLoading] = useState(false);

  const url = 'https://dog.ceo/api/breeds/image/random';
  const options = {
    method: 'GET',
  };

  const handleResponse = async (response) => {
    const data = await response.json();
    const { message } = data;
    setCurrentImage(message);
  };

  const handleError = () => {
    setLoading(false);
  };

  const handleOnload = () => {
    setLoading(false);
  };

  const requisiçãoDog = () => {
    setLoading(true);
    const request = fetch(url, options);
    request.then(handleResponse);
    request.catch(handleError);
  };

  const handleClick = () => {
    if (loading) {
      return;
    }
    requisiçãoDog();
  };

  useEffect(() => {
    requisiçãoDog();
  }, []);

  return (
    <Style.Wrapper>
      <Style.Title>Cachorros aleatórios</Style.Title>
      <Style.Conteiner>
        <Style.Image alt="dog" src={currentImage} loading={loading} onLoad={handleOnload} />
        <Style.LoadingText loading={loading}>Carregando...</Style.LoadingText>
      </Style.Conteiner>
      <Style.Button type="button" onClick={handleClick} disabled={loading}>Carregar</Style.Button>
    </Style.Wrapper>
  );
};

export default RamdomDog;
