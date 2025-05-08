<!-- 🚀 Overview
This project is a scalable and efficient Search Engine designed to handle large-scale datasets using Big Data technologies. It includes full support for web scraping, HDFS storage, content processing, and an inverted index-based search system. -->

# 🔍 Big Data Search Engine

Welcome to our **Big Data Search Engine** project — a comprehensive, end-to-end system built as part of our Big Data course. This project showcases real-world applications of big data concepts, including large-scale data collection, indexing, ranking, and search.

---

## 🧠 Project Overview

This project demonstrates how to build a fully functional **search engine** using Big Data technologies. The workflow includes:

1. **Web scraping** over **200,000 URLs**
2. **Storing** each page as an individual file
3. **Building an inverted index** to map words to documents
4. **Calculating page ranks** using hyperlink structure
5. **Storing processed data** in a database
6. **Developing an API** to serve the search functionality
7. **Frontend interface** where users can search for keywords and get results showing:
   - The list of pages containing the word
   - Frequency of occurrence
   - PageRank of each result

---

## 🧩 Project Components

### 1. 🕸️ Web Scraping

- We scraped data from over **200,000 web pages** using Python.
- Tools used:
  - `requests`
  - `BeautifulSoup`
- Data extracted includes:
  - Text content
  - URLs

### 2. 🗂️ Data Storage

- Each page is saved in a separate **text file**.
- Filenames are based on the URL (safely encoded).
- All files are uploaded and stored in **HDFS (Hadoop Distributed File System)**.

### 3. 🧾 Inverted Index Construction

- Built using **MapReduce** on top of Hadoop.
- Each word is mapped to a list of files (documents) where it appears.
- Also includes the **frequency** of each word per document.
- This structure allows for **fast and scalable** keyword searches.

### 4. 🧮 PageRank Algorithm

- We implemented the **PageRank** algorithm to evaluate the importance of each page.
- Based on link structure and references between the pages.
- Helps rank search results by relevance and authority.

### 5. 🗃️ Database Storage

- Both the **inverted index** and **PageRank scores** are stored in a database (SQL / Entity Framwork).
- Enables efficient querying by the API.

### 6. 🌐 RESTful API

- A back-end API
- Accepts search queries and returns:
  - Matching documents
  - Word frequency in each document
  - PageRank scores

### 7. 🖥️ Frontend Interface
We built a modern, high-performance frontend using:

⚛️ React with TypeScript for robust component-based architecture

🎨 Tailwind CSS for elegant, responsive, and utility-first styling

💡 Optimized UX with a sleek, intuitive, and professional design

---

## 🛠️ Tech Stack

| Function           | Tools / Technologies Used            |
|--------------------|--------------------------------------|
| Web Scraping       | Python (`requests`, `BeautifulSoup`) |
| Data Storage       | HDFS                                 |
| Indexing & Ranking | Hadoop, MapReduce                    |
| Database           |SQL / Entity Framwork                     |
| Backend API        |Local API                      |
| Frontend UI        | HTML, TypeScript, Tailwind CSS      |


---
## 👥 Team & Contributions

This project was a collaborative effort by a talented team. Each member played a key role in building and delivering this Big Data Search Engine:

| Name                                             | Role & Contribution                                                                 |
|--------------------------------------------------|--------------------------------------------------------------------------------------|
| **[Mohamed Abdelghany](https://github.com/Mo7amed3bdelghany)** | Web Scraping & HDFS Storage — Collected data from 200k+ URLs and stored them in HDFS |
| **[Youssef Mahmoud ](https://github.com/Youssef-Ma7moud-Eid)**      | Big Data Processing — Built the Inverted Index in distrbuted Files on HDFS and implemented the PageRank algorithm by neighbors Links |
| **[Mohamed Mohy](https://github.com/MohamedMohyEldein)**    | Backend Developer — Developed the API and connected it with the database and frontend |
| **[Omar ElSayed](https://github.com/OmarElsayed3)**      | Frontend Developer — Built a modern UI using React, TypeScript, and Tailwind CSS     |

🙌 Thanks to each team member for their dedication, collaboration, and exceptional work throughout the project.
