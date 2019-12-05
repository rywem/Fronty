using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AjaxSolution
{
    public class Countries
    {

        public static List<string> GetCountries(string continent)
        {
            List<string> countries = new List<string>();

            switch (continent.ToLower())
            {
                case "africa":
                    return new List<string>()
                    {
                        "Angola", "Cameroon", "Egypt", "Kenya", "Uganda"
                    };

                case "asia":
                    return new List<string>()
                    {
                        "China", "India", "Iran", "Malaysia", "Singapore"
                    };
                case "europe":
                    return new List<string>()
                    {
                        "France", "Germany", "Italy", "Spain", "United Kingdom"
                    };
                case "n-america":
                    return new List<string>()
                    {
                       "Canada", "Cuba", "Jamaica", "Panama", "United States"
                    };
                case "s-america":
                    return new List<string>()
                    {
                       "Argentina", "Brazil", "Colombia", "Peru", "Uruguay"
                    };
                case "australia":
                    return new List<string>()
                    {
                       "Australia", "Fiji", "Kiribati", "New Zealand"
                    };
                default:
                    return new List<string>();
            }
        }
    }
}
