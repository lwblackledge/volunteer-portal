using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace VolunteerPortalApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class TestController : ControllerBase {
    private readonly ILogger<TestController> _logger;

    public TestController(ILogger<TestController> logger) {
      _logger = logger;
    }

    [HttpGet]
    public DateTime Get() {
        return DateTime.Now;
    }
  }
}
