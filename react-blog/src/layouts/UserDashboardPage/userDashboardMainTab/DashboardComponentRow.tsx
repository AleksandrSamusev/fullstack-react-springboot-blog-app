export const DashboardComponentRow = (props) => {
    return (
        <table className="table table-striped">
            <tbody>
            <tr>
                <td className="p-0"><h5 className="p-2 px-4">{props.rowTitle}</h5></td>
                <td className="text-end p-0"><h5 className="p-2 px-4">{props.rowValue}</h5></td>
            </tr>
            </tbody>
        </table>
    );
}