import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setFalse } from '../../redux/ducks/pageTransition'

const PageLoad = () => {

  const loading = useSelector(state => state.pageTransition.pageLoading)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const loadPage = () => {
    console.log('RUN_LOAD_PAGE')
  }

  useEffect(() => {
    if (loading === true) {
      loadPage()
      dispatch(setFalse())
    }
  }, [dispatch, loading])

  console.log('loading', loading)
  return (
    <div style={{ display: isLoading ? 'flex' : 'none' }}>
      PageLoading
    </div>
  )
}

export default PageLoad