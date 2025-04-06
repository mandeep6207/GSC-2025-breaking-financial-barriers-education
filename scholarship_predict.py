import tensorflow as tf

def recommend_scholarship(student_profile):
    scholarships = ["STEM Excellence", "Women in Tech", "Need-Based Grant"]
    return scholarships[:2]  # Returning top 2 recommendations

student_data = {"GPA": 3.8, "Income": "Low", "Field": "Computer Science"}
print("Recommended Scholarships:", recommend_scholarship(student_data))
