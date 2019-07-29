from flask import flask, render_template


application = flask(__name__)


@application.route('/')
def main():
    return render_template('índex.html')
    