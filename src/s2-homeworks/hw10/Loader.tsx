import s from './Loader.module.css'

export const Loader = () => <div className={s.loader}>
    <svg viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" stroke="#3498db" stroke-width="4" stroke-dasharray="31.415, 31.415" stroke-linecap="round">
            <animateTransform attributeName="transform" type="rotate" values="0 25 25;360 25 25" dur="1s" repeatCount="indefinite"/>
        </circle>
    </svg>
</div>
