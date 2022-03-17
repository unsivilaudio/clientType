import axios, { AxiosResponse } from 'axios';

interface Todo {
    id: string;
    title: string;
    items: string[];
}

const baseUrl: string = 'http://localhost:5000';
const authorization = 'f2bc0c85-b373-468a-9fd3-d1a2f2782609';

export const getTodos = async (): Promise<Todo[]> => {
    try {
        const response: AxiosResponse<Todo[]> = (await axios.get(
            baseUrl + '/todos',
            {
                headers: {
                    Authorization: authorization,
                },
            }
        )) as AxiosResponse<Todo[]>;

        return response.data;
    } catch (error: any) {
        console.log(error.message);
        return [];
    }
};

export const addTodo = async (todo: Todo): Promise<Todo | void> => {
    try {
        const response: AxiosResponse<Todo> = await axios.post(
            baseUrl + '/todos',
            todo,
            {
                headers: {
                    Authorization: authorization,
                },
            }
        );
        return response.data;
    } catch (error: any) {
        console.log(error.message);
    }
};

export const updateTodo = async (todo: Todo): Promise<Todo | void> => {
    try {
        const response: AxiosResponse<Todo> = await axios.put(
            `${baseUrl}/todos/${todo.id}`,
            todo,
            {
                headers: {
                    Authorization: authorization,
                },
            }
        );
        return response.data;
    } catch (error: any) {
        console.log(error.message);
    }
};

export const deleteTodo = async (id: string): Promise<string | void> => {
    try {
        await axios.delete(`${baseUrl}/todos/${id}`, {
            headers: {
                Authorization: authorization,
            },
        });
        return id;
    } catch (error: any) {
        console.log(error.message);
    }
};
