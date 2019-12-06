using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AjaxSolution.Models
{
    public class BMI
    {
        public float bmi { get; set; }
        public string message { get; set; }

        public static BMI CalculateBMI(float height, float weight)
        {
            float heightInMs = height / 100;
            float bmi = weight / (heightInMs * heightInMs);
            string message = string.Empty;

            if (bmi < 18.5f)
                message = "You are underweight";
            else if (bmi >= 18.5 && bmi <= 24.9)
                message = "Congrats!!! You have normal weight.";
            else if (bmi > 24.9 && bmi <= 29.9)
                message = "You are overweight.";
            else
                message = "Be careful!!! You are obese.";

            return new BMI()
            {
                bmi = bmi,
                message = message
            };
        }
    }
}
