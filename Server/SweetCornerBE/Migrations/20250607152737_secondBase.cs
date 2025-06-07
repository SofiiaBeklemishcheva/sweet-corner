using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SweetCornerBE.Migrations
{
    /// <inheritdoc />
    public partial class secondBase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "OrderId",
                table: "Orders",
                newName: "TypeId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TypeId",
                table: "Orders",
                newName: "OrderId");
        }
    }
}
