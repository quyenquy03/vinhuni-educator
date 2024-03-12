'use client'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import style from './HeaderComponent.module.scss'
const cx = classNames.bind(style)

function HeaderSearch () {

    const [isLoading, setIsLoading] = useState(false)
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef()
    return (
        <div className={cx('search-box')}>
            <input ref={inputRef} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className={cx('search-input')} placeholder='Nhập thông tin tìm kiếm ...' />
            <span className={cx('search-icon')}><FontAwesomeIcon icon={faSearch} /></span>
            {/* <span className={cx('input-icon', 'loading')}><FontAwesomeIcon icon={faSpinner} /></span> */}
            
            {!!searchValue && !isLoading &&  
                <span className={cx('input-icon', 'clear')} onClick={() => {setSearchValue(''); inputRef.current.focus()}}>
                    <FontAwesomeIcon icon={faXmarkCircle} />
                </span>
            }
        </div>
    )
}
export default HeaderSearch;