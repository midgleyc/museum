import type { SlimItem } from "~/utils";
import { itemToString } from "~/utils";

type Props = {
  item: SlimItem;
  disambiguate?: boolean;
  plural?: boolean;
};

export default function ItemName({ item, disambiguate, plural }: Props) {
  return <>{itemToString(item, disambiguate, plural)}</>;
}
