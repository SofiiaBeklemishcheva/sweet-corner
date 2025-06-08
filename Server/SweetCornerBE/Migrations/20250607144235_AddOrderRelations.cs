using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SweetCornerBE.Migrations
{
    /// <inheritdoc />
    public partial class AddOrderRelations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    OrderId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Type = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    ClientMail = table.Column<string>(type: "TEXT", nullable: false),
                    FactoryMail = table.Column<string>(type: "TEXT", nullable: false),
                    Created = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ProductTypes",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CakeConfigs",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    SpongeType = table.Column<string>(type: "TEXT", nullable: false),
                    SpongeColor = table.Column<string>(type: "TEXT", nullable: false),
                    FillingKind = table.Column<string>(type: "TEXT", nullable: false),
                    FillingFlavor = table.Column<string>(type: "TEXT", nullable: false),
                    CreamKind = table.Column<string>(type: "TEXT", nullable: false),
                    CreamColor = table.Column<string>(type: "TEXT", nullable: false),
                    CreamFlavor = table.Column<string>(type: "TEXT", nullable: false),
                    Frosting = table.Column<string>(type: "TEXT", nullable: false),
                    FrostingColor = table.Column<string>(type: "TEXT", nullable: false),
                    OrderId = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CakeConfigs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CakeConfigs_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MacaroonsCupcakesConfigs",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    SpongeColor = table.Column<string>(type: "TEXT", nullable: false),
                    FillingKind = table.Column<string>(type: "TEXT", nullable: false),
                    FillingFlavor = table.Column<string>(type: "TEXT", nullable: false),
                    CreamKind = table.Column<string>(type: "TEXT", nullable: false),
                    CreamColor = table.Column<string>(type: "TEXT", nullable: false),
                    OrderId = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MacaroonsCupcakesConfigs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MacaroonsCupcakesConfigs_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CakeConfigs_OrderId",
                table: "CakeConfigs",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_MacaroonsCupcakesConfigs_OrderId",
                table: "MacaroonsCupcakesConfigs",
                column: "OrderId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CakeConfigs");

            migrationBuilder.DropTable(
                name: "MacaroonsCupcakesConfigs");

            migrationBuilder.DropTable(
                name: "ProductTypes");

            migrationBuilder.DropTable(
                name: "Orders");
        }
    }
}
