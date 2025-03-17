// Replace with your Supabase credentials
const SUPABASE_URL = 'https://ixjkhekgwcyhcgeszufi.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4amtoZWtnd2N5aGNnZXN6dWZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxNzA4ODIsImV4cCI6MjA1Nzc0Njg4Mn0.BE6xpW0KXUvlZGNh2lTQWoXEpcZrD-XiKAqsOjeo7SA';

const supabase = supabase.createClient(https://ixjkhekgwcyhcgeszufi.supabase.co, eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4amtoZWtnd2N5aGNnZXN6dWZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxNzA4ODIsImV4cCI6MjA1Nzc0Njg4Mn0.BE6xpW0KXUvlZGNh2lTQWoXEpcZrD-XiKAqsOjeo7SA);

async function fetchBooks() {
    try {
        console.log('Fetching books...');

        let { data: books, error } = await supabase.from('books').select('*');

        if (error) {
            console.error('Supabase Error:', error);
            return;
        }

        console.log('Fetched Books:', books);

        const tableBody = document.getElementById('books-table-body');
        tableBody.innerHTML = ''; // Clear any previous content

        books.forEach(book => {
            let row = `<tr>
                <td>${book.Title}</td>
                <td>${book.Author}</td>
                <td>${book.ISBN}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });

    } catch (err) {
        console.error('Unexpected Error:', err);
    }
}

// Fetch books when the page loads
document.addEventListener('DOMContentLoaded', fetchBooks);
