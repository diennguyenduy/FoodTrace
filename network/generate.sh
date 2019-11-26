#!/bin/sh
#
# Copyright IBM Corp All Rights Reserved
#
# SPDX-License-Identifier: Apache-2.0
#
export PATH=$GOPATH/src/github.com/hyperledger/fabric/build/bin:${PWD}/bin:${PWD}:$PATH
export FABRIC_CFG_PATH=${PWD}
CHANNEL_NAME=foodtracechannel

# remove previous crypto material and config transactions
rm -rf channel-artifacts/*
rm -rf crypto-config/*

# generate crypto material
./bin/cryptogen generate --config=./crypto-config.yaml
if [ $? -ne 0 ]; then
  echo "Failed to generate crypto material..."
  exit 1
fi

# generate genesis block for orderer
./bin/configtxgen -profile TwoOrgsOrdererGenesis -outputBlock ./channel-artifacts/genesis.block
if [ $? -ne 0 ]; then
  echo "Failed to generate orderer genesis block..."
  exit 1
fi

# generate channel configuration transaction
./bin/configtxgen -profile TwoOrgsChannel -outputCreateChannelTx ./channel-artifacts/channel.tx -channelID $CHANNEL_NAME
if [ $? -ne 0 ]; then
  echo "Failed to generate channel configuration transaction..."
  exit 1
fi

# generate anchor peer transaction
./bin/configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/SupplierMSPanchors.tx -channelID $CHANNEL_NAME -asOrg SupplierMSP
if [ "$?" -ne 0 ]; then
  echo "Failed to generate anchor peer update for SupplierMSP..."
  exit 1
fi

./bin/configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/ProcessorMSPanchors.tx -channelID $CHANNEL_NAME -asOrg ProcessorMSP
if [ "$?" -ne 0 ]; then
  echo "Failed to generate anchor peer update for ProcessorMSP..."
  exit 1
fi

./bin/configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/RetailerMSPanchors.tx -channelID $CHANNEL_NAME -asOrg RetailerMSP
if [ "$?" -ne 0 ]; then
  echo "Failed to generate anchor peer update for RetailerMSP..."
  exit 1
fi
