import Link from "next/link"
import { resolve } from "styled-jsx/css"

const getTickets = async() => {

    // Imitate Delay
    await new Promise(resolve => setTimeout(resolve, 3000))

    const res = await fetch('http://localhost:4000/tickets', {
      next: {
        revalidate: 0
      }
    })

    return res.json()
}

const TicketList = async() => {

  const TicketsData = await getTickets()

  return (
    <>
      {TicketsData.map(ticket => (
        <div key={ticket.id} className="card my-5">
            <Link href={'/tickets/' + ticket.id}>
              <h2>{ticket.title}</h2>
              <p>{ticket.body.slice(0, 200)}...</p>
              <h3 className={`pill ${ticket.priority}`}>
                  {ticket.priority} priority
              </h3>
            </Link>
        </div>
      ))}

      {/* {TicketsData.length() === 0 && (
        <p className="text-center">There are no open Tickets available!!!</p>
      )} */}
    </>
  )
}

export default TicketList
