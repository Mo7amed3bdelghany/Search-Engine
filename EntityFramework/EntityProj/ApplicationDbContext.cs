using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.EntityFrameworkCore;
namespace EntityProj
{
    public class ApplicationDbContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)=>
        optionsBuilder.UseSqlServer(@"Data Source=OMAR;Initial Catalog=EFCoreDB;Integrated Security=True;Connect Timeout=30;Encrypt=True;Trust Server Certificate=True;Application Intent=ReadWrite;Multi Subnet Failover=False");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //InvertedIndex
            modelBuilder.Entity<SearchResult>().Property(s => s.Word).HasMaxLength(400);
            modelBuilder.Entity<SearchResult>().Property(s => s.Url).HasMaxLength(450);
            modelBuilder.Entity<SearchResult>().HasKey(s => new { s.Word, s.Url });
            modelBuilder.Entity<SearchResult>().HasIndex(s => s.Word);
            //PageRank
            modelBuilder.Entity<PageRank>().Property(s => s.Word).HasMaxLength(400);
            modelBuilder.Entity<PageRank>().Property(s => s.Url).HasMaxLength(450);
            modelBuilder.Entity<PageRank>().HasKey(s => new { s.Word, s.Url });
            modelBuilder.Entity<PageRank>().HasIndex(s => s.Word);
        }
        public DbSet<SearchResult> SearchResults { get; set; }
        public DbSet<PageRank> PageRanks { get; set; }
    }
}
