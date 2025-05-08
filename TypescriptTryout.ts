{
    function formatString(input: string, toUpper?: boolean): string {
        return toUpper===false ? input.toLowerCase() : input.toUpperCase();
    }

    console.log(formatString("Hello"));          // Output: "HELLO"
    console.log(formatString("Hello", true));   // Output: "HELLO"
    console.log(formatString("Hello", false));  // Output: "hello"

    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        return items.filter(item => item.rating >= 4);
    }
    

    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
      ];
      
    console.log(filterByRating(books)); 
    // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

    function concatenateArrays<T>(...arrays: T[][]): T[]{
        const result: T[] = [];
        for(let i=0; i<arrays.length; i++){
            for(let j=0; j<arrays[i].length; j++){
                result.push(arrays[i][j]);
            }
        }
        return result;
    }

    console.log(concatenateArrays(["a", "b"], ["c"]));       // Output: ["a", "b", "c"]
    console.log(concatenateArrays([1, 2], [3, 4], [5]));     // Output: [1, 2, 3, 4, 5]

    class Vehicle {
        private make: string;
        private year: number;

        constructor(make: string, year: number){
            this.make = make;
            this.year = year;
        }

        getInfo(): String{
            return `Make: ${this.make}, Year: ${this.year}`;
        }
    }

    class Car extends Vehicle{
        private model: string;

        constructor(make: string, year: number, model:string){
            super(make, year);
            this.model = model;
        }

        getModel(): string{
            return `Model: ${this.model}`;
        }
    }

    const myCar = new Car("Toyota", 2020, "Corolla");
    console.log(myCar.getInfo());   // Output: "Make: Toyota, Year: 2020"
    console.log(myCar.getModel());

    function processValue(value: string | number): number {
        return typeof(value) === 'number' ? (value*2) : typeof(value) === 'string' ? value.length : 0;
    }

    console.log(processValue("hello")); // Output: 5
    console.log(processValue(10));      // Output: 20

    interface Product {
        name: string;
        price: number;
      }
      
    function getMostExpensiveProduct(products: Product[]): Product | null {
        if(products.length == 0){
            return null;
        } else{
            let max = products[0];
            for(let i=0; i<products.length; i++){
                if(max.price < products[i].price){
                    max = products[i];
                }
            }
            return max;
        } 
    }

    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
      ];
      
    console.log(getMostExpensiveProduct(products));  
    // // Output: { name: "Bag", price: 50 }

    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
      }
      
    function getDayType(day: Day): string {
    if(day === Day.Saturday || day === Day.Sunday){
        return "Weekend";
    }else{
        return "Weekday";
    }
    }

    console.log(getDayType(Day.Monday));   // Output: "Weekday"
    console.log(getDayType(Day.Sunday));   // Output: "Weekend"




    async function squareAsync(n: number): Promise<number> {
    if(n<0){
        throw new Error("Rejected");
    }else{
        return new Promise((resolve) => {
            setTimeout(() => resolve(n*n), 1000);
        });
    }
    }


    console.log(squareAsync(4).then(console.log));        // Output after 1s: 16
    console.log(squareAsync(-3).catch(console.error));    // Output: Error: Negative number not allowed

}