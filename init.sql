SELECT 'CREATE DATABASE root' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'root');
\gexec