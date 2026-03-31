export default function LazyComponentError() {
  throw new Error("error test");
  return <div>LazyComponent</div>;
}
