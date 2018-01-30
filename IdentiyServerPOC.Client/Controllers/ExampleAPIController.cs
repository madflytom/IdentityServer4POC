using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IdentiyServerPOC.Client.Controllers
{
    
    [Route("api/ExampleAPI")]
    public class ExampleAPIController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("This is an authenticated resource");
        }
    }
}