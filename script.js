// Replace with your actual Supabase project credentials
const SUPABASE_URL = 'https://ixjkhekgwcyhcgeszufi.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4amtoZWtnd2N5aGNnZXN6dWZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxNzA4ODIsImV4cCI6MjA1Nzc0Njg4Mn0.BE6xpW0KXUvlZGNh2lTQWoXEpcZrD-XiKAqsOjeo7SA';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function fetchBooks() {
    try {
        let { data: books, error } = await supabase.from('books').select('*');

        if (error) throw error;

        const tableBody = document.getElementById('books-table-body');
        tableBody.innerHTML = '';

        books.forEach(book => {
            let row = `<tr>
                <td>${book.Title}</td>
                <td>${book.Author}</td>
                <td>${book.ISBN}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });

    } catch (error) {
        console.error('Error fetching books:', error);
    }
}

// Fetch books when the page loads
document.addEventListener('DOMContentLoaded', fetchBooks);

