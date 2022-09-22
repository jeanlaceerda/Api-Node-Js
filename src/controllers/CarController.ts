import { Request , Response} from "express";
import CarModel from "../database/CarModel";

const CarController = {

    async index(req: Request, res: Response): Promise<Response> {

        
        let cars = await CarModel.find()
        return res.json(cars)
    },

    async findById(req: Request, res: Response): Promise<Response> {
        const{id} = req.params
        let car = await CarModel.findById(id)
        return res.json(car)
    },

    async create(req: Request, res: Response): Promise<Response> {
       

        let car = await CarModel.create(req.body)
        return res.json(car)
    },

    async update(req: Request, res: Response): Promise<Response> {
        const{id} = req.params


        let car = await CarModel.findByIdAndUpdate(id,req.body)
        return res.json(car)
    },


    async delete(req: Request, res: Response): Promise<Response> {
        const{id} = req.params
        let car = await CarModel.findByIdAndDelete(id)
        return res.json(car)
    },

}

export default CarController