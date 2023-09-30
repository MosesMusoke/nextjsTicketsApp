import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Dash Board</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Corrupti, dicta. Expedita provident asperiores dolores, 
        architecto dolore illum laborum cum a molestiae deserunt, 
        qui quia dignissimos dicta odio ab nesciunt. Qui?
      </p>

      <div className="flex justify-center my-8">
        <Link href='/tickets'>
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nesciunt cumque officiis quaerat neque quos iusto 
          repudiandae, accusantium, voluptatum labore magni 
          facilis hic sint voluptas et fugit dolores iure, beatae 
          vero non quidem dolor adipisci! Sunt.
        </p>
      </div>

      <div className="card">
        <h3>New website Live!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nesciunt cumque officiis quaerat neque quos iusto 
          repudiandae, accusantium, voluptatum labore magni 
          facilis hic sint voluptas et fugit dolores iure, beatae 
          vero non quidem dolor adipisci! Sunt.
        </p>
      </div>
    </main>
  )
}

