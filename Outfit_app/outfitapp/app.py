from flask import Flask, jsonify
from .models import Wardrobe
app = Flask(__name__)
@app.route('/wardrobe', methods = ['GET'])
def get_data():
    data = Wardrobe.objects.all().values()
    return jsonify(data)

if __name__== '__main__':
    app.run(debug=True)
