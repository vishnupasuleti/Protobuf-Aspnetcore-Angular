using System.Collections.Generic;
using System.Threading.Tasks;
using ProtobufDemoWeb.Database;
using System.Linq;

namespace ProtobufDemoWeb.Services
{
    public class EmployeeService : IEmployeeService
    {
        public async Task<List<Employee>> GetAllAsync()
        {
            var data = await EmployeeDatabase.GetAllAsync();
            return data.Select(_=> new Employee 
            {
                Age = _.Age,
                Country = _.Country,
                FirstName = _.FirstName,
                FootballClub = _.FootballClub,
                LastName = _.LastName,
                Position = _.Position
            }).ToList();
         }
    }
}