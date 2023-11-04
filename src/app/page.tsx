"use client";
import { FC, useState } from "react";

interface Image {
  id: number;
  src: string;
  isFeatured: boolean;
}
import Image from "next/image";
import ReesponsiveDoc from "@/components/ReesponsiveDoc";

function useDragAndDrop() {
  const initialImages: Image[] = [
    { id: 1, src: "/images/image-1.png", isFeatured: false },
    { id: 2, src: "/images/image-2.png", isFeatured: false },
    { id: 3, src: "/images/image-11.jpeg", isFeatured: true },
    { id: 4, src: "/images/image-3.png", isFeatured: false },
    { id: 5, src: "/images/image-4.png", isFeatured: false },
    { id: 6, src: "/images/image-5.png", isFeatured: false },
    { id: 7, src: "/images/image-6.png", isFeatured: false },
    { id: 8, src: "/images/image-7.webp", isFeatured: false },
    { id: 9, src: "/images/image-8.webp", isFeatured: false },
    { id: 10, src: "/images/image-9.webp", isFeatured: false },
    { id: 11, src: "/images/image-10.jpeg", isFeatured: false },
    { id: 12, src: "/images/image.jpeg", isFeatured: false },
  ];

  const [draggedItem, setDraggedItem] = useState<number | null>(null);
  const [items, setItems] = useState(initialImages);
  const [selectedImages, setSelectedImages] = useState<number[]>([]);

  const handleDragStart = (imageId: number) => {
    setDraggedItem(imageId);
  };

  // A function that handles the drag enter event

  const handleDragEnter = (e: any, imageId: number) => {
    if (draggedItem) {
      const newList = [...items];
      const item = newList[draggedItem];
      newList.splice(draggedItem, 1);
      newList.splice(imageId, 0, item);
      setDraggedItem(imageId);
      setItems(newList);
    }
    return;
  };


  const handleCheckboxChange = (itemId: number) => {
    if (selectedImages.includes(itemId)) {
      setSelectedImages(selectedImages.filter((id) => id !== itemId));
    } else {
      setSelectedImages([...selectedImages, itemId]);
    }
  };

  const handleDeleteSelectedItems = (): void => {
    // Handle the deletion of selected items here, e.g., call an API or update your data.
    // For this example, we'll just clear the selection who are inludeed selected Item
    const seletedItems = [...items];
   
    const n = seletedItems.filter(
      (img) => !selectedImages.includes(img.id)
    );
    setSelectedImages([]);
    setItems(n);
  };
  return {
    draggedItem,
    items,
    handleDragStart,
    handleDragEnter,
    selectedImages,
    handleCheckboxChange,
    handleDeleteSelectedItems,
  };
}

const Gallery: FC = ({}) => {
  const {
    draggedItem,
    items,
    handleDragStart,
    handleDragEnter,
    
    selectedImages,
    handleCheckboxChange,
    handleDeleteSelectedItems,
  } = useDragAndDrop();
  return (
    <div className="container">
      <ReesponsiveDoc />
      <div className="recorde">
        <p>Selected Items: {selectedImages.length}</p>
        <div>
          {selectedImages.length > 0 && (
            <button
              className="custom-button"
              onClick={handleDeleteSelectedItems}
            >
              Delete files
            </button>
          )}
        </div>
      </div>
      <div className="image-gallery">
        {items &&
          items.map((image, index) => (
            <div
              className={`image-item v${index}`}
              key={image.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragEnter={(e) => handleDragEnter(e, index)}
              // onDragLeave={(e) => handleDragLeave(e)}
              // onDrop={(e) => handleDrop(e)}
              onDragOver={(e) => e.preventDefault()}
            >
              <label className="image-checkbox">
                <input
                  type="checkbox"
                  checked={selectedImages.includes(image.id)}
                  onChange={() => handleCheckboxChange(image.id)}
                />
                <Image
                  src={image.src}
                  alt={`Image ${image.id}`}
                  fill={true}
                  className={"image"}
                />
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Gallery;
