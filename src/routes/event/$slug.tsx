import { createFileRoute } from '@tanstack/react-router'

import EventInfo from "@/components/eventinfo"


export const Route = createFileRoute('/event/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  const {slug} = Route.useParams();

  return (<>

      <EventInfo slug = {slug} />
  
  </>)
}
