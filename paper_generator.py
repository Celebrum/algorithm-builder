from math_validator import MathFrameworkValidator
from equation_generator import EquationGenerator
import markdown
import os

class PaperGenerator:
    def __init__(self):
        self.validator = MathFrameworkValidator()
        self.equation_gen = EquationGenerator()
        
    def generate_paper_with_math(self, research_data: dict):
        # Generate equations based on research type
        equations = self.equation_gen.generate_nanofluid_equations()
        
        # Validate mathematical framework
        is_valid, message = self.validator.validate_framework()
        if not is_valid:
            raise ValueError(f"Mathematical framework invalid: {message}")
            
        # Insert validated equations into paper sections
        self.update_paper_sections(equations)
    
    def update_paper_sections(self, equations):
        sections_path = "./sections"
        for section in ['methods.md', 'results.md', 'thermal_analysis.md']:
            self.insert_equations_into_section(
                os.path.join(sections_path, section),
                equations
            )
