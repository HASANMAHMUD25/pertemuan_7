import styles from "./Hero.module.css";

function Hero(){
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Hasan M</h2>
                    <h3 className={styles.hero__genre}>Thriller, Drama, Romance</h3>
                    <p className={styles.hero__description}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores est recusandae vero, rem eaque ipsam praesentium quaerat maiores!
                    </p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__image} src="https://upload.wikimedia.org/wikipedia/id/f/f9/Spider-Man_Homecoming_poster.jpg" alt="" />
                </div>
            </section>
        </div>
    );
}

export default Hero;