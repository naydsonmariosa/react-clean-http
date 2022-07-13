import React, {useEffect, useState} from 'react'
import { CallApiService } from '../../../domain/usecases/CallApiService';

type Props = {
  callApiService: CallApiService,
}

const List: React.FC<Props> = ({callApiService}: Props) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    request();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const request = async() => {
    const response = await callApiService.execute()
    console.log(response)
    setImage(response[0].url)
  }

  return (
    <div>
      <img src={image} alt="fail-loading" />
    </div>
  )
}

export default List;