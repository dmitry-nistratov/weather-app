import { forecast } from "./forecast";

export default function* saga() {
  yield forecast();
}
