export interface Manufacturer{
 id:string | null;
 name:string | null;
 website:string | null;
}

export interface Estimate{
 id:string | null;
 customer:Customer | null;
 description:string | null;
 dateDue:string | null;
 status:string | null;
 orderDate:string | null;
 inkCost:number | null;
 shirtCost:number | null;
 depositUrl:string | null;
 screenCost:number | null;
 paymentUrl:string | null;
 shippingCost:number | null;
 materialMarkup:number | null;
 totalAmount:number | null;
 laborCost:number | null;
 depositAmount:number | null;
 laborMarkup:number | null;
 totalCost:number | null;
 numberOfShipments:number | null;
 overrideTotal:number | null;
 items:Array<LineItem> | null;
 namesNumbers:Array<NamesNumbers> | null;
}

export interface Customer{
 id:string | null;
 name:string | null;
 email:string | null;
 phone:string | null;
 street1:string | null;
 street2:string | null;
 city:string | null;
 state:string | null;
 zipcode:string | null;
 tenant:Tenant | null;
}

export interface Garment{
 id:string | null;
 brand:string | null;
 cost:number | null;
 costDate:string | null;
 color:string | null;
 manufacturer:Manufacturer | null;
 description:string | null;
 twoXCost:number | null;
 threeXCost:number | null;
}

export interface Settings{
 id:string | null;
 materialMarkup:number | null;
 laborMarkup:number | null;
 overallMarkup:number | null;
 inkMsi:number | null;
}

export interface Defaults{
 id:string | null;
 screenCostPerColor:number | null;
 filmPerColor:number | null;
 artCostPerSide:number | null;
 shippingCostPerShirt:number | null;
 printLaborHoursPerColor:number | null;
}

export interface Expenses{
 id:string | null;
 merchant:string | null;
 category:string | null;
 amount:number | null;
 quantity:number | null;
 description:string | null;
}

export interface Screen{
 description:string | null;
 mesh:number | null;
}

export interface InvoiceItems{
 id:string | null;
 estimateId:number | null;
 qty:number | null;
 price:number | null;
 amount:number | null;
 description:string | null;
}

export interface NamesNumbers{
 size:string | null;
 description:string | null;
 colors:string | null;
 position:string | null;
}

export interface LineItem{
 description:string | null;
 garment:Garment | null;
 garmentColor:string | null;
 costEa:number | null;
 totalColors:number | null;
 xs:number | null;
 sm:number | null;
 med:number | null;
 lg:number | null;
 xl:number | null;
 xxl:number | null;
 xxxl:number | null;
 xxxxl:number | null;
 notes:string | null;
 printLocations:Array<PrintLocation> | null;
 screens:Array<Screen> | null;
}

export interface PrintLocation{
 position:string | null;
 design:string | null;
 colors:number | null;
}

export interface Tenant{
 id:string | null;
 name:string | null;
 email:string | null;
 phone:string | null;
 street1:string | null;
 street2:string | null;
 city:string | null;
 state:string | null;
 zipcode:string | null;
}

