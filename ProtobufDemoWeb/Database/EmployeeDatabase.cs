using System.Collections.Generic;
using System.Threading.Tasks;
using ProtobufDemoWeb.Dtos;

namespace ProtobufDemoWeb.Database
{
    public static class EmployeeDatabase
    {
        private static List<EmployeeDTO> _employeeList = new List<EmployeeDTO>();

        static EmployeeDatabase()
        {
            _employeeList.Add(new EmployeeDTO { Id =1, FirstName = "Thibaut", LastName = "Courtois", Position="Goal Keeper", FootballClub = "Real Madrid", Country = "Belgium", Age= 26  });
            _employeeList.Add(new EmployeeDTO { Id =2, FirstName = "Toni", LastName = "Kroos", Position = "Playmaker", FootballClub = "Real Madrid", Country = "Germany", Age= 29  });
            _employeeList.Add(new EmployeeDTO { Id =3, FirstName = "Marco", LastName = "Reus", Position = "Winger", FootballClub = "BORUSSIA DORTMUND", Country = "Germany", Age= 29  });
        }

        public static Task<List<EmployeeDTO>> GetAllAsync()
        {
            return Task.FromResult(_employeeList);
        }
    }
}