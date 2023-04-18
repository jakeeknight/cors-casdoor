import { usePushNotifications } from "@/hooks/usePushNotifications"
import Container from "./Container"

export default function PushNotification() {
  const { status } = usePushNotifications()
  return (
    <div>
      <Container>
        <h1 className="text-3xl font-bold">Testing push notifications</h1>
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Send notification
        </button>
        <p>Push Notification Status: {status}</p>
      </Container>
    </div>
  )
}
