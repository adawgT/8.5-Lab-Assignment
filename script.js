if (typeof supabase === 'undefined') {
    console.error('Supabase SDK is NOT loaded! Check your script tag order in index.html.');
} else {
    console.log('Supabase SDK loaded successfully.');
}

const SUPABASE_URL = 'https://ixjkhekgwcyhcgeszufi.supabase.co';  
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4amtoZWtnd2N5aGNnZXN6dWZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxNzA4ODIsImV4cCI6MjA1Nzc0Njg4Mn0.BE6xpW0KXUvlZGNh2lTQWoXEpcZrD-XiKAqsOjeo7SA';  // Replace with your public anon key

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
console.log("Supabase client initialized:", supabase);

async function fetchBooks() {
    console.log('Fetching books from Supabase...');

    let { data: books, error } = await supabase.from('books').select('*');

    if (error) {
        console.error('Supabase Error:', error);
        return;
    }

    console.log('Fetched Books:', books);

    if (books.length === 0) {
        console.warn('No books found in the database.');
        return;
    }

    const tableBody = document.getElementById('books-table-body');
    tableBody.innerHTML = ''; // Clear any previous content

    books.forEach(book => {
        let row = `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

document.addEventListener('DOMContentLoaded', fetchBooks);
