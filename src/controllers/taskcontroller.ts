import { Request, Response, NextFunction } from "express";

import { task } from '../entities/task';
// const Task = require('../entities/task')

export default {


    index: async (req: Request, res: Response, next: NextFunction) => {
        try {

            const tasklist = await task.find()

            return res.status(200).json({ success: true, message: "Listagem de registos!", data: tasklist });


        } catch (error) {
            return res.status(400).json({ success: false, message: "Falha ao listar registos!" });

        }

    },

    store: async (req: Request, res: Response, next: NextFunction) => {
        try {

            const { title } = req.body;

            const taskcreated = await task.create({ title })

            return res.status(200).json({ success: true, message: "Criado com sucesso!", data: taskcreated });


        } catch (error) {
            return res.status(400).json({ success: false, message: "Falha ao listar registos!" });

        }

    },


    update: async (req: Request, res: Response, next: NextFunction) => {
        try {

            const { id } = req.params;
            const data = req.body;

            await task.findByIdAndUpdate(id, data)

            return res.status(200).json({ success: true, message: "Criado com sucesso!" });


        } catch (error) {
            return res.status(400).json({ success: false, message: "Falha ao listar registos!" });

        }

    },

    delete: async (req: Request, res: Response, next: NextFunction) => {
        try {

            const { id } = req.params;
                       

            await task.findByIdAndDelete(id)

            return res.status(200).json({ success: true, message: "Excluido com sucesso!" });


        } catch (error) {
            console.log('Error', error);
            
            return res.status(400).json({ success: false, message: "Falha ao listar registos!" });

        }

    },



}