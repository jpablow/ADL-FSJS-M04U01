import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompHeader from './components/Header';
import CompCard from './components/Card';
import CompFooter from './components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div>
      <CompHeader title='Galería de Imágenes con React' />
      <Container>
        <Row>
          <Col><CompCard imgUrl='https://www.picturethisai.com/image-handle/website_cmsname/image/1080/153726684976119827.jpeg?x-oss-process=image/format,webp/resize,s_422&v=1.0' title='Stromanthe Thalia' text='El estromante es una especie adoptada por la decoración de interiores para ser cultivada en maceta. Su aspecto más decorativo lo aporta la combinación tan llamativa de colores que presentan sus hojas: verde, rosa y crema con el envés rojizo.' webUrl='https://www.picturethisai.com/es/wiki/Stromanthe_thalia.html' /></Col>
          <Col><CompCard imgUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Peperomia_caperata_1-OB9.jpg/1920px-Peperomia_caperata_1-OB9.jpg' title='Peperomia Caperata Emerald' text='También conocida como peperomia de rizo esmeralda, cola de ratón o cascara de nuez es una especie de planta de flores de la familia Piperaceae, originaria de Brasil.' webUrl='https://es.wikipedia.org/wiki/Peperomia_caperata' /></Col>
          <Col><CompCard imgUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Mimosa_pudica_Feuille.jpg/1920px-Mimosa_pudica_Feuille.jpg' title='Mimosa Púdica' text='Es una planta originaria de la selva tropical de América de la familia de las fabáceas, fácilmente distinguible por su reacción al tacto, desarrollada como defensa ante los depredadores.' webUrl='https://es.wikipedia.org/wiki/Mimosa_pudica' /></Col>
          <Col><CompCard imgUrl='https://upload.wikimedia.org/wikipedia/commons/c/cd/Persian_Shield_Night.jpg' title='Strobilanthes Auriculata Dyeriana' text='Es una planta herbácea que crece alrededor del metro de altura, tiene hojas ovaladas y rugosas de unos 18cm de largo, de bordes aserrados con tonos violáceos y un brillo metálico.' webUrl='https://es.wikipedia.org/wiki/Strobilanthes_dyeriana' /></Col>
        </Row>
      </Container>
      <CompFooter />
    </div>
  );
}

export default App;
