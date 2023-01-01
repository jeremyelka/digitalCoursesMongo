using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;

namespace MongoExample.Models;

public class Course {

    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    public string courseTitle { get; set; } = null!;
    public int cost {get;set;}
    public DateTime courseDate{get;set;}
    public Boolean isActive{get;set;}

}