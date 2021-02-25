//Sending photos to cloudinary storage
cloudinary.config({
    CLOUD_NAME: process.env.CLOUD_NAME,
    CLOUD_APIIKEY: process.env.API_KEY,
    CLOUD_API_SECRET: process.env.API_SECRET
});

app.use(cors({
    origin: CLIENT_ORIGIN
}));

app.use(formData.parse());

app.post('/image-upload-single', (req, res) => {
    const path = Object.values(Object.values(req.files)[0])[0].path;
    cloudinary.uploader.upload(path)
        .then(image => res.json([image]));
});