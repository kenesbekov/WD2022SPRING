from django.http.response import HttpResponse, JsonResponse

from api.models import Category, Product

# def hello(request):
#     return HttpResponse("<h1>hello view function response</h1>")

def product_list(request):
    # SELECT * FROM api_product
    products = Product.objects.all()
    product_json = [product.to_json for product in products]
    return JsonResponse(product_json, safe=False)

def product_detail(request, product_id):
    # SELECT * FROM api_product WHERE id = <product_id>
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    
    return JsonResponse(product.to_json, status=200)
    # for product in products:
    #     if product['id'] == product_id:
    #         return JsonResponse(product, status=200)
    # return JsonResponse({'message': 'Product not found with selected id'}, status=400)

def category_list(request):
    categories = Category.objects.all()
    category_json = [category.to_json for category in categories]
    return JsonResponse(category_json, safe=False)
 
def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    
    return JsonResponse(category.to_json, status=200)

def category_product(request, category_id):
    try:
        products = Product.objects.all().filter(categoryid = category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    
    return [JsonResponse(product.to_json, status=200) for product in products]

# products = [
#     {
#         'id': i,
#         'name':  f'Product {i}',
#         'price': i * 1000,
#         'description': f'Product {i} description',
#         'count': 2,
#         'is_active': True,
#     }
#     for i in range(1, 10)
# ]

# categories = [
#     {
#         'id': i,
#         'name': f'Category {i}',
#     }
#     for i in range(1, 10)
# ]
