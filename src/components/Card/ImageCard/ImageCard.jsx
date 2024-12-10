import { useSelector } from 'react-redux';
import CardBg from '../../../img/card-bg.jpg';

const ImageCard = (props) => {
	const {urlImg} = useSelector(state => state.image);
	return (
			<img src={urlImg || CardBg} alt="Фон открытки" width={840} height={520} />
		)
};
 
export default ImageCard;