/*
  # Create blog posts table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key) - Unique identifier for each blog post
      - `title` (text, not null) - Blog post title
      - `slug` (text, unique, not null) - URL-friendly version of title
      - `overview` (text, not null) - Short preview text shown by default
      - `content` (text, not null) - Full blog post content
      - `author` (text, not null) - Author name
      - `author_description` (text) - Author bio/description
      - `published` (boolean, default false) - Whether post is published
      - `published_at` (timestamptz) - When the post was published
      - `created_at` (timestamptz, default now()) - When record was created
      - `updated_at` (timestamptz, default now()) - When record was last updated

  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for public read access to published posts only
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  overview text NOT NULL,
  content text NOT NULL,
  author text NOT NULL DEFAULT 'Lamin',
  author_description text DEFAULT 'Helping local businesses get found online and fill their calendars with customers.',
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);

CREATE POLICY "Service role can do everything with blog posts"
  ON blog_posts
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);