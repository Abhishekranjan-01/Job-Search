import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OptionalParameters from "./OptionalParameters";

export default function AccordionU() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Optional Parameters</AccordionTrigger>
        <AccordionContent>
          <OptionalParameters />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
