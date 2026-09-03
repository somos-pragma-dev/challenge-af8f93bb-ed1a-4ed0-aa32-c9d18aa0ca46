# Implementación de formularios dinámicos con validación personalizada

En el contexto de una aplicación de gestión de préstamos, debes implementar un formulario dinámico que permita a los usuarios solicitar un préstamo. El formulario debe capturar información como nombre, monto del préstamo, plazo y tipo de préstamo. Además, se requiere una validación personalizada para asegurar que los datos ingresados sean correctos y cumplan con las reglas de negocio. El sistema debe manejar errores de validación y proporcionar retroalimentación al usuario.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | React Hooks |
| **Nivel** | junior-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 4 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Configuración del formulario básico

**Objetivo:** Crear un formulario básico con campos para nombre, monto del préstamo, plazo y tipo de préstamo.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Diseña un formulario que capture la información requerida.
- Asegura que el formulario esté correctamente estructurado para futuras validaciones.

**Entregable:** Formulario básico con campos para nombre, monto del préstamo, plazo y tipo de préstamo.

<details>
<summary>Pistas de conocimiento</summary>

- Piensa en la estructura del formulario y cómo se relacionarán los campos con la validación.
- Considera cómo manejarás los estados de los campos del formulario.

</details>

### Fase 2: Implementación de validación personalizada

**Objetivo:** Agregar validación personalizada a los campos del formulario para asegurar que los datos ingresados sean correctos y cumplan con las reglas de negocio.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Implementa validaciones para cada campo del formulario.
- Asegura que el formulario maneje errores de validación y proporcione retroalimentación al usuario.

**Entregable:** Formulario con validación personalizada para cada campo y manejo de errores de validación.

<details>
<summary>Pistas de conocimiento</summary>

- Piensa en las reglas de negocio para cada campo y cómo las implementarías en la validación.
- Considera cómo proporcionarás retroalimentación al usuario en caso de errores de validación.

</details>

### Fase 3: Mejora y refactorización del formulario

**Objetivo:** Mejorar y refactorizar el formulario para asegurar que sea eficiente y fácil de mantener.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Revisa el formulario y haz las mejoras necesarias para asegurar que sea eficiente y fácil de mantener.
- Asegura que el formulario sea accesible y siga las mejores prácticas de usabilidad.

**Entregable:** Formulario refactorizado y mejorado, accesible y siguiendo las mejores prácticas de usabilidad.

<details>
<summary>Pistas de conocimiento</summary>

- Piensa en cómo podrías reutilizar código para hacer el formulario más eficiente.
- Considera las mejores prácticas de accesibilidad y usabilidad al refactorizar el formulario.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los React Hooks y por qué se utilizan en este contexto?
- **paraQueSirve**: ¿Cuál es el propósito de la validación personalizada en este formulario?
- **comoSeUsa**: ¿Cómo se implementa la validación personalizada en React Hooks?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar validaciones en formularios y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones tomaste al refactorizar el formulario para mejorar su eficiencia y mantenibilidad?

## Criterios de Evaluacion

- Implementación de un formulario básico con campos para nombre, monto del préstamo, plazo y tipo de préstamo.
- Aplicación de validación personalizada a cada campo del formulario.
- Manejo de errores de validación y provisión de retroalimentación al usuario.
- Refactorización y mejora del formulario para asegurar su eficiencia y mantenibilidad.
- Aplicación de las mejores prácticas de accesibilidad y usabilidad en el formulario.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
