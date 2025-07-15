
// script.js completo con los 10 ciclos, prerrequisitos y funcionalidad de desbloqueo dinámica
const malla = {
  "1er Ciclo": [
    { codigo: "C0034", nombre: "Biología I", creditos: 5, horas: "64T/32P", prerequisitos: [] },
    { codigo: "C0500", nombre: "Química General I", creditos: 3, horas: "32T/32P", prerequisitos: [] },
    { codigo: "C0161", nombre: "Matemáticas I", creditos: 5, horas: "32T/96P", prerequisitos: [] },
    { codigo: "C0643", nombre: "Historia del Pensamiento Científico", creditos: 3, horas: "32T/32P", prerequisitos: [] },
    { codigo: "C0613", nombre: "Comunicación y Redacción I", creditos: 3, horas: "16T/64P", prerequisitos: [] }
  ],
  "2do Ciclo": [
    { codigo: "U0140", nombre: "Botánica Farmacéutica", creditos: 5, horas: "64T/32P", prerequisitos: ["C0034"] },
    { codigo: "C0502", nombre: "Química General II", creditos: 4, horas: "48T/32P", prerequisitos: ["C0500"] },
    { codigo: "C0162", nombre: "Matemáticas II", creditos: 5, horas: "32T/96P", prerequisitos: ["C0161"] },
    { codigo: "C0513", nombre: "Ciencias Sociales", creditos: 2, horas: "16T/32P", prerequisitos: [] },
    { codigo: "C0614", nombre: "Comunicación y Redacción II", creditos: 3, horas: "16T/64P", prerequisitos: ["C0613"] },
    { codigo: "C0090", nombre: "Filosofía", creditos: 3, horas: "32T/32P", prerequisitos: [] }
  ],
  "3er Ciclo": [
    { codigo: "C0208", nombre: "Química Orgánica I", creditos: 5, horas: "64T/32P", prerequisitos: ["C0502"] },
    { codigo: "C0092", nombre: "Física I", creditos: 5, horas: "64T/32P", prerequisitos: ["C0162"] },
    { codigo: "C0503", nombre: "Estadística y Probabilidades", creditos: 4, horas: "32T/64P", prerequisitos: ["C0162"] },
    { codigo: "C0146", nombre: "Investigación Científica", creditos: 3, horas: "32T/32P", prerequisitos: ["C0034"] },
    { codigo: "C0617", nombre: "Inglés Básico Inicial", creditos: 2, horas: "64P", prerequisitos: [] }
  ],
  "4to Ciclo": [
    { codigo: "C0096", nombre: "Fisicoquímica", creditos: 5, horas: "64T/32P", prerequisitos: ["C0502", "C0092"] },
    { codigo: "C0093", nombre: "Física II", creditos: 5, horas: "64T/32P", prerequisitos: ["C0092"] },
    { codigo: "C0644", nombre: "Computación", creditos: 3, horas: "32T/32P", prerequisitos: [] },
    { codigo: "C0014", nombre: "Anatomía Humana", creditos: 4, horas: "48T/32P", prerequisitos: ["C0034"] },
    { codigo: "C0081", nombre: "Farmacognosia", creditos: 5, horas: "48T/64P", prerequisitos: ["U0140"] }
  ],
  "5to Ciclo": [
    { codigo: "C0549", nombre: "Fisicoquímica II", creditos: 6, horas: "64T/64P", prerequisitos: ["C0096"] },
    { codigo: "C0210", nombre: "Química Orgánica II", creditos: 5, horas: "64T/32P", prerequisitos: ["C0208"] },
    { codigo: "C0551", nombre: "Bioquímica", creditos: 6, horas: "80T/32P", prerequisitos: ["C0208", "C0096"] },
    { codigo: "C0194", nombre: "Química Analítica Cualitativa", creditos: 4, horas: "32T/64P", prerequisitos: ["C0502"] },
    { codigo: "C0619", nombre: "Inglés Básico Elemental", creditos: 2, horas: "64P", prerequisitos: ["C0617"] }
  ],
  "6to Ciclo": [
    { codigo: "C0550", nombre: "Química Analítica Cuantitativa", creditos: 6, horas: "64T/64P", prerequisitos: ["C0194"] },
    { codigo: "C0037", nombre: "Biología Molecular de la Célula", creditos: 5, horas: "64T/32P", prerequisitos: ["C0551"] },
    { codigo: "C0102", nombre: "Fisiología Humana", creditos: 5, horas: "64T/32P", prerequisitos: ["C0551"] },
    { codigo: "C0172", nombre: "Microbiología General", creditos: 5, horas: "64T/32P", prerequisitos: ["C0551"] },
    { codigo: "C0620", nombre: "Inglés Pre Intermedio", creditos: 2, horas: "64P", prerequisitos: ["C0619"] }
  ],
  "7mo Ciclo": [
    { codigo: "C0176", nombre: "Operaciones y Procesos Farmacéuticos", creditos: 4, horas: "48T/32P", prerequisitos: ["C0096"] },
    { codigo: "C0029", nombre: "Biofarmacia y Farmacocinética", creditos: 3, horas: "32T/32P", prerequisitos: ["C0102"] },
    { codigo: "C0106", nombre: "Fisiopatología", creditos: 3, horas: "32T/32P", prerequisitos: ["C0102"] },
    { codigo: "C0181", nombre: "Parasitología Humana", creditos: 4, horas: "48T/32P", prerequisitos: ["C0172"] },
    { codigo: "C0072", nombre: "Ética y Legislación Farmacéutica", creditos: 3, horas: "32T/32P", prerequisitos: [] },
    { codigo: "C0200", nombre: "Química Farmacéutica", creditos: 4, horas: "64T", prerequisitos: ["C0210"] },
    { codigo: "C0621", nombre: "Inglés Intermedio", creditos: 2, horas: "64P", prerequisitos: ["C0620"] }
  ],
  "8vo Ciclo": [
    { codigo: "C0586", nombre: "Farmacia Magistral y Oficinal", creditos: 3, horas: "32T/32P", prerequisitos: ["C0176"] },
    { codigo: "C0082", nombre: "Farmacología", creditos: 5, horas: "64T/32P", prerequisitos: ["C0102"] },
    { codigo: "C0013", nombre: "Analítica e Instrumentación Farmacéutica", creditos: 5, horas: "48T/64P", prerequisitos: ["C0550"] },
    { codigo: "C0447", nombre: "Semiología", creditos: 4, horas: "32T/64P", prerequisitos: ["C0106"] }
  ],
  "9no Ciclo": [
    { codigo: "C0587", nombre: "Industria Farmacéutica", creditos: 4, horas: "48T/32P", prerequisitos: ["C0586"] },
    { codigo: "C0045", nombre: "Bromatología", creditos: 4, horas: "48T/32P", prerequisitos: ["C0172"] },
    { codigo: "C0589", nombre: "Gestión y Control de Calidad", creditos: 3, horas: "32T/32P", prerequisitos: ["C0072"] },
    { codigo: "C0588", nombre: "Seguimiento Farmacoterapéutico", creditos: 4, horas: "48T/32P", prerequisitos: ["C0082"] }
  ],
  "10mo Ciclo": [
    { codigo: "C0215", nombre: "Salud Pública y Epidemiología", creditos: 3, horas: "32T/32P", prerequisitos: ["C0106"] },
    { codigo: "C0240", nombre: "Toxicología y Química Legal", creditos: 4, horas: "48T/32P", prerequisitos: ["C0550", "C0082"] },
    { codigo: "C0078", nombre: "Farmacia Hospitalaria y Atención Farmacéutica", creditos: 3, horas: "32T/32P", prerequisitos: ["C0588"] },
    { codigo: "C0004", nombre: "Administración y Gerencia Estratégica", creditos: 3, horas: "32T/32P", prerequisitos: ["C0072"] },
    { codigo: "C8991", nombre: "Trabajo de Investigación", creditos: 4, horas: "16T/96P", prerequisitos: [] }
  ]
};

