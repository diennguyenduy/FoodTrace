#!/bin/bash

# verify the result of the end-to-end test
verifyResult () {
	if [ $1 -ne 0 ] ; then
		echo "!!!!!!!!!!!!!!! "$2" !!!!!!!!!!!!!!!!"
    echo "========= ERROR !!! FAILED to execute End-2-End Scenario ==========="
		echo
   	exit 1
	fi
}

# Set OrdererOrg.Admin globals
setOrdererGlobals() {
    CORE_PEER_LOCALMSPID="OrdererMSP"
    CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/foodtrace.com/msp/tlscacerts/tlsca.foodtrace.com-cert.pem
    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/supplier.foodtrace.com/users/Admin@supplier.foodtrace.com/msp
}

setGlobals () {
	CLUSTER=$1
	if [ $CLUSTER -eq 1 ] ; then
		CORE_PEER_LOCALMSPID=SupplierMSP
		CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/supplier.foodtrace.com/peers/peer0.supplier.foodtrace.com/tls/ca.crt
		CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/supplier.foodtrace.com/users/Admin@supplier.foodtrace.com/msp
		CORE_PEER_ADDRESS=peer0.supplier.foodtrace.com:7051
	elif [ $CLUSTER -eq 2 ] ; then
		CORE_PEER_LOCALMSPID=ProcessorMSP
		CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/processor.foodtrace.com/peers/peer0.processor.foodtrace.com/tls/ca.crt
		CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/processor.foodtrace.com/users/Admin@processor.foodtrace.com/msp
		CORE_PEER_ADDRESS=peer0.processor.foodtrace.com:7051
	elif [ $CLUSTER -eq 3 ] ; then
		CORE_PEER_LOCALMSPID=RetailerMSP
		CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/retailer.foodtrace.com/peers/peer0.retailer.foodtrace.com/tls/ca.crt
		CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/retailer.foodtrace.com/users/Admin@retailer.foodtrace.com/msp
		CORE_PEER_ADDRESS=peer0.retailer.foodtrace.com:7051
	else
		echo "================== ERROR !!! ORGANIZATION Unknown =================="
	fi

	env |grep CORE
}
