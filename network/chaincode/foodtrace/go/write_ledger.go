package main

import (
	"encoding/json"

	"fmt"
	// "strconv"

	// "github.com/hyperledger/fabric/core/chaincode/lib/cid"
	"github.com/hyperledger/fabric/core/chaincode/shim"
	sc "github.com/hyperledger/fabric/protos/peer"
)

func CreateSupplier(stub shim.ChaincodeStubInterface, args []string) sc.Response {

	// MSPID, err := cid.GetMSPID(stub)

	// if err != nil {
	// 	return shim.Error("Error - cide.GetMSPID()")
	// }

	// if MSPID != "SupplierMSP" {
	// 	return shim.Error("Create Supplier Error: You are not authorized to do this action")
	// }

	// if len(args) != 3 {
	// 	return shim.Error("Incorrect number of arguments. Expecting 3")
	// }

	fmt.Println("Start Create Supplier!")

	SupplierID := args[0]
	Name := args[1]
	Location := args[2]

	key := "Supplier-" + SupplierID
	checkSupplierExist, err := getSupplier(stub, key)

	if err == nil {
		fmt.Println(checkSupplierExist)
		return shim.Error("This supplier already exists - " + SupplierID +" " + Name)
	}

	var supllier = Supplier{SupplierID: SupplierID, Name: Name, Location: Location}

	supllierAsBytes, _ := json.Marshal(supllier)

	stub.PutState(key, supllierAsBytes)

	return shim.Success(nil)
}

// func CreateProcessor(stub shim.ChaincodeStubInterface, args []string) sc.Response {

// 	MSPID, err := cid.GetMSPID(stub)

// 	if err != nil {
// 		return shim.Error("Error - cide.GetMSPID()")
// 	}

// 	if MSPID != "SupplierMSP" {
// 		return shim.Error("Create Processor Error: You are not authorized to do this action")
// 	}

// 	if len(args) != 3 {
// 		return shim.Error("Incorrect number of arguments. Expecting 3")
// 	}

// 	fmt.Println("Start Create Supplier!")

// 	ProcessorID := args[0]
// 	Name := args[1]
// 	Location := args[2]

// 	key := "Processor-" + ProcessorID
// 	checkProcessorExist, err := getProcessor(stub, key)

// 	if err == nil {
// 		fmt.Println(checkProcessorExist)
// 		return shim.Error("This processor already exists - " + ProcessorID + " "+Name)
// 	}

// 	var processor = Processor{ProcessorID: ProcessorID, Name: Name, Location: Location}

// 	supllierAsBytes, _ := json.Marshal(processor)

// 	stub.PutState(key, supllierAsBytes)

// 	return shim.Success(nil)
// }

// func CreateRetailer(stub shim.ChaincodeStubInterface, args []string) sc.Response {

// 	MSPID, err := cid.GetMSPID(stub)

// 	if err != nil {
// 		return shim.Error("Error - cide.GetMSPID()")
// 	}

// 	if MSPID != "SupplierMSP" {
// 		return shim.Error("Create Processor Error: You are not authorized to do this action")
// 	}

// 	if len(args) != 3 {
// 		return shim.Error("Incorrect number of arguments. Expecting 3")
// 	}

// 	fmt.Println("Start Create Retailer!")

// 	RetailerID := args[0]
// 	Name := args[1]
// 	Location := args[2]

// 	keyRetailer := "Retailer-" + RetailerID
// 	checkRetailerExist, err := getRetailer(stub, keyRetailer)

// 	if err == nil {
// 		fmt.Println(checkRetailerExist)
// 		return shim.Error("This retailer already exists - " + RetailerID)
// 	}

// 	var retailer = Retailer{RetailerID: RetailerID, Name: Name, Location: Location}

// 	retailerAsBytes, _ := json.Marshal(retailer)

// 	stub.PutState(keyRetailer, retailerAsBytes)

// 	return shim.Success(nil)
// }

