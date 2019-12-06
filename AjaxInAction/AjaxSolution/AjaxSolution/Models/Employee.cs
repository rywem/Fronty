using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AjaxSolution.Models
{
    public class Employee
    {
        public string id { get; set; }
        public string name { get; set; }
        public string department { get; set; }
        public string grade { get; set; }
        public string gender { get; set; }
        
    }
    public class Employees
    {
        public List<Employee> employees { get; set; }
        public static Employees GetEmployees()
        {
            string json = "{\"employees\":[ { \"id\":101, \"name\":\"John Smith\", \"department\":\"Accounts\", \"grade\":\"B\", \"gender\":\"M\" },  { \"id\":103, \"name\":\"Aaron Turner\", \"department\":\"Marketing\", \"grade\":\"A\", \"gender\":\"M\" }, { \"id\":104, \"name\":\"Sarah Young\", \"department\":\"Accounts\", \"grade\":\"A\", \"gender\":\"F\" }, { \"id\":107, \"name\":\"Paul Miller\", \"department\":\"Accounts\", \"grade\":\"C\", \"gender\":\"M\" }, { \"id\":108, \"name\":\"Susan Johnson\", \"department\":\"Sales\", \"grade\":\"B\", \"gender\":\"F\" }, { \"id\":110, \"name\":\"David Jones\", \"department\":\"Accounts\", \"grade\":\"C\", \"gender\":\"M\" }, { \"id\":111, \"name\":\"Nancy White\", \"department\":\"Marketing\", \"grade\":\"B\", \"gender\":\"F\" }]}";

            return JsonConvert.DeserializeObject<Employees>(json);
        }
    }

}
