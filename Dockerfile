

APPLICATION
---> 0..1 PRODUCT
---> N CONTRACT
----> 1 API


=> <Product, List<Api>>

flatmap( [api] ).grouping(api -> api.getProduct() )
