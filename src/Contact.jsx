/* eslint-disable react/prop-types */

const Contact = ({data,contacts,setContacts}) => {
    console.log(data);
    const deleteHandler=()=>{
     const removeIndex= contacts.findIndex(i=>i.number==data.number);
     setContacts(oldArray => {
        return oldArray.filter((value, i) => i !== removeIndex)
      })
    }
    return (
        <tr className="border-b hover:bg-orange-100 bg-gray-100">
        <td className="p-3 px-5">
            <input type="text" disabled value={data.name} className="bg-transparent border-b-2 border-gray-300 py-2"/>
        </td>
        <td className="p-3 px-5">
            <input type="text" disabled value={data.email} className="bg-transparent border-b-2 border-gray-300 py-2"/>
        </td>
        <td className="p-3 px-5">
            <input type="text" disabled value={data.number} className="bg-transparent border-b-2 border-gray-300 py-2"/>
        </td>
        <td className="p-3 px-5">
            <input type="text" disabled value={data.country} className="bg-transparent border-b-2 border-gray-300 py-2"/>
        </td>
        <td className="p-3 px-5 flex justify-end">
        <button
        onClick={deleteHandler}
                            type="button"
                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                </td>
    </tr>
    );
}

export default Contact;
