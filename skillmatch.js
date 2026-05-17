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
// [RF03, RF04, RF05, RF08] MOTOR DE LOGICA DE COMPATIBILIDADE
function analisarVagasManualmente() {
  console.log("\n--- Análise de Compatibilidade ---");
  let melhorCompatibilidade = { percentual: -1, vaga: null };
  let todasHabilidadesFaltantes = new Set(); 

  for (const vaga of listaVagas) {
    // [RF08] Método de Array: .filter() para encontrar o que o candidato atende
    const habilidadesAtendidas = candidato.habilidades.filter((hab) =>
      vaga.requisitos.includes(hab)
    );

    const totalRequisitos = vaga.requisitos.length;
    const requisitosAtendidos = habilidadesAtendidas.length;

    // [RF03] Cálculo matemático da percentagem
    const percentualCompatibilidade = totalRequisitos > 0 ? (requisitosAtendidos / totalRequisitos) * 100 : 0;

    // [RF04] Estrutura Condicional para Classificar o Fit
    let classificacao;
    if (percentualCompatibilidade >= 80) {
      classificacao = "Alta compatibilidade";
    } else if (percentualCompatibilidade >= 50) {
      classificacao = "Média compatibilidade";
    } else {
      classificacao = "Baixa compatibilidade";
    }

    // [RF05] Listar Habilidades Faltantes
    const habilidadesFaltantes = vaga.requisitos.filter(
      (req) => !candidato.habilidades.includes(req)
    );

    habilidadesFaltantes.forEach((hab) => todasHabilidadesFaltantes.add(hab));

    // [RF06] Encontrar Maior Compatibilidade
    if (percentualCompatibilidade > melhorCompatibilidade.percentual) {
      melhorCompatibilidade = { percentual: percentualCompatibilidade, vaga: vaga };
    }
  }
}