import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const CartContext = createContext();

// Custom Hook สำหรับการเข้าถึง Context
export const useCart = () => {
  return useContext(CartContext);
};

// คอมโพเนนต์ที่ให้ค่า cartItems และฟังก์ชันต่างๆ แก่คอมโพเนนต์ย่อย
export const CartProvider = ({ children }) => {
  // ลองโหลดตะกร้าสินค้าจาก Local Storage เมื่อ Component โหลดครั้งแรก
  const [cartItems, setCartItems] = useState(
    () => {
      try {
        const storedCartItems =
          localStorage.getItem("cartItems");
        return storedCartItems
          ? JSON.parse(storedCartItems)
          : [];
      } catch (error) {
        console.error(
          "Failed to load cart from localStorage:",
          error
        );
        return [];
      }
    }
  );

  // บันทึกตะกร้าสินค้าลง Local Storage ทุกครั้งที่มีการเปลี่ยนแปลง
  useEffect(() => {
    try {
      localStorage.setItem(
        "cartItems",
        JSON.stringify(cartItems)
      );
    } catch (error) {
      console.error(
        "Failed to save cart to localStorage:",
        error
      );
    }
  }, [cartItems]);

  // เพิ่มสินค้าเข้าไปในตะกร้า ถ้ามีอยู่แล้วก็เพิ่มจำนวน
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        return [
          ...prevItems,
          { ...product, quantity: 1 },
        ];
      }
    });
  };

  //ลบสินค้าออกจากตะกร้าโดยใช้ ID
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => item.id !== productId
      )
    );
  };

  //อัปเดตจำนวนสินค้า
  const updateQuantity = (
    productId,
    newQuantity
  ) => {
    if (newQuantity <= 0) {
      removeFromCart(productId); // ถ้าจำนวนเป็น 0 หรือน้อยกว่า ให้ลบสินค้านั้นออกจากตะกร้า
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // คำนวณราคารวมทั้งหมด
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  };

  // จำนวนสินค้าทั้งหมดในตะกร้า (สำหรับ Badge ใน Navbar)
  const getTotalItems = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  };

  // นำค่าแต่ละตัวมารวมเพื่อส่งออกไปใช้งานต่อไป
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getTotalItems,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
