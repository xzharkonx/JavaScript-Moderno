// CLasses
class Citas {
  constructor() {
    this.citas = [];
  }

  agregarCita(cita) {
    this.citas = [...this.citas, cita];
  }

  editarCita(citaActualizada) {
    const newLocal = this;
    newLocal.citas = this.citas.map((cita) => (cita.id === citaActualizada.id
      ? citaActualizada : cita));
  }

  eliminarCita(id) {
    this.citas = this.citas.filter((cita) => cita.id !== id);
  }
}

export default Citas;
