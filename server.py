from flask import Flask, redirect, url_for, render_template
app = Flask(__name__)

@app.route('/')
def start():
    return render_template('canvas.html')

if __name__ == '__main__':
    app.run()