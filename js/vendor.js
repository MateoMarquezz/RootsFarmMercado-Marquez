//RootsFarm clases

//Clase con los datos de Rootsfarm
export default class Vendor {
    components() {
        this.name = ""; //Rootsfarm
        this.phone = ""; //Teléfono
        this.shippingCost = parseFloat(0); //Costo de envío
        this.mercadoPagoDaysAmountAvailable = parseInt(0); //Mercado Pago: días para tener la disponbilidad del dinero
        this.orders = []; //Ordenes de clientes
    }

    //Obtengo los datos del vendedor.
    //Temporalmente los asigno en la función:
    getVendorInfo = () => {
        this.name = "Roots Farm"
        this.phone = "1101234567" //Numero falso
        this.shippingCost = 150;
        this.mercadoPagoDaysAmountAvailable = 0;
        this.updateShippingCostDom();
    }

    updateShippingCostDom = () => {
        $('#checkout-ship-req-label').append(` (+ $${this.shippingCost})`)
    }

}