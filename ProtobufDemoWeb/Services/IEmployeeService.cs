using System.Collections.Generic;
using System.Threading.Tasks;

namespace ProtobufDemoWeb.Services
{
    public interface IEmployeeService
    {
        Task<List<Employee>> GetAllAsync();
    }
}