import dotenv from 'dotenv';
dotenv.config();

import { server } from './src/socket/socket.js';

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Socket Server is running on port ${PORT}`);
});