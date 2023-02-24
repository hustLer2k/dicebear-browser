import os

def replace_in_file(filename):
    with open(filename, 'r') as file:
        filedata = file.read()

    # Replace the target string
    filedata = filedata.replace('dicebear-browser', 'dicebear-browser')

    # Write the file out again
    with open(filename, 'w') as file:
        file.write(filedata)

rootdir = '.'
for subdir, dirs, files in os.walk(rootdir):
    for file in files:
        # Check if the file is not README.md
        if file != 'README.md':
            filepath = subdir + os.sep + file
            if filepath.endswith(".js") or filepath.endswith(".jsx") or filepath.endswith(".ts") or filepath.endswith(".tsx") or filepath.endswith(".html"):
                replace_in_file(filepath)
