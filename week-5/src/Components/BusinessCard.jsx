import React, {useState, memo} from 'react'

const BusinessCard = () => {
  const [val, setVal] = useState('');
  const [desc, setDesc] = useState('');
  const [interest, setInterest] = useState([""])
  const [inputs, setInputs] = useState([{}]);

  const addData = (e) => {
    e.preventDefault();
    if (val.trim() === '' || desc.trim() === '') {
      alert('Both Title and Description are required.');
      return;
    }
    if (inputs.length === 0) {
      setInputs([{ name: val, description: desc, interest: interest  }]);
    } else {
      setInputs([...inputs, { name: val, description: desc, interest: interest}]);
    }
    setVal('');
    setDesc('');
    setInterest([])
    console.log(inputs);
  }

  const handleInterestChange = (e, index) => {
    const newInterests = [...interest];
    newInterests[index] = e.target.value;
    setInterest(newInterests);
  };

  const addInterestField = () => {
    setInterest([...interest, '']);
  };

  const removeInterestField = (index) => {
    const newInterests = [...interest];
    newInterests.splice(index, 1);
    setInterest(newInterests);
  };

  return (
    <div>
      <CardWrapper>
        <h1>Input</h1>
        <form onSubmit={addData} className='form'>
        <input value={val} type="text" placeholder="Enter name" onChange={(e) => setVal(e.target.value)} />
        <input value={desc} type="text" placeholder="Enter Description" onChange={(e) => setDesc(e.target.value)} />
        <button type='submit'>Submit</button>
        {interest.map((item, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder='Enter interest'
                value={item}
                onChange={(e) => handleInterestChange(e, index)}
              />
              <button type="button" onClick={() => removeInterestField(index)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={addInterestField}>Add Interest</button>
        </form>
      </CardWrapper>
      <CardWrapper>
        {inputs.map((input, index) => (
          <BC key={index} name={input.name} description={input.description} interests={input.interest}/>
        ))}
      </CardWrapper>
    </div>
  )
}

function CardWrapper({children}) {
  return <div className='wrapper'>{children}</div>
}

const BC = ({ name, description, interests }) => {
    return (
    <div>
        <h1>{name}</h1>
        <h3 style={{fontWeight:"normal"}}>{description}</h3>
        {interests && (
        <div>
          <h2>Interests</h2>
            <ul>
              {console.log(interests)}
              {interests.map((interest, index) => (
                <li key={index}>{interest}</li>
                ))}
            </ul>
        </div>
        )}
        <div className="socials">
          <button className='btn'>LinkedIn</button>
          <button className='btn'>Twitter</button>
        </div>
    </div>
  )
}

export default BusinessCard