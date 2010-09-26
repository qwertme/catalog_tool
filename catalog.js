function Category(xml) {
   var category = $(xml).first();
   this.name = $(xml).children("name:first").text();
   this.id = $(xml).attr("id");
   this.parentId = $(xml).children("parent:first").text();
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
