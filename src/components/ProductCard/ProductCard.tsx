import { Product } from 'types';

import PlainLink from 'components/PlainLink/PlainLink';
import * as S from 'components/ProductCard/ProductCard.styled';

import ICONS from 'constants/icons';

type Props = {
  product: Product;
};

function ProductCard({
  product: { id, name, price, stock, description, imageUrl },
}: Props) {
  return (
    <PlainLink to={`/product/${id}`} disabled={stock <= 0}>
      <S.ProductCardBox>
        <S.CardImageBox>
          {stock > 0 ? (
            <S.CardImageOverlay>
              <p>{description}</p>
              <div>구매하기</div>
            </S.CardImageOverlay>
          ) : (
            <S.OutOfStockOverlay>품절</S.OutOfStockOverlay>
          )}
          <img src={imageUrl} alt={name} />
        </S.CardImageBox>
        <S.CardDescriptionBox>
          <h3>{name}</h3>
          <p>{price.toLocaleString('ko-KR')} 원</p>
        </S.CardDescriptionBox>
        <S.CardButtonBox>
          <button>{ICONS.SHOPPING_CART}</button>
        </S.CardButtonBox>
      </S.ProductCardBox>
    </PlainLink>
  );
}

export default ProductCard;
