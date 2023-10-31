export default function handleSort (field) {
    const order = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(order);

    const _products = [...products].sort((a, b) => {
      return order === 'asc' ? naturalSort()(a[field], b[field]) : -naturalSort()(a[field], b[field])
    });
    setProducts(_products)
  };