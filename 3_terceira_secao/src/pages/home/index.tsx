import { FormEvent, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import style from "./home.module.css";

export interface CryptoData {
    id: string;
    rank: string;
    symbol: string;
    name: string;
    supply: string;
    maxSupply: string;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    priceUsd: string;
    changePercent24Hr: string;
    vwap24Hr: string;
    explorer: string;
    priceUsdFormated?: string;
    marketCapUsdFormated?: string;
    volumeUsd24HrFormated?: string;
}

interface ApiResponse {
    data: CryptoData[];
}

export function Home() {
    const [input, setInput] = useState("");
    const [coins, setCoins] = useState<CryptoData[]>([]);
    const [error, setError] = useState(false);
    const [offset, setOffset] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, [offset]);

    function price(item: string): string {
        return Number(item).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    }

    function priceCompact(item: string): string {
        return Number(item).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            notation: "compact",
        });
    }

    async function getData(): Promise<void> {
        fetch(`/api/coins?limit=10&offset=${offset}`)
            .then((response) => response.json())
            .then(({ data }: ApiResponse) => {
                const formatedResult = data.map(function (item) {
                    const formtated = {
                        ...item,
                        priceUsdFormated: price(item.priceUsd),
                        marketCapUsdFormated: priceCompact(item.marketCapUsd),
                        volumeUsd24HrFormated: priceCompact(item.volumeUsd24Hr),
                    };

                    return formtated;
                });

                const listCoins = [...coins, ...formatedResult];
                setCoins(listCoins);
            });
    }

    function handleSubmit(event: FormEvent) {
        console.log(input);
        event.preventDefault();

        if (!input) {
            setError(true);
            return;
        }

        navigate(`/details/${input}`);
        setError(false);
    }

    function handleGetMore() {
        if (offset === 0) {
            setOffset(10);
        }

        setOffset(offset + 10);
    }

    return (
        <main className={`container ${style.container}`}>
            <blockquote className="blockquote text-center">
                <p className="text-white">
                    Aqui na minha corretora, todo mundo fica rico RAPÁ
                </p>
                <footer className="blockquote-footer text-white">
                    <cite title="Source Title">Luisitcho</cite>
                </footer>
            </blockquote>

            {error && (
                <div className="alert alert-danger" role="alert">
                    Digite o nome da moeda!
                </div>
            )}
            <form className={style.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Digite o nome da moeda... EX bitcoin"
                    className="form-control"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">
                    <BsSearch size={30} color="#FFF" />
                </button>
            </form>

            <div className="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Moeda</th>
                            <th scope="col">Valor mercado</th>
                            <th scope="col">Preço</th>
                            <th scope="col">Volume</th>
                            <th scope="col">Mudança 24h</th>
                        </tr>
                    </thead>

                    <tbody id="tbody">
                        {coins &&
                            coins.map((coin) => (
                                <tr className={style.tr} key={coin.id}>
                                    <td
                                        className={style.tdLabel}
                                        data-label="Moeda"
                                    >
                                        <div className={style.name}>
                                            <img
                                                src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                                                alt={coin.name}
                                                className={style.logo}
                                            />
                                            <Link to={`/details/${coin.id}`}>
                                                <span>{coin.name}</span> |{" "}
                                                <span>{coin.symbol}</span>
                                            </Link>
                                        </div>
                                    </td>

                                    <td
                                        className={style.tdLabel}
                                        data-label="Valor mercado"
                                    >
                                        <span>{coin.marketCapUsdFormated}</span>
                                    </td>

                                    <td
                                        className={style.tdLabel}
                                        data-label="Preço"
                                    >
                                        <span>{coin.priceUsdFormated}</span>
                                    </td>

                                    <td
                                        className={style.tdLabel}
                                        data-label="Volume"
                                    >
                                        <span>
                                            {coin.volumeUsd24HrFormated}
                                        </span>
                                    </td>

                                    <td
                                        className={
                                            Number(coin.changePercent24Hr) > 0
                                                ? style.tdProfit
                                                : style.tdLoss
                                        }
                                        data-label="Mudança 24h"
                                    >
                                        <span>
                                            {Number(
                                                coin.changePercent24Hr
                                            ).toFixed(3)}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

            <button className="btn btn-dark" onClick={handleGetMore}>
                Carregar mais
            </button>
        </main>
    );
}
