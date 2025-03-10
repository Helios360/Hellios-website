htmlName = input("Enter the HTML file name: ")
Title = input("Enter the Title: ")
Text = input("Enter the Text content: \n")
Img = input("Enter the image name: ")

# Create the post file
post_path = f"Posts/{htmlName}.html"
with open(post_path, 'w') as f:
    final_post = f"""
<!DOCTYPE html>
<html>
    <head>
        <title>Hellios >> Post</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="../styles/style.css">
        <script src="../script.js"></script>
    </head>
    <body>
        <header>
            <a href="../index.html"><img src="../sources/trou-blanc.png" alt="HELLIOS" width="50px" height="50px"></a>            
            <li>
                <a href="../Blog.html"><ul>BLOG</ul></a>
                <a href="../About.html"><ul>ABOUT</ul></a>
                <a href="../Sources.html"><ul>SOURCES</ul></a>
            </li>
        </header>
        <main>
            <section class="heading">
                <h1 class="post-heading">{Title}</h1>
            </section>
            <section class="content">
                <img src="../sources/PostImages/{Img}" alt="{Img}" width="100%">
                <p>{Text}</p>    
            </section>
        </main>
        <footer>
            <div>
                <a href="../index.html">>>> Home</a>
                <a href="../Blog.html">>>> Blog</a>
                <a href="../About.html">>>> About</a>
                <a href="../Sources.html">>>> Sources</a>
            </div>
        </footer>
    </body>
</html>
"""
    f.write(final_post)

# Append post card to Blog.html
blog_file = "Blog.html"
post_card = f"""                <a href="Posts/{htmlName}.html"> 
                    <span>
                        <img src="sources/PostImages/{Img}" alt="{Title}">
                        <h2 class="glowing-text2">{Title}</h2>
                    </span>
                    <p>{Text[:150]}...</p> 
                </a>
"""

try:
    with open(blog_file, "r+", encoding="utf-8") as blog:
        content = blog.readlines()
        
        # Find where to insert the post (after <main>)
        insert_index = next((i for i, line in enumerate(content) if '<section class="post-contain">' in line), len(content) - 1)

        # Insert the new post card
        content.insert(insert_index + 1, post_card)

        # Write back to Blog.html
        blog.seek(0)
        blog.writelines(content)
        blog.truncate()

    print("Post and blog card created successfully!")

except Exception as e:
    print(f"Error updating Blog.html: {e}")
