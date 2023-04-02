import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompHeader from './components/Header';
import CompCard from './components/Card';

function App() {
  return (
    <div>
      <CompHeader title='Galería de Imágenes con React' />
      <CompCard imgUrl='https://www.picturethisai.com/image-handle/website_cmsname/image/1080/153726684976119827.jpeg?x-oss-process=image/format,webp/resize,s_422&v=1.0' title='Stromanthe Thalia' text='El estromante es una especie adoptada por la decoración de interiores para ser cultivada en maceta. Su aspecto más decorativo lo aporta la combinación tan llamativa de colores que presentan sus hojas: verde, rosa y crema con el envés rojizo.' webUrl='https://www.picturethisai.com/es/wiki/Stromanthe_thalia.html' />
    </div>
  );
}

export default App;
