using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace ReactAspNet.Server.Controllers
{
    [ApiController]
    [Route("api/alterReminder")]
    public class alterReminderController : ControllerBase
    {
        [HttpPost("endpoint")]
        public IActionResult ReceiveData([FromBody] JObject data)
        {
            var keyValue = data["key"];
            var value = data["value"];
            return Ok(new { message = "Data received successfully" });
        }
    }
}
