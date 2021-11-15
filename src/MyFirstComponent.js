//alltid pascal-case

//_rafc

/*function MyFirstComponent() {
    return (
        <h1>This is my first component</h1>
    );
}

export default MyFirstComponent; */


export const MyFirstComponent = ({ name, age }) => {
    return (
        <div>
            <h1> Whatsup {name} age {age}</h1>
        </div>
    );
}