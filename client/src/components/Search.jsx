const Search = (props) => {
  
  return (
    <form onSubmit={props.onSubmit} className='search'>
      <input
        className="search-input"
        type='text'
        name='search'
        value={props.value}
        placeholder='Search Items'
        onChange={props.onChange}
      />
      <button type='submit' className="search-btn">Search</button>
    </form>
  ) 
}

export default Search