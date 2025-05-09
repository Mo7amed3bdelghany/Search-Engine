using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.IO;
using System.Text;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using EntityProj;

namespace EntityProj
{
    internal class Program
    {
        static void Main(string[] args)
        {
            #region API Call
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddDbContext<ApplicationDbContext>();
            builder.Services.AddControllers();

            // Add CORS
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowFrontend", policy =>
                {
                    policy.WithOrigins("http://localhost:5173")
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                });
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            app.UseCors("AllowFrontend"); // Enable CORS
            app.UseAuthorization();
            app.MapControllers();

            app.Run();
            #endregion



            #region DataPrinting
            //var _context = new ApplicationDbContext();
            ////DatabaseSeeding(_context);
            //var data2 = _context.PageRanks.Where(d => d.Word == "java")
            //    .Select(s => new { s.Url, s.WordCount });
            //foreach (var item in data2) Console.WriteLine($"{item.Url}\t{item.WordCount}"); 
            #endregion

        }

        #region MyFunctions
        public static IEnumerable<(string word, string url, double count)> ExtractFileData(StreamReader streamReader)
        {
            var output = new StringBuilder();
            while (!streamReader.EndOfStream)
            {
                char c = (char)streamReader.Read();
                if (char.IsWhiteSpace(c)) continue;
                if (c == '|')
                {
                    string str = output.ToString();
                    var split = str.Split(';');
                    yield return (split[0], split[1], double.Parse(split[2]));
                    output.Clear();
                    continue;
                }
                if (output.Length > 449) continue;
                output.Append(c);

            }
        }
        public static IEnumerable<(string, int)> RetrieveData(ApplicationDbContext _context, string word)
        {
            var data = _context.SearchResults
                .Where(d => d.Word.Equals(word, StringComparison.OrdinalIgnoreCase))
                .Select(s => new { s.Url, s.WordCount });
            foreach (var item in data)
            {
                yield return (item.Url, item.WordCount);
            }

        }
        public static void DatabaseSeeding(ApplicationDbContext _context)
        {
            StreamReader sr = new StreamReader(@"D:\Inverted_Index_updated.txt");
            var data = ExtractFileData(sr);
            int cnt = 0;
            foreach (var item in data)
            {

                var record = new PageRank { Word = item.word, Url = item.url, WordCount = item.count };

                if (_context.PageRanks.Find(record.Word, record.Url) == null)
                {
                    _context.PageRanks.Add(record);
                    cnt++;
                }
                if (cnt == 1000)
                {
                    _context.SaveChanges();
                    cnt = 0;
                }
            }
            _context.SaveChanges();
        } 
        #endregion
    }


}