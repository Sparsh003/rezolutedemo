import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Iuser, respo } from "../types/Type";
import Accordions from "./Accordion";

const Cards = ({ data, repos }: { data: Iuser; repos: respo[] }) => {
  return (
    <div>
      <Card sx={{ width: { sm: 600, xs: 300, lg: 900 }, marginTop: 5 }}>
        <CardActionArea>
          <CardContent>
            <Avatar
              alt="Remy Sharp"
              src={`${data?.avatar_url}`}
              sx={{ width: 56, height: 56 }}
            />

            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="text.primary"
            >
              {data.login}
            </Typography>

            <Typography
              gutterBottom
              variant="body2"
              color="text.secondary"
              component="div"
            >
              <strong className="bold-class">Name</strong> : {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong className="bold-class">Bio</strong> : {data.bio}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <div>
        <Accordions val={repos} />
      </div>
    </div>
  );
};

export default Cards;
