import Link from "next/link"

export default function DatenschutzPage() {
  return (
    <section className="rechtliches sm:px-6">
      <div className="no-scrollbar bg-accent/40 max-w-screen-lg overflow-x-scroll border p-6 sm:mb-6 sm:rounded-b-md lg:mx-auto">
        <h2>Datenschutzerklärung</h2>

        <h3>1. Datenschutz auf einen Blick</h3>
        <h4>Allgemeine Hinweise:</h4>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Deinen personenbezogenen Daten passiert, wenn Du unsere Website
          besuchst. Personenbezogene Daten sind alle Daten, mit denen Du
          persönlich identifiziert werden kannst.
        </p>

        <h3>2. Datenerfassung auf unserer Website</h3>
        <h4>
          Wer ist verantwortlich für die Datenerfassung auf dieser Website?
        </h4>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber: <br />
          David Warmuth <br />
          E-Mail: info@davidwarmuth.de <br />
          Web: <Link href="/">www.davidwarmuth.de</Link>
        </p>
        <h4>Wie erfassen wir Deine Daten?</h4>
        <p>
          Deine Daten werden zum einen dadurch erhoben, dass Du uns diese
          mitteilst, z.B. durch Eingabe in ein Kontaktformular. Andere Daten
          werden automatisch beim Besuch der Website durch unsere IT-Systeme
          erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser,
          Betriebssystem oder Uhrzeit des Seitenaufrufs).
        </p>
        <h4>Wofür nutzen wir Deine Daten?</h4>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gewährleisten. Andere Daten können zur Analyse Deines
          Nutzerverhaltens verwendet werden.
        </p>
        <h4>Welche Rechte hast du bezüglich Deiner Daten?</h4>
        <p>
          Du hast jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck Deiner gespeicherten personenbezogenen Daten zu
          erhalten. Du hast außerdem ein Recht, die Berichtigung oder Löschung
          dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema
          Datenschutz kannst Du Dich jederzeit an uns wenden.
        </p>

        <h3>3. Allgemeine Hinweise und Pflichtinformationen</h3>
        <h4>Datenschutz</h4>
        <p>
          Wir nehmen den Schutz Deiner persönlichen Daten sehr ernst und
          behandeln Deine personenbezogenen Daten vertraulich und entsprechend
          der gesetzlichen Datenschutzvorschriften.
        </p>
        <h4>SSL- bzw. TLS-Verschlüsselung</h4>
        <p>
          Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
          Inhalte, die Du an uns als Seitenbetreiber sendest, nutzt unsere
          Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Du
          über diese Website übermittelst, für Dritte nicht mitlesbar. Du
          erkennst eine verschlüsselte Verbindung an der „https://“ Adresszeile
          Deines Browsers und am Schloss-Symbol in der Browserzeile.
        </p>
        <h4>Cookies</h4>
        <p>
          Unsere Website verwendet Cookies. Das sind kleine Textdateien, die
          Dein Webbrowser auf Deinem Endgerät speichert. Cookies helfen uns
          dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu
          machen. <br />
          Einige Cookies sind “Session-Cookies.” Solche Cookies werden nach Ende
          Deiner Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere
          Cookies auf Deinem Endgerät bestehen, bis Du diese selbst löschst.
          Solche Cookies helfen uns, Dich bei Rückkehr auf unserer Website
          wieder zu erkennen. <br /> <br />
          Mit einem modernen Webbrowser kannst Du das Setzen von Cookies
          überwachen, einschränken oder unterbinden. Viele Webbrowser lassen
          sich so konfigurieren, dass Cookies mit dem Schließen des Programms
          von selbst gelöscht werden. Die Deaktivierung von Cookies kann eine
          eingeschränkte Funktionalität unserer Website zur Folge haben. <br />
          <br />
          Das Setzen von Cookies, die zur Ausübung elektronischer
          Kommunikationsvorgänge oder der Bereitstellung bestimmter, von Dir
          erwünschter Funktionen (z.B. Warenkorb) notwendig sind, erfolgt auf
          Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website
          haben wir ein berechtigtes Interesse an der Speicherung von Cookies
          zur technisch fehlerfreien und reibungslosen Bereitstellung unserer
          Dienste. Sofern die Setzung anderer Cookies (z.B. für
          Analyse-Funktionen) erfolgt, werden diese in dieser
          Datenschutzerklärung separat behandelt.
        </p>
      </div>
    </section>
  )
}
