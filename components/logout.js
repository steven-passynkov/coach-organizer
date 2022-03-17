import Button from "react-bootstrap/Button"
import { supabase } from "../utils/supabaseClient";

export default function logout( ) {
  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }
  return (
    <a type="submit" onClick={signOut}>
      Signout
    </a>
  );
}
