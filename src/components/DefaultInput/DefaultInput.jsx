const DefaultInput = ({ name, onChange, value }) => {
  console.log('');
  return (
    <div>
      <input name={name} onChange={onChange} value={value} />
    </div>
  );
};

export default DefaultInput;
