import React, { Component } from 'react'
import { render } from 'react-dom'

class form extends Component {
    render() {
        return (
            <div>
                <code>Registration Form</code>
                {/* <label>1</label>
                <label>2</label>
                <label>3</label> */}
                <form>
                    <table border = "2px" align = "center">
                        <tr>
                            <td>
                            firstname:<input type = "text" name = "frstname"></input>
                            </td>
                        </tr>

                        <tr>
                            <td>
                            LastName:<input type = "text" name = "frstname"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="logo.svg" alt="Learning React" height="42" width="42"/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan = "2">
                                <input type = "submit" name = "submit" value = "submit"></input>
                            </td>
                        </tr>
                    

                    </table>
                    

                </form>
            </div>
        )
    }
}

export default form