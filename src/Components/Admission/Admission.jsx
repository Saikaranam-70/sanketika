import React from 'react'
import './Admission.css'
import Footer from '../Footer/Footer'

const Admission = () => {
  return (
    <>
    <div className="admission-container">
      <h2>Eligibility Criteria</h2>
      <ul>
        <li>Candidate should have passed SSC Examination conducted by Board of Secondary Education, Andhra Pradesh/Telangana or any other examination recognized as equivalent thereto.</li>
        <li>Candidate should belong to the state of Andhra Pradesh as defined in G.O. (P). No. 646, Education (W) Dept, dated. 10.07.1979 and its subsequent amendments.</li>
        <li>Candidates who appeared SSC or equivalent examination held in March/May-2024, and whose results are yet to be declared can also apply.</li>
        <li>Candidates who have passed SSC in compartmental and who have either discontinued or failed in intermediate are also eligible for diploma admission.</li>
        <li>Candidate who had passed intermediate or pursuing higher studies are not eligible for admission into diploma courses offered by SPC.</li>
        <li>Candidate who passed intermediate vocational are eligible for admission into diploma 2nd year as later entry.</li>
        <li>Age Limit: Candidates must complete 15 years of age as on 31-08-2024 with an upper age limit of 22 years (Born in between 31.08.2002 and 31.08.2009).</li>
      </ul>

      <h2>Reservation of Seats</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Reservation Percentage</th>
            <th>Additional Requirements</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Open Category</td>
            <td>50%</td>
            <td>-</td>
          </tr>
          <tr>
            <td>BC-A</td>
            <td>7%</td>
            <td>-</td>
          </tr>
          <tr>
            <td>BC-B</td>
            <td>10%</td>
            <td>-</td>
          </tr>
          <tr>
            <td>BC-C</td>
            <td>1%</td>
            <td>-</td>
          </tr>
          <tr>
            <td>BC-D</td>
            <td>7%</td>
            <td>-</td>
          </tr>
          <tr>
            <td>BC-E</td>
            <td>4%</td>
            <td>-</td>
          </tr>
          <tr>
            <td>SC</td>
            <td>15%</td>
            <td>-</td>
          </tr>
          <tr>
            <td>ST</td>
            <td>6%</td>
            <td>-</td>
          </tr>
          <tr>
            <td>NCC</td>
            <td>1%</td>
            <td>Priority as per GO.Ms.No.21 HE (TE-1) Dept., Dt.13-05-2002</td>
          </tr>
          <tr>
            <td>Sports</td>
            <td>0.5%</td>
            <td>Participation in games and sports before qualifying examinations</td>
          </tr>
          <tr>
            <td>Physically Handicapped (PH)</td>
            <td>5%</td>
            <td>Excludes certain conditions like Muscular dystrophy, Deaf and Dumb, Blindness, and mental retardation</td>
          </tr>
          <tr>
            <td>Children of Armed Personnel (CAP)</td>
            <td>2%</td>
            <td>Parents must be domicile of Andhra Pradesh; requires certificate from Director, Sainik Welfare Board</td>
          </tr>
        </tbody>
      </table>

      <h2>Admission Procedure</h2>
      <p>The application submitted for POLYCET itself is an application for admission under both local and non-local categories. No separate application is prescribed for admission.</p>
      <p>The detailed program of admission will be notified in the leading newspapers, after the declaration of the results. Program of Admission will also be available in all the Polytechnics.</p>

      <h2>Allocation of Seats</h2>
      <p>Among the total seats, 85% of the seats are reserved for local candidates and 15% of seats are Un-Reserved and will be filled on merit basis.</p>
      <p>Among the local 85 per cent, the seats shall be allotted on 42:22 ratio among Andhra University (AU) region and Sri Venkateswara University (SVU) region.</p>

      <h2>Details of Diploma Courses</h2>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Diploma Programme</th>
            <th>Duration</th>
            <th>No. of Seats Available</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Automobile Engineering</td>
            <td>3 Years</td>
            <td>30</td>
            
          </tr>
          <tr>
            <td>2</td>
            <td>Artificial Engineering</td>
            <td>3 Years</td>
            <td>60</td>
            
          </tr>
          <tr>
            <td>3</td>
            <td>Artificial Engineering & Machine Learning</td>
            <td>3 Years</td>
            <td>60</td>
            
          </tr>
          <tr>
            <td>4</td>
            <td>Computer Engineering</td>
            <td>3 Years</td>
            <td>180</td>
            
          </tr>
          <tr>
            <td>5</td>
            <td>Civil Engineering</td>
            <td>3 Years</td>
            <td>30</td>
            
          </tr>
          <tr>
            <td>6</td>
            <td>Electronics & Communication Engineering</td>
            <td>3 Years</td>
            <td>150</td>
            
          </tr>
          <tr>
            <td>7</td>
            <td>Electrical & Electronics Engineering</td>
            <td>3 Years</td>
            <td>120</td>
            
          </tr>
          <tr>
            <td>8</td>
            <td>Mechanical Engineering</td>
            <td>3 Years</td>
            <td>150</td>
            
          </tr>
        </tbody>
      </table>

      <h2>Tuition Fee and Other Fee Details</h2>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Fee Particulars</th>
            <th>Amount in Rs/-</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Tuition Fee</td>
            <td>25,000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Games Fee</td>
            <td>100</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Admission Fee</td>
            <td>100</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Syllabus Book Fee</td>
            <td>100</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Board Recognition Fee</td>
            <td>250</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Alumni Fee</td>
            <td>100</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Management Information System services per year</td>
            <td>300</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Tech Fest fee per year</td>
            <td>50</td>
          </tr>
          <tr>
            <td></td>
            <td>Total</td>
            <td>26,000</td>
          </tr>
        </tbody>
      </table>
    </div>
    <Footer />
    </>
  )
}

export default Admission
