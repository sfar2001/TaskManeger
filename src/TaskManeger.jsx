import React, { useState } from 'react'
import "./index.css";
import 'animate.css';

export default function TaskManeger() {
    const [form, setForm] = useState([]);
    const [tittel, setTittel] = useState('');
    const [discreiption, setDiscreiption] = useState('');
    const [date, setDate] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [editingIndex, setEditingIndex] = useState(-1);
    const Handelsub = (e) => {
        e.preventDefault();


        const newForm = {
            tittel,
            discreiption,
            date,
            priority,
            status,
        };
        if (newForm.tittel === "") {
            alert("Please enter the tittel name");

        }
        else if (newForm.discreiption === "") { alert("Please enter the discription"); }
        else if (newForm.date === "") { alert("Please enter date"); }
        else if (newForm.priority === "") { alert("Please enter the priority"); }
        else if (newForm.status === "") { alert("Please enter the status"); }
        else {
            setForm([...form, newForm]);
            setTittel('');
            setDiscreiption('');
            setDate('');
            setPriority('');
            setStatus('');
            setIsSubmitted(true);
            setEditingIndex(-1);
            console.log(form.tittel);
        }
    };
    const handleEdit = (index) => {
        const editedForm = form[index];
        setTittel(editedForm.tittel);
        setDiscreiption(editedForm.discreiption);
        setDate(editedForm.date);
        setPriority(editedForm.priority);
        setStatus(editedForm.status);
        setEditingIndex(index);
    };
    const handleUpdate = () => {
        const updatedForm = {
            tittel,
            status,
            discreiption,
            date,
            priority,
            status,
        };
        if (updatedForm.tittel === "") { alert("Please enter the tittel name"); }
        else if (updatedForm.discreiption === "") { alert("Please enter the discription"); }
        else if (updatedForm.date === "") { alert("Please enter date"); }
        else if (updatedForm.priority === "") { alert("Please enter the priority"); }
        else if (updatedForm.status === "") { alert("Please enter the status"); }
        else {
            const updatedFormList = [...form];
            updatedFormList[editingIndex] = updatedForm;
            setForm(updatedFormList);
            setTittel('');
            setDiscreiption('');
            setDate('');
            setPriority('');
            setStatus('');

            setEditingIndex(-1);
        }
    };
    const handleDelete = (index) => {
        const updatedFormList = [...form];
        updatedFormList.splice(index, 1);
        setForm(updatedFormList);
    };

    return (
        <div class="container">
            <div id="registration-form">
                <div class="fieldset">
                    <legend>Wanna add a task ?</legend>
                    <form onSubmit={Handelsub} data-validate="parsley">
                        <div class="row">
                            <label for="firstname">Tittel name</label>

                            <input


                                id='testname'
                                type="text"
                                placeholder="Tittel name"
                                name="Tittel Name"
                                value={tittel}
                                onChange={(e) => setTittel(e.target.value)}
                                data-required="true"
                                data-error-message="Your First Name is required"

                            />

                        </div>
                        <div class="row">
                            <label for="text">discreiption</label>
                            <input
                                type="text"
                                placeholder="discreiption"
                                name="text"
                                value={discreiption ? discreiption.slice(0, 20) : discreiption}
                                onChange={(e) => setDiscreiption(e.target.value)}
                                data-required="true"

                                data-error-message="You have to put the Discription"
                            />
                        </div>
                        <div class="row">
                            <label for="text">date</label>
                            <input
                                type="date"
                                placeholder="Date"
                                name="Date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                data-required="true"
                                data-error-message="Your E-mail must correspond"
                            />
                        </div>
                        <div className="row">
                            <label htmlFor="text">Priority</label>
                            <br />
                            <input
                                type="radio"
                                name="priority"
                                value="top"
                                checked={priority === 'top'}
                                onChange={() => setPriority('top')}
                            />
                            <label htmlFor="">Top</label>
                            <input
                                type="radio"
                                name="priority"
                                value="medium"
                                checked={priority === 'medium'}
                                onChange={() => setPriority('medium')}
                            />
                            <label htmlFor="">Medium</label>
                            <input
                                type="radio"
                                name="priority"
                                value="low"
                                checked={priority === 'low'}
                                onChange={() => setPriority('low')}
                            />
                            <label htmlFor="">Low</label>
                        </div>
                        <div className="row">
                            <label htmlFor="text">Status</label>
                            <br />
                            <input
                                type="radio"
                                name="status"
                                value="inprogress"
                                checked={status === 'inprogress'}
                                onChange={() => setStatus('In progress')}
                            />
                            <label htmlFor="">In Progress</label>
                            <input
                                type="radio"
                                name="status"
                                value="completed"
                                checked={status === 'completed'}
                                onChange={() => setStatus('completed')}
                            />
                            <label htmlFor="">Completed</label>
                        </div>
                        <input type="submit" value="Register"
                        />
                    </form>
                </div>
            </div>
            <div >
                {isSubmitted && (

                    <ul class="A">

                        {form.map((item, index) => (

                            <li className='animate__animated animate__backInLeft' key={index}>
                                <div className='container2'>
                                    <div id="registration-form1">
                                        <div class="fieldset" >
                                            <legend
                                                style={{
                                                    backgroundColor:
                                                        item.priority === 'top'
                                                            ? 'red'
                                                            : item.priority === 'medium'
                                                                ? 'orange'
                                                                : '#2c79cc',
                                                }}
                                            >
                                                Titel: {item.tittel}
                                            </legend>
                                            <div class="row">
                                                <label >discreiption: {item.discreiption}</label>
                                                <input
                                                    style={
                                                        editingIndex === index
                                                            ? ({ display: 'flex' })
                                                            : ({ display: 'none' })
                                                    }
                                                    type="text"
                                                    placeholder={item.discreiption}
                                                    name="firstname"
                                                    id="firstname"
                                                    value={discreiption ? discreiption.slice(0, 20) : discreiption}
                                                    onChange={(e) => setDiscreiption(e.target.value)}


                                                    data-required="true"
                                                    data-error-message="Your First Name is required"
                                                />

                                            </div>

                                            <div class="row">
                                                <label for="text">Date:{item.date}</label>
                                                <input
                                                    style={
                                                        editingIndex === index
                                                            ? ({ display: 'flex' })
                                                            : ({ display: 'none' })
                                                    }
                                                    type="Date"
                                                    placeholder="E-date"
                                                    name="Date"
                                                    onChange={(e) => setDate(e.target.value)}

                                                    data-required="true"
                                                    data-type="Date"
                                                />
                                            </div>
                                            <div className="row">
                                                <label htmlFor="text">Priority:{item.priority}</label>
                                                <br />
                                                <div style={
                                                    editingIndex === index
                                                        ? ({ display: 'flex' })
                                                        : ({ display: 'none' })
                                                }>
                                                    <input

                                                        type="radio"
                                                        name="priority"
                                                        value="top"
                                                        checked={priority === 'top'}
                                                        onChange={() => setPriority('top')}
                                                    />
                                                    <label htmlFor="">Top</label>
                                                    <input
                                                        type="radio"
                                                        name="priority"
                                                        value="medium"
                                                        checked={priority === 'medium'}
                                                        onChange={() => setPriority('medium')}
                                                    />
                                                    <label htmlFor="">Medium</label>
                                                    <input
                                                        type="radio"
                                                        name="priority"
                                                        value="low"
                                                        checked={priority === 'low'}
                                                        onChange={() => setPriority('low')}
                                                    />
                                                    <label htmlFor="">Low</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <label htmlFor="text">Status : {item.status}</label>
                                                <br />
                                                <div style={
                                                    editingIndex === index
                                                        ? ({ display: 'flex' })
                                                        : ({ display: 'none' })
                                                }>
                                                    <input
                                                        type="radio"
                                                        name="status"
                                                        value="inprogress"
                                                        checked={status === 'inprogress'}
                                                        onChange={() => setStatus('In progress')}
                                                    />
                                                    <label htmlFor="">In Progress</label>
                                                    <input
                                                        type="radio"
                                                        name="status"
                                                        value="completed"
                                                        checked={status === 'completed'}
                                                        onChange={() => setStatus('completed')}
                                                    />
                                                    <label htmlFor="">Completed</label>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="submit" value="Update" onClick={() => handleEdit(index)} />
                                        <input type="submit" value="Delete" onClick={() => handleDelete(index)} />
                                        {editingIndex === index && (
                                            <div>
                                                <h3>Update Form</h3>
                                                <button type='submit' onClick={handleUpdate}>Update</button>
                                            </div>
                                        )}

                                    </div>

                                </div>
                            </li>
                        ))}


                    </ul>
                )}

            </div>


        </div >
    )
}