// func CreateProduct_Supplier(stub shim.ChaincodeStubInterface, args []string) sc.Response {

// 	MSPID, err := cid.GetMSPID(stub)

// 	if err != nil {
// 		fmt.Println("Error - cide.GetMSPID()")
// 	}

// 	if MSPID != "SupplierMSP" {
// 		return shim.Error("Create Product_Supplier Error: You are not authorized to do this action!")
// 	}

// 	SupplierID, found, err := cid.GetAttributeValue(stub, "SupplierID")

// 	if err != nil {
// 		return shim.Error("Error - cide.GetMSPID()?")
// 	}

// 	if !found {
// 		return shim.Error("WHO ARE YOU ?")
// 	}

// 	fmt.Println("Start Create Product_Supplier!")

// 	if len(args) != 5 {
// 		return shim.Error("Incorrect number of arguments. Expecting 3")
// 	}

// 	ProductID := args[0]
// 	ProductName := args[1]
// 	SupplierExportDate := ""
// 	Quantity := nil


// 	_, err = getSupplier(stub, "Product-"+ProductID)

// 	if err == nil {
// 		return shim.Error("Supplier has already existed - " + ProductID)
// 	}

// 	// checkRetailerExist, err := getRetailer(stub, "Retailer-"+RetailerID)

// 	// if err != nil {
// 	// 	fmt.Println(checkRetailerExist)
// 	// 	return shim.Error("Retailer does not exist - " + RetailerID)
// 	// }

// 	// if checkRetailerExist.ProcessorUsername != ProcessorUsername {
// 	// 	return shim.Error("WHO ARE YOU ?")
// 	// }

// 	// key := "Product_Supplier-" + " " + "Retailer-" + RetailerID + " " + "Supplier-" + SupplierUsername
// 	// checkProduct_SupplierExist, err := getProduct_Supplier(stub, key)

// 	// if err == nil {
// 	// 	fmt.Println(checkProduct_SupplierExist)
// 	// 	return shim.Error("This score already exists.")
// 	// }

// 	var product = Product_Supplier{ProductID: ProductID, ProductName: ProductName, SupplierID: SupplierID, Certificated: false}

// 	scoreAsBytes, _ := json.Marshal(product)

// 	stub.PutState(key, productAsBytes)

// 	return shim.Success(nil)
// }

// func CreateCertificate(stub shim.ChaincodeStubInterface, args []string) sc.Response {

// 	MSPID, err := cid.GetMSPID(stub)

// 	if err != nil {
// 		return shim.Error("Error - cide.GetMSPID()")
// 	}

// 	if MSPID != "AcademyMSP" {
// 		return shim.Error("You Are Not Processor!")
// 	}

// 	fmt.Println("Start Create Certificate!")

// 	if len(args) != 4 {
// 		return shim.Error("Incorrecr")
// 	}

// 	CertificateID := args[0]
// 	RetailerID := args[1]
// 	SupplierUsername := args[2]
// 	IssueDate := args[3]

// 	keyCertificate := "Certificate-" + CertificateID

// 	keyProduct_Supplier := "Product_Supplier-" + " " + "Retailer-" + RetailerID + " " + "Supplier-" + SupplierUsername

// 	score, err := getProduct_Supplier(stub, keyProduct_Supplier)

// 	if err != nil {

// 		return shim.Error("Product_Supplier dose not exist")

// 	} else {

// 		score.Certificated = true

// 		scoreAsBytes, _ := json.Marshal(score)

// 		stub.PutState(keyProduct_Supplier, scoreAsBytes)

// 		var certificate = Certificate{CertificateID: CertificateID, SupplierUsername: SupplierUsername, RetailerID: RetailerID, IssueDate: IssueDate}

// 		certificateAsBytes, _ := json.Marshal(certificate)

// 		stub.PutState(keyCertificate, certificateAsBytes)

// 		return shim.Success(nil)
// 	}
// }
