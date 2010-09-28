function Category(xml) {
   this.name = $(xml).children("name:first").text();
   this.id = $(xml).attr("id");
   this.parentId = $(xml).children("parent:first").text();
}

function Item(xml) {
   this.id = $(xml).attr("id");
   this.type = $(xml).attr("type");

   var product = $(xml).children("product-info:first");
   this.name = $(product).children("name:first").text();

   var thumbnails = $(product).children("thumbnails")
   this.smallThumbnail = $(thumbnails).children("thumbnail[label=small]").text();
   this.largeThumbnail = $(thumbnails).children("thumbnail[label=large]").text();
}

function parseCategories(xml) {
   var categories = [];
   var index = 0;
   $(xml).find("category").each(function() {
      categories[index++] = new Category($(this));
   });
   return categories;
}

function parseItemIds(xml) {
   var itemIds = [];
   var index = 0;
   $(xml).find("item-id").each(function() {
      itemIds[index++] = $(this).text();
   });
   return itemIds;
}
