import React from "react";

export default function Page() {
    return <>
        <table>
            <tr data-th-each="user : ${users}">
                <td data-th-text="${user.login}">...</td>
                <td data-th-text="${user.name}">...</td>
            </tr>
        </table>
    </>
}


