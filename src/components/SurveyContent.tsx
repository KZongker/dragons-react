export const SurveyContent = () => {
    return <>
        <div className="info">
            <h1>Dragon Survey</h1>
            <p>To gather information on various dragon abilities and preferences!</p>
        </div>

        <div className="row justify-content-center">
                <div className="col-lg-6">
            <form style="font-size: 20px;">
                <fieldset>
                <label for="name" className="form-label">Viking Name:</label>
                <div className="input-group mb-4">
                    <span className="input-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                          </svg>
                    </span>
                    <input type="text" id="name" className="form-control" style="height: 46px" name="name" placeholder="firstname" required>
                </div>
                
                <label for="petname" className="form-label">Dragon Name:</label>
                <div className="input-group mb-4">
                    <span className="input-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
                          </svg>
                    </span>
                <input type="text" id="petname" className="form-control" style="height: 46px" name="petname" placeholder="pet name/made up" required>
                </div>

                <label for="species" className="form-label">My Dragon Is A:</label>
                <select id="species" name="species" className="form-select mb-4" style="height: 46px">
                    <option>Select One</option>
                    <option>Deadly Nadder</option>
                    <option>Hiddeous Zippleback</option>
                    <option>Gronckle</option>
                    <option>Monstrous Nightmare</option>
                    <option>Other</option>
                </select>

                <span className="form-label">My Dragon Enjoys (check all that apply):</span>
                <div className="form-check">
                    <input type="checkbox" id="fish" className="form-check-input" name="fish" className="checks" checked>
                    <label for="fish" className="form-check-label">Fish</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" id="chicken" className="form-check-input" name="chicken" className="checks">
                    <label for="chicken" className="form-check-label">Chicken</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" id="sheep" className="form-check-input" name="sheep" className="checks">
                    <label for="sheep" className="form-check-label">Sheep</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" id="nip" className="form-check-input" name="nip" className="checks">
                    <label for="nip" className="form-check-label">Dragon Nip</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" id="light" className="form-check-input" name="light" className="checks">
                    <label for="light" className="form-check-label">Chasing Light</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" id="fetch" className="form-check-input" name="fetch" className="checks">
                    <label for="fetch" className="form-check-label">Playing Fetch</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" id="brush" className="form-check-input" name="brush" className="checks">
                    <label for="brush" className="form-check-label">Being Brushed</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" id="flight" className="form-check-input" name="flight" className="checks">
                    <label for="flight" className="form-check-label">Flight Practice</label>
                </div><br>

                <span className="form-label">My Dragon's Fire Type:</span>
                <div className="form-check">
                    <input type="radio" id="blasts" className="form-check-input" name="fire" className="checks" checked>
                    <label for="blasts" className="form-check-label">Blasts</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="stream" className="form-check-input" name="fire" className="checks">
                    <label for="stream" className="form-check-label">Streaming</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="gas" className="form-check-input" name="fire" className="checks">
                    <label for="gas" className="form-check-label">Gas/Spark</label>
                </div>
                <div className="form-check mb-4">
                    <input type="radio" id="otherfire" className="form-check-input" name="fire" className="checks">
                    <label for="otherfire" className="form-check-label">Other</label>
                </div>

                <div className="form-floating mb-4">
                <textarea id="comments" name="comments" className="form-control" style="height: 140px" placeholder="Thank you for your input!"></textarea>
                <label for="comments">Extra Comments:</label>
                </div>

                <div className="mb-4">
                <button type="submit" onclick="alert('Thanks for participating in the dragon survey!')" className="btn btn-outline-success btn-lg">Submit</button>
                <button type="reset" className="btn btn-outline-danger btn-lg">Reset</button>
                </div>
            </fieldset>
            </form>
        </div>
    </div>
    </>
};