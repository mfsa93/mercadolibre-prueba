
import  {Response} from 'express';

export default class Errors {
    default(res: Response, error: any) {
        return res.status(400).json({message: 'Error: please try again', error})
    }
}