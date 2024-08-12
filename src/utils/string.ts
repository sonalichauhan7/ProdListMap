export default {
    login: {
        login_info: "Welcome! Please enter your mobile number to log in",
        continue: "Continue",
        mobile_number: "Mobile number",
        enter_mobile: "Please enter mobile number",
        correct_mobile: "Please enter correct mobile number"
    },
    otp: {
        otp_sent_to: (code: string, number: string) =>
            `OTP has been sent to ${code} ${number}`,
        verify: 'Verify',
        enter_code: "Please enter code",
        enter_valid_code: "Please enter valid code",
    },
    productList: {
        price: "Price: ",
        description: "Description: ",
        category: "Category: ",
    },
    totalPrice: {
        total_price: "Total Price: "
    },
    addProduct: {
        add_info: "Please add product details",
        add: "Add",
        title: "Title: ",
        description: "Description: ",
        category: "Category: ",
        price: "Price: ",
        title_placeholder: "Headphones",
        desc_placeholder: "Enter details",
        category_placeholder: "Electronics",
        price_placeholder: "99.99",
        title_error: "Please enter title",
        desc_error: "Please enter description",
        category_error: "Please enter category",
        price_error: "Please enter price",
        success: "Success",
        added_success: "Product is added successfully"
    }
}