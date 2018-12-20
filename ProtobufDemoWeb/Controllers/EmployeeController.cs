using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProtobufDemoWeb.Services;

namespace ProtobufDemoWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Produces(AppConstants.PROTO_MEDIA_TYPE)]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;
        public EmployeeController(IEmployeeService employeeService)
        {
            this._employeeService = employeeService;
        }

        [HttpGet]
        [Route("all")]
        public async Task<IActionResult> Get()
        {
            var employees = await this._employeeService.GetAllAsync();
            var collection = new EmployeeCollection();
            collection.Employees.AddRange(employees);
            return Ok(collection);
        }

    }
}
