const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3000;

// Подключение к базе данных MySQL
const pool = mysql.createPool({
    host: '147.45.148.78',
    user: 'romashka',
    password: 'yHA4XP:lB:@2AI',
    database: 'roma',
    // port: 3306
});

// Промежуточное ПО для обработки JSON данных в теле запроса
app.use(express.json());
app.use(cors());

// Обработчик GET запросов на корневом маршруте
app.get('/users', async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query('SELECT * FROM users');
        connection.release();
        res.json(rows);
    } catch (error) {
        console.error('Error querying database:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Обработчик POST запросов на маршруте /add
app.post('/add', async (req, res) => {
    try {
        const { fullname, number, email, gender, languages, biography } = req.body;
        const currentDate = new Date().toISOString().slice(0, 10);

        const connection = await pool.getConnection();
        await connection.execute(
            'INSERT INTO users (fullname, number, email, gender, languages, biography, date) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [fullname, number, email, gender, languages, biography, currentDate]
        );
        connection.release();

        res.status(200).json({ message: 'Data added successfully' });
    } catch (error) {
        console.error('Error adding data to database:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
