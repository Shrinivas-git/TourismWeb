from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('activities.html')


@app.route('/index')
def home1():
    return render_template('index.html')

@app.route('/belagavi')
def belagavi():
    return render_template('Belagavi.html')

@app.route('/eticket')
def eticket():
    return render_template('ETicket.html')
if __name__ == '__main__':
    app.run(debug=True)
