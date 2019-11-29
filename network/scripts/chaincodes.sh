#!/bin/bash

buildChaincodes () {
    chaincode=foodtrace
    version=1.0

    ./scripts/buildcontract.sh "${chaincode}" "${versions}"

}

buildChaincodes
