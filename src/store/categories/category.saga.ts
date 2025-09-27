import { takeLatest, all, call, put } from "typed-redux-saga/macro";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./category.action";
import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";
import portfolioSiteImage from "../../assets/portfolio_site.png";
import mesaRadionicaImage from "../../assets/mesa_radionica_apometria.jpg";

const SERVICE_IMAGE_OVERRIDES: Record<string, string> = {
  "Sítio para Apresentação de Portfolio": portfolioSiteImage,
  "Mesa Radiónica de Apometria": mesaRadionicaImage,
};

const applyServiceImageOverrides = (categories: Category[]): Category[] =>
  categories.map((category) => ({
    ...category,
    items: category.items.map((item) => {
      const overrideUrl = SERVICE_IMAGE_OVERRIDES[item.name];
      if (!overrideUrl) {
        return item;
      }

      return {
        ...item,
        imageUrl: overrideUrl,
      };
    }),
  }));

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield* call(
      getCategoriesAndDocuments,
      "categories"
    );
    const normalizedCategories = applyServiceImageOverrides(categoriesArray);
    yield* put(fetchCategoriesSuccess(normalizedCategories));
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}

export function* onFetchCategories() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}
