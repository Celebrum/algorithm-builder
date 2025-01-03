from sympy import symbols, Eq, latex
import numpy as np

class EquationGenerator:
    def __init__(self):
        self.equations = {}
    
    def generate_nanofluid_equations(self):
        # Thermal conductivity enhancement
        phi, k_bf, k_np = symbols('phi k_bf k_np')
        enhancement = (1 + (k_np/k_bf - 1) * phi) / (1 - phi)
        
        # Stability equations (zeta potential)
        zeta, epsilon, eta = symbols('zeta epsilon eta')
        stability = Eq(zeta, 2 * epsilon * eta)
        
        return {
            'thermal_enhancement': enhancement,
            'stability': stability
        }
    
    def generate_latex_equations(self):
        """Convert equations to LaTeX format for paper inclusion"""
        return {key: latex(eq) for key, eq in self.equations.items()}
