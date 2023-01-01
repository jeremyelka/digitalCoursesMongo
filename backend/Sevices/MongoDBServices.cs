using MongoExample.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Bson;

namespace MongoExample.Services;

public class MongoDBService {

    private readonly IMongoCollection<Course> _courseCollection;

    public MongoDBService(IOptions<MongoDBSettings> mongoDBSettings) {
        MongoClient client = new MongoClient(mongoDBSettings.Value.ConnectionURI);
        IMongoDatabase database = client.GetDatabase(mongoDBSettings.Value.DatabaseName);
        _courseCollection = database.GetCollection<Course>(mongoDBSettings.Value.CollectionName);
    }

    public async Task<List<Course>> GetAsync() {
        return await _courseCollection.Find(new BsonDocument()).ToListAsync();
    }
    public async Task CreateAsync(Course course) {
        await _courseCollection.InsertOneAsync(course);
        return;
    }

}