

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        return sorted(s) == sorted(t)


result = Solution.isAnagram('', 'anagram', 'margana')

print(result)


'''
Resolver un problema como Valid Anagram (Verificar si dos cadenas son anagramas) te enseña varias lecciones valiosas relacionadas con la manipulación de arrays, cadenas, y el pensamiento algorítmico en general. Aquí te detallo los conceptos clave que puedes aprender:


Resolver un problema como Valid Anagram (Verificar si dos cadenas son anagramas) te enseña varias lecciones valiosas relacionadas con la manipulación de arrays, cadenas, y el pensamiento algorítmico en general. Aquí te detallo los conceptos clave que puedes aprender:

/// 1. Manipulación de Cadenas y Arrays
-Dividir y unir cadenas (split, join): Aprendes cómo transformar cadenas en arrays y viceversa, lo cual es útil en muchos problemas.
-Ordenar arrays (sort): Este método te permite reorganizar los elementos de un array. Entiendes cómo aprovechar el ordenamiento para simplificar comparaciones.

/// 2. Comparación de Estructuras
El problema te enseña a pensar en cómo comparar dos conjuntos de datos de manera efectiva:

-Comparar si dos cadenas contienen exactamente los mismos caracteres.
-Aprender a detectar similitudes estructurales, como frecuencia de caracteres o elementos repetidos.

/// 3. Optimización Algorítmica
El problema tiene varias soluciones con diferentes niveles de eficiencia:

-Solución simple: Ordenar ambas cadenas y compararlas. Esto tiene un costo de tiempo de O(n log n) debido al sort.
-Solución óptima: Usar un contador de frecuencias para reducir el costo a O(n).
Aprendes a identificar cuándo vale la pena optimizar y cómo hacerlo

/// 4. Uso de Estructuras de Datos
Resolver este problema con un contador de frecuencia implica usar objetos o mapas para almacenar datos. Esto te enseña a trabajar con estructuras como:

-Objetos en JavaScript: Para contar ocurrencias de caracteres.
-Mapas (Map): Alternativa moderna y eficiente para manejar conteos.

///5. Pensamiento Crítico y Resolución de Problemas
-Validación de casos base: Consideras casos como cadenas de distinta longitud, cadenas vacías o caracteres especiales.
-Dividir el problema: En este caso, dividir el problema en pasos claros: verificar longitud, calcular frecuencia u ordenar, y comparar resultados.
-Elegir el enfoque adecuado: Comparas eficiencia, claridad y mantenimiento entre diferentes soluciones.

6. Buenas Prácticas de Codificación
Modularizar el código: Al encapsular la solución en una función (o clase/método), aprendes a escribir código reutilizable y fácil de entender.


7. Preparación para Problemas Más Avanzados
Este tipo de problema es una introducción a temas más complejos como:

-Permutaciones y combinaciones: Resolver problemas que implican reorganizar elementos.
-Problemas de hashmaps y conteo: Encontrar elementos duplicados, frecuencia, etc.
-Comparaciones complejas: Detectar similitudes entre datos estructurados (listas, árboles, etc.).

En resumen, trabajar en Valid Anagram fortalece tus habilidades en:

Manipulación básica de datos.
Pensamiento algorítmico.
Optimización.
Dominio de estructuras de datos como arrays y objetos/mapas.


'''
