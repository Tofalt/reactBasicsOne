interface pokemon {
	name: string;
	imgSrc?: string;
}
function Pokemoncard({ name, imgSrc }: pokemon) {
	return <figure>
		{imgSrc !== undefined ? (
			<img src={imgSrc} alt={name} />) : (
			<p>???</p>
		)}
		<figcaption>{name}</figcaption>
	</figure>;
}
export default Pokemoncard;