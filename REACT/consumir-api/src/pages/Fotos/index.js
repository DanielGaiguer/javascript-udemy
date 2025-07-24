import React from "react";
import { get } from 'lodash';
import { toast } from 'react-toastify';
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { Container } from "../../styles/GlobalStyles";
import Loading from '../../components/Loading';
import { Title, Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

export default function Fotos({ match }){//Match esta dentro das props
  const dispatch = useDispatch();
  const id = get(match, 'params.id', '');//Este Id e enviado como parametro junto as rotas, dentro da URL, assim conseguimos pegar ele atraves das props da funcao,

  const [isLoading, setIsLoading] = React.useState(false);
  const [foto, setFoto] = React.useState('');

  React.useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
        try {
          const { data } = await axios.get(`/alunos/${id}`);//Vai pegar o aluno pelo id enviado nas props
          setFoto(get(data, 'Fotos[0].url', ''));//Vai selecionar as fotos deste aluno, no caso a primeira foto
          setIsLoading(false);
      } catch {
        toast.error('Erro ao obter imagem.');
        setIsLoading(false);
        history.push('/');
      }
    };

    getData();
  }, []);

  const handleChange = async e => {//A funcao vai ser chamada quando o input do arquivo for alterado
    const file = e.target.files[0];//Extrai o primeiro arquivo da lista de arquivos enviados pelo input (e.target.files[0]
    const fotoURL = URL.createObjectURL(file);//cria uma URL temporária para visualizar o arquivo no navegador

    setFoto(fotoURL);// atualiza o estado (com useState) para exibir a imagem selecionada antes mesmo de ela ser enviada para o servidor.

    const formData = new FormData();//Cria um objeto FormData, usado para enviar dados no formato multipart/form-data, necessário para upload de arquivos.
    formData.append('aluno_id', id);//aluno_id e foto são adicionados como campos do formulário.
    formData.append('foto', file);

    try{
      setIsLoading(true);

      await axios.post('/fotos/', formData, {//Envia o formData via axios.post() para a URL /fotos/.
        headers: {
          "Content-Type": 'multipart/form-data',//Define o cabeçalho Content-Type como 'multipart/form-data'.
        },
      });

      toast.success('Foto enviada com sucesso.');

      setIsLoading(false);
    }catch(err) {
      setIsLoading(false);
      const status = get(err, 'status', '');
      toast.error('Erro ao enviar foto.');
      if( status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
  <Container>
    <Loading isLoading={isLoading} />

    <Title>Fotos</Title>

    <Form>
    <label htmlFor="foto">
      {foto ? <img src={foto} alt="Foto" /> : 'Selecionar'}{/*Caso a foto exista, carregara a foto, caso nao, tera um texto */}
      <input type="file" id="foto" onChange={handleChange} /> {/*Ao input ser alterado, chamara a funcao */}
    </label>
    </Form>
  </Container>
  );
}

Fotos.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
