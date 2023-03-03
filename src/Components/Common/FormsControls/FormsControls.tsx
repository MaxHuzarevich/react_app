import React from "react";
import styles from './FormsControls.module.css'

export const Textarea = ({input, meta, child, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <textarea {...input}{...props}/>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}
export const Input = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <input {...input}{...props}/>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}