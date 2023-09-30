import { Suspense } from "react"
import TicketList from "./TicketList"
import Loading from "../loading"
import Link from "next/link"

const tickets = () => {
  return (
    <main>
      <nav>
        <div>
          <h2 className="mb-2">TICKETS</h2>
          <Link href='/tickets/create' className="blink">
            <button className="btn-primary">Create New Ticket</button>
          </Link>
          <h4>Currently Open Tickets</h4>    
        </div>
      </nav>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>

    </main>
  )
}

export default tickets

