import styled from 'styled-components';

const SearchBar = () => {

    const Input = styled.input`
    outline: none;
    height:28px;
    line-height: 28px;
    padding: 0 8px;
    border-radius: 4px;
    font-size: inherit;
    font-family:inherit;
    border: 1px solid var(--lightText);
    margin: 0 10px;
    width: 200px;
    
    &:focus{
        border: 1px solid var(--primary);
    }
    `

    const Button = styled.button`
    background: var(--primary);
    color: white;
    font-size:inherit;
    font-family:inherit;
    font-weight:500;
    outline:none;
    border:none;
    height: 28px;
    line-height:28px;
    padding: 0 28px;
    border-radius: 12px;
    
    &:hover{
        filter: brightness(1.1);
    }`

    return (
        <form>
            <Input type="text" placeholder="Start searching" />
            <Input type="text" placeholder="Location, City, Country" />
            <Button type="submit">Search</Button>
        </form>)
}

export default SearchBar;