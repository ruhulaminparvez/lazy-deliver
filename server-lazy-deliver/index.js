const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.166txbz.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run() {
    try {
        // await client.connect();
        console.log('Connected correctly to server');
        //Blog DB and collection
        const db = client.db('BlogDB');
        const collection = db.collection('blogCollection');
        //Contact DB and collection
        const contactDB = client.db('ContactDB');
        const contactCollection = contactDB.collection('contactCollection');
        //Services DB and collection
        const servicesDB = client.db('ServicesDB');
        const servicesCollection = servicesDB.collection('ServicesCollection');
        //Reviews DB and collection
        const reviewsDB = client.db('ReviewsDB');
        const reviewsCollection = reviewsDB.collection('ReviewsCollection');
        //FAQ DB and collection
        const faqDB = client.db('FAQDB');
        const faqCollection = faqDB.collection('FAQCollection');



        // get specific review
        app.get('/review',  async (req, res) => {
            let query = {};
            if (req.query.email) {
                query = {
                    email: req.query.email
                }
            }
            const cursor = reviewsCollection.find(query);
            const review = await cursor.toArray();
            res.send(review);
        });

        // single review delete
        app.get('/review/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await reviewsCollection.findOne(query);
            res.send(result);
        });

        // add review
        app.post('/add-review', async (req, res) => {
            const review = req.body;
            const result = await reviewsCollection.insertOne(review);
            console.log(`New review created with the following id: ${result.insertedId}`);
            res.send(result);
        });

        // delete review
        app.delete('/delete-review/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await reviewsCollection.deleteOne(query);
            console.log(`${result.deletedCount} document(s) was/were deleted.`);
            res.send(result);
        });

        // update review
        app.put('/update-review/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const newValues = { $set: req.body };
            const options = { upsert: true };
            const updateReview = {
                $set : {
                    customer: req.body.customer,
                    email: req.body.email,
                    message: req.body.message,
                },
            };
            const result = await reviewsCollection.updateOne(query, updateReview, options);
            res.send(result);
        });

        // add blog
        app.post('/addBlog', async (req, res) => {
            const blog = req.body;
            const result = await collection.insertOne(blog);
            console.log(`New blog created with the following id: ${result.insertedId}`);
            res.send(result);
        });
        
        // get all blogs
        app.get('/blogs', async (req, res) => {
            const cursor = collection.find({});
            const blogs = await cursor.toArray();
            res.send(blogs);
        });

        // get single blog
        app.get('/blog/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const blog = await collection.findOne(query);
            res.send(blog);
        });

        // delete blog
        app.delete('/blog/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await collection.deleteOne(query);
            res.send(result);
        });

        // update blog
        app.put('/blog/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const newValues = { $set: req.body };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    name: req.body.name,
                    description: req.body.description
                },
            };
            const result = await collection.updateOne(query, updateDoc, options);
            res.send(result);   
        });

        // get all faq
        app.get('/faq', async (req, res) => {
            const cursor = faqCollection.find({});
            const faqs = await cursor.toArray();
            res.send(faqs);
        });

        //contact form submit
        app.post('/contact', async (req, res) => {
            const contact = req.body;
            const result = await contactCollection.insertOne(contact);
            console.log(`New contact created with the following id: ${result.insertedId}`);
            res.send(result);
        });

        // get limited services
        app.get('/limited-services', async (req, res) => {
            const cursor = servicesCollection.find({}).limit(3);
            const services = await cursor.toArray();
            res.send(services);
        });

        // get all services
        app.get('/services', async (req, res) => {
            const cursor = servicesCollection.find({});
            const service = await cursor.toArray();
            res.send(service);
        });

        // add a service
        app.post('/add-service', async (req, res) => {
            const service = req.body;
            const result = await servicesCollection.insertOne(service);
            console.log(`New service created with the following id: ${result.insertedId}`);
            res.send(result);
        });

        // get single service
        app.get('/service/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const service = await servicesCollection.findOne(query);
            res.send(service);
        });
        
        
    } finally {
        // Ensures that the client will close when you finish/error
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Backend of LazyDeliver!')
    })


app.listen(port, () => {
    console.log(`LazyDeliver listening at http://localhost:${port}`)
    })


