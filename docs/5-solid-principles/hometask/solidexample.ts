
/** DIP -  High-level modules, which provide complex logic, should be easily reusable and unaffected by changes in low-level modules, which provide utility features . 
 * @example, https://github.com/microsoft/Dynamics365Commerce.InStore/blob/release/9.36/src/StoreCommerceSamples/Solutions/GasStationSample/Pos/NumberFormattingHelper.ts
 * @example, https://github.com/microsoft/Dynamics365Commerce.InStore/blob/release%2F9.36/src/StoreCommerceSamples/Solutions/GasStationSample/Pos/GasStationDataStore.ts
 * @example, https://github.com/microsoft/vscode/blob/main/src/vs/platform/state/electron-main/stateMainService.ts#L20
 * */ 


/** ISP -  Instead of keeping a single interface its seperated in to two. 
 * @example, https://github.com/microsoft/TypeScript/blob/main/src/server/editorServices.ts#L316
 * @example, https://github.com/microsoft/vscode/blob/main/src/vs/platform/credentials/common/credentials.ts#L25
 * */ 

/** SRP -  Used for only one function, Create a GasStationDialog
 * @example,  https://github.com/microsoft/Dynamics365Commerce.InStore/blob/release%2F9.36/src/StoreCommerceSamples/Solutions/GasStationSample/Pos/Create/Dialogs/GasStationDetailsDialog.ts#L21
 * @example,   https://github.com/microsoft/Dynamics365Commerce.InStore/blob/release%2F9.36/src/StoreCommerceSamples/Solutions/GasStationSample/Pos/Create/Dialogs/PumpGasDialog.ts#L23
 * 
 * */ 

/** OCR -  Any functionality change can be handled easily as it will not effect anything else
 * @example,  https://github.com/microsoft/Dynamics365Commerce.InStore/blob/release%2F9.36/src/StoreCommerceSamples/Solutions/GasStationSample/Pos/Create/Dialogs/GasStationDetailsDialog.ts#L21
 * @example,   https://github.com/microsoft/Dynamics365Commerce.InStore/blob/release%2F9.36/src/StoreCommerceSamples/Solutions/GasStationSample/Pos/Create/Dialogs/PumpGasDialog.ts#L23
 * 
 * */ 

/** ANTI LSP Contract Rules - Pre conditions are strenthed  
 * @example, https://github.com/microsoft/Dynamics365Commerce.InStore/blob/release/9.36/src/PackagingSamples/ModernPos/Pos.Extension/Triggers/PreProductSaleTrigger.ts#L20
 * 
 * */ 
/** ANTI SRP Handles alot of functions
 * @example, https://github.com/microsoft/vscode/blob/main/src/vs/editor/common/commands/shiftCommand.ts#L41
 * 
 * */ 
 