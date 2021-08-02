import Head from 'next/head'

export default function Home() {
  return (
    <main className="form-main" data-scroll-section>
      <section>
        <form action="/main.php" method="POST">
          <h1>Contact me</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <span data-field="Voornaam *">
            <input type="text" name="firstName" placeholder="Voornaam *" maxLength="30"/>
            <p>Luister vriend! Dit klopt niet hé.</p>
          </span>
          <span data-field="Tussenvoegsel">
            <input type="text" name="middleName" placeholder="Tussenvoegsel" maxLength="20"/>
            <p>Luister vriend! Dit klopt niet hé.</p>
          </span>
          <span data-field="Achternaam *">
            <input type="text" name="lastName" placeholder="Achternaam *" maxLength="40"/>
            <p>Luister vriend! Dit klopt niet hé.</p>
          </span>
          <span data-field="Emailadres *">
            <input type="text" name="email" placeholder="Emailadres *" maxLength="80"/>
            <p>Luister vriend! Dit gaat zo niet werken hé! Je moet wel een geldig emailadres invullen.</p>
          </span>
          <span data-field="Message *"><textarea name="message" placeholder="Message * (max 350 characters)" maxLength="350"></textarea>
            <p>Luister vriend! Dit klopt niet hé.</p>
          </span>
          <input type="submit" name="submit" placeholder="Verzenden" className="button"/>
        </form>
      </section>
    </main>
  )
}
