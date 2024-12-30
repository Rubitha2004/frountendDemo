
function Samplebook(){
    return  (    
    <>
     <div className="slam-book-container">
        <span className="slam-book-container-title">SLAM BOOK</span>

        <form>
          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">NAME:</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>

          {/* Nickname */}
          <div className="form-group">
            <label htmlFor="nickname">NICKNAME:</label>
            <input type="text" id="nickname" placeholder="Enter your nickname" />
          </div>

          {/* Address */}
          <div className="form-group">
            <label htmlFor="address">ADDRESS:</label>
            <input type="text" id="address" placeholder="Enter your address" />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="phone">PHONE:</label>
            <input type="text" id="phone" placeholder="Enter your phone number" />
          </div>

          {/* Gender */}
          <div className="form-group">
            <label>GENDER:</label>
            <label>
              <input type="radio" name="gender" value="male" /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" /> Female
            </label>
          </div>

          {/* Favorite Actors */}
          <div className="form-group">
            <label>FAVORITE ACTORS:</label>
            <label>
              <input type="checkbox" name="actors" value="actor1" /> vijay
            </label>
            <label>
              <input type="checkbox" name="actors" value="actor2" /> Surya
            </label>
            <label>
              <input type="checkbox" name="actors" value="actor3" /> Ajith
            </label>
            <label>
              <input type="checkbox" name="actors" value="actor4" /> kamal
            </label>
          </div>

          {/* School */}
          <div className="form-group">
            <label htmlFor="school">SCHOOL:</label>
            <select id="school">
              <option value="school1">SSV</option>
              <option value="school2">RAMCHANDRA</option>
              <option value="school3">HARIKRISKNA</option>
              <option value="school4">SRI VINAYAGA</option>
              
            </select>
          </div>

          {/* Memories */}
          <div className="form-group">
            <label htmlFor="memories">MEMORIES:</label>
            <textarea id="memories" ></textarea>
          </div>
<div>
            <button type="submit" className="submit-btn"> Submit </button>
            </div>
        </form>
        
      </div>
    </>
    )
}

export default Samplebook;