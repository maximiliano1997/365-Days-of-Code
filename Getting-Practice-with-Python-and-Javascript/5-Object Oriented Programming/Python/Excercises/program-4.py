# 4. **Clase Polígono**: Define una clase abstracta Polígono, y clases derivadas como Triángulo, Cuadrado, Rectángulo, etc., que implementen los métodos para calcular el área y el perímetro.


class Poligono():


    def area(self):
        pass
    
    def perimetro(self):
        pass
    
        
class Triangulo(Poligono):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura
    
    def area(self):
        return (self.base * self.altura) / 2
    
    def perimetro(self):
        return self.base * 3


class Cuadrado(Poligono):
    def __init__(self, lados):
        self.lados = lados
    
    def area(self):
        return self.lados ** 2
    
    def perimetro(self):
        return self.lados * 4

class Rectangulo(Poligono):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura
        # self.lado = lado

    def area(self):
        return (self.base + self.altura) * 2
    

# Testeo

triangulo = Triangulo(10, 10)

cuadrado = Cuadrado(20)

rectangulo = Rectangulo(20, 5)

print(triangulo.perimetro())