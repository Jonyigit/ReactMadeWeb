import { data } from "../utils/script";
import { Card } from "./card";

export function Cards() {
    return data.map((item, index) => {
        const { icon, title, desc, btnText } = item;
        console.log(title);

        return (
            <Card
                icon={icon}
                title={title}
                desc={desc}
                btnText={btnText}
                key={index}
            />
        );
    });
}
