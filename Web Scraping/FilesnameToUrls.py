from urllib.parse import unquote

def filename_to_url(filename):
  return unquote(filename.replace(".txt", ""))

def read_file(path):
  with open(path, encoding="utf-8") as f:
    text = f.read().replace('\n', '[]')
  return text

def replace_filenames_with_urls(text):
  new_text=""

  while text:
    first = text.find('https')
    if first == -1:
      new_text+=text
      break
    else:
      new_text += text[0:first]
      text = text[first:]
      second = text.find(';')
      filename = text[0:second]
      text = text[second:]
      url = filename_to_url(filename)
      new_text += url

  new_text = new_text.replace('[]','\n')
  return new_text


def main():
  text = read_file('index.txt')
  new_text = replace_filenames_with_urls(text)

  with open("Inverted_Index.txt", "w", encoding="utf-8") as file:
    file.write(new_text)

if __name__ == "__main__":
  main()

