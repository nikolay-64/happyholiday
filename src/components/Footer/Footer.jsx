import Container from '../Container/Container';
import style from './Footer.module.css'
import { ReactComponent as VKIcon } from './../../img/vk.svg';
import { ReactComponent as TGIcon } from './../../img/tg.svg';

const Footer = () => {
	return (
		<footer className={style.footer}>
			<Container>
				<div className={style.wrapper}>
					<div className={style.contacts}>
						<p> Design: <a href="https://t.me/Mrshmallowww">Anastasia Ilina</a></p>
						<p>Сoder: <a href="https://t.me/nikolayvns">Nikolai Vyazmin</a></p>
						<p>© HBCard, 2024</p>
					</div>

					<ul className={style.social}>
						<li className={style.item}>
							<a href="https://vk.com" className={style.link}>
								<VKIcon />
							</a>
						</li>
						<li className={style.item}>
							<a href="https://t.me" className={style.link}>
								<TGIcon />
							</a>
						</li>
					</ul>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
