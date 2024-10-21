const express = require('express');
const multer  = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Configure Multer for file uploads
const upload = multer({
    dest: 'uploads/',
    fileFilter: (req, file, cb) => {
        if (path.extname(file.originalname) !== '.json') {
            return cb(new Error('Only JSON files are allowed'));
        }
        cb(null, true);
    }
});


app.get('/', (req, res) => {
    res.render('index');
});

app.post('/analyze', upload.fields([{ name: 'followers' }, { name: 'following' }]), (req, res) => {
    if (!req.files.followers || !req.files.following) {
        return res.status(400).send('Files not uploaded properly.');
    }

    const followersPath = req.files.followers[0].path;
    const followingPath = req.files.following[0].path;

    // Process the JSON files
    const notFollowingBack = processFiles(followersPath, followingPath);

    // Clean up uploaded files
    fs.unlinkSync(followersPath);
    fs.unlinkSync(followingPath);

    res.render('results', { users: notFollowingBack });
});

function processFiles(followersPath, followingPath) {
    try {
        const followersData = JSON.parse(fs.readFileSync(followersPath, 'utf-8'));
        const followingData = JSON.parse(fs.readFileSync(followingPath, 'utf-8'));

        const followers = extractUsernames(followersData);
        const following = extractUsernames(followingData);

        const notFollowingBack = following.filter(user => !followers.includes(user));

        return notFollowingBack;
    } catch (error) {
        console.error('Error processing files:', error);
        return [];
    }
}

function extractUsernames(data) {
    let usernames = [];

    if (Array.isArray(data)) {
        // Data is an array
        data.forEach(item => {
            if (item.string_list_data && item.string_list_data.length > 0) {
                usernames.push(item.string_list_data[0].value);
            } else if (item.title) {
                usernames.push(item.title);
            }
        });
    } else {
        // Data is an object
        const key = Object.keys(data)[0];
        if (Array.isArray(data[key])) {
            data[key].forEach(item => {
                if (item.string_list_data && item.string_list_data.length > 0) {
                    usernames.push(item.string_list_data[0].value);
                } else if (item.title) {
                    usernames.push(item.title);
                }
            });
        }
    }

    return usernames;
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
