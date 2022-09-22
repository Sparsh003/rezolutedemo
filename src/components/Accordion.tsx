import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { respo } from "../types/Type";
import Card from "@mui/material/Card";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Accordions = ({ val }: { val: respo[] }) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="margin-top">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="h6">Repositories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {val.map((ele: respo, index: number) => (
            <React.Fragment key={index}>
              <Card
                sx={{
                  width: { sm: 600, md: 800, lg: 900, xs: 300 },
                  marginTop: 5,
                  padding: 1,
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {ele.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <label className="bold-class">Description : </label>{" "}
                  {ele.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <label className="bold-class">Url : </label>{" "}
                  <a href={`${ele.html_url}`}>{ele.html_url}</a>
                </Typography>
              </Card>
            </React.Fragment>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordions;
