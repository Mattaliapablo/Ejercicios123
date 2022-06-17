import ComponenteB from "./ComponenteB";
import { Contacto } from "./Contacto";

function ComponenteA() {
  const defaultTask = new Contacto(
    "Pablo",
    "Mattalia",
    "pablomattalia@gmail.com",
    true
  );

  return (
    <div>
      <div>Info del contacto</div>

      <ComponenteB contacto={defaultTask} />
    </div>
  );
}

export default ComponenteA;
