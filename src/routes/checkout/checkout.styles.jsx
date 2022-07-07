import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media (max-width: 600px) {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));

    .total {
      display: grid;
      margin: 0 auto;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      justify-content: end;
    }
  }

  .checkout-header {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #A6EBC9;

    .header-block {
      text-transform: capitalize;
      width: 23%;

      &:last-child {
        width: 8%;
      }
    }
  }

  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }

`;