let completados = JSON.parse(localStorage.getItem("completados")) || [];

function guardarProgreso() {
  localStorage.setItem("completados", JSON.stringify(completados));
}

function estaDesbloqueado(curso) {
  return curso.prerequisitos.every(req => completados.includes(req));
}

function crearMalla() {
  const contenedor = document.getElementById('malla-container');
  for (const ciclo in malla) {
    const seccion = document.createElement('div');
    seccion.className = 'ciclo';
    const titulo = document.createElement('h2');
    titulo.textContent = ciclo;
    seccion.appendChild(titulo);

    malla[ciclo].forEach(curso => {
      const divCurso = document.createElement('div');
      const desbloqueado = estaDesbloqueado(curso);
      divCurso.className = 'curso' + (desbloqueado ? '' : ' bloqueado');
      divCurso.innerHTML = `<strong>${curso.nombre}</strong> (${curso.codigo})`;

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = completados.includes(curso.codigo);
      checkbox.addEventListener('click', (e) => {
        e.stopPropagation();
        if (checkbox.checked) {
          completados.push(curso.codigo);
        } else {
          completados = completados.filter(c => c !== curso.codigo);
        }
        guardarProgreso();
        location.reload();
      });
      divCurso.appendChild(checkbox);

      const detalles = document.createElement('div');
      detalles.className = 'detalles';
      detalles.innerHTML = `
        <p><strong>Horas:</strong> ${curso.horas}</p>
        <p><strong>Créditos:</strong> ${curso.creditos}</p>
        <p><strong>Prerequisitos:</strong> ${curso.prerequisitos.length ? curso.prerequisitos.join(', ') : 'Ninguno'}</p>
      `;
      divCurso.appendChild(detalles);

      if (desbloqueado) {
        divCurso.addEventListener('click', () => {
          detalles.style.display = detalles.style.display === 'block' ? 'none' : 'block';
        });
      }

      seccion.appendChild(divCurso);
    });

    contenedor.appendChild(seccion);
  }
}

document.addEventListener('DOMContentLoaded', crearMalla);
      
