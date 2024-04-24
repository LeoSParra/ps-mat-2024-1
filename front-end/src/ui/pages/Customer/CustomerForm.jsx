import React from "react";
import { Typography, Box, TextField} from "@mui/material";
import { useParams } from "react-router-dom";
import InputMask from 'react-input-mask';
//import { DatePicker, LocalizationProvider} from '@mui/x-date-pickers'
//import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
//import ptLocale from 'date-fns/locale/pt-BR'
//import { parseISO } from "date-fns";

export default function CustomerForm() {
    
    const [state, setState] = React.useState({
        customer: {}
    })
    const {
        customer
    } = state

    const params = useParams()

    function  handleFieldChange(event) {}

    return (
        <>
        <Typography variant="h1" gutterBottom>
            { params.id ? `Editar cliente #${params.id}` : 'Cadastrar novo cliente'}
        </Typography>

        <Box className="form-fields">
                <form>

                    <TextField
                        name="name"
                        label="Nome Completo"
                        variant="filled"
                        required
                        fullWidth
                        autoFocus
                        value={customer.name}
                        onChange={handleFieldChange}
                    />
                    
                    <InputMask
                        mask="999.999.999-99"
                        value={customer.ident_document}
                        onChange={handleFieldChange}
                    >
                        {  () => <TextField 
                                name="ident_document"
                                label="CPF"
                                variant="filled"
                                required
                                fullWidth
                            />
                        }          
                    </InputMask>

                </form>
            </Box>
        </>
    )
}