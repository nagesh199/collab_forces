import { useEffect } from 'react'
import getVoice from '../../utils/getVoice';

const Speech = (props) => {
    useEffect(() => {
       getVoice(props.text);
      //eslint-disable-next-line
    },[])
}

export default Speech