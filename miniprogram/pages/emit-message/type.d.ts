type EventChannel = WechatMiniprogram.EventChannel

interface EmitMessageData {
  eventChannel: EventChannel | null
  emitMessage: string
}

export { EmitMessageData, EventChannel }
