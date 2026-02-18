import os
import boto3

def run():
    github_output_1 = os.environ.get("GITHUB_OUTPUT")
    bucket = os.environ['INPUT_BUCKET']
    bucket_region = os.environ['INPUT_BUCKET_REGION']
    dist_folder = os.environ['INPUT_DIST_FOLDER']
    s3_client = boto3.client('s3', region_name=bucket_region)
    s3_client_Details = s3_client.get_bucket_location(Bucket=bucket)
    if github_output_1:
        with open(github_output_1, "a") as f:
            f.write(f"bucket_v={s3_client_Details}\n")
    for root, dirs, files in os.walk(dist_folder):
        for file in files:
            file_path = os.path.join(root, file)
            
            s3_key = os.path.relpath(file_path, dist_folder)
            s3_client.upload_file(file_path, bucket, s3_key)
    website_url = f'http://{bucket}.s3-website-{bucket_region}.amazonaws.com'
    github_output = os.environ.get("GITHUB_OUTPUT")
    if github_output:
        with open(github_output, "a") as f:
            f.write(f"website-url={website_url}\n")

