let arrays = [];
        let categories = ['Electronics', 'Clothes', 'Home & Office'];
             for(let z =12; z<13;z=z+2) {
                    for (let x = 1; x <= 29; x++) {
                        for (let y = 0; y < categories.length; y++) {
                            let stock = 500 - Math.floor(Math.random() * 10) * 10; // Random depletion
                      let date = new Date(`2024-${z<10? '0'+z:z}-${x < 10 ? "0" + x : x}T23:00:01.016Z`).toISOString();
                    let newData = { 
                        "Category": categories[y], 
                        "Stock": stock, 
                        "date": date,
                        "status": "Active" 
                    };
                    console.log(date)
                    arrays.push(newData);
                }
            }
        }
        try{
           await CategorySnapshotSchema.insertMany(arrays);
            res.status(200).send("Snapshots created successfully");
        } catch(err){
            console.log(err);
            res.status(500).send("Error in creating snapshots");
        }