db.books.find({genre:"Fiction"});

db.books.find({published_year:{$gt:1930}});

db.books.find({author:"J.R.R. Tolkien"});

db.books.updateOne({title: 'Animal Farm'},{$set:{price:16.00}});

db.books.deleteOne({title:"Animal Farm"});

db.books.find({in_stock:true,published_year:{$gt:2010}});

db.books.find({},{title:1,author:1,price:1,_id:0});

db.books.find().sort({price:1});

db.books.find().sort({price:-1});

db.books.find().limit(5);

db.books.find().limit(5).skip(5);

db.booksfind([{group:{_id:"$genre",avg_price:{$avg:"$price"}}}]);

db.books.aggregate([{$group:{_id:"$author",count:{$sum:1}}},{$sort:{count:-1}}]);

db.books.aggregate([ {$group: {_id: {decade: { $concat: [ { $substr: ["$published_year", 0, 3] }, "0s" ] } }, count: { $sum: 1 }}}])

db.books.createIndex({title:1});

db.books.createIndex({author:1,published_year:1});

db.books.find({title:"1984"}).explain("executionStats")