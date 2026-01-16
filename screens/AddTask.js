import React, {use, useState} from "react";
import {useTodo} from "../context/ToDoContext";

export default function AddTask() {
    const times = Array.from({ length: 25 }, (_, i) => `${i.toString().padStart(2, "0")}:00`);
    const [title,setTitle] = useState("");
    const [category, setCategory] = useState("Work")
    const [date,setDate] = useState("");
    const [priority,setPriority] = useState("Low");
    const [description,setDescription] = useState("");

    const {addTodo} = useTodo();
    return (
        <div style={styles.fullScreenWrapper}>
            <div style={styles.container}>
                {/* Header */}
                <div style={styles.header}>
                    <h4 style={styles.headerTitle}>Create a new task</h4>
                </div>

                <form style={styles.formContainer}>
                    <div style={styles.scrollableContent}>
                        {/* Task Name */}
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Task Name</label>
                            <input type="text" style={styles.input} placeholder="Call Ameer"/>
                        </div>

                        {/* Category */}
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Category</label>
                            <div style={styles.row}>
                                <button type="button" style={{...styles.chip, ...styles.chipActive}}>Education</button>
                                <button type="button" style={styles.chip}>Work</button>
                                <button type="button" style={styles.chip}>Groceries</button>
                            </div>
                        </div>

                        {/* Date & Time  */}
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Date & Time</label>
                            <input style={styles.input} type="datetime-local" />
                        </div>

                        {/* Start & End Time */}
                        <div style={styles.row}>
                            <div style={{...styles.formGroup, flex: 1}}>
                                <label style={styles.label}>Start Time</label>
                                <select style={styles.input}>
                                    {times.map(t => <option key={t} value={t}>{t}</option>)}
                                </select>
                            </div>
                            <div style={{...styles.formGroup, flex: 1}}>
                                <label style={styles.label}>End Time</label>
                                <select style={styles.input}>
                                    {times.map(t => <option key={t} value={t}>{t}</option>)}
                                </select>
                            </div>
                        </div>

                        {/* Priority */}
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Priority</label>
                            <div style={styles.row}>
                                <button type="button" style={{...styles.chip, ...styles.chipActive}}>Low</button>
                                <button type="button" style={styles.chip}>Medium</button>
                                <button type="button" style={styles.chip}>High</button>
                            </div>
                        </div>

                        <div style={styles.formGroup}>
                            <label style={styles.label}>Description</label>
                            <textarea
                                style={{...styles.input, height: '80px', resize: 'none'}}
                                placeholder="Research design path..."
                            />
                        </div>
                    </div>

                    <div style={styles.footer}>
                        <button type="button" style={styles.submitBtn} onClick={addTodo}>Create Task</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

const styles = {
    fullScreenWrapper: {
        width: '100%',
        height: '100vh',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
    },
    container: {
        width: '100%',
        height: '100%',
        maxWidth: '500px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
    },
    header: {
        textAlign: 'center',
        padding: '10px 0 20px 0',
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: '20px',
        margin: 0,
    },
    formContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow:'hidden',
    },
    scrollableContent: {
        flex: 1,
        overflowY:'auto',
    },
    formGroup: {
        marginBottom: '18px',
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: '8px',
        fontSize: '14px',
    },
    input: {
        padding: '12px 15px',
        borderRadius: '12px',
        border: '1px solid #E5E7EB',
        fontSize: '15px',
        outline: 'none',
        width: '100%',
        boxSizing: 'border-box',
    },
    row: {
        display: 'flex',
        gap: '10px',
        width: '100%',
    },
    chip: {
        flex: 1,
        padding: '12px 5px',
        border: 'none',
        borderRadius: '10px',
        backgroundColor: '#F3F0FF',
        color: '#000',
        cursor: 'pointer',
        fontSize: '13px',
        fontWeight: '500',
        textAlign: 'center',
    },
    chipActive: {
        backgroundColor: '#8B5CF6',
        color: '#fff',
    },
    footer: {
        marginTop: 'auto',
        paddingTop: '20px',
    },
    submitBtn: {
        width: '100%',
        padding: '16px',
        backgroundColor: '#8B5CF6',
        color: '#fff',
        border: 'none',
        borderRadius: '15px',
        fontWeight: 'bold',
        fontSize: '16px',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(139, 92, 246, 0.2)',
    }
};