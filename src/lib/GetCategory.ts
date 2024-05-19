// export async function getCategory(): Promise<Category[]> {
//     try {
//       const response = await fetch(
//         'http://127.0.0.1:7777/docs/index.html/Selection',
//         {
//           cache: 'no-store',
//           credentials: 'same-origin',
//         }
//       );

//       if (!response.ok) {
//         console.log(response.json())
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();

//       console.log(data);

//       const categories: Category[] = data.map((item: any) => ({
//         description: item.description,
//         id: item.id,
//         is_generated: item.is_generated,
//         name: item.name,
//       }));

//       return categories;
//     } catch (error) {
//       console.error('There has been a problem with your fetch operation:', error);
//       throw error; // Re-throw the error to ensure the caller knows something went wrong
//     }
//   }

// lib/GetCategory.ts


