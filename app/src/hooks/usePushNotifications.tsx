// hooks/usePushNotifications.ts

import { useEffect, useState } from "react"

type PushNotificationStatus =
  | "granted"
  | "denied"
  | "default"
  | "error"
  | "unsupported"

export function usePushNotifications() {
  const [status, setStatus] = useState<PushNotificationStatus>("unsupported")

  useEffect(() => {
    if (!("Notification" in window)) {
      setStatus("unsupported")
      return
    }

    const requestPermission = async () => {
      try {
        const permission = await Notification.requestPermission()
        setStatus(permission)

        console.log(permission)

        if (permission === "granted") {
          await subscribeUserToPushNotifications()
        }
      } catch (error) {
        setStatus("error")
      }
    }

    if (Notification.permission === "default") {
      requestPermission()
    } else {
      setStatus(Notification.permission)
    }
  }, [])

  const urlBase64ToUint8Array = (base64String: string): Uint8Array => {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding)
      .replace(/-/g, "+")
      .replace(/_/g, "/")
    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }

  const subscribeUserToPushNotifications = async () => {
    const registration = await navigator.serviceWorker.ready
    const existingSubscription =
      await registration.pushManager.getSubscription()

    if (!existingSubscription) {
      const response = await fetch("/api/vapid-public-key")
      const vapidPublicKey = await response.text()
      const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey)

      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: convertedVapidKey,
      })

      // Send the subscription object to your server or a third-party push service
      // to store it and use it later to send push messages.
      await fetch("/api/save-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subscription),
      })
    }
  }

  return { status }
}
