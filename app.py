from hack import app, create_db, db
from flask import render_template, redirect, url_for, request
from flask_login import current_user, login_user, logout_user, login_required
from hack.forms import LoginForm, RegForm, SummarizeForm
from hack.models import User
from werkzeug.security import generate_password_hash, check_password_hash
import requests

create_db(app)
headers = {
	"content-type": "application/octet-stream",
	"X-RapidAPI-Key": "188adcc90dmsh2c0204da620cc1cp11c251jsn154284079e2b",
	"X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com"
}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/summarize', methods=['GET', 'POST'])
@login_required
def summarize():
    form = SummarizeForm()
    url = "https://article-extractor-and-summarizer.p.rapidapi.com/summarize"
    result = ''
    if form.validate_on_submit():
        query = {
            'url': form.url.data,
            'length': 3
        }
        print(query)
        res = requests.get(url, headers=headers, params=query)
        if res.status_code != 200:
            result = 'An error occured while trying to summarize this article. Please try another URL.'
        else:
            result = res.json()['summary']
    return render_template('summarize.html', form=form, result=result)

next_list_1 = []
@app.route('/reg', methods=['GET', 'POST'])
def reg():
    form = RegForm()
    next = request.args.get('next')
    print(next)
    if next != None:
        next_list_1.append(next)
    mess=''
    if form.validate_on_submit():
        email = form.email.data
        username = form.username.data
        password = form.password.data
        user = User.query.filter_by(email=email).first()
        if user:
            mess = 'Account already exists'
        else:
            new_user = User(email=email, username=username, password=generate_password_hash(password))
            db.session.add(new_user)
            db.session.commit()
            login_user(new_user)
            return redirect('/summarize')
    return render_template('reg.html', form=form, mess=mess)

next_list = []

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    next = request.args.get('next')
    print(next)
    if next != None:
        next_list.append(next)
    # print(next)
    mess=''
    if form.validate_on_submit():
        email = form.email.data
        password = form.password.data
        user = User.query.filter_by(email=email).first()
        if not user:
            mess = 'Email not found'
        else:
            if check_password_hash(user.password, password):
                login_user(user, remember=True)
                print(next_list)
                return redirect('/summarize')
            else:
                mess = 'Incorrect password.'
    return render_template('login.html', mess=mess, form=form)

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
