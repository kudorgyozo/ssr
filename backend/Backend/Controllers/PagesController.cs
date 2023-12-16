using Backend.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Backend.Controllers {

    [Route("[controller]")]
    [ApiController]
    public class PagesController : ControllerBase {

        // GET: api/<ValuesController>
        [HttpGet("{id}")]
        public Page Get(int id) {
            var page = new Page {
                Id = id,
                Content = $"Page content {id}"
            };

            return page;
        }
    }
}
