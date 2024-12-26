---
---
# Introduction

## The Contact Center API package is divided into three main sections.

### SEA (Simotel Event API)

SEA is a collection of APIs that send information about events that occur in the contact center to your web service. With SEA, you can quickly stay informed about all the events happening in the contact center. This section is responsible for managing all the events that are sent from the Simotel source to the destination web service.

For example, one of the most useful events in this section is the `CDR (Call Detail Record)` method, which, after the call ends, sends all call details (such as the start time, end time, source number, destination number, call duration, wait time, etc.) to the web service. The methods available in SEA are reviewed in more detail.

:::tip Note

Using SEA does not require polling from the web service; Simotel sends the data to you when an event occurs.
:::

### SA (Simotel API)

SA is a collection of APIs that are triggered by a request from the web service to Simotel. This service is created using the standard RestAPI format. For example, by sending a request for a two-way call from the web service to Simotel, the contact center will initiate the two-way call upon receiving the request.

### API Components

The API components in the dialplan give you dynamic control over calls. Using these components, you can create an interaction between the web service and the contact center, where your web service analyzes the received data (request) and based on the current conditions, determines the response to the component's request.

For example, some setups require that when a customer calls multiple times, they should always be connected to the same company agent until the interaction is complete. The **ExtenAPI** component can be used to implement this scenario.

### Data Format for Sending and Receiving Information

The data format for sending requests and receiving responses is JSON (except for download and stream services).

### Useful Links

- The PHP package for connecting to Simotel, along with examples, is available for download from **[here](https://github.com/nasimtelecom/simotel-php-connect)**.

- The Laravel package for Simotel, for more information on how to make requests, is available for download from **[here](https://github.com/nasimtelecom/simotel-laravel-connect)**.

- The Postman file for a better understanding of how the API works is available for download from **[here](https://dl.mysup.ir/postmansample/Simotel_V3.edition_14.postman_collection.json)** (v3_e14).

<!-- <a href="pathname://../../file/Simotel_V3.edition_12.postman_collection.json" target="_blank">Click here</a> -->