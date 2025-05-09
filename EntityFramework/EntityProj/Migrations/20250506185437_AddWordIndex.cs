using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EntityProj.Migrations
{
    /// <inheritdoc />
    public partial class AddWordIndex : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_SearchResults_Word",
                table: "SearchResults",
                column: "Word");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_SearchResults_Word",
                table: "SearchResults");
        }
    }
}
