import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CryptoData } from "../home";
import style from './details.module.css';

interface ResponseData {
    data: CryptoData; // Atualizado para ser um único objeto
}

interface ErrorData {
    error: string;
}

type DataProps = ResponseData | ErrorData;

export function Details() {
    const { cripto } = useParams();
    const navigate = useNavigate();
    const [coin, setCoin] = useState<CryptoData>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            fetch(`https://api.coincap.io/v2/assets/${cripto}`)
                .then((response) => {
                    if (!response.ok) {
                        navigate('/');
                        throw new Error('Failed to fetch data');
                    }
                    return response.json();
                })
                .then((data: DataProps) => {

                    if ('error' in data) return navigate('/');

                    const crypto = data.data;

                    function price(item: string): string {
                        return Number(item).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
                    }

                    function priceCompact(item: string): string {
                        return Number(item).toLocaleString('en-US', { style: 'currency', currency: 'USD', notation: 'compact' });
                    }

                    const resultData = {
                        ...crypto,
                        priceUsdFormated: price(crypto.priceUsd),
                        marketCapUsdFormated: priceCompact(crypto.marketCapUsd),
                        volumeUsd24HrFormated: priceCompact(crypto.volumeUsd24Hr),
                    };

                    setCoin(resultData);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    navigate('/');
                });
        } catch (error) {
            console.log(error);
            navigate('/');
        }
    }, [cripto]);

    if (loading) {
        return (
            <div className={`container ${style.container}`}>
                <h4 className={style.center}>Carregando Detalhes...</h4>
            </div>
        )
    }

    // ... previous code remains the same

    if (coin) {
        return (
            <div className={style.container}>
                <h1 className={style.center}>{coin.name}</h1>
                <h1 className={style.center}>{coin.symbol}</h1>

                <section className={style.content}>
                    <img src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`} alt={coin.name} className={style.logo} />
                    <h1>{coin.name} | {coin.symbol}</h1>

                    <p><strong>Preço: </strong>{coin.priceUsdFormated}</p>
                    <a><strong>Mercado: </strong>{coin.marketCapUsdFormated}</a>
                    <a><strong>Volume: </strong>{coin.volumeUsd24HrFormated}</a>
                    <a>
                        <strong>Mudança 24h: </strong><span className={Number(coin.changePercent24Hr) > 0 ? style.protift : style.loss} >{Number(coin.changePercent24Hr).toFixed(3)}</span>
                    </a>
                </section>
            </div>
        )
    } else {
        return (
            <div className={`container ${style.container}`}>
                <h4 className={style.center}>Carregando Detalhes...</h4>
            </div>
        )
    }
}
