import { FormEvent, useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

interface InfoProps {
	titulo: string;
	gasolina: string | number;
	alcool: string | number;
}

function App() {
	const [gasolinaInput, setGasolinaInput] = useState(1);
	const [alcoolInput, setAlcoolInput] = useState(1);
	const [info, setInfo] = useState<InfoProps>();

	function formatar_valor(valor: number): string {
		return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
	}

	function calcular(event: FormEvent<HTMLFormElement>): void {
		event.preventDefault();

		const calculo = (alcoolInput / gasolinaInput);

		if (calculo <= 0.7) {

			setInfo({
				titulo: 'Compensa usar álcool!',
				gasolina: formatar_valor(gasolinaInput),
				alcool: formatar_valor(alcoolInput),
			});

		} else {

			setInfo({
				titulo: 'Compensa usar gasolina!',
				gasolina: formatar_valor(gasolinaInput),
				alcool: formatar_valor(alcoolInput),
			});
		}

		console.log(info?.gasolina)
		console.log(info)

	}

	return (
		<div>
			<main className="container">
				<img className="logo" src={logoImg} alt="Logo da calculadora de gasolina ou alcool" />
				<h1 className="title">Qual melhor opção?</h1>

				<form className="form" onSubmit={calcular}>
					<label>Álcool (preço por litro):</label>
					<input className="input" type="number" value={alcoolInput} onChange={(e) => setAlcoolInput(Number(e.target.value))} placeholder="4,90" min="1" step="0.01" required />

					<label>Gasolina (preço por litro):</label>
					<input className="input" type="number" value={gasolinaInput} onChange={(e) => setGasolinaInput(Number(e.target.value))} placeholder="4,90" min="1" step="0.01" required />

					<input className="button" type="submit" value="Calcular" />
				</form>

				{info && Object.keys(info).length > 0 && (

					<section className="result">
						<h2 className="result-title">{info?.titulo}</h2>

						<span>Alcool: <span>{info?.alcool}</span></span>
						<span>Gasolina: <span>{info?.gasolina}</span></span>
					</section>

				)}
			</main>
		</div>
	)
}

export default App
