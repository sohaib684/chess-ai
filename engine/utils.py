import json

def load_json_as_dict(path):
    json_file = open(path)
    data = json.load(json_file)
    return data