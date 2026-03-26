export default function ListItem({ key, text }: { key: number; text: string }) {
  return <li key={key}>{text}</li>;
}