import styles from "./ProductCard.module.css";

export default function ProductCard({ nome, precio}) {
    return (
    <div className={styles.producto}>
    <img src="/public/unnamed.jpg"/>
        <p>{nome}</p>
        <p>{precio}</p>
    </div>
    )
}