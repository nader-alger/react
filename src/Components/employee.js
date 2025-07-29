/* function Employee() {
    return
    ( <>
            <h3> nader fathi </h3>
        </>
    );
} */

function Employee(props) {
    return (
        <>
            <h3>Employee {props.name}</h3>
            <h3>Role {props.role ? props.role : 'No Role'} </h3>
        </>
    );
}


export default Employee;
    