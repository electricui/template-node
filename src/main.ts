import { Message } from '@electricui/core'

async function main() {
  const message = new Message('msgId', 42)

  console.log(`the answer is ${message.messageID}`)
}

main()
