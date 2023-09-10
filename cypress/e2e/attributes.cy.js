describe("template spec", () => {
	beforeEach("visits fakeshop website", () => {
		cy.visit("https://fakeshop-neeraj.netlify.app/");
	});

	it("checks the components of the website's main page", () => {
		cy.get("nav.navbar")
			.should("have.length", 1)
			.and("be.visible")
			.within(() => {
				cy.get("a img")
					.should("exist")
					.and("have.attr", "src", "/FakeShop.png");
				cy.get("button.navbar-toggler")
					.should("have.length", 2)
					.and("be.visible");
				cy.get("button.navbar-toggler:first i").should("have.class", "fa-bars");
				cy.get("button.navbar-toggler:last i").should(
					"have.class",
					"fa-shopping-cart"
				);
			});
		cy.get("#FakeShopCarouselInterval")
			.should("have.class", "carousel", "slide")
			.and("be.visible");
	});

	it("checks the product attributes", () => {
		cy.get("div.position-sticky").within(() => {
			cy.get("button").should("have.length", 5);
			cy.get("button:eq(0)").should("have.text", "All");
			cy.get("button:eq(1)").should("have.text", "Women's Clothing");
			cy.get("button:eq(2)").should("have.text", "Men's Clothing");
			cy.get("button:eq(3)").should("have.text", "Jewelery");
			cy.get("button:eq(4)").should("have.text", "Electronics");
		});
	});

	let jeweleryList = {};
	it("makes http request to get the product list for jewelery category", () => {
		cy.request(
			"GET",
			"https://fakestoreapi.com/products/category/jewelery"
		).then((response) => {
			expect(response.status).to.eq(200);
			expect(response.body).to.have.length(4);
			jeweleryList = response.body;
			cy.log(jeweleryList);
		});
	});

	it("click the jewelery attribute and check that the UI shows the correct products", () => {
		cy.intercept("GET", "https://fakestoreapi.com/products").as("getProducts");
		cy.wait("@getProducts");
		cy.get("button:contains(Jewelery)").as("jeweleryAttribute");
		cy.get("@jeweleryAttribute").should("be.visible");
		cy.get("@jeweleryAttribute").click();
		cy.get(".card.h-100")
			.should("have.length", 4)
			.each(($el, index) => {
				cy.wrap($el).within(() => {
					cy.get("img.m-3").should(
						"have.attr",
						"src",
						jeweleryList[index].image
					);
					cy.get(".card-title").should(
						"contain",
						jeweleryList[index].title.substring(0, 50)
					);
					cy.get(".m-3 b").should("contain", jeweleryList[index].price);
				});
			});
	});
});
