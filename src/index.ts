import express,{Response, Request} from 'express';
const bodyParser = require('body-parser');
const studentRoutes = require('./Route/students')
const teacherRoutes = require('./Route/teachers')
const courseRoutes = require('./Route/courses')
const enrolmentRoutes = require('./Route/enrolements')
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();

app.get('/', (req : Request, res: Response)  => {
    res.send('Hello World');
})

app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
app.use('/courses', courseRoutes);
app.use('/enrolments', enrolmentRoutes);

const port = 3001;
app.listen(port, () => console.log("Listening at port " + port))