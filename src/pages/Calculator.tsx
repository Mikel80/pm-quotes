import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { DateTime } from "luxon";

const clients = [
  {
    id: "jdhsj672691oio",
    name: "Client 1",
    contact: {
      name: "Contact 1",
      phone: "55-233-23443",
      email: "some@email.com",
    },
    address: {
      street: "Avenida siempre viva",
      postalCode: 58260,
      number: 605,
      city: "Moroco",
    },
    taxId: "GAHOSOIYYEHS",
  },
  {
    id: "oirpakj29878",
    name: "Client 2",
    contact: {
      name: "Contact 1",
      phone: "55-233-23443",
      email: "some@email.com",
    },
    address: {
      street: "Avenida siempre viva",
      postalCode: 58260,
      number: 605,
      city: "Moroco",
    },
    taxId: "GAHOSOIYYEHS",
  },
  {
    id: "pqipedkl982817",
    name: "Client 3",
    contact: {
      name: "Contact 1",
      phone: "55-233-23443",
      email: "some@email.com",
    },
    address: {
      street: "Avenida siempre viva",
      postalCode: 58260,
      number: 605,
      city: "Moroco",
    },
    taxId: "GAHOSOIYYEHS",
  },
  {
    id: "moamjsohoe01092",
    name: "Client 4",
    contact: {
      name: "Contact 1",
      phone: "55-233-23443",
      email: "some@email.com",
    },
    address: {
      street: "Avenida siempre viva",
      postalCode: 58260,
      number: 605,
      city: "Moroco",
    },
    taxId: "GAHOSOIYYEHS",
  },
  {
    id: "nbavyayuqu8287762",
    name: "Client 5",
    contact: {
      name: "Contact 1",
      phone: "55-233-23443",
      email: "some@email.com",
    },
    address: {
      street: "Avenida siempre viva",
      postalCode: 58260,
      number: 605,
      city: "Moroco",
    },
    taxId: "GAHOSOIYYEHS",
  },
  {
    id: "817398kdkjiwejui29",
    name: "Client 6",
    contact: {
      name: "Contact 1",
      phone: "55-233-23443",
      email: "some@email.com",
    },
    address: {
      street: "Avenida siempre viva",
      postalCode: 58260,
      number: 605,
      city: "Moroco",
    },
    taxId: "GAHOSOIYYEHS",
  },
  {
    id: "9829djiwuiueskaka",
    name: "Client 7",
    contact: {
      name: "Contact 1",
      phone: "55-233-23443",
      email: "some@email.com",
    },
    address: {
      street: "Avenida siempre viva",
      postalCode: 58260,
      number: 605,
      city: "Moroco",
    },
    taxId: "GAHOSOIYYEHS",
  },
];

const comoditiesData = [
  { id: "oioyuityywr82781", name: "Blackberrie", variety: "tupy" },
  { id: "92788hqjkhkwhiw", name: "Blueberrie" },
  { id: "0101isjijwie", name: "Strawberrie" },
  { id: "lklasi98273oiiwoq", name: "Avocado" },
  { id: "019sajhguyw1234", name: "Lemon" },
];

const nationalDestinations = [
  { id: "oioyuityywr82781", name: "Mexico City" },
  { id: "92788hqjkhkwhiw", name: "Leon" },
  { id: "0101isjijwie", name: "Monterrey" },
];

const internationalDestinations = [
  { id: "oioyuityywr82781", name: "The Netherlands" },
  { id: "92788hqjkhkwhiw", name: "Dubai" },
  { id: "0101isjijwie", name: "Los Angeles" },
];

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

interface ClientAddress {
  street: string;
  postalCode: number;
  number: number;
  suite?: string;
  city: string;
}

interface ClientContact {
  name: string;
  phone: number;
  email: string;
}

interface Client {
  id: string;
  name: string;
  contact: ClientContact;
  address: ClientAddress;
  taxId: string;
}

interface Comoditie {
  id: string;
  name: string;
  variety: string;
}

const Calculator = () => {
  // const [criteria, setCriteria] = useState({});
  const [client, setClient] = useState<Client | undefined>(undefined);
  const [date, setDate] = useState<string | undefined>(undefined);
  const [weekNumber, setWeekNumber] = useState<number | undefined>(undefined);
  const [comodities, setComodities] = useState<Comoditie[]>([]);
  const classes = useStyles();

  useEffect(() => {
    const now = DateTime.now();
    setDate(now.toLocaleString());
    setWeekNumber(now.weekNumber);
  }, []);

  const setSelecttedClient = (event: any, value: any) => {
    setClient(value);
  };

  const setSelecttedComodities = (event: any, value: any) => {
    setComodities(value);
  };

  return (
    <div>
      <span>Week: {weekNumber}</span>
      <span>Date: {date}</span>
      <Autocomplete
        id="combo-box-demo"
        options={clients}
        getOptionLabel={(client) => client.name}
        style={{ width: 200 }}
        onChange={setSelecttedClient}
        renderInput={(params) => (
          <TextField {...params} label="Clients" variant="outlined" />
        )}
      />
      {client && (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {client.name}
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              {client.taxId}
            </Typography>

            <Typography variant="body2" component="p">
              Contact:
              <br />
              {client.contact.name}
              <br />
              {client.contact.phone}
              <br />
              {client.contact.email}
            </Typography>
          </CardContent>
        </Card>
      )}
      <div>Comodity</div>
      <div>
        <Autocomplete
          multiple
          id="tags-standard"
          options={comoditiesData}
          getOptionLabel={(option) => `${option.name} - ${option.variety}`}
          onChange={setSelecttedComodities}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField {...params} variant="standard" label="Comodities" />
          )}
        />
      </div>
    </div>
  );
};

export default Calculator;
