using System;
using Microsoft.AspNetCore.Mvc;
using MongoExample.Services;
using MongoExample.Models;

namespace MongoExample.Controllers; 

[Controller]
[Route("api/[controller]")]
public class CourseController: Controller {
    
    private readonly MongoDBService _mongoDBService;

    public CourseController(MongoDBService mongoDBService) {
        _mongoDBService = mongoDBService;
    }

    [HttpPost("add")]
    public async Task<IActionResult> Post([FromBody] Course course) {
        await _mongoDBService.CreateAsync(course);
        return CreatedAtAction(nameof(Get), new { id = course.Id }, course);
    }

    [HttpGet("all")]
    public async Task<List<Course>> Get() {
        return await _mongoDBService.GetAsync();
    }


}