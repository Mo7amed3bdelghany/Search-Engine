using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EntityProj.Migrations
{
    /// <inheritdoc />
    public partial class PageRankIndexing : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_PageRanks_Word",
                table: "PageRanks",
                column: "Word");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_PageRanks_Word",
                table: "PageRanks");
        }
    }
}
