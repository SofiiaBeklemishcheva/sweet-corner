using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SweetCornerBE.Migrations
{
    /// <inheritdoc />
    public partial class third : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Type",
                table: "Orders");

            migrationBuilder.RenameColumn(
                name: "TypeId",
                table: "Orders",
                newName: "ProductTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_ProductTypeId",
                table: "Orders",
                column: "ProductTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_ProductTypes_ProductTypeId",
                table: "Orders",
                column: "ProductTypeId",
                principalTable: "ProductTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_ProductTypes_ProductTypeId",
                table: "Orders");

            migrationBuilder.DropIndex(
                name: "IX_Orders_ProductTypeId",
                table: "Orders");

            migrationBuilder.RenameColumn(
                name: "ProductTypeId",
                table: "Orders",
                newName: "TypeId");

            migrationBuilder.AddColumn<string>(
                name: "Type",
                table: "Orders",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }
    }
}
