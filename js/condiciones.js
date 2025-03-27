const contentData = {
  ansiedad: {
    leve: {
      image: "../../img/condiciones/ansiedad_leve.png",
      imageText: "Ansiedad aguda.",
      description: "",
      details: "Se asocia a tensiones de la vida diaria causado por los estímulos externos. El estado leve de la ansiedad puede generar problemas de concentración y generar preocupación sobre los hechos. La ansiedad leve puede llegar a controlarse sin intervención de especialistas, además propicia el aprendizaje y/o a la resolución de problemas.",
      sensations: `Pueden presentarse una ligera sensación de inquietud, tensión muscular ocasional, y molestias estomacales leves. Además, puede incluso fomentar el aprendizaje y la resolución de problemas, ya que impulsa a la persona a manejar situaciones desafiantes.`
    },
    moderado: {
      image: "../../img/condiciones/ansiedad_mod.png",
      imageText: "Ansiedad aguda episódica.",
      description: "",
      details: "Se caracteriza por una mayor respuesta fisiológica en presencia de eventos estresantes, causando tensión muscular, palpitaciones excesivas y sudoración. La ansiedad moderada tiende a dificultar el pensamiento crítico y dificulta la toma de decisiones, debido a que la percepción de su exterior, lo cual le genera angustia. Sin embargo, aún puede reconducir su atención a si se centra en ello.",
      sensations: `Palpitaciones ocasionales, opresión en el pecho, respiración acelerada y tensión muscular frecuente. También es común la sudoración moderada y dificultades para conciliar o mantener el sueño.`
    },
    severo: {
      image: "../../img/condiciones/ansiedad_sev.png",
      imageText: "Ansiedad severa.",
      description: "Ansiedad moderada.",
      details: "Se considera como una patología establecida, debido a que se observa un aumento de síntomas físicos y psicológicos. Comienza una reducción significativa del campo perceptivo, dificulta la capacidad de concentración y realización de actividades diferentes a las que generan ansiedad. Esto puede llevar a la persona al aislamiento.",
      sensations: `La sensación de angustia o miedo intenso es constante, dificultando la realización de actividades diarias. Los pensamientos catastróficos se vuelven más frecuentes, acompañados de una creciente irritabilidad y una sensación de pérdida de control. Físicamente, se experimentan palpitaciones fuertes, temblores, sudoración excesiva, mareos, náuseas recurrentes y problemas de sueño severos.`
    },
    muySevero: {
      image: "../../img/condiciones/ansiedad_msev.png",
      imageText: "Ansiedad Extremadamente Severa Frase.",
      description: "Ansiedad Extremadamente Severa descripción.",
      details: "Se considera como un estado extremadamente grave de la patología, ya que tanto los síntomas físicos como psicológicos se incrementan. En este estado,la persona es incapaz de realizar otras actividades diferentes a las que le causó el problema. Además puede desencadenar en una desorganización de la personalidad, así como una disminución en la capacidad de relación, percepción, motora y racional.",
      sensations: `El pánico extremo domina la experiencia, pensamientos intrusivos incontrolables y una sensación de peligro inminente. Episodios de bloqueo mental o desconexión con la realidad. Los síntomas físicos incluyen falta de aire intensa, dolor en el pecho, temblores incontrolables, sudoración extrema, vómitos y crisis de llanto, pudiendo llegar a una parálisis temporal por miedo.`
    }
  },
  estres: {
    leve: {
      image: "../../img/condiciones/estres_leve.png",
      imageText: "Estrés agudo.",
      description: "",
      details: "Es la respuesta a las situaciones cotidianas de cortos periodos de tiempo, necesario para manejar las situaciones. Esto en ciertas personas, puede ser positivo al ser un estimulante o negativo, agotador, por falta de manejo del mismo y pueden desarrollar algunas actitudes y malestares como:",
      sensations: `Irritabilidad, ansiedad y depresión, dolores de cabeza, espalda, mandíbula y musculares, etc. A pesar de los síntomas, se considera fácil de manejar.`
    },
    moderado: {
      image: "../../img/condiciones/estres_mod.png",
      imageText: "Estrés agudo episódico.",
      description: "",
      details: "Es un estrés agudo no controlado pero transitorio, se presenta en ante situaciones específicas, generalmente relacionadas con presiones externas. Normalmente lo presentan personas con estilo de vida acelerado, este tipo de estrés puede afectar el bienestar físico y emocional, con síntomas como:",
      sensations: `Tensión, dolor de cabeza, ansiedad, irritabilidad y preocupaciones constantes. Para lograr manejar el estrés se requiere de ayuda profesional.`
    },
    severo: {
      image: "../../img/condiciones/estres_sev.png",
      imageText: "Estrés crónico.",
      description: "",
      details: "Es el estrés que persiste durante un largo período de tiempo y está asociado con una exposición constante a situaciones estresantes. El estrés crónico puede tener un impacto significativo en la salud física y emocional ya que desgasta a la persona día tras día. Entre los síntomas más comunes son:",
      sensations: `Fatiga, tensión, trastorno del sueño, problemas digestivos, enfermedades autoinmunes, ansiedad, depresión e irritabilidad. El diagnóstico es complicado debido a que se normaliza, sin embargo, se requiere ayuda profesional e incluso tratamiento médico.`
    },
    muySevero: {
      image: "../../img/condiciones/estres_msev.png",
      imageText: "Estrés muy severo.",
      description: "",
      details: "Es la última etapa del estrés, se caracteriza por una activación continua del sistema nervioso ante cualquier situación, debido a eventos traumáticos, estrés acumulado o sobrecarga emocional. A diferencia del estrés crónico, este tiene un impacto en la salud física y emocional aún mayor, como:",
      sensations: `el colapso físico y emocional, ansiedad y depresión severa, pensamientos suicidas, problemas cardíacos e inmunosupresión, entre otros. Debido a que los recursos físicos y mentales se ven consumidos por el desgaste a largo plazo, requiere atención profesional inmediata.`
    }
  },
  depresion: {
    leve: {
      image: "../../img/condiciones/depre_leve.png",
      imageText: "Depresión leve.",
      description: "DEPRESION",
      details: `También conocida como distimia, se caracteriza por presentar síntomas depresivos ocasionales y menos intensos. Aunque los síntomas son más suaves, no dejan de ser molestos, aunque no interfiere significativamente en la vida cotidiana. La depresión leve no siempre requiere tratamiento, pero es importante buscar ayuda si los síntomas persisten.`,
      sensations: "La tristeza, pérdida de interés en actividades que se frecuentaban, falta de apetito e insomnio y fatiga."
    },
    moderado: {
      image: "../../img/condiciones/depre_moderada.png",
      imageText: "Depresión moderada.",
      description: "DEPRESION",
      details: "La depresión moderada se caracteriza  por presentar síntomas que pueden afectar a sus actividades cotidianas sin llegar a un punto crítico. Los síntomas duran más tiempo (por lo general, al menos dos semanas). La depresión moderada puede beneficiarse de terapia psicológica. Los síntomas más frecuentes son:",
      sensations: `Sentimientos de culpa o inutilidad, dificultad para concentrarse, cambios en la motivación o interés, irritabilidad o cambios de humor.`
    },
    severo: {
      image: "../../img/condiciones/depre_severa.png",
      imageText: "Depresión severa grave.",
      description: "DEPRESION",
      details: `Este nivel es una forma más grave de trastorno depresivo, ya que afecta significativamente la vida de quien la padece. Los síntomas depresivos son más intensos y persistentes. Puede experimentar:`,
      sensations: `Pensamientos negativos o suicidas, dificultad para realizar tareas diarias, pérdida de interés en actividades que antes disfrutaba, cambios significativos en el apetito o sueño. En este punto es fundamental buscar ayuda profesional de inmediato.`
    },
    muySevero: {
      image: "../../img/condiciones/depre_muysevera.png",
      imageText: "Depresión muy severa.",
      description: "Depresión crítica severa.",
      details: "Es el punto más crítico de la depresión, puede llevar a una pérdida casi total de la capacidad de funcionar en la vida cotidiana, así como también poner en riesgo su vida. Los síntomas que se presentan son extremadamente intensos y debilitantes como:",
      sensations: `Pensamientos suicidas frecuentes, dificultad para realizar tareas básicas, pérdida total de interés, cambios drásticos en el apetito o sueño. Requieren de ayuda profesional inmediata, por el alto riesgo.`
    }
  }
};

function changeContent(level, page, event) {

  if (!contentData[page] || !(contentData[page][level])) {
    console.error("Contenido no encontrado para la página o nivel proporcionado.");
    return;
  }
  
  // Cambiar el contenido dinámico
  
  
  const content = contentData[page][level];

  // Cambiar contenido dinámico
  document.getElementById("dynamicImage").src = content.image;
  document.getElementById("dynamicImageText").textContent = content.imageText;
  document.getElementById("dynamicDetails").textContent = content.details;
  document.getElementById("dynamicSensations").innerHTML = content.sensations;

  // Cambiar la clase activa del botón
  document.querySelectorAll(".btn-group .btn").forEach(btn => btn.classList.remove("active"));
  if (event) event.target.classList.add("active");
}