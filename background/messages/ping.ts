import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const message = `${req.body.id}`

  console.log(message)

  res.send({
    message
  })
}

export default handler
