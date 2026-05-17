/**
 * Skill Match 35: Simulador de Compatibilidade com Vaga Front-End Júnior
 */

// [RF01] OBJETO CANDIDATO
const candidato = {
  nome: "João Silva", 
  area: "Front-End", 
  habilidades: [
    "JavaScript", "HTML", "CSS", "React", "Git", 
    "GitHub", "Lógica de Programação", "Resolução de Problemas", "Kanban", "Comunicação"
  ],
  experienciaMeses: 6
};

console.log("--- Perfil do Candidato ---");
console.log(`Nome: ${candidato.nome}`);
console.log(`Área: ${candidato.area}`);
console.log(`Habilidades: ${candidato.habilidades.join(", ")}`);
console.log(`Experiência: ${candidato.experienciaMeses} meses\n`);

// [RF02] LISTA DE VAGAS (Array inicial)
// Nota: Temporariamente criadas como objetos simples para este commit inicial
const listaVagas = [
  { empresa: "TechStart", cargo: "Desenvolvedor Front-End Júnior", requisitos: ["JavaScript", "HTML", "CSS", "React", "Git", "Lógica de Programação", "Inglês Básico"], salario: 3500.0, modalidade: "Remoto", nivel: "Júnior" },
  { empresa: "CodeLab", cargo: "Estagiário Front-End", requisitos: ["HTML", "CSS", "JavaScript", "Lógica de Programação", "GitHub"], salario: 2000.0, modalidade: "Híbrido", nivel: "Estágio" },
  { empresa: "WebSolutions", cargo: "Desenvolvedor Front-End Júnior", requisitos: ["JavaScript", "React", "Redux", "TypeScript", "Git", "Metodologias Ágeis", "Comunicação"], salario: 4000.0, modalidade: "Presencial", nivel: "Júnior" }
];