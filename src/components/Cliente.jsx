
function Cliente({cliente}) {

    const { nombre, empesa, email, telefono, id} = cliente

  return (
    <tr>
      <td className="p-6 text-center">
          {nombre}
      </td>
    </tr>
  )
}

export default Cliente
