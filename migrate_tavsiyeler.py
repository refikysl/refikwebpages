import re
import json

def extract_books(content):
    # Find the block for Kitap Tavsiyeleri
    # It starts after "id": 2 and ends before "id": 3
    start = content.find('"id": 2')
    end = content.find('"id": 3')
    if start == -1: return []
    
    block = content[start:end] if end != -1 else content[start:]
    
    # Regex for books inside <details>
    # Title: <span class="summary-text" ...>(.*?)</span>
    # Image: <img src="(.*?)"
    # Content: <div class="recommendation-content">\s*(.*?)</div> (This might be multiline)
    
    books = []
    
    # Split by <details class="modern-details"
    parts = block.split('<details class="modern-details"')
    for part in parts[1:]: # Skip first junk
        title_m = re.search(r'<span class="summary-text"[^>]*>(.*?)</span>', part)
        img_m = re.search(r'<img src="(.*?)"', part)
        
        # Content is tricky because of nested tags. Let's look for <div class="recommendation-content">
        # and capture everything until the closing div of that container.
        # But regex is hard for nested divs.
        # However, the structure seems consisten: <div class="recommendation-content"> ... </div>
        # inside that div, there are <p> tags.
        
        content_start = part.find('<div class="recommendation-content">')
        if content_start != -1:
            # Find the distinct closing div for this content
            # It seems to end before specific other tags or just look for the closing </div>
            # Since indentation is used, maybe we can rely on it?
            # Or just take everything until the next </div> that matches indentation?
            # Let's try to capture all <p>...</p> tags inside.
            
            p_tags = re.findall(r'<p.*?>(.*?)</p>', part, re.DOTALL)
            desc = "\n\n".join([p.strip().replace('\n', ' ') for p in p_tags])
            
            # Clean up HTML entities if needed, but keeping HTML tags inside <p> is okay?
            # The Admin tool content area is plain text usually, but here we want rich text?
            # Derkenar supports plain text.
            # The current content has <em> and <strong>. Use them.
            
            title = title_m.group(1).strip() if title_m else "No Title"
            image = img_m.group(1).strip() if img_m else ""
            
            # Remove numbering from title if present "1. Title"
            if re.match(r'^\d+\.\s', title):
                title = re.sub(r'^\d+\.\s', '', title)
                
            books.append({
                "id": len(books) + 1,
                "title": title,
                "image": image,
                "content": desc
            })
            
    return books

def extract_movies(content):
    start = content.find('"id": 3')
    if start == -1: return []
    block = content[start:]
    
    movies = []
    parts = block.split('<details class="modern-details"')
    for part in parts[1:]:
        title_m = re.search(r'<span class="summary-text"[^>]*>(.*?)</span>', part)
        img_m = re.search(r'<img src="(.*?)"', part)
        
        # Extract metadata
        meta_div = re.search(r'<div style="margin-bottom: 0.8rem;.*?>(.*?)</div>', part, re.DOTALL)
        meta_info = ""
        if meta_div:
            # Convert <br> to newlines
            meta_info = meta_div.group(1).replace('<br>', '\n').replace('<strong>', '').replace('</strong>', '').strip()
            # Clean up extra spaces
            meta_info = "\n".join([line.strip() for line in meta_info.split('\n') if line.strip()])
            
        # Content paragraphs
        p_tags = re.findall(r'<p.*?>(.*?)</p>', part, re.DOTALL)
        desc = "\n\n".join([p.strip().replace('\n', ' ') for p in p_tags])
        
        # IMDb
        imdb_m = re.search(r'href="(.*?)"', part)
        imdb = imdb_m.group(1) if imdb_m else ""
        
        title = title_m.group(1).strip() if title_m else "No Title"
        image = img_m.group(1).strip() if img_m else ""
        
        if re.match(r'^\d+\.\s', title):
            title = re.sub(r'^\d+\.\s', '', title)

        movies.append({
            "id": len(movies) + 1,
            "title": title,
            "image": image,
            "meta": meta_info,
            "content": desc,
            "imdb": imdb
        })
        
    return movies

def main():
    with open('data/tavsiyeler.js', 'r', encoding='utf-8') as f:
        content = f.read()
        
    books = extract_books(content)
    movies = extract_movies(content)
    
    print(f"Found {len(books)} books and {len(movies)} movies.")
    
    # Write Books
    with open('data/tavsiyeler_kitap.js', 'w', encoding='utf-8') as f:
        f.write('const kitapTavsiyeleriData = [\n')
        for i, item in enumerate(books):
            entry = f'''    {{
        "id": {item['id']},
        "title": "{item['title']}",
        "image": "{item['image']}",
        "content": `{item['content']}`
    }}'''
            if i < len(books) - 1: entry += ","
            f.write(entry + "\n")
        f.write('];\n')
        
    # Write Movies
    with open('data/tavsiyeler_film.js', 'w', encoding='utf-8') as f:
        f.write('const filmTavsiyeleriData = [\n')
        for i, item in enumerate(movies):
            entry = f'''    {{
        "id": {item['id']},
        "title": "{item['title']}",
        "image": "{item['image']}",
        "meta": `{item['meta']}`,
        "imdb": "{item['imdb']}",
        "content": `{item['content']}`
    }}'''
            if i < len(movies) - 1: entry += ","
            f.write(entry + "\n")
        f.write('];\n')

if __name__ == "__main__":
    main()
