#!/usr/bin/env zx
import os from 'os'

// Platform
console.log(`Platform: ${os.platform()}`)

// CPU architecture
console.log(`CPU Architecture: ${os.arch()}`)

// CPU core info
// console.log(os.cpus())

// Free memory
console.log(`Free memory: ${os.freemem()}`)

// Total memory
console.log(`Total memory: ${os.totalmem()}`)

// Home directory
console.log(`Home directory: ${os.homedir()}`)

// Uptime
console.log(`Uptime: ${os.uptime()}`)

const cpuArray = os.cpus()
console.log(`CPU Core Info: ${cpuArray.length} core ${cpuArray[0].model}`);

// vim: et ts=2 ai nu
