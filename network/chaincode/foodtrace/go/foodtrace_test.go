package main

import (
	"fmt"
	"strings"
	"testing"

	"github.com/hyperledger/fabric/core/chaincode/shim"
)

func TestInstancesCreation(test *testing.T) {
	stub := InitChaincode(test)

	Invoke(test, stub, "CreateSupplier", "20156425", "Supplier A", "HaNoi")
	Invoke(test, stub, "AddRetailerProductInfo", "1", "A", "XYZ", "BCD", "M", "N")
	Invoke(test, stub, "GetRetailerProductInfo", "1")
}

func InitChaincode(test *testing.T) *shim.MockStub {
	stub := shim.NewMockStub("testingStub", new(SmartContract))
	result := stub.MockInit("000", nil)

	if result.Status != shim.OK {
		test.FailNow()
	}
	return stub
}

func Invoke(test *testing.T, stub *shim.MockStub, function string, args ...string) {
	cc_args := make([][]byte, 1+len(args))
	cc_args[0] = []byte(function)

	for i, arg := range args {
		cc_args[i+1] = []byte(arg)
	}
	result := stub.MockInvoke("000", cc_args)
	fmt.Println("Call:	", function, "(", strings.Join(args, ", "), ")")
	fmt.Println("RetCode:	", result.Status)
	fmt.Println("RetMsg:	", result.Message)
	fmt.Println("Payload:	", string(result.Payload))

	if result.Status != shim.OK {
		test.FailNow()
	}
}
