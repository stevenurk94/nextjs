import Link from 'next/link'

const NotFound = () => {
    return (
        <main data-scroll-section>
            <section className="section-404">
                <h1>Woepsss... 404</h1>
                <h2>De pagina die je probeert te bereiken bestaat niet!</h2>
                <a href="/" className="button">Terug naar de homepagina</a>
            </section>
        </main>
    );
}

export default NotFound;