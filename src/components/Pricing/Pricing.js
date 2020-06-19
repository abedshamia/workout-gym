/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Container from "../Global/Container";
import Heading from "../Global/Heading/Heading";
import PricingCard from "./PricingCard";

const Pricing = () => {
    return (
        <section className="pricing" css={styles}>
            <Container>
                <Heading title="OUR PRICING" info="There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration." />
                <div className="wrapper">
                    <PricingCard cardTitle="BEGINNER" cardPricing="$45/m" />
                    <PricingCard cardTitle="EXPERT" cardPricing="$45/m" />
                    <PricingCard cardTitle="PRO" cardPricing="$45/m" />
                </div>
            </Container>
        </section>
    )
}

const styles = css`
    width: 100%;
    background: #000;
    .container {
        padding: 150px 0;
        .wrapper {
            padding: 80px 0 0 0;
            display: flex;
            justify-content: space-between;
        }
    }
`

export default Pricing;