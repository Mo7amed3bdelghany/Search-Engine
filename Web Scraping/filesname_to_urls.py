from urllib.parse import unquote
import os

def decode_url_in_record(record):
    # Each record should be in the format Word;Url;Count
    parts = record.split(';')
    if len(parts) != 3:
        print(f"Skipping malformed record: {record}")
        return record  # Return unchanged if malformed
    word, url, count = parts
    # Decode the URL part
    decoded_url = unquote(url)
    # Remove '.txt' from the end of the URL if present
    if decoded_url.endswith('.txt'):
        decoded_url = decoded_url[:-4]  # Remove last 4 characters ('.txt')
    # Reconstruct the record
    return f"{word};{decoded_url};{count}"

def process_file(input_path, output_path):
    print(f"Checking input file: {input_path}")  # Debug: Confirm input path
    # Check if input file exists
    if not os.path.exists(input_path):
        raise FileNotFoundError(f"Input file not found: {input_path}")

    # Read the file
    with open(input_path, encoding="utf-8") as f:
        text = f.read().strip()
    print(f"Read content: {text}")  # Debug: Show raw content

    # Split into records
    records = text.split('|')
    print(f"Found {len(records)} records: {records}")  # Debug: Show split records
    if not records:
        print("No records found in the file")
        return

    # Process each record
    decoded_records = []
    for record in records:
        if record:  # Skip empty records
            decoded_record = decode_url_in_record(record)
            decoded_records.append(decoded_record)
            print(f"Processed record: {decoded_record}")  # Debug: Show processed record

    # Join records with '|' and write to output file
    new_text = "|".join(decoded_records)
    if new_text:
        new_text += "|"  # Ensure trailing '|' if there are records
    else:
        new_text = "No valid records processed|"  # Force output if no valid records
    print(f"Writing output: {new_text}")  # Debug: Show output before write
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(new_text)
    print(f"Successfully wrote to {output_path}")  # Confirm write

def main():
    input_path = r"C:\Users\User\Downloads\data.txt"  # Adjust based on your file location
    output_path = r"C:\Users\User\Downloads\Inverted_Index.txt"

    try:
        process_file(input_path, output_path)
    except FileNotFoundError as e:
        print(f"Error: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    main()