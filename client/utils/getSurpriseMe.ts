import { surpriseMePrompts } from './constants'

export default function getSurpriseMe(): string {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
  const randomPrompt = surpriseMePrompts[randomIndex]

  return randomPrompt
}
