(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Users/patie/Downloads/protonai/node_modules/@ai-sdk/provider/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/errors/ai-sdk-error.ts
__turbopack_context__.s([
    "AISDKError",
    ()=>AISDKError,
    "APICallError",
    ()=>APICallError,
    "EmptyResponseBodyError",
    ()=>EmptyResponseBodyError,
    "InvalidArgumentError",
    ()=>InvalidArgumentError,
    "InvalidPromptError",
    ()=>InvalidPromptError,
    "InvalidResponseDataError",
    ()=>InvalidResponseDataError,
    "JSONParseError",
    ()=>JSONParseError,
    "LoadAPIKeyError",
    ()=>LoadAPIKeyError,
    "LoadSettingError",
    ()=>LoadSettingError,
    "NoContentGeneratedError",
    ()=>NoContentGeneratedError,
    "NoSuchModelError",
    ()=>NoSuchModelError,
    "TooManyEmbeddingValuesForCallError",
    ()=>TooManyEmbeddingValuesForCallError,
    "TypeValidationError",
    ()=>TypeValidationError,
    "UnsupportedFunctionalityError",
    ()=>UnsupportedFunctionalityError,
    "getErrorMessage",
    ()=>getErrorMessage,
    "isJSONArray",
    ()=>isJSONArray,
    "isJSONObject",
    ()=>isJSONObject,
    "isJSONValue",
    ()=>isJSONValue
]);
var marker = "vercel.ai.error";
var symbol = Symbol.for(marker);
var _a;
var _AISDKError = class _AISDKError extends Error {
    /**
   * Creates an AI SDK Error.
   *
   * @param {Object} params - The parameters for creating the error.
   * @param {string} params.name - The name of the error.
   * @param {string} params.message - The error message.
   * @param {unknown} [params.cause] - The underlying cause of the error.
   */ constructor({ name: name14, message, cause }){
        super(message);
        this[_a] = true;
        this.name = name14;
        this.cause = cause;
    }
    /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */ static isInstance(error) {
        return _AISDKError.hasMarker(error, marker);
    }
    static hasMarker(error, marker15) {
        const markerSymbol = Symbol.for(marker15);
        return error != null && typeof error === "object" && markerSymbol in error && typeof error[markerSymbol] === "boolean" && error[markerSymbol] === true;
    }
};
_a = symbol;
var AISDKError = _AISDKError;
// src/errors/api-call-error.ts
var name = "AI_APICallError";
var marker2 = `vercel.ai.error.${name}`;
var symbol2 = Symbol.for(marker2);
var _a2;
var APICallError = class extends AISDKError {
    constructor({ message, url, requestBodyValues, statusCode, responseHeaders, responseBody, cause, isRetryable = statusCode != null && (statusCode === 408 || // request timeout
    statusCode === 409 || // conflict
    statusCode === 429 || // too many requests
    statusCode >= 500), // server error
    data }){
        super({
            name,
            message,
            cause
        });
        this[_a2] = true;
        this.url = url;
        this.requestBodyValues = requestBodyValues;
        this.statusCode = statusCode;
        this.responseHeaders = responseHeaders;
        this.responseBody = responseBody;
        this.isRetryable = isRetryable;
        this.data = data;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker2);
    }
};
_a2 = symbol2;
// src/errors/empty-response-body-error.ts
var name2 = "AI_EmptyResponseBodyError";
var marker3 = `vercel.ai.error.${name2}`;
var symbol3 = Symbol.for(marker3);
var _a3;
var EmptyResponseBodyError = class extends AISDKError {
    // used in isInstance
    constructor({ message = "Empty response body" } = {}){
        super({
            name: name2,
            message
        });
        this[_a3] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker3);
    }
};
_a3 = symbol3;
// src/errors/get-error-message.ts
function getErrorMessage(error) {
    if (error == null) {
        return "unknown error";
    }
    if (typeof error === "string") {
        return error;
    }
    if (error instanceof Error) {
        return error.message;
    }
    return JSON.stringify(error);
}
// src/errors/invalid-argument-error.ts
var name3 = "AI_InvalidArgumentError";
var marker4 = `vercel.ai.error.${name3}`;
var symbol4 = Symbol.for(marker4);
var _a4;
var InvalidArgumentError = class extends AISDKError {
    constructor({ message, cause, argument }){
        super({
            name: name3,
            message,
            cause
        });
        this[_a4] = true;
        this.argument = argument;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker4);
    }
};
_a4 = symbol4;
// src/errors/invalid-prompt-error.ts
var name4 = "AI_InvalidPromptError";
var marker5 = `vercel.ai.error.${name4}`;
var symbol5 = Symbol.for(marker5);
var _a5;
var InvalidPromptError = class extends AISDKError {
    constructor({ prompt, message, cause }){
        super({
            name: name4,
            message: `Invalid prompt: ${message}`,
            cause
        });
        this[_a5] = true;
        this.prompt = prompt;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker5);
    }
};
_a5 = symbol5;
// src/errors/invalid-response-data-error.ts
var name5 = "AI_InvalidResponseDataError";
var marker6 = `vercel.ai.error.${name5}`;
var symbol6 = Symbol.for(marker6);
var _a6;
var InvalidResponseDataError = class extends AISDKError {
    constructor({ data, message = `Invalid response data: ${JSON.stringify(data)}.` }){
        super({
            name: name5,
            message
        });
        this[_a6] = true;
        this.data = data;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker6);
    }
};
_a6 = symbol6;
// src/errors/json-parse-error.ts
var name6 = "AI_JSONParseError";
var marker7 = `vercel.ai.error.${name6}`;
var symbol7 = Symbol.for(marker7);
var _a7;
var JSONParseError = class extends AISDKError {
    constructor({ text, cause }){
        super({
            name: name6,
            message: `JSON parsing failed: Text: ${text}.
Error message: ${getErrorMessage(cause)}`,
            cause
        });
        this[_a7] = true;
        this.text = text;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker7);
    }
};
_a7 = symbol7;
// src/errors/load-api-key-error.ts
var name7 = "AI_LoadAPIKeyError";
var marker8 = `vercel.ai.error.${name7}`;
var symbol8 = Symbol.for(marker8);
var _a8;
var LoadAPIKeyError = class extends AISDKError {
    // used in isInstance
    constructor({ message }){
        super({
            name: name7,
            message
        });
        this[_a8] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker8);
    }
};
_a8 = symbol8;
// src/errors/load-setting-error.ts
var name8 = "AI_LoadSettingError";
var marker9 = `vercel.ai.error.${name8}`;
var symbol9 = Symbol.for(marker9);
var _a9;
var LoadSettingError = class extends AISDKError {
    // used in isInstance
    constructor({ message }){
        super({
            name: name8,
            message
        });
        this[_a9] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker9);
    }
};
_a9 = symbol9;
// src/errors/no-content-generated-error.ts
var name9 = "AI_NoContentGeneratedError";
var marker10 = `vercel.ai.error.${name9}`;
var symbol10 = Symbol.for(marker10);
var _a10;
var NoContentGeneratedError = class extends AISDKError {
    // used in isInstance
    constructor({ message = "No content generated." } = {}){
        super({
            name: name9,
            message
        });
        this[_a10] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker10);
    }
};
_a10 = symbol10;
// src/errors/no-such-model-error.ts
var name10 = "AI_NoSuchModelError";
var marker11 = `vercel.ai.error.${name10}`;
var symbol11 = Symbol.for(marker11);
var _a11;
var NoSuchModelError = class extends AISDKError {
    constructor({ errorName = name10, modelId, modelType, message = `No such ${modelType}: ${modelId}` }){
        super({
            name: errorName,
            message
        });
        this[_a11] = true;
        this.modelId = modelId;
        this.modelType = modelType;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker11);
    }
};
_a11 = symbol11;
// src/errors/too-many-embedding-values-for-call-error.ts
var name11 = "AI_TooManyEmbeddingValuesForCallError";
var marker12 = `vercel.ai.error.${name11}`;
var symbol12 = Symbol.for(marker12);
var _a12;
var TooManyEmbeddingValuesForCallError = class extends AISDKError {
    constructor(options){
        super({
            name: name11,
            message: `Too many values for a single embedding call. The ${options.provider} model "${options.modelId}" can only embed up to ${options.maxEmbeddingsPerCall} values per call, but ${options.values.length} values were provided.`
        });
        this[_a12] = true;
        this.provider = options.provider;
        this.modelId = options.modelId;
        this.maxEmbeddingsPerCall = options.maxEmbeddingsPerCall;
        this.values = options.values;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker12);
    }
};
_a12 = symbol12;
// src/errors/type-validation-error.ts
var name12 = "AI_TypeValidationError";
var marker13 = `vercel.ai.error.${name12}`;
var symbol13 = Symbol.for(marker13);
var _a13;
var _TypeValidationError = class _TypeValidationError extends AISDKError {
    constructor({ value, cause }){
        super({
            name: name12,
            message: `Type validation failed: Value: ${JSON.stringify(value)}.
Error message: ${getErrorMessage(cause)}`,
            cause
        });
        this[_a13] = true;
        this.value = value;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker13);
    }
    /**
   * Wraps an error into a TypeValidationError.
   * If the cause is already a TypeValidationError with the same value, it returns the cause.
   * Otherwise, it creates a new TypeValidationError.
   *
   * @param {Object} params - The parameters for wrapping the error.
   * @param {unknown} params.value - The value that failed validation.
   * @param {unknown} params.cause - The original error or cause of the validation failure.
   * @returns {TypeValidationError} A TypeValidationError instance.
   */ static wrap({ value, cause }) {
        return _TypeValidationError.isInstance(cause) && cause.value === value ? cause : new _TypeValidationError({
            value,
            cause
        });
    }
};
_a13 = symbol13;
var TypeValidationError = _TypeValidationError;
// src/errors/unsupported-functionality-error.ts
var name13 = "AI_UnsupportedFunctionalityError";
var marker14 = `vercel.ai.error.${name13}`;
var symbol14 = Symbol.for(marker14);
var _a14;
var UnsupportedFunctionalityError = class extends AISDKError {
    constructor({ functionality, message = `'${functionality}' functionality not supported.` }){
        super({
            name: name13,
            message
        });
        this[_a14] = true;
        this.functionality = functionality;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker14);
    }
};
_a14 = symbol14;
// src/json-value/is-json.ts
function isJSONValue(value) {
    if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
        return true;
    }
    if (Array.isArray(value)) {
        return value.every(isJSONValue);
    }
    if (typeof value === "object") {
        return Object.entries(value).every(([key, val])=>typeof key === "string" && isJSONValue(val));
    }
    return false;
}
function isJSONArray(value) {
    return Array.isArray(value) && value.every(isJSONValue);
}
function isJSONObject(value) {
    return value != null && typeof value === "object" && Object.entries(value).every(([key, val])=>typeof key === "string" && isJSONValue(val));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/eventsource-parser/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParseError",
    ()=>ParseError,
    "createParser",
    ()=>createParser
]);
class ParseError extends Error {
    constructor(message, options){
        super(message), this.name = "ParseError", this.type = options.type, this.field = options.field, this.value = options.value, this.line = options.line;
    }
}
function noop(_arg) {}
function createParser(callbacks) {
    if (typeof callbacks == "function") throw new TypeError("`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?");
    const { onEvent = noop, onError = noop, onRetry = noop, onComment } = callbacks;
    let incompleteLine = "", isFirstChunk = !0, id, data = "", eventType = "";
    function feed(newChunk) {
        const chunk = isFirstChunk ? newChunk.replace(/^\xEF\xBB\xBF/, "") : newChunk, [complete, incomplete] = splitLines(`${incompleteLine}${chunk}`);
        for (const line of complete)parseLine(line);
        incompleteLine = incomplete, isFirstChunk = !1;
    }
    function parseLine(line) {
        if (line === "") {
            dispatchEvent();
            return;
        }
        if (line.startsWith(":")) {
            onComment && onComment(line.slice(line.startsWith(": ") ? 2 : 1));
            return;
        }
        const fieldSeparatorIndex = line.indexOf(":");
        if (fieldSeparatorIndex !== -1) {
            const field = line.slice(0, fieldSeparatorIndex), offset = line[fieldSeparatorIndex + 1] === " " ? 2 : 1, value = line.slice(fieldSeparatorIndex + offset);
            processField(field, value, line);
            return;
        }
        processField(line, "", line);
    }
    function processField(field, value, line) {
        switch(field){
            case "event":
                eventType = value;
                break;
            case "data":
                data = `${data}${value}
`;
                break;
            case "id":
                id = value.includes("\0") ? void 0 : value;
                break;
            case "retry":
                /^\d+$/.test(value) ? onRetry(parseInt(value, 10)) : onError(new ParseError(`Invalid \`retry\` value: "${value}"`, {
                    type: "invalid-retry",
                    value,
                    line
                }));
                break;
            default:
                onError(new ParseError(`Unknown field "${field.length > 20 ? `${field.slice(0, 20)}\u2026` : field}"`, {
                    type: "unknown-field",
                    field,
                    value,
                    line
                }));
                break;
        }
    }
    function dispatchEvent() {
        data.length > 0 && onEvent({
            id,
            event: eventType || void 0,
            // If the data buffer's last character is a U+000A LINE FEED (LF) character,
            // then remove the last character from the data buffer.
            data: data.endsWith(`
`) ? data.slice(0, -1) : data
        }), id = void 0, data = "", eventType = "";
    }
    function reset(options = {}) {
        incompleteLine && options.consume && parseLine(incompleteLine), isFirstChunk = !0, id = void 0, data = "", eventType = "", incompleteLine = "";
    }
    return {
        feed,
        reset
    };
}
function splitLines(chunk) {
    const lines = [];
    let incompleteLine = "", searchIndex = 0;
    for(; searchIndex < chunk.length;){
        const crIndex = chunk.indexOf("\r", searchIndex), lfIndex = chunk.indexOf(`
`, searchIndex);
        let lineEnd = -1;
        if (crIndex !== -1 && lfIndex !== -1 ? lineEnd = Math.min(crIndex, lfIndex) : crIndex !== -1 ? crIndex === chunk.length - 1 ? lineEnd = -1 : lineEnd = crIndex : lfIndex !== -1 && (lineEnd = lfIndex), lineEnd === -1) {
            incompleteLine = chunk.slice(searchIndex);
            break;
        } else {
            const line = chunk.slice(searchIndex, lineEnd);
            lines.push(line), searchIndex = lineEnd + 1, chunk[searchIndex - 1] === "\r" && chunk[searchIndex] === `
` && searchIndex++;
        }
    }
    return [
        lines,
        incompleteLine
    ];
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/eventsource-parser/dist/stream.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventSourceParserStream",
    ()=>EventSourceParserStream
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/eventsource-parser/dist/index.js [app-client] (ecmascript)");
;
;
class EventSourceParserStream extends TransformStream {
    constructor({ onError, onRetry, onComment } = {}){
        let parser;
        super({
            start (controller) {
                parser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createParser"])({
                    onEvent: (event)=>{
                        controller.enqueue(event);
                    },
                    onError (error) {
                        onError === "terminate" ? controller.error(error) : typeof onError == "function" && onError(error);
                    },
                    onRetry,
                    onComment
                });
            },
            transform (chunk) {
                parser.feed(chunk);
            }
        });
    }
}
;
 //# sourceMappingURL=stream.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// src/combine-headers.ts
__turbopack_context__.s([
    "VERSION",
    ()=>VERSION,
    "asSchema",
    ()=>asSchema,
    "asValidator",
    ()=>asValidator,
    "combineHeaders",
    ()=>combineHeaders,
    "convertAsyncIteratorToReadableStream",
    ()=>convertAsyncIteratorToReadableStream,
    "convertBase64ToUint8Array",
    ()=>convertBase64ToUint8Array,
    "convertToBase64",
    ()=>convertToBase64,
    "convertUint8ArrayToBase64",
    ()=>convertUint8ArrayToBase64,
    "createBinaryResponseHandler",
    ()=>createBinaryResponseHandler,
    "createEventSourceResponseHandler",
    ()=>createEventSourceResponseHandler,
    "createIdGenerator",
    ()=>createIdGenerator,
    "createJsonErrorResponseHandler",
    ()=>createJsonErrorResponseHandler,
    "createJsonResponseHandler",
    ()=>createJsonResponseHandler,
    "createJsonStreamResponseHandler",
    ()=>createJsonStreamResponseHandler,
    "createProviderDefinedToolFactory",
    ()=>createProviderDefinedToolFactory,
    "createProviderDefinedToolFactoryWithOutputSchema",
    ()=>createProviderDefinedToolFactoryWithOutputSchema,
    "createStatusCodeErrorResponseHandler",
    ()=>createStatusCodeErrorResponseHandler,
    "delay",
    ()=>delay,
    "dynamicTool",
    ()=>dynamicTool,
    "executeTool",
    ()=>executeTool,
    "extractResponseHeaders",
    ()=>extractResponseHeaders,
    "generateId",
    ()=>generateId,
    "getErrorMessage",
    ()=>getErrorMessage,
    "getFromApi",
    ()=>getFromApi,
    "getRuntimeEnvironmentUserAgent",
    ()=>getRuntimeEnvironmentUserAgent,
    "injectJsonInstructionIntoMessages",
    ()=>injectJsonInstructionIntoMessages,
    "isAbortError",
    ()=>isAbortError,
    "isParsableJson",
    ()=>isParsableJson,
    "isUrlSupported",
    ()=>isUrlSupported,
    "isValidator",
    ()=>isValidator,
    "jsonSchema",
    ()=>jsonSchema,
    "lazySchema",
    ()=>lazySchema,
    "lazyValidator",
    ()=>lazyValidator,
    "loadApiKey",
    ()=>loadApiKey,
    "loadOptionalSetting",
    ()=>loadOptionalSetting,
    "loadSetting",
    ()=>loadSetting,
    "mediaTypeToExtension",
    ()=>mediaTypeToExtension,
    "normalizeHeaders",
    ()=>normalizeHeaders,
    "parseJSON",
    ()=>parseJSON,
    "parseJsonEventStream",
    ()=>parseJsonEventStream,
    "parseProviderOptions",
    ()=>parseProviderOptions,
    "postFormDataToApi",
    ()=>postFormDataToApi,
    "postJsonToApi",
    ()=>postJsonToApi,
    "postToApi",
    ()=>postToApi,
    "removeUndefinedEntries",
    ()=>removeUndefinedEntries,
    "resolve",
    ()=>resolve,
    "safeParseJSON",
    ()=>safeParseJSON,
    "safeValidateTypes",
    ()=>safeValidateTypes,
    "standardSchemaValidator",
    ()=>standardSchemaValidator,
    "tool",
    ()=>tool,
    "validateTypes",
    ()=>validateTypes,
    "validator",
    ()=>validator,
    "withUserAgentSuffix",
    ()=>withUserAgentSuffix,
    "withoutTrailingSlash",
    ()=>withoutTrailingSlash,
    "zodSchema",
    ()=>zodSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/generate-id.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@ai-sdk/provider/dist/index.mjs [app-client] (ecmascript)");
// src/parse-json-event-stream.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/eventsource-parser/dist/stream.js [app-client] (ecmascript) <locals>");
// src/zod-schema.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/zod/v4/classic/parse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/zod/v4/core/to-json-schema.js [app-client] (ecmascript)");
// src/zod-to-json-schema/select-parser.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/zod/v3/types.js [app-client] (ecmascript)");
function combineHeaders(...headers) {
    return headers.reduce((combinedHeaders, currentHeaders)=>({
            ...combinedHeaders,
            ...currentHeaders != null ? currentHeaders : {}
        }), {});
}
// src/convert-async-iterator-to-readable-stream.ts
function convertAsyncIteratorToReadableStream(iterator) {
    let cancelled = false;
    return new ReadableStream({
        /**
     * Called when the consumer wants to pull more data from the stream.
     *
     * @param {ReadableStreamDefaultController<T>} controller - The controller to enqueue data into the stream.
     * @returns {Promise<void>}
     */ async pull (controller) {
            if (cancelled) return;
            try {
                const { value, done } = await iterator.next();
                if (done) {
                    controller.close();
                } else {
                    controller.enqueue(value);
                }
            } catch (error) {
                controller.error(error);
            }
        },
        /**
     * Called when the consumer cancels the stream.
     */ async cancel (reason) {
            cancelled = true;
            if (iterator.return) {
                try {
                    await iterator.return(reason);
                } catch (e) {}
            }
        }
    });
}
// src/delay.ts
async function delay(delayInMs, options) {
    if (delayInMs == null) {
        return Promise.resolve();
    }
    const signal = options == null ? void 0 : options.abortSignal;
    return new Promise((resolve2, reject)=>{
        if (signal == null ? void 0 : signal.aborted) {
            reject(createAbortError());
            return;
        }
        const timeoutId = setTimeout(()=>{
            cleanup();
            resolve2();
        }, delayInMs);
        const cleanup = ()=>{
            clearTimeout(timeoutId);
            signal == null ? void 0 : signal.removeEventListener("abort", onAbort);
        };
        const onAbort = ()=>{
            cleanup();
            reject(createAbortError());
        };
        signal == null ? void 0 : signal.addEventListener("abort", onAbort);
    });
}
function createAbortError() {
    return new DOMException("Delay was aborted", "AbortError");
}
// src/extract-response-headers.ts
function extractResponseHeaders(response) {
    return Object.fromEntries([
        ...response.headers
    ]);
}
;
var createIdGenerator = ({ prefix, size = 16, alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", separator = "-" } = {})=>{
    const generator = ()=>{
        const alphabetLength = alphabet.length;
        const chars = new Array(size);
        for(let i = 0; i < size; i++){
            chars[i] = alphabet[Math.random() * alphabetLength | 0];
        }
        return chars.join("");
    };
    if (prefix == null) {
        return generator;
    }
    if (alphabet.includes(separator)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
            argument: "separator",
            message: `The separator "${separator}" must not be part of the alphabet "${alphabet}".`
        });
    }
    return ()=>`${prefix}${separator}${generator()}`;
};
var generateId = createIdGenerator();
// src/get-error-message.ts
function getErrorMessage(error) {
    if (error == null) {
        return "unknown error";
    }
    if (typeof error === "string") {
        return error;
    }
    if (error instanceof Error) {
        return error.message;
    }
    return JSON.stringify(error);
}
;
;
// src/is-abort-error.ts
function isAbortError(error) {
    return (error instanceof Error || error instanceof DOMException) && (error.name === "AbortError" || error.name === "ResponseAborted" || // Next.js
    error.name === "TimeoutError");
}
// src/handle-fetch-error.ts
var FETCH_FAILED_ERROR_MESSAGES = [
    "fetch failed",
    "failed to fetch"
];
function handleFetchError({ error, url, requestBodyValues }) {
    if (isAbortError(error)) {
        return error;
    }
    if (error instanceof TypeError && FETCH_FAILED_ERROR_MESSAGES.includes(error.message.toLowerCase())) {
        const cause = error.cause;
        if (cause != null) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
                message: `Cannot connect to API: ${cause.message}`,
                cause,
                url,
                requestBodyValues,
                isRetryable: true
            });
        }
    }
    return error;
}
// src/get-runtime-environment-user-agent.ts
function getRuntimeEnvironmentUserAgent(globalThisAny = globalThis) {
    var _a, _b, _c;
    if (globalThisAny.window) {
        return `runtime/browser`;
    }
    if ((_a = globalThisAny.navigator) == null ? void 0 : _a.userAgent) {
        return `runtime/${globalThisAny.navigator.userAgent.toLowerCase()}`;
    }
    if ((_c = (_b = globalThisAny.process) == null ? void 0 : _b.versions) == null ? void 0 : _c.node) {
        return `runtime/node.js/${globalThisAny.process.version.substring(0)}`;
    }
    if (globalThisAny.EdgeRuntime) {
        return `runtime/vercel-edge`;
    }
    return "runtime/unknown";
}
// src/normalize-headers.ts
function normalizeHeaders(headers) {
    if (headers == null) {
        return {};
    }
    const normalized = {};
    if (headers instanceof Headers) {
        headers.forEach((value, key)=>{
            normalized[key.toLowerCase()] = value;
        });
    } else {
        if (!Array.isArray(headers)) {
            headers = Object.entries(headers);
        }
        for (const [key, value] of headers){
            if (value != null) {
                normalized[key.toLowerCase()] = value;
            }
        }
    }
    return normalized;
}
// src/with-user-agent-suffix.ts
function withUserAgentSuffix(headers, ...userAgentSuffixParts) {
    const normalizedHeaders = new Headers(normalizeHeaders(headers));
    const currentUserAgentHeader = normalizedHeaders.get("user-agent") || "";
    normalizedHeaders.set("user-agent", [
        currentUserAgentHeader,
        ...userAgentSuffixParts
    ].filter(Boolean).join(" "));
    return Object.fromEntries(normalizedHeaders.entries());
}
// src/version.ts
var VERSION = ("TURBOPACK compile-time truthy", 1) ? "3.0.17" : "TURBOPACK unreachable";
// src/get-from-api.ts
var getOriginalFetch = ()=>globalThis.fetch;
var getFromApi = async ({ url, headers = {}, successfulResponseHandler, failedResponseHandler, abortSignal, fetch = getOriginalFetch() })=>{
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: withUserAgentSuffix(headers, `ai-sdk/provider-utils/${VERSION}`, getRuntimeEnvironmentUserAgent()),
            signal: abortSignal
        });
        const responseHeaders = extractResponseHeaders(response);
        if (!response.ok) {
            let errorInformation;
            try {
                errorInformation = await failedResponseHandler({
                    response,
                    url,
                    requestBodyValues: {}
                });
            } catch (error) {
                if (isAbortError(error) || __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"].isInstance(error)) {
                    throw error;
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: "Failed to process error response",
                    cause: error,
                    statusCode: response.status,
                    url,
                    responseHeaders,
                    requestBodyValues: {}
                });
            }
            throw errorInformation.value;
        }
        try {
            return await successfulResponseHandler({
                response,
                url,
                requestBodyValues: {}
            });
        } catch (error) {
            if (error instanceof Error) {
                if (isAbortError(error) || __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"].isInstance(error)) {
                    throw error;
                }
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
                message: "Failed to process successful response",
                cause: error,
                statusCode: response.status,
                url,
                responseHeaders,
                requestBodyValues: {}
            });
        }
    } catch (error) {
        throw handleFetchError({
            error,
            url,
            requestBodyValues: {}
        });
    }
};
// src/inject-json-instruction.ts
var DEFAULT_SCHEMA_PREFIX = "JSON schema:";
var DEFAULT_SCHEMA_SUFFIX = "You MUST answer with a JSON object that matches the JSON schema above.";
var DEFAULT_GENERIC_SUFFIX = "You MUST answer with JSON.";
function injectJsonInstruction({ prompt, schema, schemaPrefix = schema != null ? DEFAULT_SCHEMA_PREFIX : void 0, schemaSuffix = schema != null ? DEFAULT_SCHEMA_SUFFIX : DEFAULT_GENERIC_SUFFIX }) {
    return [
        prompt != null && prompt.length > 0 ? prompt : void 0,
        prompt != null && prompt.length > 0 ? "" : void 0,
        // add a newline if prompt is not null
        schemaPrefix,
        schema != null ? JSON.stringify(schema) : void 0,
        schemaSuffix
    ].filter((line)=>line != null).join("\n");
}
function injectJsonInstructionIntoMessages({ messages, schema, schemaPrefix, schemaSuffix }) {
    var _a, _b;
    const systemMessage = ((_a = messages[0]) == null ? void 0 : _a.role) === "system" ? {
        ...messages[0]
    } : {
        role: "system",
        content: ""
    };
    systemMessage.content = injectJsonInstruction({
        prompt: systemMessage.content,
        schema,
        schemaPrefix,
        schemaSuffix
    });
    return [
        systemMessage,
        ...((_b = messages[0]) == null ? void 0 : _b.role) === "system" ? messages.slice(1) : messages
    ];
}
// src/is-url-supported.ts
function isUrlSupported({ mediaType, url, supportedUrls }) {
    url = url.toLowerCase();
    mediaType = mediaType.toLowerCase();
    return Object.entries(supportedUrls).map(([key, value])=>{
        const mediaType2 = key.toLowerCase();
        return mediaType2 === "*" || mediaType2 === "*/*" ? {
            mediaTypePrefix: "",
            regexes: value
        } : {
            mediaTypePrefix: mediaType2.replace(/\*/, ""),
            regexes: value
        };
    }).filter(({ mediaTypePrefix })=>mediaType.startsWith(mediaTypePrefix)).flatMap(({ regexes })=>regexes).some((pattern)=>pattern.test(url));
}
;
function loadApiKey({ apiKey, environmentVariableName, apiKeyParameterName = "apiKey", description }) {
    if (typeof apiKey === "string") {
        return apiKey;
    }
    if (apiKey != null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
            message: `${description} API key must be a string.`
        });
    }
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === "undefined") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
            message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter. Environment variables is not supported in this environment.`
        });
    }
    apiKey = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[environmentVariableName];
    if (apiKey == null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
            message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter or the ${environmentVariableName} environment variable.`
        });
    }
    if (typeof apiKey !== "string") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
            message: `${description} API key must be a string. The value of the ${environmentVariableName} environment variable is not a string.`
        });
    }
    return apiKey;
}
// src/load-optional-setting.ts
function loadOptionalSetting({ settingValue, environmentVariableName }) {
    if (typeof settingValue === "string") {
        return settingValue;
    }
    if (settingValue != null || typeof __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === "undefined") {
        return void 0;
    }
    settingValue = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[environmentVariableName];
    if (settingValue == null || typeof settingValue !== "string") {
        return void 0;
    }
    return settingValue;
}
;
function loadSetting({ settingValue, environmentVariableName, settingName, description }) {
    if (typeof settingValue === "string") {
        return settingValue;
    }
    if (settingValue != null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadSettingError"]({
            message: `${description} setting must be a string.`
        });
    }
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === "undefined") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadSettingError"]({
            message: `${description} setting is missing. Pass it using the '${settingName}' parameter. Environment variables is not supported in this environment.`
        });
    }
    settingValue = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[environmentVariableName];
    if (settingValue == null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadSettingError"]({
            message: `${description} setting is missing. Pass it using the '${settingName}' parameter or the ${environmentVariableName} environment variable.`
        });
    }
    if (typeof settingValue !== "string") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadSettingError"]({
            message: `${description} setting must be a string. The value of the ${environmentVariableName} environment variable is not a string.`
        });
    }
    return settingValue;
}
// src/media-type-to-extension.ts
function mediaTypeToExtension(mediaType) {
    var _a;
    const [_type, subtype = ""] = mediaType.toLowerCase().split("/");
    return (_a = ({
        mpeg: "mp3",
        "x-wav": "wav",
        opus: "ogg",
        mp4: "m4a",
        "x-m4a": "m4a"
    })[subtype]) != null ? _a : subtype;
}
;
// src/secure-json-parse.ts
var suspectProtoRx = /"__proto__"\s*:/;
var suspectConstructorRx = /"constructor"\s*:/;
function _parse(text) {
    const obj = JSON.parse(text);
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    if (suspectProtoRx.test(text) === false && suspectConstructorRx.test(text) === false) {
        return obj;
    }
    return filter(obj);
}
function filter(obj) {
    let next = [
        obj
    ];
    while(next.length){
        const nodes = next;
        next = [];
        for (const node of nodes){
            if (Object.prototype.hasOwnProperty.call(node, "__proto__")) {
                throw new SyntaxError("Object contains forbidden prototype property");
            }
            if (Object.prototype.hasOwnProperty.call(node, "constructor") && Object.prototype.hasOwnProperty.call(node.constructor, "prototype")) {
                throw new SyntaxError("Object contains forbidden prototype property");
            }
            for(const key in node){
                const value = node[key];
                if (value && typeof value === "object") {
                    next.push(value);
                }
            }
        }
    }
    return obj;
}
function secureJsonParse(text) {
    const { stackTraceLimit } = Error;
    try {
        Error.stackTraceLimit = 0;
    } catch (e) {
        return _parse(text);
    }
    try {
        return _parse(text);
    } finally{
        Error.stackTraceLimit = stackTraceLimit;
    }
}
;
;
var validatorSymbol = Symbol.for("vercel.ai.validator");
function validator(validate) {
    return {
        [validatorSymbol]: true,
        validate
    };
}
function isValidator(value) {
    return typeof value === "object" && value !== null && validatorSymbol in value && value[validatorSymbol] === true && "validate" in value;
}
function lazyValidator(createValidator) {
    let validator2;
    return ()=>{
        if (validator2 == null) {
            validator2 = createValidator();
        }
        return validator2;
    };
}
function asValidator(value) {
    return isValidator(value) ? value : typeof value === "function" ? value() : standardSchemaValidator(value);
}
function standardSchemaValidator(standardSchema) {
    return validator(async (value)=>{
        const result = await standardSchema["~standard"].validate(value);
        return result.issues == null ? {
            success: true,
            value: result.value
        } : {
            success: false,
            error: new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeValidationError"]({
                value,
                cause: result.issues
            })
        };
    });
}
// src/validate-types.ts
async function validateTypes({ value, schema }) {
    const result = await safeValidateTypes({
        value,
        schema
    });
    if (!result.success) {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeValidationError"].wrap({
            value,
            cause: result.error
        });
    }
    return result.value;
}
async function safeValidateTypes({ value, schema }) {
    const validator2 = asValidator(schema);
    try {
        if (validator2.validate == null) {
            return {
                success: true,
                value,
                rawValue: value
            };
        }
        const result = await validator2.validate(value);
        if (result.success) {
            return {
                success: true,
                value: result.value,
                rawValue: value
            };
        }
        return {
            success: false,
            error: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeValidationError"].wrap({
                value,
                cause: result.error
            }),
            rawValue: value
        };
    } catch (error) {
        return {
            success: false,
            error: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeValidationError"].wrap({
                value,
                cause: error
            }),
            rawValue: value
        };
    }
}
// src/parse-json.ts
async function parseJSON({ text, schema }) {
    try {
        const value = secureJsonParse(text);
        if (schema == null) {
            return value;
        }
        return validateTypes({
            value,
            schema
        });
    } catch (error) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSONParseError"].isInstance(error) || __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeValidationError"].isInstance(error)) {
            throw error;
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSONParseError"]({
            text,
            cause: error
        });
    }
}
async function safeParseJSON({ text, schema }) {
    try {
        const value = secureJsonParse(text);
        if (schema == null) {
            return {
                success: true,
                value,
                rawValue: value
            };
        }
        return await safeValidateTypes({
            value,
            schema
        });
    } catch (error) {
        return {
            success: false,
            error: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSONParseError"].isInstance(error) ? error : new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSONParseError"]({
                text,
                cause: error
            }),
            rawValue: void 0
        };
    }
}
function isParsableJson(input) {
    try {
        secureJsonParse(input);
        return true;
    } catch (e) {
        return false;
    }
}
;
function parseJsonEventStream({ stream, schema }) {
    return stream.pipeThrough(new TextDecoderStream()).pipeThrough(new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EventSourceParserStream"]()).pipeThrough(new TransformStream({
        async transform ({ data }, controller) {
            if (data === "[DONE]") {
                return;
            }
            controller.enqueue(await safeParseJSON({
                text: data,
                schema
            }));
        }
    }));
}
;
async function parseProviderOptions({ provider, providerOptions, schema }) {
    if ((providerOptions == null ? void 0 : providerOptions[provider]) == null) {
        return void 0;
    }
    const parsedProviderOptions = await safeValidateTypes({
        value: providerOptions[provider],
        schema
    });
    if (!parsedProviderOptions.success) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
            argument: "providerOptions",
            message: `invalid ${provider} provider options`,
            cause: parsedProviderOptions.error
        });
    }
    return parsedProviderOptions.value;
}
;
var getOriginalFetch2 = ()=>globalThis.fetch;
var postJsonToApi = async ({ url, headers, body, failedResponseHandler, successfulResponseHandler, abortSignal, fetch })=>postToApi({
        url,
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: {
            content: JSON.stringify(body),
            values: body
        },
        failedResponseHandler,
        successfulResponseHandler,
        abortSignal,
        fetch
    });
var postFormDataToApi = async ({ url, headers, formData, failedResponseHandler, successfulResponseHandler, abortSignal, fetch })=>postToApi({
        url,
        headers,
        body: {
            content: formData,
            values: Object.fromEntries(formData.entries())
        },
        failedResponseHandler,
        successfulResponseHandler,
        abortSignal,
        fetch
    });
var postToApi = async ({ url, headers = {}, body, successfulResponseHandler, failedResponseHandler, abortSignal, fetch = getOriginalFetch2() })=>{
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: withUserAgentSuffix(headers, `ai-sdk/provider-utils/${VERSION}`, getRuntimeEnvironmentUserAgent()),
            body: body.content,
            signal: abortSignal
        });
        const responseHeaders = extractResponseHeaders(response);
        if (!response.ok) {
            let errorInformation;
            try {
                errorInformation = await failedResponseHandler({
                    response,
                    url,
                    requestBodyValues: body.values
                });
            } catch (error) {
                if (isAbortError(error) || __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"].isInstance(error)) {
                    throw error;
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: "Failed to process error response",
                    cause: error,
                    statusCode: response.status,
                    url,
                    responseHeaders,
                    requestBodyValues: body.values
                });
            }
            throw errorInformation.value;
        }
        try {
            return await successfulResponseHandler({
                response,
                url,
                requestBodyValues: body.values
            });
        } catch (error) {
            if (error instanceof Error) {
                if (isAbortError(error) || __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"].isInstance(error)) {
                    throw error;
                }
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
                message: "Failed to process successful response",
                cause: error,
                statusCode: response.status,
                url,
                responseHeaders,
                requestBodyValues: body.values
            });
        }
    } catch (error) {
        throw handleFetchError({
            error,
            url,
            requestBodyValues: body.values
        });
    }
};
// src/types/tool.ts
function tool(tool2) {
    return tool2;
}
function dynamicTool(tool2) {
    return {
        ...tool2,
        type: "dynamic"
    };
}
// src/provider-defined-tool-factory.ts
function createProviderDefinedToolFactory({ id, name, inputSchema }) {
    return ({ execute, outputSchema, toModelOutput, onInputStart, onInputDelta, onInputAvailable, ...args })=>tool({
            type: "provider-defined",
            id,
            name,
            args,
            inputSchema,
            outputSchema,
            execute,
            toModelOutput,
            onInputStart,
            onInputDelta,
            onInputAvailable
        });
}
function createProviderDefinedToolFactoryWithOutputSchema({ id, name, inputSchema, outputSchema }) {
    return ({ execute, toModelOutput, onInputStart, onInputDelta, onInputAvailable, ...args })=>tool({
            type: "provider-defined",
            id,
            name,
            args,
            inputSchema,
            outputSchema,
            execute,
            toModelOutput,
            onInputStart,
            onInputDelta,
            onInputAvailable
        });
}
// src/remove-undefined-entries.ts
function removeUndefinedEntries(record) {
    return Object.fromEntries(Object.entries(record).filter(([_key, value])=>value != null));
}
// src/resolve.ts
async function resolve(value) {
    if (typeof value === "function") {
        value = value();
    }
    return Promise.resolve(value);
}
;
var createJsonErrorResponseHandler = ({ errorSchema, errorToMessage, isRetryable })=>async ({ response, url, requestBodyValues })=>{
        const responseBody = await response.text();
        const responseHeaders = extractResponseHeaders(response);
        if (responseBody.trim() === "") {
            return {
                responseHeaders,
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: response.statusText,
                    url,
                    requestBodyValues,
                    statusCode: response.status,
                    responseHeaders,
                    responseBody,
                    isRetryable: isRetryable == null ? void 0 : isRetryable(response)
                })
            };
        }
        try {
            const parsedError = await parseJSON({
                text: responseBody,
                schema: errorSchema
            });
            return {
                responseHeaders,
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: errorToMessage(parsedError),
                    url,
                    requestBodyValues,
                    statusCode: response.status,
                    responseHeaders,
                    responseBody,
                    data: parsedError,
                    isRetryable: isRetryable == null ? void 0 : isRetryable(response, parsedError)
                })
            };
        } catch (parseError) {
            return {
                responseHeaders,
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: response.statusText,
                    url,
                    requestBodyValues,
                    statusCode: response.status,
                    responseHeaders,
                    responseBody,
                    isRetryable: isRetryable == null ? void 0 : isRetryable(response)
                })
            };
        }
    };
var createEventSourceResponseHandler = (chunkSchema)=>async ({ response })=>{
        const responseHeaders = extractResponseHeaders(response);
        if (response.body == null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyResponseBodyError"]({});
        }
        return {
            responseHeaders,
            value: parseJsonEventStream({
                stream: response.body,
                schema: chunkSchema
            })
        };
    };
var createJsonStreamResponseHandler = (chunkSchema)=>async ({ response })=>{
        const responseHeaders = extractResponseHeaders(response);
        if (response.body == null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyResponseBodyError"]({});
        }
        let buffer = "";
        return {
            responseHeaders,
            value: response.body.pipeThrough(new TextDecoderStream()).pipeThrough(new TransformStream({
                async transform (chunkText, controller) {
                    if (chunkText.endsWith("\n")) {
                        controller.enqueue(await safeParseJSON({
                            text: buffer + chunkText,
                            schema: chunkSchema
                        }));
                        buffer = "";
                    } else {
                        buffer += chunkText;
                    }
                }
            }))
        };
    };
var createJsonResponseHandler = (responseSchema)=>async ({ response, url, requestBodyValues })=>{
        const responseBody = await response.text();
        const parsedResult = await safeParseJSON({
            text: responseBody,
            schema: responseSchema
        });
        const responseHeaders = extractResponseHeaders(response);
        if (!parsedResult.success) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
                message: "Invalid JSON response",
                cause: parsedResult.error,
                statusCode: response.status,
                responseHeaders,
                responseBody,
                url,
                requestBodyValues
            });
        }
        return {
            responseHeaders,
            value: parsedResult.value,
            rawValue: parsedResult.rawValue
        };
    };
var createBinaryResponseHandler = ()=>async ({ response, url, requestBodyValues })=>{
        const responseHeaders = extractResponseHeaders(response);
        if (!response.body) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
                message: "Response body is empty",
                url,
                requestBodyValues,
                statusCode: response.status,
                responseHeaders,
                responseBody: void 0
            });
        }
        try {
            const buffer = await response.arrayBuffer();
            return {
                responseHeaders,
                value: new Uint8Array(buffer)
            };
        } catch (error) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
                message: "Failed to read response as array buffer",
                url,
                requestBodyValues,
                statusCode: response.status,
                responseHeaders,
                responseBody: void 0,
                cause: error
            });
        }
    };
var createStatusCodeErrorResponseHandler = ()=>async ({ response, url, requestBodyValues })=>{
        const responseHeaders = extractResponseHeaders(response);
        const responseBody = await response.text();
        return {
            responseHeaders,
            value: new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
                message: response.statusText,
                url,
                requestBodyValues,
                statusCode: response.status,
                responseHeaders,
                responseBody
            })
        };
    };
;
// src/zod-to-json-schema/get-relative-path.ts
var getRelativePath = (pathA, pathB)=>{
    let i = 0;
    for(; i < pathA.length && i < pathB.length; i++){
        if (pathA[i] !== pathB[i]) break;
    }
    return [
        (pathA.length - i).toString(),
        ...pathB.slice(i)
    ].join("/");
};
// src/zod-to-json-schema/options.ts
var ignoreOverride = Symbol("Let zodToJsonSchema decide on which parser to use");
var defaultOptions = {
    name: void 0,
    $refStrategy: "root",
    basePath: [
        "#"
    ],
    effectStrategy: "input",
    pipeStrategy: "all",
    dateStrategy: "format:date-time",
    mapStrategy: "entries",
    removeAdditionalStrategy: "passthrough",
    allowedAdditionalProperties: true,
    rejectedAdditionalProperties: false,
    definitionPath: "definitions",
    strictUnions: false,
    definitions: {},
    errorMessages: false,
    patternStrategy: "escape",
    applyRegexFlags: false,
    emailStrategy: "format:email",
    base64Strategy: "contentEncoding:base64",
    nameStrategy: "ref"
};
var getDefaultOptions = (options)=>typeof options === "string" ? {
        ...defaultOptions,
        name: options
    } : {
        ...defaultOptions,
        ...options
    };
;
// src/zod-to-json-schema/parsers/any.ts
function parseAnyDef() {
    return {};
}
;
function parseArrayDef(def, refs) {
    var _a, _b, _c;
    const res = {
        type: "array"
    };
    if (((_a = def.type) == null ? void 0 : _a._def) && ((_c = (_b = def.type) == null ? void 0 : _b._def) == null ? void 0 : _c.typeName) !== __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodAny) {
        res.items = parseDef(def.type._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "items"
            ]
        });
    }
    if (def.minLength) {
        res.minItems = def.minLength.value;
    }
    if (def.maxLength) {
        res.maxItems = def.maxLength.value;
    }
    if (def.exactLength) {
        res.minItems = def.exactLength.value;
        res.maxItems = def.exactLength.value;
    }
    return res;
}
// src/zod-to-json-schema/parsers/bigint.ts
function parseBigintDef(def) {
    const res = {
        type: "integer",
        format: "int64"
    };
    if (!def.checks) return res;
    for (const check of def.checks){
        switch(check.kind){
            case "min":
                if (check.inclusive) {
                    res.minimum = check.value;
                } else {
                    res.exclusiveMinimum = check.value;
                }
                break;
            case "max":
                if (check.inclusive) {
                    res.maximum = check.value;
                } else {
                    res.exclusiveMaximum = check.value;
                }
                break;
            case "multipleOf":
                res.multipleOf = check.value;
                break;
        }
    }
    return res;
}
// src/zod-to-json-schema/parsers/boolean.ts
function parseBooleanDef() {
    return {
        type: "boolean"
    };
}
// src/zod-to-json-schema/parsers/branded.ts
function parseBrandedDef(_def, refs) {
    return parseDef(_def.type._def, refs);
}
// src/zod-to-json-schema/parsers/catch.ts
var parseCatchDef = (def, refs)=>{
    return parseDef(def.innerType._def, refs);
};
// src/zod-to-json-schema/parsers/date.ts
function parseDateDef(def, refs, overrideDateStrategy) {
    const strategy = overrideDateStrategy != null ? overrideDateStrategy : refs.dateStrategy;
    if (Array.isArray(strategy)) {
        return {
            anyOf: strategy.map((item, i)=>parseDateDef(def, refs, item))
        };
    }
    switch(strategy){
        case "string":
        case "format:date-time":
            return {
                type: "string",
                format: "date-time"
            };
        case "format:date":
            return {
                type: "string",
                format: "date"
            };
        case "integer":
            return integerDateParser(def);
    }
}
var integerDateParser = (def)=>{
    const res = {
        type: "integer",
        format: "unix-time"
    };
    for (const check of def.checks){
        switch(check.kind){
            case "min":
                res.minimum = check.value;
                break;
            case "max":
                res.maximum = check.value;
                break;
        }
    }
    return res;
};
// src/zod-to-json-schema/parsers/default.ts
function parseDefaultDef(_def, refs) {
    return {
        ...parseDef(_def.innerType._def, refs),
        default: _def.defaultValue()
    };
}
// src/zod-to-json-schema/parsers/effects.ts
function parseEffectsDef(_def, refs) {
    return refs.effectStrategy === "input" ? parseDef(_def.schema._def, refs) : parseAnyDef();
}
// src/zod-to-json-schema/parsers/enum.ts
function parseEnumDef(def) {
    return {
        type: "string",
        enum: Array.from(def.values)
    };
}
// src/zod-to-json-schema/parsers/intersection.ts
var isJsonSchema7AllOfType = (type)=>{
    if ("type" in type && type.type === "string") return false;
    return "allOf" in type;
};
function parseIntersectionDef(def, refs) {
    const allOf = [
        parseDef(def.left._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "allOf",
                "0"
            ]
        }),
        parseDef(def.right._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "allOf",
                "1"
            ]
        })
    ].filter((x)=>!!x);
    const mergedAllOf = [];
    allOf.forEach((schema)=>{
        if (isJsonSchema7AllOfType(schema)) {
            mergedAllOf.push(...schema.allOf);
        } else {
            let nestedSchema = schema;
            if ("additionalProperties" in schema && schema.additionalProperties === false) {
                const { additionalProperties, ...rest } = schema;
                nestedSchema = rest;
            }
            mergedAllOf.push(nestedSchema);
        }
    });
    return mergedAllOf.length ? {
        allOf: mergedAllOf
    } : void 0;
}
// src/zod-to-json-schema/parsers/literal.ts
function parseLiteralDef(def) {
    const parsedType = typeof def.value;
    if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") {
        return {
            type: Array.isArray(def.value) ? "array" : "object"
        };
    }
    return {
        type: parsedType === "bigint" ? "integer" : parsedType,
        const: def.value
    };
}
;
// src/zod-to-json-schema/parsers/string.ts
var emojiRegex = void 0;
var zodPatterns = {
    /**
   * `c` was changed to `[cC]` to replicate /i flag
   */ cuid: /^[cC][^\s-]{8,}$/,
    cuid2: /^[0-9a-z]+$/,
    ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
    /**
   * `a-z` was added to replicate /i flag
   */ email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
    /**
   * Constructed a valid Unicode RegExp
   *
   * Lazily instantiate since this type of regex isn't supported
   * in all envs (e.g. React Native).
   *
   * See:
   * https://github.com/colinhacks/zod/issues/2433
   * Fix in Zod:
   * https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
   */ emoji: ()=>{
        if (emojiRegex === void 0) {
            emojiRegex = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
        }
        return emojiRegex;
    },
    /**
   * Unused
   */ uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
    /**
   * Unused
   */ ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
    /**
   * Unused
   */ ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
    ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
    nanoid: /^[a-zA-Z0-9_-]{21}$/,
    jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef(def, refs) {
    const res = {
        type: "string"
    };
    if (def.checks) {
        for (const check of def.checks){
            switch(check.kind){
                case "min":
                    res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
                    break;
                case "max":
                    res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
                    break;
                case "email":
                    switch(refs.emailStrategy){
                        case "format:email":
                            addFormat(res, "email", check.message, refs);
                            break;
                        case "format:idn-email":
                            addFormat(res, "idn-email", check.message, refs);
                            break;
                        case "pattern:zod":
                            addPattern(res, zodPatterns.email, check.message, refs);
                            break;
                    }
                    break;
                case "url":
                    addFormat(res, "uri", check.message, refs);
                    break;
                case "uuid":
                    addFormat(res, "uuid", check.message, refs);
                    break;
                case "regex":
                    addPattern(res, check.regex, check.message, refs);
                    break;
                case "cuid":
                    addPattern(res, zodPatterns.cuid, check.message, refs);
                    break;
                case "cuid2":
                    addPattern(res, zodPatterns.cuid2, check.message, refs);
                    break;
                case "startsWith":
                    addPattern(res, RegExp(`^${escapeLiteralCheckValue(check.value, refs)}`), check.message, refs);
                    break;
                case "endsWith":
                    addPattern(res, RegExp(`${escapeLiteralCheckValue(check.value, refs)}$`), check.message, refs);
                    break;
                case "datetime":
                    addFormat(res, "date-time", check.message, refs);
                    break;
                case "date":
                    addFormat(res, "date", check.message, refs);
                    break;
                case "time":
                    addFormat(res, "time", check.message, refs);
                    break;
                case "duration":
                    addFormat(res, "duration", check.message, refs);
                    break;
                case "length":
                    res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
                    res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
                    break;
                case "includes":
                    {
                        addPattern(res, RegExp(escapeLiteralCheckValue(check.value, refs)), check.message, refs);
                        break;
                    }
                case "ip":
                    {
                        if (check.version !== "v6") {
                            addFormat(res, "ipv4", check.message, refs);
                        }
                        if (check.version !== "v4") {
                            addFormat(res, "ipv6", check.message, refs);
                        }
                        break;
                    }
                case "base64url":
                    addPattern(res, zodPatterns.base64url, check.message, refs);
                    break;
                case "jwt":
                    addPattern(res, zodPatterns.jwt, check.message, refs);
                    break;
                case "cidr":
                    {
                        if (check.version !== "v6") {
                            addPattern(res, zodPatterns.ipv4Cidr, check.message, refs);
                        }
                        if (check.version !== "v4") {
                            addPattern(res, zodPatterns.ipv6Cidr, check.message, refs);
                        }
                        break;
                    }
                case "emoji":
                    addPattern(res, zodPatterns.emoji(), check.message, refs);
                    break;
                case "ulid":
                    {
                        addPattern(res, zodPatterns.ulid, check.message, refs);
                        break;
                    }
                case "base64":
                    {
                        switch(refs.base64Strategy){
                            case "format:binary":
                                {
                                    addFormat(res, "binary", check.message, refs);
                                    break;
                                }
                            case "contentEncoding:base64":
                                {
                                    res.contentEncoding = "base64";
                                    break;
                                }
                            case "pattern:zod":
                                {
                                    addPattern(res, zodPatterns.base64, check.message, refs);
                                    break;
                                }
                        }
                        break;
                    }
                case "nanoid":
                    {
                        addPattern(res, zodPatterns.nanoid, check.message, refs);
                    }
                case "toLowerCase":
                case "toUpperCase":
                case "trim":
                    break;
                default:
                    /* @__PURE__ */ ((_)=>{})(check);
            }
        }
    }
    return res;
}
function escapeLiteralCheckValue(literal, refs) {
    return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal) : literal;
}
var ALPHA_NUMERIC = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function escapeNonAlphaNumeric(source) {
    let result = "";
    for(let i = 0; i < source.length; i++){
        if (!ALPHA_NUMERIC.has(source[i])) {
            result += "\\";
        }
        result += source[i];
    }
    return result;
}
function addFormat(schema, value, message, refs) {
    var _a;
    if (schema.format || ((_a = schema.anyOf) == null ? void 0 : _a.some((x)=>x.format))) {
        if (!schema.anyOf) {
            schema.anyOf = [];
        }
        if (schema.format) {
            schema.anyOf.push({
                format: schema.format
            });
            delete schema.format;
        }
        schema.anyOf.push({
            format: value,
            ...message && refs.errorMessages && {
                errorMessage: {
                    format: message
                }
            }
        });
    } else {
        schema.format = value;
    }
}
function addPattern(schema, regex, message, refs) {
    var _a;
    if (schema.pattern || ((_a = schema.allOf) == null ? void 0 : _a.some((x)=>x.pattern))) {
        if (!schema.allOf) {
            schema.allOf = [];
        }
        if (schema.pattern) {
            schema.allOf.push({
                pattern: schema.pattern
            });
            delete schema.pattern;
        }
        schema.allOf.push({
            pattern: stringifyRegExpWithFlags(regex, refs),
            ...message && refs.errorMessages && {
                errorMessage: {
                    pattern: message
                }
            }
        });
    } else {
        schema.pattern = stringifyRegExpWithFlags(regex, refs);
    }
}
function stringifyRegExpWithFlags(regex, refs) {
    var _a;
    if (!refs.applyRegexFlags || !regex.flags) {
        return regex.source;
    }
    const flags = {
        i: regex.flags.includes("i"),
        // Case-insensitive
        m: regex.flags.includes("m"),
        // `^` and `$` matches adjacent to newline characters
        s: regex.flags.includes("s")
    };
    const source = flags.i ? regex.source.toLowerCase() : regex.source;
    let pattern = "";
    let isEscaped = false;
    let inCharGroup = false;
    let inCharRange = false;
    for(let i = 0; i < source.length; i++){
        if (isEscaped) {
            pattern += source[i];
            isEscaped = false;
            continue;
        }
        if (flags.i) {
            if (inCharGroup) {
                if (source[i].match(/[a-z]/)) {
                    if (inCharRange) {
                        pattern += source[i];
                        pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
                        inCharRange = false;
                    } else if (source[i + 1] === "-" && ((_a = source[i + 2]) == null ? void 0 : _a.match(/[a-z]/))) {
                        pattern += source[i];
                        inCharRange = true;
                    } else {
                        pattern += `${source[i]}${source[i].toUpperCase()}`;
                    }
                    continue;
                }
            } else if (source[i].match(/[a-z]/)) {
                pattern += `[${source[i]}${source[i].toUpperCase()}]`;
                continue;
            }
        }
        if (flags.m) {
            if (source[i] === "^") {
                pattern += `(^|(?<=[\r
]))`;
                continue;
            } else if (source[i] === "$") {
                pattern += `($|(?=[\r
]))`;
                continue;
            }
        }
        if (flags.s && source[i] === ".") {
            pattern += inCharGroup ? `${source[i]}\r
` : `[${source[i]}\r
]`;
            continue;
        }
        pattern += source[i];
        if (source[i] === "\\") {
            isEscaped = true;
        } else if (inCharGroup && source[i] === "]") {
            inCharGroup = false;
        } else if (!inCharGroup && source[i] === "[") {
            inCharGroup = true;
        }
    }
    try {
        new RegExp(pattern);
    } catch (e) {
        console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
        return regex.source;
    }
    return pattern;
}
// src/zod-to-json-schema/parsers/record.ts
function parseRecordDef(def, refs) {
    var _a, _b, _c, _d, _e, _f;
    const schema = {
        type: "object",
        additionalProperties: (_a = parseDef(def.valueType._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "additionalProperties"
            ]
        })) != null ? _a : refs.allowedAdditionalProperties
    };
    if (((_b = def.keyType) == null ? void 0 : _b._def.typeName) === __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodString && ((_c = def.keyType._def.checks) == null ? void 0 : _c.length)) {
        const { type, ...keyType } = parseStringDef(def.keyType._def, refs);
        return {
            ...schema,
            propertyNames: keyType
        };
    } else if (((_d = def.keyType) == null ? void 0 : _d._def.typeName) === __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEnum) {
        return {
            ...schema,
            propertyNames: {
                enum: def.keyType._def.values
            }
        };
    } else if (((_e = def.keyType) == null ? void 0 : _e._def.typeName) === __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBranded && def.keyType._def.type._def.typeName === __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodString && ((_f = def.keyType._def.type._def.checks) == null ? void 0 : _f.length)) {
        const { type, ...keyType } = parseBrandedDef(def.keyType._def, refs);
        return {
            ...schema,
            propertyNames: keyType
        };
    }
    return schema;
}
// src/zod-to-json-schema/parsers/map.ts
function parseMapDef(def, refs) {
    if (refs.mapStrategy === "record") {
        return parseRecordDef(def, refs);
    }
    const keys = parseDef(def.keyType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items",
            "items",
            "0"
        ]
    }) || parseAnyDef();
    const values = parseDef(def.valueType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items",
            "items",
            "1"
        ]
    }) || parseAnyDef();
    return {
        type: "array",
        maxItems: 125,
        items: {
            type: "array",
            items: [
                keys,
                values
            ],
            minItems: 2,
            maxItems: 2
        }
    };
}
// src/zod-to-json-schema/parsers/native-enum.ts
function parseNativeEnumDef(def) {
    const object = def.values;
    const actualKeys = Object.keys(def.values).filter((key)=>{
        return typeof object[object[key]] !== "number";
    });
    const actualValues = actualKeys.map((key)=>object[key]);
    const parsedTypes = Array.from(new Set(actualValues.map((values)=>typeof values)));
    return {
        type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : [
            "string",
            "number"
        ],
        enum: actualValues
    };
}
// src/zod-to-json-schema/parsers/never.ts
function parseNeverDef() {
    return {
        not: parseAnyDef()
    };
}
// src/zod-to-json-schema/parsers/null.ts
function parseNullDef() {
    return {
        type: "null"
    };
}
// src/zod-to-json-schema/parsers/union.ts
var primitiveMappings = {
    ZodString: "string",
    ZodNumber: "number",
    ZodBigInt: "integer",
    ZodBoolean: "boolean",
    ZodNull: "null"
};
function parseUnionDef(def, refs) {
    const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
    if (options.every((x)=>x._def.typeName in primitiveMappings && (!x._def.checks || !x._def.checks.length))) {
        const types = options.reduce((types2, x)=>{
            const type = primitiveMappings[x._def.typeName];
            return type && !types2.includes(type) ? [
                ...types2,
                type
            ] : types2;
        }, []);
        return {
            type: types.length > 1 ? types : types[0]
        };
    } else if (options.every((x)=>x._def.typeName === "ZodLiteral" && !x.description)) {
        const types = options.reduce((acc, x)=>{
            const type = typeof x._def.value;
            switch(type){
                case "string":
                case "number":
                case "boolean":
                    return [
                        ...acc,
                        type
                    ];
                case "bigint":
                    return [
                        ...acc,
                        "integer"
                    ];
                case "object":
                    if (x._def.value === null) return [
                        ...acc,
                        "null"
                    ];
                case "symbol":
                case "undefined":
                case "function":
                default:
                    return acc;
            }
        }, []);
        if (types.length === options.length) {
            const uniqueTypes = types.filter((x, i, a)=>a.indexOf(x) === i);
            return {
                type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
                enum: options.reduce((acc, x)=>{
                    return acc.includes(x._def.value) ? acc : [
                        ...acc,
                        x._def.value
                    ];
                }, [])
            };
        }
    } else if (options.every((x)=>x._def.typeName === "ZodEnum")) {
        return {
            type: "string",
            enum: options.reduce((acc, x)=>[
                    ...acc,
                    ...x._def.values.filter((x2)=>!acc.includes(x2))
                ], [])
        };
    }
    return asAnyOf(def, refs);
}
var asAnyOf = (def, refs)=>{
    const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i)=>parseDef(x._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "anyOf",
                `${i}`
            ]
        })).filter((x)=>!!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0));
    return anyOf.length ? {
        anyOf
    } : void 0;
};
// src/zod-to-json-schema/parsers/nullable.ts
function parseNullableDef(def, refs) {
    if ([
        "ZodString",
        "ZodNumber",
        "ZodBigInt",
        "ZodBoolean",
        "ZodNull"
    ].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) {
        return {
            type: [
                primitiveMappings[def.innerType._def.typeName],
                "null"
            ]
        };
    }
    const base = parseDef(def.innerType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "anyOf",
            "0"
        ]
    });
    return base && {
        anyOf: [
            base,
            {
                type: "null"
            }
        ]
    };
}
// src/zod-to-json-schema/parsers/number.ts
function parseNumberDef(def) {
    const res = {
        type: "number"
    };
    if (!def.checks) return res;
    for (const check of def.checks){
        switch(check.kind){
            case "int":
                res.type = "integer";
                break;
            case "min":
                if (check.inclusive) {
                    res.minimum = check.value;
                } else {
                    res.exclusiveMinimum = check.value;
                }
                break;
            case "max":
                if (check.inclusive) {
                    res.maximum = check.value;
                } else {
                    res.exclusiveMaximum = check.value;
                }
                break;
            case "multipleOf":
                res.multipleOf = check.value;
                break;
        }
    }
    return res;
}
// src/zod-to-json-schema/parsers/object.ts
function parseObjectDef(def, refs) {
    const result = {
        type: "object",
        properties: {}
    };
    const required = [];
    const shape = def.shape();
    for(const propName in shape){
        let propDef = shape[propName];
        if (propDef === void 0 || propDef._def === void 0) {
            continue;
        }
        const propOptional = safeIsOptional(propDef);
        const parsedDef = parseDef(propDef._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "properties",
                propName
            ],
            propertyPath: [
                ...refs.currentPath,
                "properties",
                propName
            ]
        });
        if (parsedDef === void 0) {
            continue;
        }
        result.properties[propName] = parsedDef;
        if (!propOptional) {
            required.push(propName);
        }
    }
    if (required.length) {
        result.required = required;
    }
    const additionalProperties = decideAdditionalProperties(def, refs);
    if (additionalProperties !== void 0) {
        result.additionalProperties = additionalProperties;
    }
    return result;
}
function decideAdditionalProperties(def, refs) {
    if (def.catchall._def.typeName !== "ZodNever") {
        return parseDef(def.catchall._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "additionalProperties"
            ]
        });
    }
    switch(def.unknownKeys){
        case "passthrough":
            return refs.allowedAdditionalProperties;
        case "strict":
            return refs.rejectedAdditionalProperties;
        case "strip":
            return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
    }
}
function safeIsOptional(schema) {
    try {
        return schema.isOptional();
    } catch (e) {
        return true;
    }
}
// src/zod-to-json-schema/parsers/optional.ts
var parseOptionalDef = (def, refs)=>{
    var _a;
    if (refs.currentPath.toString() === ((_a = refs.propertyPath) == null ? void 0 : _a.toString())) {
        return parseDef(def.innerType._def, refs);
    }
    const innerSchema = parseDef(def.innerType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "anyOf",
            "1"
        ]
    });
    return innerSchema ? {
        anyOf: [
            {
                not: parseAnyDef()
            },
            innerSchema
        ]
    } : parseAnyDef();
};
// src/zod-to-json-schema/parsers/pipeline.ts
var parsePipelineDef = (def, refs)=>{
    if (refs.pipeStrategy === "input") {
        return parseDef(def.in._def, refs);
    } else if (refs.pipeStrategy === "output") {
        return parseDef(def.out._def, refs);
    }
    const a = parseDef(def.in._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "allOf",
            "0"
        ]
    });
    const b = parseDef(def.out._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "allOf",
            a ? "1" : "0"
        ]
    });
    return {
        allOf: [
            a,
            b
        ].filter((x)=>x !== void 0)
    };
};
// src/zod-to-json-schema/parsers/promise.ts
function parsePromiseDef(def, refs) {
    return parseDef(def.type._def, refs);
}
// src/zod-to-json-schema/parsers/set.ts
function parseSetDef(def, refs) {
    const items = parseDef(def.valueType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items"
        ]
    });
    const schema = {
        type: "array",
        uniqueItems: true,
        items
    };
    if (def.minSize) {
        schema.minItems = def.minSize.value;
    }
    if (def.maxSize) {
        schema.maxItems = def.maxSize.value;
    }
    return schema;
}
// src/zod-to-json-schema/parsers/tuple.ts
function parseTupleDef(def, refs) {
    if (def.rest) {
        return {
            type: "array",
            minItems: def.items.length,
            items: def.items.map((x, i)=>parseDef(x._def, {
                    ...refs,
                    currentPath: [
                        ...refs.currentPath,
                        "items",
                        `${i}`
                    ]
                })).reduce((acc, x)=>x === void 0 ? acc : [
                    ...acc,
                    x
                ], []),
            additionalItems: parseDef(def.rest._def, {
                ...refs,
                currentPath: [
                    ...refs.currentPath,
                    "additionalItems"
                ]
            })
        };
    } else {
        return {
            type: "array",
            minItems: def.items.length,
            maxItems: def.items.length,
            items: def.items.map((x, i)=>parseDef(x._def, {
                    ...refs,
                    currentPath: [
                        ...refs.currentPath,
                        "items",
                        `${i}`
                    ]
                })).reduce((acc, x)=>x === void 0 ? acc : [
                    ...acc,
                    x
                ], [])
        };
    }
}
// src/zod-to-json-schema/parsers/undefined.ts
function parseUndefinedDef() {
    return {
        not: parseAnyDef()
    };
}
// src/zod-to-json-schema/parsers/unknown.ts
function parseUnknownDef() {
    return parseAnyDef();
}
// src/zod-to-json-schema/parsers/readonly.ts
var parseReadonlyDef = (def, refs)=>{
    return parseDef(def.innerType._def, refs);
};
// src/zod-to-json-schema/select-parser.ts
var selectParser = (def, typeName, refs)=>{
    switch(typeName){
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodString:
            return parseStringDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNumber:
            return parseNumberDef(def);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodObject:
            return parseObjectDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBigInt:
            return parseBigintDef(def);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBoolean:
            return parseBooleanDef();
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodDate:
            return parseDateDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodUndefined:
            return parseUndefinedDef();
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNull:
            return parseNullDef();
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodArray:
            return parseArrayDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodUnion:
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodDiscriminatedUnion:
            return parseUnionDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodIntersection:
            return parseIntersectionDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodTuple:
            return parseTupleDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodRecord:
            return parseRecordDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodLiteral:
            return parseLiteralDef(def);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEnum:
            return parseEnumDef(def);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNativeEnum:
            return parseNativeEnumDef(def);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNullable:
            return parseNullableDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodOptional:
            return parseOptionalDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodMap:
            return parseMapDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodSet:
            return parseSetDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodLazy:
            return ()=>def.getter()._def;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodPromise:
            return parsePromiseDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNaN:
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNever:
            return parseNeverDef();
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEffects:
            return parseEffectsDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodAny:
            return parseAnyDef();
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodUnknown:
            return parseUnknownDef();
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodDefault:
            return parseDefaultDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBranded:
            return parseBrandedDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodReadonly:
            return parseReadonlyDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodCatch:
            return parseCatchDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodPipeline:
            return parsePipelineDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodFunction:
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodVoid:
        case __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodSymbol:
            return void 0;
        default:
            return /* @__PURE__ */ ((_)=>void 0)(typeName);
    }
};
// src/zod-to-json-schema/parse-def.ts
function parseDef(def, refs, forceResolution = false) {
    var _a;
    const seenItem = refs.seen.get(def);
    if (refs.override) {
        const overrideResult = (_a = refs.override) == null ? void 0 : _a.call(refs, def, refs, seenItem, forceResolution);
        if (overrideResult !== ignoreOverride) {
            return overrideResult;
        }
    }
    if (seenItem && !forceResolution) {
        const seenSchema = get$ref(seenItem, refs);
        if (seenSchema !== void 0) {
            return seenSchema;
        }
    }
    const newItem = {
        def,
        path: refs.currentPath,
        jsonSchema: void 0
    };
    refs.seen.set(def, newItem);
    const jsonSchemaOrGetter = selectParser(def, def.typeName, refs);
    const jsonSchema2 = typeof jsonSchemaOrGetter === "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
    if (jsonSchema2) {
        addMeta(def, refs, jsonSchema2);
    }
    if (refs.postProcess) {
        const postProcessResult = refs.postProcess(jsonSchema2, def, refs);
        newItem.jsonSchema = jsonSchema2;
        return postProcessResult;
    }
    newItem.jsonSchema = jsonSchema2;
    return jsonSchema2;
}
var get$ref = (item, refs)=>{
    switch(refs.$refStrategy){
        case "root":
            return {
                $ref: item.path.join("/")
            };
        case "relative":
            return {
                $ref: getRelativePath(refs.currentPath, item.path)
            };
        case "none":
        case "seen":
            {
                if (item.path.length < refs.currentPath.length && item.path.every((value, index)=>refs.currentPath[index] === value)) {
                    console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
                    return parseAnyDef();
                }
                return refs.$refStrategy === "seen" ? parseAnyDef() : void 0;
            }
    }
};
var addMeta = (def, refs, jsonSchema2)=>{
    if (def.description) {
        jsonSchema2.description = def.description;
    }
    return jsonSchema2;
};
// src/zod-to-json-schema/refs.ts
var getRefs = (options)=>{
    const _options = getDefaultOptions(options);
    const currentPath = _options.name !== void 0 ? [
        ..._options.basePath,
        _options.definitionPath,
        _options.name
    ] : _options.basePath;
    return {
        ..._options,
        currentPath,
        propertyPath: void 0,
        seen: new Map(Object.entries(_options.definitions).map(([name, def])=>[
                def._def,
                {
                    def: def._def,
                    path: [
                        ..._options.basePath,
                        _options.definitionPath,
                        name
                    ],
                    // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
                    jsonSchema: void 0
                }
            ]))
    };
};
// src/zod-to-json-schema/zod-to-json-schema.ts
var zodToJsonSchema = (schema, options)=>{
    var _a;
    const refs = getRefs(options);
    let definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name2, schema2])=>{
        var _a2;
        return {
            ...acc,
            [name2]: (_a2 = parseDef(schema2._def, {
                ...refs,
                currentPath: [
                    ...refs.basePath,
                    refs.definitionPath,
                    name2
                ]
            }, true)) != null ? _a2 : parseAnyDef()
        };
    }, {}) : void 0;
    const name = typeof options === "string" ? options : (options == null ? void 0 : options.nameStrategy) === "title" ? void 0 : options == null ? void 0 : options.name;
    const main = (_a = parseDef(schema._def, name === void 0 ? refs : {
        ...refs,
        currentPath: [
            ...refs.basePath,
            refs.definitionPath,
            name
        ]
    }, false)) != null ? _a : parseAnyDef();
    const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
    if (title !== void 0) {
        main.title = title;
    }
    const combined = name === void 0 ? definitions ? {
        ...main,
        [refs.definitionPath]: definitions
    } : main : {
        $ref: [
            ...refs.$refStrategy === "relative" ? [] : refs.basePath,
            refs.definitionPath,
            name
        ].join("/"),
        [refs.definitionPath]: {
            ...definitions,
            [name]: main
        }
    };
    combined.$schema = "http://json-schema.org/draft-07/schema#";
    return combined;
};
// src/zod-to-json-schema/index.ts
var zod_to_json_schema_default = zodToJsonSchema;
// src/zod-schema.ts
function zod3Schema(zodSchema2, options) {
    var _a;
    const useReferences = (_a = options == null ? void 0 : options.useReferences) != null ? _a : false;
    return jsonSchema(// defer json schema creation to avoid unnecessary computation when only validation is needed
    ()=>zod_to_json_schema_default(zodSchema2, {
            $refStrategy: useReferences ? "root" : "none"
        }), {
        validate: async (value)=>{
            const result = await zodSchema2.safeParseAsync(value);
            return result.success ? {
                success: true,
                value: result.data
            } : {
                success: false,
                error: result.error
            };
        }
    });
}
function zod4Schema(zodSchema2, options) {
    var _a;
    const useReferences = (_a = options == null ? void 0 : options.useReferences) != null ? _a : false;
    return jsonSchema(// defer json schema creation to avoid unnecessary computation when only validation is needed
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toJSONSchema"](zodSchema2, {
            target: "draft-7",
            io: "output",
            reused: useReferences ? "ref" : "inline"
        }), {
        validate: async (value)=>{
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParseAsync"](zodSchema2, value);
            return result.success ? {
                success: true,
                value: result.data
            } : {
                success: false,
                error: result.error
            };
        }
    });
}
function isZod4Schema(zodSchema2) {
    return "_zod" in zodSchema2;
}
function zodSchema(zodSchema2, options) {
    if (isZod4Schema(zodSchema2)) {
        return zod4Schema(zodSchema2, options);
    } else {
        return zod3Schema(zodSchema2, options);
    }
}
// src/schema.ts
var schemaSymbol = Symbol.for("vercel.ai.schema");
function lazySchema(createSchema) {
    let schema;
    return ()=>{
        if (schema == null) {
            schema = createSchema();
        }
        return schema;
    };
}
function jsonSchema(jsonSchema2, { validate } = {}) {
    return {
        [schemaSymbol]: true,
        _type: void 0,
        // should never be used directly
        [validatorSymbol]: true,
        get jsonSchema () {
            if (typeof jsonSchema2 === "function") {
                jsonSchema2 = jsonSchema2();
            }
            return jsonSchema2;
        },
        validate
    };
}
function isSchema(value) {
    return typeof value === "object" && value !== null && schemaSymbol in value && value[schemaSymbol] === true && "jsonSchema" in value && "validate" in value;
}
function asSchema(schema) {
    return schema == null ? jsonSchema({
        properties: {},
        additionalProperties: false
    }) : isSchema(schema) ? schema : typeof schema === "function" ? schema() : zodSchema(schema);
}
// src/uint8-utils.ts
var { btoa, atob } = globalThis;
function convertBase64ToUint8Array(base64String) {
    const base64Url = base64String.replace(/-/g, "+").replace(/_/g, "/");
    const latin1string = atob(base64Url);
    return Uint8Array.from(latin1string, (byte)=>byte.codePointAt(0));
}
function convertUint8ArrayToBase64(array) {
    let latin1string = "";
    for(let i = 0; i < array.length; i++){
        latin1string += String.fromCodePoint(array[i]);
    }
    return btoa(latin1string);
}
function convertToBase64(value) {
    return value instanceof Uint8Array ? convertUint8ArrayToBase64(value) : value;
}
// src/without-trailing-slash.ts
function withoutTrailingSlash(url) {
    return url == null ? void 0 : url.replace(/\/$/, "");
}
// src/is-async-iterable.ts
function isAsyncIterable(obj) {
    return obj != null && typeof obj[Symbol.asyncIterator] === "function";
}
// src/types/execute-tool.ts
async function* executeTool({ execute, input, options }) {
    const result = execute(input, options);
    if (isAsyncIterable(result)) {
        let lastOutput;
        for await (const output of result){
            lastOutput = output;
            yield {
                type: "preliminary",
                output
            };
        }
        yield {
            type: "final",
            output: lastOutput
        };
    } else {
        yield {
            type: "final",
            output: await result
        };
    }
}
;
;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@vercel/oidc/dist/get-context.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var get_context_exports = {};
__export(get_context_exports, {
    SYMBOL_FOR_REQ_CONTEXT: ()=>SYMBOL_FOR_REQ_CONTEXT,
    getContext: ()=>getContext
});
module.exports = __toCommonJS(get_context_exports);
const SYMBOL_FOR_REQ_CONTEXT = Symbol.for("@vercel/request-context");
function getContext() {
    const fromSymbol = globalThis;
    return fromSymbol[SYMBOL_FOR_REQ_CONTEXT]?.get?.() ?? {};
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    SYMBOL_FOR_REQ_CONTEXT,
    getContext
});
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@vercel/oidc/dist/index-browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var index_browser_exports = {};
__export(index_browser_exports, {
    getContext: ()=>import_get_context.getContext,
    getVercelOidcToken: ()=>getVercelOidcToken,
    getVercelOidcTokenSync: ()=>getVercelOidcTokenSync
});
module.exports = __toCommonJS(index_browser_exports);
var import_get_context = __turbopack_context__.r("[project]/Users/patie/Downloads/protonai/node_modules/@vercel/oidc/dist/get-context.js [app-client] (ecmascript)");
async function getVercelOidcToken() {
    return "";
}
function getVercelOidcTokenSync() {
    return "";
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    getContext,
    getVercelOidcToken,
    getVercelOidcTokenSync
});
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@ai-sdk/gateway/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/gateway-provider.ts
__turbopack_context__.s([
    "GatewayAuthenticationError",
    ()=>GatewayAuthenticationError,
    "GatewayError",
    ()=>GatewayError,
    "GatewayInternalServerError",
    ()=>GatewayInternalServerError,
    "GatewayInvalidRequestError",
    ()=>GatewayInvalidRequestError,
    "GatewayModelNotFoundError",
    ()=>GatewayModelNotFoundError,
    "GatewayRateLimitError",
    ()=>GatewayRateLimitError,
    "GatewayResponseError",
    ()=>GatewayResponseError,
    "createGateway",
    ()=>createGatewayProvider,
    "createGatewayProvider",
    ()=>createGatewayProvider,
    "gateway",
    ()=>gateway
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-client] (ecmascript) <locals>");
// src/errors/as-gateway-error.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@ai-sdk/provider/dist/index.mjs [app-client] (ecmascript)");
// src/errors/create-gateway-error.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
// src/vercel-environment.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$vercel$2f$oidc$2f$dist$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@vercel/oidc/dist/index-browser.js [app-client] (ecmascript)");
;
;
;
// src/errors/gateway-error.ts
var marker = "vercel.ai.gateway.error";
var symbol = Symbol.for(marker);
var _a, _b;
var GatewayError = class _GatewayError extends (_b = Error, _a = symbol, _b) {
    constructor({ message, statusCode = 500, cause }){
        super(message);
        this[_a] = true;
        this.statusCode = statusCode;
        this.cause = cause;
    }
    /**
   * Checks if the given error is a Gateway Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is a Gateway Error, false otherwise.
   */ static isInstance(error) {
        return _GatewayError.hasMarker(error);
    }
    static hasMarker(error) {
        return typeof error === "object" && error !== null && symbol in error && error[symbol] === true;
    }
};
// src/errors/gateway-authentication-error.ts
var name = "GatewayAuthenticationError";
var marker2 = `vercel.ai.gateway.error.${name}`;
var symbol2 = Symbol.for(marker2);
var _a2, _b2;
var GatewayAuthenticationError = class _GatewayAuthenticationError extends (_b2 = GatewayError, _a2 = symbol2, _b2) {
    constructor({ message = "Authentication failed", statusCode = 401, cause } = {}){
        super({
            message,
            statusCode,
            cause
        });
        this[_a2] = true;
        // used in isInstance
        this.name = name;
        this.type = "authentication_error";
    }
    static isInstance(error) {
        return GatewayError.hasMarker(error) && symbol2 in error;
    }
    /**
   * Creates a contextual error message when authentication fails
   */ static createContextualError({ apiKeyProvided, oidcTokenProvided, message = "Authentication failed", statusCode = 401, cause }) {
        let contextualMessage;
        if (apiKeyProvided) {
            contextualMessage = `AI Gateway authentication failed: Invalid API key.

Create a new API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys

Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.`;
        } else if (oidcTokenProvided) {
            contextualMessage = `AI Gateway authentication failed: Invalid OIDC token.

Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.

Alternatively, use an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys`;
        } else {
            contextualMessage = `AI Gateway authentication failed: No authentication provided.

Option 1 - API key:
Create an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys
Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.

Option 2 - OIDC token:
Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.`;
        }
        return new _GatewayAuthenticationError({
            message: contextualMessage,
            statusCode,
            cause
        });
    }
};
// src/errors/gateway-invalid-request-error.ts
var name2 = "GatewayInvalidRequestError";
var marker3 = `vercel.ai.gateway.error.${name2}`;
var symbol3 = Symbol.for(marker3);
var _a3, _b3;
var GatewayInvalidRequestError = class extends (_b3 = GatewayError, _a3 = symbol3, _b3) {
    constructor({ message = "Invalid request", statusCode = 400, cause } = {}){
        super({
            message,
            statusCode,
            cause
        });
        this[_a3] = true;
        // used in isInstance
        this.name = name2;
        this.type = "invalid_request_error";
    }
    static isInstance(error) {
        return GatewayError.hasMarker(error) && symbol3 in error;
    }
};
// src/errors/gateway-rate-limit-error.ts
var name3 = "GatewayRateLimitError";
var marker4 = `vercel.ai.gateway.error.${name3}`;
var symbol4 = Symbol.for(marker4);
var _a4, _b4;
var GatewayRateLimitError = class extends (_b4 = GatewayError, _a4 = symbol4, _b4) {
    constructor({ message = "Rate limit exceeded", statusCode = 429, cause } = {}){
        super({
            message,
            statusCode,
            cause
        });
        this[_a4] = true;
        // used in isInstance
        this.name = name3;
        this.type = "rate_limit_exceeded";
    }
    static isInstance(error) {
        return GatewayError.hasMarker(error) && symbol4 in error;
    }
};
;
;
var name4 = "GatewayModelNotFoundError";
var marker5 = `vercel.ai.gateway.error.${name4}`;
var symbol5 = Symbol.for(marker5);
var modelNotFoundParamSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazyValidator"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        modelId: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })));
var _a5, _b5;
var GatewayModelNotFoundError = class extends (_b5 = GatewayError, _a5 = symbol5, _b5) {
    constructor({ message = "Model not found", statusCode = 404, modelId, cause } = {}){
        super({
            message,
            statusCode,
            cause
        });
        this[_a5] = true;
        // used in isInstance
        this.name = name4;
        this.type = "model_not_found";
        this.modelId = modelId;
    }
    static isInstance(error) {
        return GatewayError.hasMarker(error) && symbol5 in error;
    }
};
// src/errors/gateway-internal-server-error.ts
var name5 = "GatewayInternalServerError";
var marker6 = `vercel.ai.gateway.error.${name5}`;
var symbol6 = Symbol.for(marker6);
var _a6, _b6;
var GatewayInternalServerError = class extends (_b6 = GatewayError, _a6 = symbol6, _b6) {
    constructor({ message = "Internal server error", statusCode = 500, cause } = {}){
        super({
            message,
            statusCode,
            cause
        });
        this[_a6] = true;
        // used in isInstance
        this.name = name5;
        this.type = "internal_server_error";
    }
    static isInstance(error) {
        return GatewayError.hasMarker(error) && symbol6 in error;
    }
};
// src/errors/gateway-response-error.ts
var name6 = "GatewayResponseError";
var marker7 = `vercel.ai.gateway.error.${name6}`;
var symbol7 = Symbol.for(marker7);
var _a7, _b7;
var GatewayResponseError = class extends (_b7 = GatewayError, _a7 = symbol7, _b7) {
    constructor({ message = "Invalid response from Gateway", statusCode = 502, response, validationError, cause } = {}){
        super({
            message,
            statusCode,
            cause
        });
        this[_a7] = true;
        // used in isInstance
        this.name = name6;
        this.type = "response_error";
        this.response = response;
        this.validationError = validationError;
    }
    static isInstance(error) {
        return GatewayError.hasMarker(error) && symbol7 in error;
    }
};
;
async function createGatewayErrorFromResponse({ response, statusCode, defaultMessage = "Gateway request failed", cause, authMethod }) {
    const parseResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["safeValidateTypes"])({
        value: response,
        schema: gatewayErrorResponseSchema
    });
    if (!parseResult.success) {
        return new GatewayResponseError({
            message: `Invalid error response format: ${defaultMessage}`,
            statusCode,
            response,
            validationError: parseResult.error,
            cause
        });
    }
    const validatedResponse = parseResult.value;
    const errorType = validatedResponse.error.type;
    const message = validatedResponse.error.message;
    switch(errorType){
        case "authentication_error":
            return GatewayAuthenticationError.createContextualError({
                apiKeyProvided: authMethod === "api-key",
                oidcTokenProvided: authMethod === "oidc",
                statusCode,
                cause
            });
        case "invalid_request_error":
            return new GatewayInvalidRequestError({
                message,
                statusCode,
                cause
            });
        case "rate_limit_exceeded":
            return new GatewayRateLimitError({
                message,
                statusCode,
                cause
            });
        case "model_not_found":
            {
                const modelResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["safeValidateTypes"])({
                    value: validatedResponse.error.param,
                    schema: modelNotFoundParamSchema
                });
                return new GatewayModelNotFoundError({
                    message,
                    statusCode,
                    modelId: modelResult.success ? modelResult.value.modelId : void 0,
                    cause
                });
            }
        case "internal_server_error":
            return new GatewayInternalServerError({
                message,
                statusCode,
                cause
            });
        default:
            return new GatewayInternalServerError({
                message,
                statusCode,
                cause
            });
    }
}
var gatewayErrorResponseSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazyValidator"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        error: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
            param: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown().nullish(),
            code: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
            ]).nullish()
        })
    })));
// src/errors/as-gateway-error.ts
function asGatewayError(error, authMethod) {
    var _a8;
    if (GatewayError.isInstance(error)) {
        return error;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"].isInstance(error)) {
        return createGatewayErrorFromResponse({
            response: extractApiCallResponse(error),
            statusCode: (_a8 = error.statusCode) != null ? _a8 : 500,
            defaultMessage: "Gateway request failed",
            cause: error,
            authMethod
        });
    }
    return createGatewayErrorFromResponse({
        response: {},
        statusCode: 500,
        defaultMessage: error instanceof Error ? `Gateway request failed: ${error.message}` : "Unknown Gateway error",
        cause: error,
        authMethod
    });
}
// src/errors/extract-api-call-response.ts
function extractApiCallResponse(error) {
    if (error.data !== void 0) {
        return error.data;
    }
    if (error.responseBody != null) {
        try {
            return JSON.parse(error.responseBody);
        } catch (e) {
            return error.responseBody;
        }
    }
    return {};
}
;
;
var GATEWAY_AUTH_METHOD_HEADER = "ai-gateway-auth-method";
async function parseAuthMethod(headers) {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["safeValidateTypes"])({
        value: headers[GATEWAY_AUTH_METHOD_HEADER],
        schema: gatewayAuthMethodSchema
    });
    return result.success ? result.value : void 0;
}
var gatewayAuthMethodSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazyValidator"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("api-key"),
        __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("oidc")
    ])));
;
;
var GatewayFetchMetadata = class {
    constructor(config){
        this.config = config;
    }
    async getAvailableModels() {
        try {
            const { value } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFromApi"])({
                url: `${this.config.baseURL}/config`,
                headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers()),
                successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(gatewayAvailableModelsResponseSchema),
                failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
                    errorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
                    errorToMessage: (data)=>data
                }),
                fetch: this.config.fetch
            });
            return value;
        } catch (error) {
            throw await asGatewayError(error);
        }
    }
    async getCredits() {
        try {
            const baseUrl = new URL(this.config.baseURL);
            const { value } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFromApi"])({
                url: `${baseUrl.origin}/v1/credits`,
                headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers()),
                successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(gatewayCreditsResponseSchema),
                failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
                    errorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
                    errorToMessage: (data)=>data
                }),
                fetch: this.config.fetch
            });
            return value;
        } catch (error) {
            throw await asGatewayError(error);
        }
    }
};
var gatewayAvailableModelsResponseSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazyValidator"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        models: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            name: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            description: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
            pricing: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                input: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                output: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                input_cache_read: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
                input_cache_write: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish()
            }).transform(({ input, output, input_cache_read, input_cache_write })=>({
                    input,
                    output,
                    ...input_cache_read ? {
                        cachedInputTokens: input_cache_read
                    } : {},
                    ...input_cache_write ? {
                        cacheCreationInputTokens: input_cache_write
                    } : {}
                })).nullish(),
            specification: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                specificationVersion: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("v2"),
                provider: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                modelId: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
            }),
            modelType: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                "language",
                "embedding",
                "image"
            ]).nullish()
        }))
    })));
var gatewayCreditsResponseSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazyValidator"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        balance: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        total_used: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    }).transform(({ balance, total_used })=>({
            balance,
            totalUsed: total_used
        }))));
;
;
var GatewayLanguageModel = class {
    constructor(modelId, config){
        this.modelId = modelId;
        this.config = config;
        this.specificationVersion = "v2";
        this.supportedUrls = {
            "*/*": [
                /.*/
            ]
        };
    }
    get provider() {
        return this.config.provider;
    }
    async getArgs(options) {
        const { abortSignal: _abortSignal, ...optionsWithoutSignal } = options;
        return {
            args: this.maybeEncodeFileParts(optionsWithoutSignal),
            warnings: []
        };
    }
    async doGenerate(options) {
        const { args, warnings } = await this.getArgs(options);
        const { abortSignal } = options;
        const resolvedHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers());
        try {
            const { responseHeaders, value: responseBody, rawValue: rawResponse } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
                url: this.getUrl(),
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])(resolvedHeaders, options.headers, this.getModelConfigHeaders(this.modelId, false), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.o11yHeaders)),
                body: args,
                successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()),
                failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
                    errorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
                    errorToMessage: (data)=>data
                }),
                ...abortSignal && {
                    abortSignal
                },
                fetch: this.config.fetch
            });
            return {
                ...responseBody,
                request: {
                    body: args
                },
                response: {
                    headers: responseHeaders,
                    body: rawResponse
                },
                warnings
            };
        } catch (error) {
            throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
        }
    }
    async doStream(options) {
        const { args, warnings } = await this.getArgs(options);
        const { abortSignal } = options;
        const resolvedHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers());
        try {
            const { value: response, responseHeaders } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
                url: this.getUrl(),
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])(resolvedHeaders, options.headers, this.getModelConfigHeaders(this.modelId, true), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.o11yHeaders)),
                body: args,
                successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEventSourceResponseHandler"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()),
                failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
                    errorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
                    errorToMessage: (data)=>data
                }),
                ...abortSignal && {
                    abortSignal
                },
                fetch: this.config.fetch
            });
            return {
                stream: response.pipeThrough(new TransformStream({
                    start (controller) {
                        if (warnings.length > 0) {
                            controller.enqueue({
                                type: "stream-start",
                                warnings
                            });
                        }
                    },
                    transform (chunk, controller) {
                        if (chunk.success) {
                            const streamPart = chunk.value;
                            if (streamPart.type === "raw" && !options.includeRawChunks) {
                                return;
                            }
                            if (streamPart.type === "response-metadata" && streamPart.timestamp && typeof streamPart.timestamp === "string") {
                                streamPart.timestamp = new Date(streamPart.timestamp);
                            }
                            controller.enqueue(streamPart);
                        } else {
                            controller.error(chunk.error);
                        }
                    }
                })),
                request: {
                    body: args
                },
                response: {
                    headers: responseHeaders
                }
            };
        } catch (error) {
            throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
        }
    }
    isFilePart(part) {
        return part && typeof part === "object" && "type" in part && part.type === "file";
    }
    /**
   * Encodes file parts in the prompt to base64. Mutates the passed options
   * instance directly to avoid copying the file data.
   * @param options - The options to encode.
   * @returns The options with the file parts encoded.
   */ maybeEncodeFileParts(options) {
        for (const message of options.prompt){
            for (const part of message.content){
                if (this.isFilePart(part)) {
                    const filePart = part;
                    if (filePart.data instanceof Uint8Array) {
                        const buffer = Uint8Array.from(filePart.data);
                        const base64Data = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(buffer).toString("base64");
                        filePart.data = new URL(`data:${filePart.mediaType || "application/octet-stream"};base64,${base64Data}`);
                    }
                }
            }
        }
        return options;
    }
    getUrl() {
        return `${this.config.baseURL}/language-model`;
    }
    getModelConfigHeaders(modelId, streaming) {
        return {
            "ai-language-model-specification-version": "2",
            "ai-language-model-id": modelId,
            "ai-language-model-streaming": String(streaming)
        };
    }
};
;
;
var GatewayEmbeddingModel = class {
    constructor(modelId, config){
        this.modelId = modelId;
        this.config = config;
        this.specificationVersion = "v2";
        this.maxEmbeddingsPerCall = 2048;
        this.supportsParallelCalls = true;
    }
    get provider() {
        return this.config.provider;
    }
    async doEmbed({ values, headers, abortSignal, providerOptions }) {
        var _a8;
        const resolvedHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers());
        try {
            const { responseHeaders, value: responseBody, rawValue } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
                url: this.getUrl(),
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])(resolvedHeaders, headers != null ? headers : {}, this.getModelConfigHeaders(), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.o11yHeaders)),
                body: {
                    input: values.length === 1 ? values[0] : values,
                    ...providerOptions ? {
                        providerOptions
                    } : {}
                },
                successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(gatewayEmbeddingResponseSchema),
                failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
                    errorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
                    errorToMessage: (data)=>data
                }),
                ...abortSignal && {
                    abortSignal
                },
                fetch: this.config.fetch
            });
            return {
                embeddings: responseBody.embeddings,
                usage: (_a8 = responseBody.usage) != null ? _a8 : void 0,
                providerMetadata: responseBody.providerMetadata,
                response: {
                    headers: responseHeaders,
                    body: rawValue
                }
            };
        } catch (error) {
            throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
        }
    }
    getUrl() {
        return `${this.config.baseURL}/embedding-model`;
    }
    getModelConfigHeaders() {
        return {
            "ai-embedding-model-specification-version": "2",
            "ai-model-id": this.modelId
        };
    }
};
var gatewayEmbeddingResponseSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazyValidator"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        embeddings: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number())),
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
        }).nullish(),
        providerMetadata: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown())).optional()
    })));
;
;
var GatewayImageModel = class {
    constructor(modelId, config){
        this.modelId = modelId;
        this.config = config;
        this.specificationVersion = "v2";
        this.maxImagesPerCall = 4;
    }
    get provider() {
        return this.config.provider;
    }
    async doGenerate({ prompt, n, size, aspectRatio, seed, providerOptions, headers, abortSignal }) {
        var _a8;
        const resolvedHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers());
        try {
            const { responseHeaders, value: responseBody, rawValue } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
                url: this.getUrl(),
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])(resolvedHeaders, headers != null ? headers : {}, this.getModelConfigHeaders(), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.o11yHeaders)),
                body: {
                    prompt,
                    n,
                    ...size && {
                        size
                    },
                    ...aspectRatio && {
                        aspectRatio
                    },
                    ...seed && {
                        seed
                    },
                    ...providerOptions != null ? providerOptions : {}
                },
                successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(gatewayImageResponseSchema),
                failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
                    errorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
                    errorToMessage: (data)=>data
                }),
                ...abortSignal && {
                    abortSignal
                },
                fetch: this.config.fetch
            });
            return {
                images: responseBody.images,
                // Always base64 strings from server
                warnings: (_a8 = responseBody.warnings) != null ? _a8 : [],
                providerMetadata: responseBody.providerMetadata,
                response: {
                    timestamp: /* @__PURE__ */ new Date(),
                    modelId: this.modelId,
                    headers: responseHeaders
                }
            };
        } catch (error) {
            throw asGatewayError(error, await parseAuthMethod(resolvedHeaders));
        }
    }
    getUrl() {
        return `${this.config.baseURL}/image-model`;
    }
    getModelConfigHeaders() {
        return {
            "ai-image-model-specification-version": "2",
            "ai-model-id": this.modelId
        };
    }
};
var providerMetadataEntrySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    images: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown()).optional()
}).catchall(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown());
var gatewayImageResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    images: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    // Always base64 strings over the wire
    warnings: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("other"),
        message: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).optional(),
    providerMetadata: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), providerMetadataEntrySchema).optional()
});
;
;
async function getVercelRequestId() {
    var _a8;
    return (_a8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$vercel$2f$oidc$2f$dist$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContext"])().headers) == null ? void 0 : _a8["x-vercel-id"];
}
;
// src/version.ts
var VERSION = ("TURBOPACK compile-time truthy", 1) ? "2.0.13" : "TURBOPACK unreachable";
// src/gateway-provider.ts
var AI_GATEWAY_PROTOCOL_VERSION = "0.0.1";
function createGatewayProvider(options = {}) {
    var _a8, _b8;
    let pendingMetadata = null;
    let metadataCache = null;
    const cacheRefreshMillis = (_a8 = options.metadataCacheRefreshMillis) != null ? _a8 : 1e3 * 60 * 5;
    let lastFetchTime = 0;
    const baseURL = (_b8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withoutTrailingSlash"])(options.baseURL)) != null ? _b8 : "https://ai-gateway.vercel.sh/v1/ai";
    const getHeaders = async ()=>{
        const auth = await getGatewayAuthToken(options);
        if (auth) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withUserAgentSuffix"])({
                Authorization: `Bearer ${auth.token}`,
                "ai-gateway-protocol-version": AI_GATEWAY_PROTOCOL_VERSION,
                [GATEWAY_AUTH_METHOD_HEADER]: auth.authMethod,
                ...options.headers
            }, `ai-sdk/gateway/${VERSION}`);
        }
        throw GatewayAuthenticationError.createContextualError({
            apiKeyProvided: false,
            oidcTokenProvided: false,
            statusCode: 401
        });
    };
    const createO11yHeaders = ()=>{
        const deploymentId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadOptionalSetting"])({
            settingValue: void 0,
            environmentVariableName: "VERCEL_DEPLOYMENT_ID"
        });
        const environment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadOptionalSetting"])({
            settingValue: void 0,
            environmentVariableName: "VERCEL_ENV"
        });
        const region = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadOptionalSetting"])({
            settingValue: void 0,
            environmentVariableName: "VERCEL_REGION"
        });
        return async ()=>{
            const requestId = await getVercelRequestId();
            return {
                ...deploymentId && {
                    "ai-o11y-deployment-id": deploymentId
                },
                ...environment && {
                    "ai-o11y-environment": environment
                },
                ...region && {
                    "ai-o11y-region": region
                },
                ...requestId && {
                    "ai-o11y-request-id": requestId
                }
            };
        };
    };
    const createLanguageModel = (modelId)=>{
        return new GatewayLanguageModel(modelId, {
            provider: "gateway",
            baseURL,
            headers: getHeaders,
            fetch: options.fetch,
            o11yHeaders: createO11yHeaders()
        });
    };
    const getAvailableModels = async ()=>{
        var _a9, _b9, _c;
        const now = (_c = (_b9 = (_a9 = options._internal) == null ? void 0 : _a9.currentDate) == null ? void 0 : _b9.call(_a9).getTime()) != null ? _c : Date.now();
        if (!pendingMetadata || now - lastFetchTime > cacheRefreshMillis) {
            lastFetchTime = now;
            pendingMetadata = new GatewayFetchMetadata({
                baseURL,
                headers: getHeaders,
                fetch: options.fetch
            }).getAvailableModels().then((metadata)=>{
                metadataCache = metadata;
                return metadata;
            }).catch(async (error)=>{
                throw await asGatewayError(error, await parseAuthMethod(await getHeaders()));
            });
        }
        return metadataCache ? Promise.resolve(metadataCache) : pendingMetadata;
    };
    const getCredits = async ()=>{
        return new GatewayFetchMetadata({
            baseURL,
            headers: getHeaders,
            fetch: options.fetch
        }).getCredits().catch(async (error)=>{
            throw await asGatewayError(error, await parseAuthMethod(await getHeaders()));
        });
    };
    const provider = function(modelId) {
        if (new.target) {
            throw new Error("The Gateway Provider model function cannot be called with the new keyword.");
        }
        return createLanguageModel(modelId);
    };
    provider.getAvailableModels = getAvailableModels;
    provider.getCredits = getCredits;
    provider.imageModel = (modelId)=>{
        return new GatewayImageModel(modelId, {
            provider: "gateway",
            baseURL,
            headers: getHeaders,
            fetch: options.fetch,
            o11yHeaders: createO11yHeaders()
        });
    };
    provider.languageModel = createLanguageModel;
    provider.textEmbeddingModel = (modelId)=>{
        return new GatewayEmbeddingModel(modelId, {
            provider: "gateway",
            baseURL,
            headers: getHeaders,
            fetch: options.fetch,
            o11yHeaders: createO11yHeaders()
        });
    };
    return provider;
}
var gateway = createGatewayProvider();
async function getGatewayAuthToken(options) {
    const apiKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadOptionalSetting"])({
        settingValue: options.apiKey,
        environmentVariableName: "AI_GATEWAY_API_KEY"
    });
    if (apiKey) {
        return {
            token: apiKey,
            authMethod: "api-key"
        };
    }
    try {
        const oidcToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$vercel$2f$oidc$2f$dist$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVercelOidcToken"])();
        return {
            token: oidcToken,
            authMethod: "oidc"
        };
    } catch (e) {
        return null;
    }
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/platform/browser/globalThis.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Updates to this file should also be replicated to @opentelemetry/core too.
/**
 * - globalThis (New standard)
 * - self (Will return the current window instance for supported browsers)
 * - window (fallback for older browser implementations)
 * - global (NodeJS implementation)
 * - <object> (When all else fails)
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins, no-undef
__turbopack_context__.s([
    "_globalThis",
    ()=>_globalThis
]);
var _globalThis = typeof globalThis === 'object' ? globalThis : typeof self === 'object' ? self : typeof window === 'object' ? window : ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable"; //# sourceMappingURL=globalThis.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/version.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // this is autogenerated file, see scripts/version-update.js
__turbopack_context__.s([
    "VERSION",
    ()=>VERSION
]);
var VERSION = '1.9.0'; //# sourceMappingURL=version.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/internal/semver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "_makeCompatibilityCheck",
    ()=>_makeCompatibilityCheck,
    "isCompatible",
    ()=>isCompatible
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/version.js [app-client] (ecmascript)");
;
var re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function _makeCompatibilityCheck(ownVersion) {
    var acceptedVersions = new Set([
        ownVersion
    ]);
    var rejectedVersions = new Set();
    var myVersionMatch = ownVersion.match(re);
    if (!myVersionMatch) {
        // we cannot guarantee compatibility so we always return noop
        return function() {
            return false;
        };
    }
    var ownVersionParsed = {
        major: +myVersionMatch[1],
        minor: +myVersionMatch[2],
        patch: +myVersionMatch[3],
        prerelease: myVersionMatch[4]
    };
    // if ownVersion has a prerelease tag, versions must match exactly
    if (ownVersionParsed.prerelease != null) {
        return function isExactmatch(globalVersion) {
            return globalVersion === ownVersion;
        };
    }
    function _reject(v) {
        rejectedVersions.add(v);
        return false;
    }
    function _accept(v) {
        acceptedVersions.add(v);
        return true;
    }
    return function isCompatible(globalVersion) {
        if (acceptedVersions.has(globalVersion)) {
            return true;
        }
        if (rejectedVersions.has(globalVersion)) {
            return false;
        }
        var globalVersionMatch = globalVersion.match(re);
        if (!globalVersionMatch) {
            // cannot parse other version
            // we cannot guarantee compatibility so we always noop
            return _reject(globalVersion);
        }
        var globalVersionParsed = {
            major: +globalVersionMatch[1],
            minor: +globalVersionMatch[2],
            patch: +globalVersionMatch[3],
            prerelease: globalVersionMatch[4]
        };
        // if globalVersion has a prerelease tag, versions must match exactly
        if (globalVersionParsed.prerelease != null) {
            return _reject(globalVersion);
        }
        // major versions must match
        if (ownVersionParsed.major !== globalVersionParsed.major) {
            return _reject(globalVersion);
        }
        if (ownVersionParsed.major === 0) {
            if (ownVersionParsed.minor === globalVersionParsed.minor && ownVersionParsed.patch <= globalVersionParsed.patch) {
                return _accept(globalVersion);
            }
            return _reject(globalVersion);
        }
        if (ownVersionParsed.minor <= globalVersionParsed.minor) {
            return _accept(globalVersion);
        }
        return _reject(globalVersion);
    };
}
var isCompatible = _makeCompatibilityCheck(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"]); //# sourceMappingURL=semver.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "getGlobal",
    ()=>getGlobal,
    "registerGlobal",
    ()=>registerGlobal,
    "unregisterGlobal",
    ()=>unregisterGlobal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$platform$2f$browser$2f$globalThis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/platform/browser/globalThis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/version.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$semver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/internal/semver.js [app-client] (ecmascript)");
;
;
;
var major = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"].split('.')[0];
var GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for("opentelemetry.js.api." + major);
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$platform$2f$browser$2f$globalThis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_globalThis"];
function registerGlobal(type, instance, diag, allowOverride) {
    var _a;
    if (allowOverride === void 0) {
        allowOverride = false;
    }
    var api = _global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a !== void 0 ? _a : {
        version: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"]
    };
    if (!allowOverride && api[type]) {
        // already registered an API of this type
        var err = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + type);
        diag.error(err.stack || err.message);
        return false;
    }
    if (api.version !== __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"]) {
        // All registered APIs must be of the same version exactly
        var err = new Error("@opentelemetry/api: Registration of version v" + api.version + " for " + type + " does not match previously registered API v" + __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"]);
        diag.error(err.stack || err.message);
        return false;
    }
    api[type] = instance;
    diag.debug("@opentelemetry/api: Registered a global for " + type + " v" + __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"] + ".");
    return true;
}
function getGlobal(type) {
    var _a, _b;
    var globalVersion = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a === void 0 ? void 0 : _a.version;
    if (!globalVersion || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$semver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCompatible"])(globalVersion)) {
        return;
    }
    return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
}
function unregisterGlobal(type, diag) {
    diag.debug("@opentelemetry/api: Unregistering a global for " + type + " v" + __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"] + ".");
    var api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
    if (api) {
        delete api[type];
    }
} //# sourceMappingURL=global-utils.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/context/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Get a key to uniquely identify a context value */ __turbopack_context__.s([
    "ROOT_CONTEXT",
    ()=>ROOT_CONTEXT,
    "createContextKey",
    ()=>createContextKey
]);
function createContextKey(description) {
    // The specification states that for the same input, multiple calls should
    // return different keys. Due to the nature of the JS dependency management
    // system, this creates problems where multiple versions of some package
    // could hold different keys for the same property.
    //
    // Therefore, we use Symbol.for which returns the same key for the same input.
    return Symbol.for(description);
}
var BaseContext = function() {
    /**
     * Construct a new context which inherits values from an optional parent context.
     *
     * @param parentContext a context from which to inherit values
     */ function BaseContext(parentContext) {
        // for minification
        var self = this;
        self._currentContext = parentContext ? new Map(parentContext) : new Map();
        self.getValue = function(key) {
            return self._currentContext.get(key);
        };
        self.setValue = function(key, value) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.set(key, value);
            return context;
        };
        self.deleteValue = function(key) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.delete(key);
            return context;
        };
    }
    return BaseContext;
}();
var ROOT_CONTEXT = new BaseContext(); //# sourceMappingURL=context.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "NoopContextManager",
    ()=>NoopContextManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/context/context.js [app-client] (ecmascript)");
var __read = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
;
var NoopContextManager = function() {
    function NoopContextManager() {}
    NoopContextManager.prototype.active = function() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOT_CONTEXT"];
    };
    NoopContextManager.prototype.with = function(_context, fn, thisArg) {
        var args = [];
        for(var _i = 3; _i < arguments.length; _i++){
            args[_i - 3] = arguments[_i];
        }
        return fn.call.apply(fn, __spreadArray([
            thisArg
        ], __read(args), false));
    };
    NoopContextManager.prototype.bind = function(_context, target) {
        return target;
    };
    NoopContextManager.prototype.enable = function() {
        return this;
    };
    NoopContextManager.prototype.disable = function() {
        return this;
    };
    return NoopContextManager;
}();
;
 //# sourceMappingURL=NoopContextManager.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "DiagComponentLogger",
    ()=>DiagComponentLogger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js [app-client] (ecmascript)");
var __read = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
;
/**
 * Component Logger which is meant to be used as part of any component which
 * will add automatically additional namespace in front of the log message.
 * It will then forward all message to global diag logger
 * @example
 * const cLogger = diag.createComponentLogger({ namespace: '@opentelemetry/instrumentation-http' });
 * cLogger.debug('test');
 * // @opentelemetry/instrumentation-http test
 */ var DiagComponentLogger = function() {
    function DiagComponentLogger(props) {
        this._namespace = props.namespace || 'DiagComponentLogger';
    }
    DiagComponentLogger.prototype.debug = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        return logProxy('debug', this._namespace, args);
    };
    DiagComponentLogger.prototype.error = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        return logProxy('error', this._namespace, args);
    };
    DiagComponentLogger.prototype.info = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        return logProxy('info', this._namespace, args);
    };
    DiagComponentLogger.prototype.warn = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        return logProxy('warn', this._namespace, args);
    };
    DiagComponentLogger.prototype.verbose = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        return logProxy('verbose', this._namespace, args);
    };
    return DiagComponentLogger;
}();
;
function logProxy(funcName, namespace, args) {
    var logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobal"])('diag');
    // shortcut if logger not set
    if (!logger) {
        return;
    }
    args.unshift(namespace);
    return logger[funcName].apply(logger, __spreadArray([], __read(args), false));
} //# sourceMappingURL=ComponentLogger.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/diag/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Defines the available internal logging levels for the diagnostic logger, the numeric values
 * of the levels are defined to match the original values from the initial LogLevel to avoid
 * compatibility/migration issues for any implementation that assume the numeric ordering.
 */ __turbopack_context__.s([
    "DiagLogLevel",
    ()=>DiagLogLevel
]);
var DiagLogLevel;
(function(DiagLogLevel) {
    /** Diagnostic Logging level setting to disable all logging (except and forced logs) */ DiagLogLevel[DiagLogLevel["NONE"] = 0] = "NONE";
    /** Identifies an error scenario */ DiagLogLevel[DiagLogLevel["ERROR"] = 30] = "ERROR";
    /** Identifies a warning scenario */ DiagLogLevel[DiagLogLevel["WARN"] = 50] = "WARN";
    /** General informational log message */ DiagLogLevel[DiagLogLevel["INFO"] = 60] = "INFO";
    /** General debug log message */ DiagLogLevel[DiagLogLevel["DEBUG"] = 70] = "DEBUG";
    /**
     * Detailed trace level logging should only be used for development, should only be set
     * in a development environment.
     */ DiagLogLevel[DiagLogLevel["VERBOSE"] = 80] = "VERBOSE";
    /** Used to set the logging level to include all logging */ DiagLogLevel[DiagLogLevel["ALL"] = 9999] = "ALL";
})(DiagLogLevel || (DiagLogLevel = {})); //# sourceMappingURL=types.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "createLogLevelDiagLogger",
    ()=>createLogLevelDiagLogger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/diag/types.js [app-client] (ecmascript)");
;
function createLogLevelDiagLogger(maxLevel, logger) {
    if (maxLevel < __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiagLogLevel"].NONE) {
        maxLevel = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiagLogLevel"].NONE;
    } else if (maxLevel > __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiagLogLevel"].ALL) {
        maxLevel = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiagLogLevel"].ALL;
    }
    // In case the logger is null or undefined
    logger = logger || {};
    function _filterFunc(funcName, theLevel) {
        var theFunc = logger[funcName];
        if (typeof theFunc === 'function' && maxLevel >= theLevel) {
            return theFunc.bind(logger);
        }
        return function() {};
    }
    return {
        error: _filterFunc('error', __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiagLogLevel"].ERROR),
        warn: _filterFunc('warn', __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiagLogLevel"].WARN),
        info: _filterFunc('info', __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiagLogLevel"].INFO),
        debug: _filterFunc('debug', __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiagLogLevel"].DEBUG),
        verbose: _filterFunc('verbose', __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiagLogLevel"].VERBOSE)
    };
} //# sourceMappingURL=logLevelLogger.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/api/diag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "DiagAPI",
    ()=>DiagAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$ComponentLogger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$internal$2f$logLevelLogger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/diag/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js [app-client] (ecmascript)");
var __read = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
;
;
;
;
var API_NAME = 'diag';
/**
 * Singleton object which represents the entry point to the OpenTelemetry internal
 * diagnostic API
 */ var DiagAPI = function() {
    /**
     * Private internal constructor
     * @private
     */ function DiagAPI() {
        function _logProxy(funcName) {
            return function() {
                var args = [];
                for(var _i = 0; _i < arguments.length; _i++){
                    args[_i] = arguments[_i];
                }
                var logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobal"])('diag');
                // shortcut if logger not set
                if (!logger) return;
                return logger[funcName].apply(logger, __spreadArray([], __read(args), false));
            };
        }
        // Using self local variable for minification purposes as 'this' cannot be minified
        var self = this;
        // DiagAPI specific functions
        var setLogger = function(logger, optionsOrLogLevel) {
            var _a, _b, _c;
            if (optionsOrLogLevel === void 0) {
                optionsOrLogLevel = {
                    logLevel: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiagLogLevel"].INFO
                };
            }
            if (logger === self) {
                // There isn't much we can do here.
                // Logging to the console might break the user application.
                // Try to log to self. If a logger was previously registered it will receive the log.
                var err = new Error('Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation');
                self.error((_a = err.stack) !== null && _a !== void 0 ? _a : err.message);
                return false;
            }
            if (typeof optionsOrLogLevel === 'number') {
                optionsOrLogLevel = {
                    logLevel: optionsOrLogLevel
                };
            }
            var oldLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobal"])('diag');
            var newLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$internal$2f$logLevelLogger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLogLevelDiagLogger"])((_b = optionsOrLogLevel.logLevel) !== null && _b !== void 0 ? _b : __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiagLogLevel"].INFO, logger);
            // There already is an logger registered. We'll let it know before overwriting it.
            if (oldLogger && !optionsOrLogLevel.suppressOverrideMessage) {
                var stack = (_c = new Error().stack) !== null && _c !== void 0 ? _c : '<failed to generate stacktrace>';
                oldLogger.warn("Current logger will be overwritten from " + stack);
                newLogger.warn("Current logger will overwrite one already registered from " + stack);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerGlobal"])('diag', newLogger, self, true);
        };
        self.setLogger = setLogger;
        self.disable = function() {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unregisterGlobal"])(API_NAME, self);
        };
        self.createComponentLogger = function(options) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$ComponentLogger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiagComponentLogger"](options);
        };
        self.verbose = _logProxy('verbose');
        self.debug = _logProxy('debug');
        self.info = _logProxy('info');
        self.warn = _logProxy('warn');
        self.error = _logProxy('error');
    }
    /** Get the singleton instance of the DiagAPI API */ DiagAPI.instance = function() {
        if (!this._instance) {
            this._instance = new DiagAPI();
        }
        return this._instance;
    };
    return DiagAPI;
}();
;
 //# sourceMappingURL=diag.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/api/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "ContextAPI",
    ()=>ContextAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$NoopContextManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/api/diag.js [app-client] (ecmascript)");
var __read = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
;
;
;
var API_NAME = 'context';
var NOOP_CONTEXT_MANAGER = new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$NoopContextManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoopContextManager"]();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Context API
 */ var ContextAPI = function() {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ function ContextAPI() {}
    /** Get the singleton instance of the Context API */ ContextAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new ContextAPI();
        }
        return this._instance;
    };
    /**
     * Set the current context manager.
     *
     * @returns true if the context manager was successfully registered, else false
     */ ContextAPI.prototype.setGlobalContextManager = function(contextManager) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerGlobal"])(API_NAME, contextManager, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiagAPI"].instance());
    };
    /**
     * Get the currently active context
     */ ContextAPI.prototype.active = function() {
        return this._getContextManager().active();
    };
    /**
     * Execute a function with an active context
     *
     * @param context context to be active during function execution
     * @param fn function to execute in a context
     * @param thisArg optional receiver to be used for calling fn
     * @param args optional arguments forwarded to fn
     */ ContextAPI.prototype.with = function(context, fn, thisArg) {
        var _a;
        var args = [];
        for(var _i = 3; _i < arguments.length; _i++){
            args[_i - 3] = arguments[_i];
        }
        return (_a = this._getContextManager()).with.apply(_a, __spreadArray([
            context,
            fn,
            thisArg
        ], __read(args), false));
    };
    /**
     * Bind a context to a target function or event emitter
     *
     * @param context context to bind to the event emitter or function. Defaults to the currently active context
     * @param target function or event emitter to bind
     */ ContextAPI.prototype.bind = function(context, target) {
        return this._getContextManager().bind(context, target);
    };
    ContextAPI.prototype._getContextManager = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobal"])(API_NAME) || NOOP_CONTEXT_MANAGER;
    };
    /** Disable and remove the global context manager */ ContextAPI.prototype.disable = function() {
        this._getContextManager().disable();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unregisterGlobal"])(API_NAME, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiagAPI"].instance());
    };
    return ContextAPI;
}();
;
 //# sourceMappingURL=context.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "TraceFlags",
    ()=>TraceFlags
]);
var TraceFlags;
(function(TraceFlags) {
    /** Represents no flag set. */ TraceFlags[TraceFlags["NONE"] = 0] = "NONE";
    /** Bit to represent whether trace is sampled in trace flags. */ TraceFlags[TraceFlags["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags || (TraceFlags = {})); //# sourceMappingURL=trace_flags.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "INVALID_SPANID",
    ()=>INVALID_SPANID,
    "INVALID_SPAN_CONTEXT",
    ()=>INVALID_SPAN_CONTEXT,
    "INVALID_TRACEID",
    ()=>INVALID_TRACEID
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$trace_flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js [app-client] (ecmascript)");
;
var INVALID_SPANID = '0000000000000000';
var INVALID_TRACEID = '00000000000000000000000000000000';
var INVALID_SPAN_CONTEXT = {
    traceId: INVALID_TRACEID,
    spanId: INVALID_SPANID,
    traceFlags: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$trace_flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TraceFlags"].NONE
}; //# sourceMappingURL=invalid-span-constants.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "NonRecordingSpan",
    ()=>NonRecordingSpan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js [app-client] (ecmascript)");
;
/**
 * The NonRecordingSpan is the default {@link Span} that is used when no Span
 * implementation is available. All operations are no-op including context
 * propagation.
 */ var NonRecordingSpan = function() {
    function NonRecordingSpan(_spanContext) {
        if (_spanContext === void 0) {
            _spanContext = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INVALID_SPAN_CONTEXT"];
        }
        this._spanContext = _spanContext;
    }
    // Returns a SpanContext.
    NonRecordingSpan.prototype.spanContext = function() {
        return this._spanContext;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setAttribute = function(_key, _value) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setAttributes = function(_attributes) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.addEvent = function(_name, _attributes) {
        return this;
    };
    NonRecordingSpan.prototype.addLink = function(_link) {
        return this;
    };
    NonRecordingSpan.prototype.addLinks = function(_links) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setStatus = function(_status) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.updateName = function(_name) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.end = function(_endTime) {};
    // isRecording always returns false for NonRecordingSpan.
    NonRecordingSpan.prototype.isRecording = function() {
        return false;
    };
    // By default does nothing
    NonRecordingSpan.prototype.recordException = function(_exception, _time) {};
    return NonRecordingSpan;
}();
;
 //# sourceMappingURL=NonRecordingSpan.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/context-utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "deleteSpan",
    ()=>deleteSpan,
    "getActiveSpan",
    ()=>getActiveSpan,
    "getSpan",
    ()=>getSpan,
    "getSpanContext",
    ()=>getSpanContext,
    "setSpan",
    ()=>setSpan,
    "setSpanContext",
    ()=>setSpanContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/context/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/api/context.js [app-client] (ecmascript)");
;
;
;
/**
 * span key
 */ var SPAN_KEY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextKey"])('OpenTelemetry Context Key SPAN');
function getSpan(context) {
    return context.getValue(SPAN_KEY) || undefined;
}
function getActiveSpan() {
    return getSpan(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextAPI"].getInstance().active());
}
function setSpan(context, span) {
    return context.setValue(SPAN_KEY, span);
}
function deleteSpan(context) {
    return context.deleteValue(SPAN_KEY);
}
function setSpanContext(context, spanContext) {
    return setSpan(context, new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NonRecordingSpan"](spanContext));
}
function getSpanContext(context) {
    var _a;
    return (_a = getSpan(context)) === null || _a === void 0 ? void 0 : _a.spanContext();
} //# sourceMappingURL=context-utils.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "isSpanContextValid",
    ()=>isSpanContextValid,
    "isValidSpanId",
    ()=>isValidSpanId,
    "isValidTraceId",
    ()=>isValidTraceId,
    "wrapSpanContext",
    ()=>wrapSpanContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js [app-client] (ecmascript)");
;
;
var VALID_TRACEID_REGEX = /^([0-9a-f]{32})$/i;
var VALID_SPANID_REGEX = /^[0-9a-f]{16}$/i;
function isValidTraceId(traceId) {
    return VALID_TRACEID_REGEX.test(traceId) && traceId !== __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INVALID_TRACEID"];
}
function isValidSpanId(spanId) {
    return VALID_SPANID_REGEX.test(spanId) && spanId !== __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INVALID_SPANID"];
}
function isSpanContextValid(spanContext) {
    return isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId);
}
function wrapSpanContext(spanContext) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NonRecordingSpan"](spanContext);
} //# sourceMappingURL=spancontext-utils.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "NoopTracer",
    ()=>NoopTracer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/api/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/context-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js [app-client] (ecmascript)");
;
;
;
;
var contextApi = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextAPI"].getInstance();
/**
 * No-op implementations of {@link Tracer}.
 */ var NoopTracer = function() {
    function NoopTracer() {}
    // startSpan starts a noop span.
    NoopTracer.prototype.startSpan = function(name, options, context) {
        if (context === void 0) {
            context = contextApi.active();
        }
        var root = Boolean(options === null || options === void 0 ? void 0 : options.root);
        if (root) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NonRecordingSpan"]();
        }
        var parentFromContext = context && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpanContext"])(context);
        if (isSpanContext(parentFromContext) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSpanContextValid"])(parentFromContext)) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NonRecordingSpan"](parentFromContext);
        } else {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NonRecordingSpan"]();
        }
    };
    NoopTracer.prototype.startActiveSpan = function(name, arg2, arg3, arg4) {
        var opts;
        var ctx;
        var fn;
        if (arguments.length < 2) {
            return;
        } else if (arguments.length === 2) {
            fn = arg2;
        } else if (arguments.length === 3) {
            opts = arg2;
            fn = arg3;
        } else {
            opts = arg2;
            ctx = arg3;
            fn = arg4;
        }
        var parentContext = ctx !== null && ctx !== void 0 ? ctx : contextApi.active();
        var span = this.startSpan(name, opts, parentContext);
        var contextWithSpanSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSpan"])(parentContext, span);
        return contextApi.with(contextWithSpanSet, fn, undefined, span);
    };
    return NoopTracer;
}();
;
function isSpanContext(spanContext) {
    return typeof spanContext === 'object' && typeof spanContext['spanId'] === 'string' && typeof spanContext['traceId'] === 'string' && typeof spanContext['traceFlags'] === 'number';
} //# sourceMappingURL=NoopTracer.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "ProxyTracer",
    ()=>ProxyTracer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js [app-client] (ecmascript)");
;
var NOOP_TRACER = new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoopTracer"]();
/**
 * Proxy tracer provided by the proxy tracer provider
 */ var ProxyTracer = function() {
    function ProxyTracer(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    ProxyTracer.prototype.startSpan = function(name, options, context) {
        return this._getTracer().startSpan(name, options, context);
    };
    ProxyTracer.prototype.startActiveSpan = function(_name, _options, _context, _fn) {
        var tracer = this._getTracer();
        return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
    };
    /**
     * Try to get a tracer from the proxy tracer provider.
     * If the proxy tracer provider has no delegate, return a noop tracer.
     */ ProxyTracer.prototype._getTracer = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
        if (!tracer) {
            return NOOP_TRACER;
        }
        this._delegate = tracer;
        return this._delegate;
    };
    return ProxyTracer;
}();
;
 //# sourceMappingURL=ProxyTracer.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "NoopTracerProvider",
    ()=>NoopTracerProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js [app-client] (ecmascript)");
;
/**
 * An implementation of the {@link TracerProvider} which returns an impotent
 * Tracer for all calls to `getTracer`.
 *
 * All operations are no-op.
 */ var NoopTracerProvider = function() {
    function NoopTracerProvider() {}
    NoopTracerProvider.prototype.getTracer = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoopTracer"]();
    };
    return NoopTracerProvider;
}();
;
 //# sourceMappingURL=NoopTracerProvider.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "ProxyTracerProvider",
    ()=>ProxyTracerProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracerProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js [app-client] (ecmascript)");
;
;
var NOOP_TRACER_PROVIDER = new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracerProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoopTracerProvider"]();
/**
 * Tracer provider which provides {@link ProxyTracer}s.
 *
 * Before a delegate is set, tracers provided are NoOp.
 *   When a delegate is set, traces are provided from the delegate.
 *   When a delegate is set after tracers have already been provided,
 *   all tracers already provided will use the provided delegate implementation.
 */ var ProxyTracerProvider = function() {
    function ProxyTracerProvider() {}
    /**
     * Get a {@link ProxyTracer}
     */ ProxyTracerProvider.prototype.getTracer = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateTracer(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProxyTracer"](this, name, version, options);
    };
    ProxyTracerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_TRACER_PROVIDER;
    };
    /**
     * Set the delegate tracer provider
     */ ProxyTracerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyTracerProvider.prototype.getDelegateTracer = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getTracer(name, version, options);
    };
    return ProxyTracerProvider;
}();
;
 //# sourceMappingURL=ProxyTracerProvider.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/api/trace.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "TraceAPI",
    ()=>TraceAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracerProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/context-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/api/diag.js [app-client] (ecmascript)");
;
;
;
;
;
var API_NAME = 'trace';
/**
 * Singleton object which represents the entry point to the OpenTelemetry Tracing API
 */ var TraceAPI = function() {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ function TraceAPI() {
        this._proxyTracerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracerProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProxyTracerProvider"]();
        this.wrapSpanContext = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapSpanContext"];
        this.isSpanContextValid = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSpanContextValid"];
        this.deleteSpan = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteSpan"];
        this.getSpan = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpan"];
        this.getActiveSpan = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSpan"];
        this.getSpanContext = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpanContext"];
        this.setSpan = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSpan"];
        this.setSpanContext = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSpanContext"];
    }
    /** Get the singleton instance of the Trace API */ TraceAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new TraceAPI();
        }
        return this._instance;
    };
    /**
     * Set the current global tracer.
     *
     * @returns true if the tracer provider was successfully registered, else false
     */ TraceAPI.prototype.setGlobalTracerProvider = function(provider) {
        var success = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerGlobal"])(API_NAME, this._proxyTracerProvider, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiagAPI"].instance());
        if (success) {
            this._proxyTracerProvider.setDelegate(provider);
        }
        return success;
    };
    /**
     * Returns the global tracer provider.
     */ TraceAPI.prototype.getTracerProvider = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobal"])(API_NAME) || this._proxyTracerProvider;
    };
    /**
     * Returns a tracer from the global tracer provider.
     */ TraceAPI.prototype.getTracer = function(name, version) {
        return this.getTracerProvider().getTracer(name, version);
    };
    /** Remove the global tracer provider */ TraceAPI.prototype.disable = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unregisterGlobal"])(API_NAME, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiagAPI"].instance());
        this._proxyTracerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracerProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProxyTracerProvider"]();
    };
    return TraceAPI;
}();
;
 //# sourceMappingURL=trace.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace-api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.
__turbopack_context__.s([
    "trace",
    ()=>trace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/api/trace.js [app-client] (ecmascript)");
;
var trace = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TraceAPI"].getInstance(); //# sourceMappingURL=trace-api.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@opentelemetry/api/build/esm/trace/status.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * An enumeration of status codes.
 */ __turbopack_context__.s([
    "SpanStatusCode",
    ()=>SpanStatusCode
]);
var SpanStatusCode;
(function(SpanStatusCode) {
    /**
     * The default status.
     */ SpanStatusCode[SpanStatusCode["UNSET"] = 0] = "UNSET";
    /**
     * The operation has been validated by an Application developer or
     * Operator to have completed successfully.
     */ SpanStatusCode[SpanStatusCode["OK"] = 1] = "OK";
    /**
     * The operation contains an error.
     */ SpanStatusCode[SpanStatusCode["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {})); //# sourceMappingURL=status.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/throttleit/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function throttle(function_, wait) {
    if (typeof function_ !== 'function') {
        throw new TypeError(`Expected the first argument to be a \`function\`, got \`${typeof function_}\`.`);
    }
    // TODO: Add `wait` validation too in the next major version.
    let timeoutId;
    let lastCallTime = 0;
    return function throttled(...arguments_) {
        clearTimeout(timeoutId);
        const now = Date.now();
        const timeSinceLastCall = now - lastCallTime;
        const delayForNextCall = wait - timeSinceLastCall;
        if (delayForNextCall <= 0) {
            lastCallTime = now;
            function_.apply(this, arguments_);
        } else {
            timeoutId = setTimeout(()=>{
                lastCallTime = Date.now();
                function_.apply(this, arguments_);
            }, delayForNextCall);
        }
    };
}
module.exports = throttle;
}),
"[project]/Users/patie/Downloads/protonai/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        }
        cachedValue = useState({
            inst: {
                value: value,
                getSnapshot: getSnapshot
            }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect({
            "useSyncExternalStore$2.useLayoutEffect": function() {
                inst.value = value;
                inst.getSnapshot = getSnapshot;
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            }
        }["useSyncExternalStore$2.useLayoutEffect"], [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect({
            "useSyncExternalStore$2.useEffect": function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
                return subscribe({
                    "useSyncExternalStore$2.useEffect": function() {
                        checkIfSnapshotChanged(inst) && forceUpdate({
                            inst: inst
                        });
                    }
                }["useSyncExternalStore$2.useEffect"]);
            }
        }["useSyncExternalStore$2.useEffect"], [
            subscribe
        ]);
        useDebugValue(value);
        return value;
    }
    function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
        } catch (error) {
            return !0;
        }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/Users/patie/Downloads/protonai/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Users/patie/Downloads/protonai/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)");
}
}),
"[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/events.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ERROR_REVALIDATE_EVENT",
    ()=>ERROR_REVALIDATE_EVENT,
    "FOCUS_EVENT",
    ()=>FOCUS_EVENT,
    "MUTATE_EVENT",
    ()=>MUTATE_EVENT,
    "RECONNECT_EVENT",
    ()=>RECONNECT_EVENT
]);
const FOCUS_EVENT = 0;
const RECONNECT_EVENT = 1;
const MUTATE_EVENT = 2;
const ERROR_REVALIDATE_EVENT = 3;
;
}),
"[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A",
    ()=>noop,
    "B",
    ()=>isPromiseLike,
    "I",
    ()=>IS_REACT_LEGACY,
    "O",
    ()=>OBJECT,
    "S",
    ()=>SWRConfigContext,
    "U",
    ()=>UNDEFINED,
    "a",
    ()=>isFunction,
    "b",
    ()=>SWRGlobalState,
    "c",
    ()=>cache,
    "d",
    ()=>defaultConfig,
    "e",
    ()=>isUndefined,
    "f",
    ()=>mergeConfigs,
    "g",
    ()=>SWRConfig,
    "h",
    ()=>initCache,
    "i",
    ()=>isWindowDefined,
    "j",
    ()=>mutate,
    "k",
    ()=>compare,
    "l",
    ()=>stableHash,
    "m",
    ()=>mergeObjects,
    "n",
    ()=>internalMutate,
    "o",
    ()=>getTimestamp,
    "p",
    ()=>preset,
    "q",
    ()=>defaultConfigOptions,
    "r",
    ()=>IS_SERVER,
    "s",
    ()=>serialize,
    "t",
    ()=>rAF,
    "u",
    ()=>useIsomorphicLayoutEffect,
    "v",
    ()=>slowConnection,
    "w",
    ()=>isDocumentDefined,
    "x",
    ()=>isLegacyDeno,
    "y",
    ()=>hasRequestAnimationFrame,
    "z",
    ()=>createCacheHelper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/events.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/dequal/lite/index.mjs [app-client] (ecmascript)");
'use client';
;
;
;
// Global state used to deduplicate requests and store listeners
const SWRGlobalState = new WeakMap();
// Shared state between server components and client components
const noop = ()=>{};
// Using noop() as the undefined value as undefined can be replaced
// by something else. Prettier ignore and extra parentheses are necessary here
// to ensure that tsc doesn't remove the __NOINLINE__ comment.
// prettier-ignore
const UNDEFINED = /*#__NOINLINE__*/ noop();
const OBJECT = Object;
const isUndefined = (v)=>v === UNDEFINED;
const isFunction = (v)=>typeof v == 'function';
const mergeObjects = (a, b)=>({
        ...a,
        ...b
    });
const isPromiseLike = (x)=>isFunction(x.then);
const EMPTY_CACHE = {};
const INITIAL_CACHE = {};
const STR_UNDEFINED = 'undefined';
// NOTE: Use the function to guarantee it's re-evaluated between jsdom and node runtime for tests.
const isWindowDefined = typeof window != STR_UNDEFINED;
const isDocumentDefined = typeof document != STR_UNDEFINED;
const isLegacyDeno = isWindowDefined && 'Deno' in window;
const hasRequestAnimationFrame = ()=>isWindowDefined && typeof window['requestAnimationFrame'] != STR_UNDEFINED;
const createCacheHelper = (cache, key)=>{
    const state = SWRGlobalState.get(cache);
    return [
        // Getter
        ()=>!isUndefined(key) && cache.get(key) || EMPTY_CACHE,
        // Setter
        (info)=>{
            if (!isUndefined(key)) {
                const prev = cache.get(key);
                // Before writing to the store, we keep the value in the initial cache
                // if it's not there yet.
                if (!(key in INITIAL_CACHE)) {
                    INITIAL_CACHE[key] = prev;
                }
                state[5](key, mergeObjects(prev, info), prev || EMPTY_CACHE);
            }
        },
        // Subscriber
        state[6],
        // Get server cache snapshot
        ()=>{
            if (!isUndefined(key)) {
                // If the cache was updated on the client, we return the stored initial value.
                if (key in INITIAL_CACHE) return INITIAL_CACHE[key];
            }
            // If we haven't done any client-side updates, we return the current value.
            return !isUndefined(key) && cache.get(key) || EMPTY_CACHE;
        }
    ];
} // export { UNDEFINED, OBJECT, isUndefined, isFunction, mergeObjects, isPromiseLike }
;
/**
 * Due to the bug https://bugs.chromium.org/p/chromium/issues/detail?id=678075,
 * it's not reliable to detect if the browser is currently online or offline
 * based on `navigator.onLine`.
 * As a workaround, we always assume it's online on the first load, and change
 * the status upon `online` or `offline` events.
 */ let online = true;
const isOnline = ()=>online;
// For node and React Native, `add/removeEventListener` doesn't exist on window.
const [onWindowEvent, offWindowEvent] = isWindowDefined && window.addEventListener ? [
    window.addEventListener.bind(window),
    window.removeEventListener.bind(window)
] : [
    noop,
    noop
];
const isVisible = ()=>{
    const visibilityState = isDocumentDefined && document.visibilityState;
    return isUndefined(visibilityState) || visibilityState !== 'hidden';
};
const initFocus = (callback)=>{
    // focus revalidate
    if (isDocumentDefined) {
        document.addEventListener('visibilitychange', callback);
    }
    onWindowEvent('focus', callback);
    return ()=>{
        if (isDocumentDefined) {
            document.removeEventListener('visibilitychange', callback);
        }
        offWindowEvent('focus', callback);
    };
};
const initReconnect = (callback)=>{
    // revalidate on reconnected
    const onOnline = ()=>{
        online = true;
        callback();
    };
    // nothing to revalidate, just update the status
    const onOffline = ()=>{
        online = false;
    };
    onWindowEvent('online', onOnline);
    onWindowEvent('offline', onOffline);
    return ()=>{
        offWindowEvent('online', onOnline);
        offWindowEvent('offline', onOffline);
    };
};
const preset = {
    isOnline,
    isVisible
};
const defaultConfigOptions = {
    initFocus,
    initReconnect
};
const IS_REACT_LEGACY = !__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useId;
const IS_SERVER = !isWindowDefined || isLegacyDeno;
// Polyfill requestAnimationFrame
const rAF = (f)=>hasRequestAnimationFrame() ? window['requestAnimationFrame'](f) : setTimeout(f, 1);
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
const useIsomorphicLayoutEffect = IS_SERVER ? __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"];
// This assignment is to extend the Navigator type to use effectiveType.
const navigatorConnection = typeof navigator !== 'undefined' && navigator.connection;
// Adjust the config based on slow connection status (<= 70Kbps).
const slowConnection = !IS_SERVER && navigatorConnection && ([
    'slow-2g',
    '2g'
].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
const table = new WeakMap();
const getTypeName = (value)=>OBJECT.prototype.toString.call(value);
const isObjectTypeName = (typeName, type)=>typeName === `[object ${type}]`;
// counter of the key
let counter = 0;
// A stable hash implementation that supports:
// - Fast and ensures unique hash properties
// - Handles unserializable values
// - Handles object key ordering
// - Generates short results
//
// This is not a serialization function, and the result is not guaranteed to be
// parsable.
const stableHash = (arg)=>{
    const type = typeof arg;
    const typeName = getTypeName(arg);
    const isDate = isObjectTypeName(typeName, 'Date');
    const isRegex = isObjectTypeName(typeName, 'RegExp');
    const isPlainObject = isObjectTypeName(typeName, 'Object');
    let result;
    let index;
    if (OBJECT(arg) === arg && !isDate && !isRegex) {
        // Object/function, not null/date/regexp. Use WeakMap to store the id first.
        // If it's already hashed, directly return the result.
        result = table.get(arg);
        if (result) return result;
        // Store the hash first for circular reference detection before entering the
        // recursive `stableHash` calls.
        // For other objects like set and map, we use this id directly as the hash.
        result = ++counter + '~';
        table.set(arg, result);
        if (Array.isArray(arg)) {
            // Array.
            result = '@';
            for(index = 0; index < arg.length; index++){
                result += stableHash(arg[index]) + ',';
            }
            table.set(arg, result);
        }
        if (isPlainObject) {
            // Object, sort keys.
            result = '#';
            const keys = OBJECT.keys(arg).sort();
            while(!isUndefined(index = keys.pop())){
                if (!isUndefined(arg[index])) {
                    result += index + ':' + stableHash(arg[index]) + ',';
                }
            }
            table.set(arg, result);
        }
    } else {
        result = isDate ? arg.toJSON() : type == 'symbol' ? arg.toString() : type == 'string' ? JSON.stringify(arg) : '' + arg;
    }
    return result;
};
const serialize = (key)=>{
    if (isFunction(key)) {
        try {
            key = key();
        } catch (err) {
            // dependencies not ready
            key = '';
        }
    }
    // Use the original key as the argument of fetcher. This can be a string or an
    // array of values.
    const args = key;
    // If key is not falsy, or not an empty array, hash it.
    key = typeof key == 'string' ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : '';
    return [
        key,
        args
    ];
};
// Global timestamp.
let __timestamp = 0;
const getTimestamp = ()=>++__timestamp;
async function internalMutate(...args) {
    const [cache, _key, _data, _opts] = args;
    // When passing as a boolean, it's explicitly used to disable/enable
    // revalidation.
    const options = mergeObjects({
        populateCache: true,
        throwOnError: true
    }, typeof _opts === 'boolean' ? {
        revalidate: _opts
    } : _opts || {});
    let populateCache = options.populateCache;
    const rollbackOnErrorOption = options.rollbackOnError;
    let optimisticData = options.optimisticData;
    const rollbackOnError = (error)=>{
        return typeof rollbackOnErrorOption === 'function' ? rollbackOnErrorOption(error) : rollbackOnErrorOption !== false;
    };
    const throwOnError = options.throwOnError;
    // If the second argument is a key filter, return the mutation results for all
    // filtered keys.
    if (isFunction(_key)) {
        const keyFilter = _key;
        const matchedKeys = [];
        const it = cache.keys();
        for (const key of it){
            if (!/^\$(inf|sub)\$/.test(key) && keyFilter(cache.get(key)._k)) {
                matchedKeys.push(key);
            }
        }
        return Promise.all(matchedKeys.map(mutateByKey));
    }
    return mutateByKey(_key);
    //TURBOPACK unreachable
    ;
    async function mutateByKey(_k) {
        // Serialize key
        const [key] = serialize(_k);
        if (!key) return;
        const [get, set] = createCacheHelper(cache, key);
        const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = SWRGlobalState.get(cache);
        const startRevalidate = ()=>{
            const revalidators = EVENT_REVALIDATORS[key];
            const revalidate = isFunction(options.revalidate) ? options.revalidate(get().data, _k) : options.revalidate !== false;
            if (revalidate) {
                // Invalidate the key by deleting the concurrent request markers so new
                // requests will not be deduped.
                delete FETCH[key];
                delete PRELOAD[key];
                if (revalidators && revalidators[0]) {
                    return revalidators[0](__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MUTATE_EVENT"]).then(()=>get().data);
                }
            }
            return get().data;
        };
        // If there is no new data provided, revalidate the key with current state.
        if (args.length < 3) {
            // Revalidate and broadcast state.
            return startRevalidate();
        }
        let data = _data;
        let error;
        let isError = false;
        // Update global timestamps.
        const beforeMutationTs = getTimestamp();
        MUTATION[key] = [
            beforeMutationTs,
            0
        ];
        const hasOptimisticData = !isUndefined(optimisticData);
        const state = get();
        // `displayedData` is the current value on screen. It could be the optimistic value
        // that is going to be overridden by a `committedData`, or get reverted back.
        // `committedData` is the validated value that comes from a fetch or mutation.
        const displayedData = state.data;
        const currentData = state._c;
        const committedData = isUndefined(currentData) ? displayedData : currentData;
        // Do optimistic data update.
        if (hasOptimisticData) {
            optimisticData = isFunction(optimisticData) ? optimisticData(committedData, displayedData) : optimisticData;
            // When we set optimistic data, backup the current committedData data in `_c`.
            set({
                data: optimisticData,
                _c: committedData
            });
        }
        if (isFunction(data)) {
            // `data` is a function, call it passing current cache value.
            try {
                data = data(committedData);
            } catch (err) {
                // If it throws an error synchronously, we shouldn't update the cache.
                error = err;
                isError = true;
            }
        }
        // `data` is a promise/thenable, resolve the final data first.
        if (data && isPromiseLike(data)) {
            // This means that the mutation is async, we need to check timestamps to
            // avoid race conditions.
            data = await data.catch((err)=>{
                error = err;
                isError = true;
            });
            // Check if other mutations have occurred since we've started this mutation.
            // If there's a race we don't update cache or broadcast the change,
            // just return the data.
            if (beforeMutationTs !== MUTATION[key][0]) {
                if (isError) throw error;
                return data;
            } else if (isError && hasOptimisticData && rollbackOnError(error)) {
                // Rollback. Always populate the cache in this case but without
                // transforming the data.
                populateCache = true;
                // Reset data to be the latest committed data, and clear the `_c` value.
                set({
                    data: committedData,
                    _c: UNDEFINED
                });
            }
        }
        // If we should write back the cache after request.
        if (populateCache) {
            if (!isError) {
                // Transform the result into data.
                if (isFunction(populateCache)) {
                    const populateCachedData = populateCache(data, committedData);
                    set({
                        data: populateCachedData,
                        error: UNDEFINED,
                        _c: UNDEFINED
                    });
                } else {
                    // Only update cached data and reset the error if there's no error. Data can be `undefined` here.
                    set({
                        data,
                        error: UNDEFINED,
                        _c: UNDEFINED
                    });
                }
            }
        }
        // Reset the timestamp to mark the mutation has ended.
        MUTATION[key][1] = getTimestamp();
        // Update existing SWR Hooks' internal states:
        Promise.resolve(startRevalidate()).then(()=>{
            // The mutation and revalidation are ended, we can clear it since the data is
            // not an optimistic value anymore.
            set({
                _c: UNDEFINED
            });
        });
        // Throw error or return data
        if (isError) {
            if (throwOnError) throw error;
            return;
        }
        return data;
    }
}
const revalidateAllKeys = (revalidators, type)=>{
    for(const key in revalidators){
        if (revalidators[key][0]) revalidators[key][0](type);
    }
};
const initCache = (provider, options)=>{
    // The global state for a specific provider will be used to deduplicate
    // requests and store listeners. As well as a mutate function that is bound to
    // the cache.
    // The provider's global state might be already initialized. Let's try to get the
    // global state associated with the provider first.
    if (!SWRGlobalState.has(provider)) {
        const opts = mergeObjects(defaultConfigOptions, options);
        // If there's no global state bound to the provider, create a new one with the
        // new mutate function.
        const EVENT_REVALIDATORS = Object.create(null);
        const mutate = internalMutate.bind(UNDEFINED, provider);
        let unmount = noop;
        const subscriptions = Object.create(null);
        const subscribe = (key, callback)=>{
            const subs = subscriptions[key] || [];
            subscriptions[key] = subs;
            subs.push(callback);
            return ()=>subs.splice(subs.indexOf(callback), 1);
        };
        const setter = (key, value, prev)=>{
            provider.set(key, value);
            const subs = subscriptions[key];
            if (subs) {
                for (const fn of subs){
                    fn(value, prev);
                }
            }
        };
        const initProvider = ()=>{
            if (!SWRGlobalState.has(provider)) {
                // Update the state if it's new, or if the provider has been extended.
                SWRGlobalState.set(provider, [
                    EVENT_REVALIDATORS,
                    Object.create(null),
                    Object.create(null),
                    Object.create(null),
                    mutate,
                    setter,
                    subscribe
                ]);
                if (!IS_SERVER) {
                    // When listening to the native events for auto revalidations,
                    // we intentionally put a delay (setTimeout) here to make sure they are
                    // fired after immediate JavaScript executions, which can be
                    // React's state updates.
                    // This avoids some unnecessary revalidations such as
                    // https://github.com/vercel/swr/issues/1680.
                    const releaseFocus = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOCUS_EVENT"])));
                    const releaseReconnect = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RECONNECT_EVENT"])));
                    unmount = ()=>{
                        releaseFocus && releaseFocus();
                        releaseReconnect && releaseReconnect();
                        // When un-mounting, we need to remove the cache provider from the state
                        // storage too because it's a side-effect. Otherwise, when re-mounting we
                        // will not re-register those event listeners.
                        SWRGlobalState.delete(provider);
                    };
                }
            }
        };
        initProvider();
        // This is a new provider, we need to initialize it and setup DOM events
        // listeners for `focus` and `reconnect` actions.
        // We might want to inject an extra layer on top of `provider` in the future,
        // such as key serialization, auto GC, etc.
        // For now, it's just a `Map` interface without any modifications.
        return [
            provider,
            mutate,
            initProvider,
            unmount
        ];
    }
    return [
        provider,
        SWRGlobalState.get(provider)[4]
    ];
};
// error retry
const onErrorRetry = (_, __, config, revalidate, opts)=>{
    const maxRetryCount = config.errorRetryCount;
    const currentRetryCount = opts.retryCount;
    // Exponential backoff
    const timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
    if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
        return;
    }
    setTimeout(revalidate, timeout, opts);
};
const compare = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dequal"];
// Default cache provider
const [cache, mutate] = initCache(new Map());
// Default config
const defaultConfig = mergeObjects({
    // events
    onLoadingSlow: noop,
    onSuccess: noop,
    onError: noop,
    onErrorRetry,
    onDiscarded: noop,
    // switches
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
    shouldRetryOnError: true,
    // timeouts
    errorRetryInterval: slowConnection ? 10000 : 5000,
    focusThrottleInterval: 5 * 1000,
    dedupingInterval: 2 * 1000,
    loadingTimeout: slowConnection ? 5000 : 3000,
    // providers
    compare,
    isPaused: ()=>false,
    cache,
    mutate,
    fallback: {}
}, preset);
const mergeConfigs = (a, b)=>{
    // Need to create a new object to avoid mutating the original here.
    const v = mergeObjects(a, b);
    // If two configs are provided, merge their `use` and `fallback` options.
    if (b) {
        const { use: u1, fallback: f1 } = a;
        const { use: u2, fallback: f2 } = b;
        if (u1 && u2) {
            v.use = u1.concat(u2);
        }
        if (f1 && f2) {
            v.fallback = mergeObjects(f1, f2);
        }
    }
    return v;
};
const SWRConfigContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
const SWRConfig = (props)=>{
    const { value } = props;
    const parentConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SWRConfigContext);
    const isFunctionalConfig = isFunction(value);
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SWRConfig.useMemo[config]": ()=>isFunctionalConfig ? value(parentConfig) : value
    }["SWRConfig.useMemo[config]"], [
        isFunctionalConfig,
        parentConfig,
        value
    ]);
    // Extend parent context values and middleware.
    const extendedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SWRConfig.useMemo[extendedConfig]": ()=>isFunctionalConfig ? config : mergeConfigs(parentConfig, config)
    }["SWRConfig.useMemo[extendedConfig]"], [
        isFunctionalConfig,
        parentConfig,
        config
    ]);
    // Should not use the inherited provider.
    const provider = config && config.provider;
    // initialize the cache only on first access.
    const cacheContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(UNDEFINED);
    if (provider && !cacheContextRef.current) {
        cacheContextRef.current = initCache(provider(extendedConfig.cache || cache), config);
    }
    const cacheContext = cacheContextRef.current;
    // Override the cache if a new provider is given.
    if (cacheContext) {
        extendedConfig.cache = cacheContext[0];
        extendedConfig.mutate = cacheContext[1];
    }
    // Unsubscribe events.
    useIsomorphicLayoutEffect({
        "SWRConfig.useIsomorphicLayoutEffect": ()=>{
            if (cacheContext) {
                cacheContext[2] && cacheContext[2]();
                return cacheContext[3];
            }
        }
    }["SWRConfig.useIsomorphicLayoutEffect"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(SWRConfigContext.Provider, mergeObjects(props, {
        value: extendedConfig
    }));
};
;
}),
"[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export U as UNDEFINED>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UNDEFINED",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["U"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export O as OBJECT>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OBJECT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["O"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export g as SWRConfig>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SWRConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export d as defaultConfig>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/constants.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INFINITE_PREFIX",
    ()=>INFINITE_PREFIX
]);
const INFINITE_PREFIX = '$inf$';
;
}),
"[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalize",
    ()=>normalize,
    "preload",
    ()=>preload,
    "subscribeCallback",
    ()=>subscribeCallback,
    "useSWRConfig",
    ()=>useSWRConfig,
    "withArgs",
    ()=>withArgs,
    "withMiddleware",
    ()=>withMiddleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/events.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/constants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
// @ts-expect-error
const enableDevtools = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"] && window.__SWR_DEVTOOLS_USE__;
const use = enableDevtools ? window.__SWR_DEVTOOLS_USE__ : [];
const setupDevTools = ()=>{
    if (enableDevtools) {
        // @ts-expect-error
        window.__SWR_DEVTOOLS_REACT__ = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    }
};
const normalize = (args)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(args[1]) ? [
        args[0],
        args[1],
        args[2] || {}
    ] : [
        args[0],
        null,
        (args[1] === null ? args[2] : args[1]) || {}
    ];
};
const useSWRConfig = ()=>{
    const parentConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["S"]);
    const mergedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSWRConfig.useMemo[mergedConfig]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"], parentConfig)
    }["useSWRConfig.useMemo[mergedConfig]"], [
        parentConfig
    ]);
    return mergedConfig;
};
const preload = (key_, fetcher)=>{
    const [key, fnArg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"])(key_);
    const [, , , PRELOAD] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].get(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"]);
    // Prevent preload to be called multiple times before used.
    if (PRELOAD[key]) return PRELOAD[key];
    const req = fetcher(fnArg);
    PRELOAD[key] = req;
    return req;
};
const middleware = (useSWRNext)=>(key_, fetcher_, config)=>{
        // fetcher might be a sync function, so this should not be an async function
        const fetcher = fetcher_ && ((...args)=>{
            const [key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"])(key_);
            const [, , , PRELOAD] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].get(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"]);
            if (key.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INFINITE_PREFIX"])) {
                // we want the infinite fetcher to be called.
                // handling of the PRELOAD cache happens there.
                return fetcher_(...args);
            }
            const req = PRELOAD[key];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(req)) return fetcher_(...args);
            delete PRELOAD[key];
            return req;
        });
        return useSWRNext(key_, fetcher, config);
    };
const BUILT_IN_MIDDLEWARE = use.concat(middleware);
// It's tricky to pass generic types as parameters, so we just directly override
// the types here.
const withArgs = (hook)=>{
    return function useSWRArgs(...args) {
        // Get the default and inherited configuration.
        const fallbackConfig = useSWRConfig();
        // Normalize arguments.
        const [key, fn, _config] = normalize(args);
        // Merge configurations.
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(fallbackConfig, _config);
        // Apply middleware
        let next = hook;
        const { use } = config;
        const middleware = (use || []).concat(BUILT_IN_MIDDLEWARE);
        for(let i = middleware.length; i--;){
            next = middleware[i](next);
        }
        return next(key, fn || config.fetcher || null, config);
    };
};
// Add a callback function to a list of keyed callback functions and return
// the unsubscribe function.
const subscribeCallback = (key, callbacks, callback)=>{
    const keyedRevalidators = callbacks[key] || (callbacks[key] = []);
    keyedRevalidators.push(callback);
    return ()=>{
        const index = keyedRevalidators.indexOf(callback);
        if (index >= 0) {
            // O(1): faster than splice
            keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
            keyedRevalidators.pop();
        }
    };
};
// Create a custom hook with a middleware
const withMiddleware = (useSWR, middleware)=>{
    return (...args)=>{
        const [key, fn, config] = normalize(args);
        const uses = (config.use || []).concat(middleware);
        return useSWR(key, fn, {
            ...config,
            use: uses
        });
    };
};
setupDevTools();
;
}),
"[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export b as SWRGlobalState>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SWRGlobalState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export s as serialize>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serialize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export z as createCacheHelper>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCacheHelper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export e as isUndefined>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isUndefined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export B as isPromiseLike>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPromiseLike",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["B"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export o as getTimestamp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTimestamp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["o"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export a as isFunction>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isFunction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/events.mjs [app-client] (ecmascript) <export * as revalidateEvents>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "revalidateEvents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/events.mjs [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export n as internalMutate>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "internalMutate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export u as useIsomorphicLayoutEffect>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsomorphicLayoutEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export r as IS_SERVER>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IS_SERVER",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export t as rAF>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "rAF",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export I as IS_REACT_LEGACY>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IS_REACT_LEGACY",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export m as mergeObjects>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeObjects",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/index/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SWRConfig",
    ()=>SWRConfig,
    "default",
    ()=>useSWR,
    "unstable_serialize",
    ()=>unstable_serialize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__U__as__UNDEFINED$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export U as UNDEFINED>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__O__as__OBJECT$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export O as OBJECT>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__g__as__SWRConfig$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export g as SWRConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__d__as__defaultConfig$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export d as defaultConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__b__as__SWRGlobalState$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export b as SWRGlobalState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__serialize$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export s as serialize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__createCacheHelper$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export z as createCacheHelper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export e as isUndefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__B__as__isPromiseLike$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export B as isPromiseLike>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__o__as__getTimestamp$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export o as getTimestamp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__isFunction$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export a as isFunction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/events.mjs [app-client] (ecmascript) <export * as revalidateEvents>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__internalMutate$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export n as internalMutate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__useIsomorphicLayoutEffect$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export u as useIsomorphicLayoutEffect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__IS_SERVER$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export r as IS_SERVER>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__rAF$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export t as rAF>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__I__as__IS_REACT_LEGACY$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export I as IS_REACT_LEGACY>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__m__as__mergeObjects$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-client] (ecmascript) <export m as mergeObjects>");
;
;
;
;
// Shared state between server components and client components
const noop = ()=>{};
// Using noop() as the undefined value as undefined can be replaced
// by something else. Prettier ignore and extra parentheses are necessary here
// to ensure that tsc doesn't remove the __NOINLINE__ comment.
// prettier-ignore
const UNDEFINED = /*#__NOINLINE__*/ noop();
const OBJECT = Object;
const isUndefined = (v)=>v === UNDEFINED;
const isFunction = (v)=>typeof v == 'function';
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
const table = new WeakMap();
const getTypeName = (value)=>OBJECT.prototype.toString.call(value);
const isObjectTypeName = (typeName, type)=>typeName === `[object ${type}]`;
// counter of the key
let counter = 0;
// A stable hash implementation that supports:
// - Fast and ensures unique hash properties
// - Handles unserializable values
// - Handles object key ordering
// - Generates short results
//
// This is not a serialization function, and the result is not guaranteed to be
// parsable.
const stableHash = (arg)=>{
    const type = typeof arg;
    const typeName = getTypeName(arg);
    const isDate = isObjectTypeName(typeName, 'Date');
    const isRegex = isObjectTypeName(typeName, 'RegExp');
    const isPlainObject = isObjectTypeName(typeName, 'Object');
    let result;
    let index;
    if (OBJECT(arg) === arg && !isDate && !isRegex) {
        // Object/function, not null/date/regexp. Use WeakMap to store the id first.
        // If it's already hashed, directly return the result.
        result = table.get(arg);
        if (result) return result;
        // Store the hash first for circular reference detection before entering the
        // recursive `stableHash` calls.
        // For other objects like set and map, we use this id directly as the hash.
        result = ++counter + '~';
        table.set(arg, result);
        if (Array.isArray(arg)) {
            // Array.
            result = '@';
            for(index = 0; index < arg.length; index++){
                result += stableHash(arg[index]) + ',';
            }
            table.set(arg, result);
        }
        if (isPlainObject) {
            // Object, sort keys.
            result = '#';
            const keys = OBJECT.keys(arg).sort();
            while(!isUndefined(index = keys.pop())){
                if (!isUndefined(arg[index])) {
                    result += index + ':' + stableHash(arg[index]) + ',';
                }
            }
            table.set(arg, result);
        }
    } else {
        result = isDate ? arg.toJSON() : type == 'symbol' ? arg.toString() : type == 'string' ? JSON.stringify(arg) : '' + arg;
    }
    return result;
};
const serialize = (key)=>{
    if (isFunction(key)) {
        try {
            key = key();
        } catch (err) {
            // dependencies not ready
            key = '';
        }
    }
    // Use the original key as the argument of fetcher. This can be a string or an
    // array of values.
    const args = key;
    // If key is not falsy, or not an empty array, hash it.
    key = typeof key == 'string' ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : '';
    return [
        key,
        args
    ];
};
const unstable_serialize = (key)=>serialize(key)[0];
/// <reference types="react/experimental" />
const use = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use || // This extra generic is to avoid TypeScript mixing up the generic and JSX sytax
// and emitting an error.
// We assume that this is only for the `use(thenable)` case, not `use(context)`.
// https://github.com/facebook/react/blob/aed00dacfb79d17c53218404c52b1c7aa59c4a89/packages/react-server/src/ReactFizzThenable.js#L45
((thenable)=>{
    switch(thenable.status){
        case 'pending':
            throw thenable;
        case 'fulfilled':
            return thenable.value;
        case 'rejected':
            throw thenable.reason;
        default:
            thenable.status = 'pending';
            thenable.then((v)=>{
                thenable.status = 'fulfilled';
                thenable.value = v;
            }, (e)=>{
                thenable.status = 'rejected';
                thenable.reason = e;
            });
            throw thenable;
    }
});
const WITH_DEDUPE = {
    dedupe: true
};
const resolvedUndef = Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__U__as__UNDEFINED$3e$__["UNDEFINED"]);
const useSWRHandler = (_key, fetcher, config)=>{
    const { cache, compare, suspense, fallbackData, revalidateOnMount, revalidateIfStale, refreshInterval, refreshWhenHidden, refreshWhenOffline, keepPreviousData } = config;
    const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__b__as__SWRGlobalState$3e$__["SWRGlobalState"].get(cache);
    // `key` is the identifier of the SWR internal state,
    // `fnArg` is the argument/arguments parsed from the key, which will be passed
    // to the fetcher.
    // All of them are derived from `_key`.
    const [key, fnArg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__serialize$3e$__["serialize"])(_key);
    // If it's the initial render of this hook.
    const initialMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // If the hook is unmounted already. This will be used to prevent some effects
    // to be called after unmounting.
    const unmountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Refs to keep the key and config.
    const keyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(key);
    const fetcherRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(fetcher);
    const configRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(config);
    const getConfig = ()=>configRef.current;
    const isActive = ()=>getConfig().isVisible() && getConfig().isOnline();
    const [getCache, setCache, subscribeCache, getInitialCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__createCacheHelper$3e$__["createCacheHelper"])(cache, key);
    const stateDependencies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({}).current;
    // Resolve the fallback data from either the inline option, or the global provider.
    // If it's a promise, we simply let React suspend and resolve it for us.
    const fallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(fallbackData) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(config.fallback) ? __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__U__as__UNDEFINED$3e$__["UNDEFINED"] : config.fallback[key] : fallbackData;
    const isEqual = (prev, current)=>{
        for(const _ in stateDependencies){
            const t = _;
            if (t === 'data') {
                if (!compare(prev[t], current[t])) {
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(prev[t])) {
                        return false;
                    }
                    if (!compare(returnedData, current[t])) {
                        return false;
                    }
                }
            } else {
                if (current[t] !== prev[t]) {
                    return false;
                }
            }
        }
        return true;
    };
    const getSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSWRHandler.useMemo[getSnapshot]": ()=>{
            const shouldStartRequest = ({
                "useSWRHandler.useMemo[getSnapshot].shouldStartRequest": ()=>{
                    if (!key) return false;
                    if (!fetcher) return false;
                    // If `revalidateOnMount` is set, we take the value directly.
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(revalidateOnMount)) return revalidateOnMount;
                    // If it's paused, we skip revalidation.
                    if (getConfig().isPaused()) return false;
                    if (suspense) return false;
                    return revalidateIfStale !== false;
                }
            })["useSWRHandler.useMemo[getSnapshot].shouldStartRequest"]();
            // Get the cache and merge it with expected states.
            const getSelectedCache = {
                "useSWRHandler.useMemo[getSnapshot].getSelectedCache": (state)=>{
                    // We only select the needed fields from the state.
                    const snapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__m__as__mergeObjects$3e$__["mergeObjects"])(state);
                    delete snapshot._k;
                    if (!shouldStartRequest) {
                        return snapshot;
                    }
                    return {
                        isValidating: true,
                        isLoading: true,
                        ...snapshot
                    };
                }
            }["useSWRHandler.useMemo[getSnapshot].getSelectedCache"];
            const cachedData = getCache();
            const initialData = getInitialCache();
            const clientSnapshot = getSelectedCache(cachedData);
            const serverSnapshot = cachedData === initialData ? clientSnapshot : getSelectedCache(initialData);
            // To make sure that we are returning the same object reference to avoid
            // unnecessary re-renders, we keep the previous snapshot and use deep
            // comparison to check if we need to return a new one.
            let memorizedSnapshot = clientSnapshot;
            return [
                {
                    "useSWRHandler.useMemo[getSnapshot]": ()=>{
                        const newSnapshot = getSelectedCache(getCache());
                        const compareResult = isEqual(newSnapshot, memorizedSnapshot);
                        if (compareResult) {
                            // Mentally, we should always return the `memorizedSnapshot` here
                            // as there's no change between the new and old snapshots.
                            // However, since the `isEqual` function only compares selected fields,
                            // the values of the unselected fields might be changed. That's
                            // simply because we didn't track them.
                            // To support the case in https://github.com/vercel/swr/pull/2576,
                            // we need to update these fields in the `memorizedSnapshot` too
                            // with direct mutations to ensure the snapshot is always up-to-date
                            // even for the unselected fields, but only trigger re-renders when
                            // the selected fields are changed.
                            memorizedSnapshot.data = newSnapshot.data;
                            memorizedSnapshot.isLoading = newSnapshot.isLoading;
                            memorizedSnapshot.isValidating = newSnapshot.isValidating;
                            memorizedSnapshot.error = newSnapshot.error;
                            return memorizedSnapshot;
                        } else {
                            memorizedSnapshot = newSnapshot;
                            return newSnapshot;
                        }
                    }
                }["useSWRHandler.useMemo[getSnapshot]"],
                {
                    "useSWRHandler.useMemo[getSnapshot]": ()=>serverSnapshot
                }["useSWRHandler.useMemo[getSnapshot]"]
            ];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useSWRHandler.useMemo[getSnapshot]"], [
        cache,
        key
    ]);
    // Get the current state that SWR should return.
    const cached = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSWRHandler.useSyncExternalStore[cached]": (callback)=>subscribeCache(key, {
                "useSWRHandler.useSyncExternalStore[cached]": (current, prev)=>{
                    if (!isEqual(prev, current)) callback();
                }
            }["useSWRHandler.useSyncExternalStore[cached]"])
    }["useSWRHandler.useSyncExternalStore[cached]"], [
        cache,
        key
    ]), getSnapshot[0], getSnapshot[1]);
    const isInitialMount = !initialMountedRef.current;
    const hasRevalidator = EVENT_REVALIDATORS[key] && EVENT_REVALIDATORS[key].length > 0;
    const cachedData = cached.data;
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(cachedData) ? fallback && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__B__as__isPromiseLike$3e$__["isPromiseLike"])(fallback) ? use(fallback) : fallback : cachedData;
    const error = cached.error;
    // Use a ref to store previously returned data. Use the initial data as its initial value.
    const laggyDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(data);
    const returnedData = keepPreviousData ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(cachedData) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(laggyDataRef.current) ? data : laggyDataRef.current : cachedData : data;
    // - Suspense mode and there's stale data for the initial render.
    // - Not suspense mode and there is no fallback data and `revalidateIfStale` is enabled.
    // - `revalidateIfStale` is enabled but `data` is not defined.
    const shouldDoInitialRevalidation = (()=>{
        // if a key already has revalidators and also has error, we should not trigger revalidation
        if (hasRevalidator && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(error)) return false;
        // If `revalidateOnMount` is set, we take the value directly.
        if (isInitialMount && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(revalidateOnMount)) return revalidateOnMount;
        // If it's paused, we skip revalidation.
        if (getConfig().isPaused()) return false;
        // Under suspense mode, it will always fetch on render if there is no
        // stale data so no need to revalidate immediately mount it again.
        // If data exists, only revalidate if `revalidateIfStale` is true.
        if (suspense) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(data) ? false : revalidateIfStale;
        // If there is no stale data, we need to revalidate when mount;
        // If `revalidateIfStale` is set to true, we will always revalidate.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(data) || revalidateIfStale;
    })();
    // Resolve the default validating state:
    // If it's able to validate, and it should revalidate when mount, this will be true.
    const defaultValidatingState = !!(key && fetcher && isInitialMount && shouldDoInitialRevalidation);
    const isValidating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(cached.isValidating) ? defaultValidatingState : cached.isValidating;
    const isLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(cached.isLoading) ? defaultValidatingState : cached.isLoading;
    // The revalidation function is a carefully crafted wrapper of the original
    // `fetcher`, to correctly handle the many edge cases.
    const revalidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSWRHandler.useCallback[revalidate]": async (revalidateOpts)=>{
            const currentFetcher = fetcherRef.current;
            if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
                return false;
            }
            let newData;
            let startAt;
            let loading = true;
            const opts = revalidateOpts || {};
            // If there is no ongoing concurrent request, or `dedupe` is not set, a
            // new request should be initiated.
            const shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
            /*
         For React 17
         Do unmount check for calls:
         If key has changed during the revalidation, or the component has been
         unmounted, old dispatch and old event callbacks should not take any
         effect

        For React 18
        only check if key has changed
        https://github.com/reactwg/react-18/discussions/82
      */ const callbackSafeguard = {
                "useSWRHandler.useCallback[revalidate].callbackSafeguard": ()=>{
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__I__as__IS_REACT_LEGACY$3e$__["IS_REACT_LEGACY"]) {
                        return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
                    }
                    return key === keyRef.current;
                }
            }["useSWRHandler.useCallback[revalidate].callbackSafeguard"];
            // The final state object when the request finishes.
            const finalState = {
                isValidating: false,
                isLoading: false
            };
            const finishRequestAndUpdateState = {
                "useSWRHandler.useCallback[revalidate].finishRequestAndUpdateState": ()=>{
                    setCache(finalState);
                }
            }["useSWRHandler.useCallback[revalidate].finishRequestAndUpdateState"];
            const cleanupState = {
                "useSWRHandler.useCallback[revalidate].cleanupState": ()=>{
                    // Check if it's still the same request before deleting it.
                    const requestInfo = FETCH[key];
                    if (requestInfo && requestInfo[1] === startAt) {
                        delete FETCH[key];
                    }
                }
            }["useSWRHandler.useCallback[revalidate].cleanupState"];
            // Start fetching. Change the `isValidating` state, update the cache.
            const initialState = {
                isValidating: true
            };
            // It is in the `isLoading` state, if and only if there is no cached data.
            // This bypasses fallback data and laggy data.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(getCache().data)) {
                initialState.isLoading = true;
            }
            try {
                if (shouldStartNewRequest) {
                    setCache(initialState);
                    // If no cache is being rendered currently (it shows a blank page),
                    // we trigger the loading slow event.
                    if (config.loadingTimeout && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(getCache().data)) {
                        setTimeout({
                            "useSWRHandler.useCallback[revalidate]": ()=>{
                                if (loading && callbackSafeguard()) {
                                    getConfig().onLoadingSlow(key, config);
                                }
                            }
                        }["useSWRHandler.useCallback[revalidate]"], config.loadingTimeout);
                    }
                    // Start the request and save the timestamp.
                    // Key must be truthy if entering here.
                    FETCH[key] = [
                        currentFetcher(fnArg),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__o__as__getTimestamp$3e$__["getTimestamp"])()
                    ];
                }
                // Wait until the ongoing request is done. Deduplication is also
                // considered here.
                ;
                [newData, startAt] = FETCH[key];
                newData = await newData;
                if (shouldStartNewRequest) {
                    // If the request isn't interrupted, clean it up after the
                    // deduplication interval.
                    setTimeout(cleanupState, config.dedupingInterval);
                }
                // If there're other ongoing request(s), started after the current one,
                // we need to ignore the current one to avoid possible race conditions:
                //   req1------------------>res1        (current one)
                //        req2---------------->res2
                // the request that fired later will always be kept.
                // The timestamp maybe be `undefined` or a number
                if (!FETCH[key] || FETCH[key][1] !== startAt) {
                    if (shouldStartNewRequest) {
                        if (callbackSafeguard()) {
                            getConfig().onDiscarded(key);
                        }
                    }
                    return false;
                }
                // Clear error.
                finalState.error = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__U__as__UNDEFINED$3e$__["UNDEFINED"];
                // If there're other mutations(s), that overlapped with the current revalidation:
                // case 1:
                //   req------------------>res
                //       mutate------>end
                // case 2:
                //         req------------>res
                //   mutate------>end
                // case 3:
                //   req------------------>res
                //       mutate-------...---------->
                // we have to ignore the revalidation result (res) because it's no longer fresh.
                // meanwhile, a new revalidation should be triggered when the mutation ends.
                const mutationInfo = MUTATION[key];
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(mutationInfo) && // case 1
                (startAt <= mutationInfo[0] || // case 2
                startAt <= mutationInfo[1] || // case 3
                mutationInfo[1] === 0)) {
                    finishRequestAndUpdateState();
                    if (shouldStartNewRequest) {
                        if (callbackSafeguard()) {
                            getConfig().onDiscarded(key);
                        }
                    }
                    return false;
                }
                // Deep compare with the latest state to avoid extra re-renders.
                // For local state, compare and assign.
                const cacheData = getCache().data;
                // Since the compare fn could be custom fn
                // cacheData might be different from newData even when compare fn returns True
                finalState.data = compare(cacheData, newData) ? cacheData : newData;
                // Trigger the successful callback if it's the original request.
                if (shouldStartNewRequest) {
                    if (callbackSafeguard()) {
                        getConfig().onSuccess(newData, key, config);
                    }
                }
            } catch (err) {
                cleanupState();
                const currentConfig = getConfig();
                const { shouldRetryOnError } = currentConfig;
                // Not paused, we continue handling the error. Otherwise, discard it.
                if (!currentConfig.isPaused()) {
                    // Get a new error, don't use deep comparison for errors.
                    finalState.error = err;
                    // Error event and retry logic. Only for the actual request, not
                    // deduped ones.
                    if (shouldStartNewRequest && callbackSafeguard()) {
                        currentConfig.onError(err, key, currentConfig);
                        if (shouldRetryOnError === true || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__isFunction$3e$__["isFunction"])(shouldRetryOnError) && shouldRetryOnError(err)) {
                            if (!getConfig().revalidateOnFocus || !getConfig().revalidateOnReconnect || isActive()) {
                                // If it's inactive, stop. It will auto-revalidate when
                                // refocusing or reconnecting.
                                // When retrying, deduplication is always enabled.
                                currentConfig.onErrorRetry(err, key, currentConfig, {
                                    "useSWRHandler.useCallback[revalidate]": (_opts)=>{
                                        const revalidators = EVENT_REVALIDATORS[key];
                                        if (revalidators && revalidators[0]) {
                                            revalidators[0](__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__["revalidateEvents"].ERROR_REVALIDATE_EVENT, _opts);
                                        }
                                    }
                                }["useSWRHandler.useCallback[revalidate]"], {
                                    retryCount: (opts.retryCount || 0) + 1,
                                    dedupe: true
                                });
                            }
                        }
                    }
                }
            }
            // Mark loading as stopped.
            loading = false;
            // Update the current hook's state.
            finishRequestAndUpdateState();
            return true;
        }
    }["useSWRHandler.useCallback[revalidate]"], // `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        key,
        cache
    ]);
    // Similar to the global mutate but bound to the current cache and key.
    // `cache` isn't allowed to change during the lifecycle.
    const boundMutate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSWRHandler.useCallback[boundMutate]": (...args)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__internalMutate$3e$__["internalMutate"])(cache, keyRef.current, ...args);
        }
    }["useSWRHandler.useCallback[boundMutate]"], []);
    // The logic for updating refs.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__useIsomorphicLayoutEffect$3e$__["useIsomorphicLayoutEffect"])({
        "useSWRHandler.useIsomorphicLayoutEffect": ()=>{
            fetcherRef.current = fetcher;
            configRef.current = config;
            // Handle laggy data updates. If there's cached data of the current key,
            // it'll be the correct reference.
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(cachedData)) {
                laggyDataRef.current = cachedData;
            }
        }
    }["useSWRHandler.useIsomorphicLayoutEffect"]);
    // After mounted or key changed.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__useIsomorphicLayoutEffect$3e$__["useIsomorphicLayoutEffect"])({
        "useSWRHandler.useIsomorphicLayoutEffect": ()=>{
            if (!key) return;
            const softRevalidate = revalidate.bind(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__U__as__UNDEFINED$3e$__["UNDEFINED"], WITH_DEDUPE);
            let nextFocusRevalidatedAt = 0;
            if (getConfig().revalidateOnFocus) {
                const initNow = Date.now();
                nextFocusRevalidatedAt = initNow + getConfig().focusThrottleInterval;
            }
            // Expose revalidators to global event listeners. So we can trigger
            // revalidation from the outside.
            const onRevalidate = {
                "useSWRHandler.useIsomorphicLayoutEffect.onRevalidate": (type, opts = {})=>{
                    if (type == __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__["revalidateEvents"].FOCUS_EVENT) {
                        const now = Date.now();
                        if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
                            nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
                            softRevalidate();
                        }
                    } else if (type == __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__["revalidateEvents"].RECONNECT_EVENT) {
                        if (getConfig().revalidateOnReconnect && isActive()) {
                            softRevalidate();
                        }
                    } else if (type == __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__["revalidateEvents"].MUTATE_EVENT) {
                        return revalidate();
                    } else if (type == __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__["revalidateEvents"].ERROR_REVALIDATE_EVENT) {
                        return revalidate(opts);
                    }
                    return;
                }
            }["useSWRHandler.useIsomorphicLayoutEffect.onRevalidate"];
            const unsubEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subscribeCallback"])(key, EVENT_REVALIDATORS, onRevalidate);
            // Mark the component as mounted and update corresponding refs.
            unmountedRef.current = false;
            keyRef.current = key;
            initialMountedRef.current = true;
            // Keep the original key in the cache.
            setCache({
                _k: fnArg
            });
            // Trigger a revalidation
            if (shouldDoInitialRevalidation) {
                // Performance optimization: if a request is already in progress for this key,
                // skip the revalidation to avoid redundant work
                if (!FETCH[key]) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(data) || __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__IS_SERVER$3e$__["IS_SERVER"]) {
                        // Revalidate immediately.
                        softRevalidate();
                    } else {
                        // Delay the revalidate if we have data to return so we won't block
                        // rendering.
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__rAF$3e$__["rAF"])(softRevalidate);
                    }
                }
            }
            return ({
                "useSWRHandler.useIsomorphicLayoutEffect": ()=>{
                    // Mark it as unmounted.
                    unmountedRef.current = true;
                    unsubEvents();
                }
            })["useSWRHandler.useIsomorphicLayoutEffect"];
        }
    }["useSWRHandler.useIsomorphicLayoutEffect"], [
        key
    ]);
    // Polling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__useIsomorphicLayoutEffect$3e$__["useIsomorphicLayoutEffect"])({
        "useSWRHandler.useIsomorphicLayoutEffect": ()=>{
            let timer;
            function next() {
                // Use the passed interval
                // ...or invoke the function with the updated data to get the interval
                const interval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__isFunction$3e$__["isFunction"])(refreshInterval) ? refreshInterval(getCache().data) : refreshInterval;
                // We only start the next interval if `refreshInterval` is not 0, and:
                // - `force` is true, which is the start of polling
                // - or `timer` is not 0, which means the effect wasn't canceled
                if (interval && timer !== -1) {
                    timer = setTimeout(execute, interval);
                }
            }
            function execute() {
                // Check if it's OK to execute:
                // Only revalidate when the page is visible, online, and not errored.
                if (!getCache().error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
                    revalidate(WITH_DEDUPE).then(next);
                } else {
                    // Schedule the next interval to check again.
                    next();
                }
            }
            next();
            return ({
                "useSWRHandler.useIsomorphicLayoutEffect": ()=>{
                    if (timer) {
                        clearTimeout(timer);
                        timer = -1;
                    }
                }
            })["useSWRHandler.useIsomorphicLayoutEffect"];
        }
    }["useSWRHandler.useIsomorphicLayoutEffect"], [
        refreshInterval,
        refreshWhenHidden,
        refreshWhenOffline,
        key
    ]);
    // Display debug info in React DevTools.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"])(returnedData);
    // In Suspense mode, we can't return the empty `data` state.
    // If there is an `error`, the `error` needs to be thrown to the error boundary.
    // If there is no `error`, the `revalidation` promise needs to be thrown to
    // the suspense boundary.
    if (suspense) {
        const hasKeyButNoData = key && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(data);
        // SWR should throw when trying to use Suspense on the server with React 18,
        // without providing any fallback data. This causes hydration errors. See:
        // https://github.com/vercel/swr/issues/1832
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__I__as__IS_REACT_LEGACY$3e$__["IS_REACT_LEGACY"] && __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__IS_SERVER$3e$__["IS_SERVER"] && hasKeyButNoData) {
            throw new Error('Fallback data is required when using Suspense in SSR.');
        }
        // Always update fetcher and config refs even with the Suspense mode.
        if (hasKeyButNoData) {
            fetcherRef.current = fetcher;
            configRef.current = config;
            unmountedRef.current = false;
        }
        const req = PRELOAD[key];
        const mutateReq = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(req) && hasKeyButNoData ? boundMutate(req) : resolvedUndef;
        use(mutateReq);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(error) && hasKeyButNoData) {
            throw error;
        }
        const revalidation = hasKeyButNoData ? revalidate(WITH_DEDUPE) : resolvedUndef;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(returnedData) && hasKeyButNoData) {
            // @ts-ignore modify react promise status
            revalidation.status = 'fulfilled';
            // @ts-ignore modify react promise value
            revalidation.value = true;
        }
        use(revalidation);
    }
    const swrResponse = {
        mutate: boundMutate,
        get data () {
            stateDependencies.data = true;
            return returnedData;
        },
        get error () {
            stateDependencies.error = true;
            return error;
        },
        get isValidating () {
            stateDependencies.isValidating = true;
            return isValidating;
        },
        get isLoading () {
            stateDependencies.isLoading = true;
            return isLoading;
        }
    };
    return swrResponse;
};
const SWRConfig = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__O__as__OBJECT$3e$__["OBJECT"].defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__g__as__SWRConfig$3e$__["SWRConfig"], 'defaultValue', {
    value: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__d__as__defaultConfig$3e$__["defaultConfig"]
});
/**
 * A hook to fetch data.
 *
 * @link https://swr.vercel.app
 * @example
 * ```jsx
 * import useSWR from 'swr'
 * function Profile() {
 *   const { data, error, isLoading } = useSWR('/api/user', fetcher)
 *   if (error) return <div>failed to load</div>
 *   if (isLoading) return <div>loading...</div>
 *   return <div>hello {data.name}!</div>
 * }
 * ```
 */ const useSWR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withArgs"])(useSWRHandler);
;
}),
"[project]/Users/patie/Downloads/protonai/node_modules/dequal/lite/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dequal",
    ()=>dequal
]);
var has = Object.prototype.hasOwnProperty;
function dequal(foo, bar) {
    var ctor, len;
    if (foo === bar) return true;
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
        if (ctor === Date) return foo.getTime() === bar.getTime();
        if (ctor === RegExp) return foo.toString() === bar.toString();
        if (ctor === Array) {
            if ((len = foo.length) === bar.length) {
                while(len-- && dequal(foo[len], bar[len]));
            }
            return len === -1;
        }
        if (!ctor || typeof foo === 'object') {
            len = 0;
            for(ctor in foo){
                if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
                if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
            }
            return Object.keys(bar).length === len;
        }
    }
    return foo !== foo && bar !== bar;
}
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@ai-sdk/react/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Chat",
    ()=>Chat,
    "experimental_useObject",
    ()=>experimental_useObject,
    "useChat",
    ()=>useChat,
    "useCompletion",
    ()=>useCompletion
]);
// src/use-chat.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// src/chat.react.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/ai/dist/index.mjs [app-client] (ecmascript) <locals>");
// src/throttle.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$throttleit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/throttleit/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/swr/dist/index/index.mjs [app-client] (ecmascript) <locals>");
// src/use-object.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-client] (ecmascript) <locals>");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
;
;
;
function throttle(fn, waitMs) {
    return waitMs != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$throttleit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(fn, waitMs) : fn;
}
// src/chat.react.ts
var _messages, _status, _error, _messagesCallbacks, _statusCallbacks, _errorCallbacks, _callMessagesCallbacks, _callStatusCallbacks, _callErrorCallbacks;
var ReactChatState = class {
    constructor(initialMessages = []){
        __privateAdd(this, _messages, void 0);
        __privateAdd(this, _status, "ready");
        __privateAdd(this, _error, void 0);
        __privateAdd(this, _messagesCallbacks, /* @__PURE__ */ new Set());
        __privateAdd(this, _statusCallbacks, /* @__PURE__ */ new Set());
        __privateAdd(this, _errorCallbacks, /* @__PURE__ */ new Set());
        this.pushMessage = (message)=>{
            __privateSet(this, _messages, __privateGet(this, _messages).concat(message));
            __privateGet(this, _callMessagesCallbacks).call(this);
        };
        this.popMessage = ()=>{
            __privateSet(this, _messages, __privateGet(this, _messages).slice(0, -1));
            __privateGet(this, _callMessagesCallbacks).call(this);
        };
        this.replaceMessage = (index, message)=>{
            __privateSet(this, _messages, [
                ...__privateGet(this, _messages).slice(0, index),
                // We deep clone the message here to ensure the new React Compiler (currently in RC) detects deeply nested parts/metadata changes:
                this.snapshot(message),
                ...__privateGet(this, _messages).slice(index + 1)
            ]);
            __privateGet(this, _callMessagesCallbacks).call(this);
        };
        this.snapshot = (value)=>structuredClone(value);
        this["~registerMessagesCallback"] = (onChange, throttleWaitMs)=>{
            const callback = throttleWaitMs ? throttle(onChange, throttleWaitMs) : onChange;
            __privateGet(this, _messagesCallbacks).add(callback);
            return ()=>{
                __privateGet(this, _messagesCallbacks).delete(callback);
            };
        };
        this["~registerStatusCallback"] = (onChange)=>{
            __privateGet(this, _statusCallbacks).add(onChange);
            return ()=>{
                __privateGet(this, _statusCallbacks).delete(onChange);
            };
        };
        this["~registerErrorCallback"] = (onChange)=>{
            __privateGet(this, _errorCallbacks).add(onChange);
            return ()=>{
                __privateGet(this, _errorCallbacks).delete(onChange);
            };
        };
        __privateAdd(this, _callMessagesCallbacks, ()=>{
            __privateGet(this, _messagesCallbacks).forEach((callback)=>callback());
        });
        __privateAdd(this, _callStatusCallbacks, ()=>{
            __privateGet(this, _statusCallbacks).forEach((callback)=>callback());
        });
        __privateAdd(this, _callErrorCallbacks, ()=>{
            __privateGet(this, _errorCallbacks).forEach((callback)=>callback());
        });
        __privateSet(this, _messages, initialMessages);
    }
    get status() {
        return __privateGet(this, _status);
    }
    set status(newStatus) {
        __privateSet(this, _status, newStatus);
        __privateGet(this, _callStatusCallbacks).call(this);
    }
    get error() {
        return __privateGet(this, _error);
    }
    set error(newError) {
        __privateSet(this, _error, newError);
        __privateGet(this, _callErrorCallbacks).call(this);
    }
    get messages() {
        return __privateGet(this, _messages);
    }
    set messages(newMessages) {
        __privateSet(this, _messages, [
            ...newMessages
        ]);
        __privateGet(this, _callMessagesCallbacks).call(this);
    }
};
_messages = new WeakMap();
_status = new WeakMap();
_error = new WeakMap();
_messagesCallbacks = new WeakMap();
_statusCallbacks = new WeakMap();
_errorCallbacks = new WeakMap();
_callMessagesCallbacks = new WeakMap();
_callStatusCallbacks = new WeakMap();
_callErrorCallbacks = new WeakMap();
var _state;
var Chat = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AbstractChat"] {
    constructor({ messages, ...init }){
        const state = new ReactChatState(messages);
        super({
            ...init,
            state
        });
        __privateAdd(this, _state, void 0);
        this["~registerMessagesCallback"] = (onChange, throttleWaitMs)=>__privateGet(this, _state)["~registerMessagesCallback"](onChange, throttleWaitMs);
        this["~registerStatusCallback"] = (onChange)=>__privateGet(this, _state)["~registerStatusCallback"](onChange);
        this["~registerErrorCallback"] = (onChange)=>__privateGet(this, _state)["~registerErrorCallback"](onChange);
        __privateSet(this, _state, state);
    }
};
_state = new WeakMap();
// src/use-chat.ts
function useChat({ experimental_throttle: throttleWaitMs, resume = false, ...options } = {}) {
    const chatRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("chat" in options ? options.chat : new Chat(options));
    const shouldRecreateChat = "chat" in options && options.chat !== chatRef.current || "id" in options && chatRef.current.id !== options.id;
    if (shouldRecreateChat) {
        chatRef.current = "chat" in options ? options.chat : new Chat(options);
    }
    const optionsId = "id" in options ? options.id : null;
    const subscribeToMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChat.useCallback[subscribeToMessages]": (update)=>chatRef.current["~registerMessagesCallback"](update, throttleWaitMs)
    }["useChat.useCallback[subscribeToMessages]"], // optionsId is required to trigger re-subscription when the chat ID changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        throttleWaitMs,
        optionsId
    ]);
    const messages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribeToMessages, {
        "useChat.useSyncExternalStore[messages]": ()=>chatRef.current.messages
    }["useChat.useSyncExternalStore[messages]"], {
        "useChat.useSyncExternalStore[messages]": ()=>chatRef.current.messages
    }["useChat.useSyncExternalStore[messages]"]);
    const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(chatRef.current["~registerStatusCallback"], {
        "useChat.useSyncExternalStore[status]": ()=>chatRef.current.status
    }["useChat.useSyncExternalStore[status]"], {
        "useChat.useSyncExternalStore[status]": ()=>chatRef.current.status
    }["useChat.useSyncExternalStore[status]"]);
    const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(chatRef.current["~registerErrorCallback"], {
        "useChat.useSyncExternalStore[error]": ()=>chatRef.current.error
    }["useChat.useSyncExternalStore[error]"], {
        "useChat.useSyncExternalStore[error]": ()=>chatRef.current.error
    }["useChat.useSyncExternalStore[error]"]);
    const setMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChat.useCallback[setMessages]": (messagesParam)=>{
            if (typeof messagesParam === "function") {
                messagesParam = messagesParam(chatRef.current.messages);
            }
            chatRef.current.messages = messagesParam;
        }
    }["useChat.useCallback[setMessages]"], [
        chatRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChat.useEffect": ()=>{
            if (resume) {
                chatRef.current.resumeStream();
            }
        }
    }["useChat.useEffect"], [
        resume,
        chatRef
    ]);
    return {
        id: chatRef.current.id,
        messages,
        setMessages,
        sendMessage: chatRef.current.sendMessage,
        regenerate: chatRef.current.regenerate,
        clearError: chatRef.current.clearError,
        stop: chatRef.current.stop,
        error,
        resumeStream: chatRef.current.resumeStream,
        status,
        /**
     * @deprecated Use `addToolOutput` instead.
     */ addToolResult: chatRef.current.addToolOutput,
        addToolOutput: chatRef.current.addToolOutput
    };
}
;
;
;
function useCompletion({ api = "/api/completion", id, initialCompletion = "", initialInput = "", credentials, headers, body, streamProtocol = "data", fetch: fetch2, onFinish, onError, experimental_throttle: throttleWaitMs } = {}) {
    const hookId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const completionId = id || hookId;
    const { data, mutate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])([
        api,
        completionId
    ], null, {
        fallbackData: initialCompletion
    });
    const { data: isLoading = false, mutate: mutateLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])([
        completionId,
        "loading"
    ], null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(void 0);
    const completion = data;
    const [abortController, setAbortController] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const extraMetadataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        credentials,
        headers,
        body
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCompletion.useEffect2": ()=>{
            extraMetadataRef.current = {
                credentials,
                headers,
                body
            };
        }
    }["useCompletion.useEffect2"], [
        credentials,
        headers,
        body
    ]);
    const triggerRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCompletion.useCallback2[triggerRequest]": async (prompt, options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["callCompletionApi"])({
                api,
                prompt,
                credentials: extraMetadataRef.current.credentials,
                headers: {
                    ...extraMetadataRef.current.headers,
                    ...options == null ? void 0 : options.headers
                },
                body: {
                    ...extraMetadataRef.current.body,
                    ...options == null ? void 0 : options.body
                },
                streamProtocol,
                fetch: fetch2,
                // throttle streamed ui updates:
                setCompletion: throttle({
                    "useCompletion.useCallback2[triggerRequest]": (completion2)=>mutate(completion2, false)
                }["useCompletion.useCallback2[triggerRequest]"], throttleWaitMs),
                setLoading: mutateLoading,
                setError,
                setAbortController,
                onFinish,
                onError
            })
    }["useCompletion.useCallback2[triggerRequest]"], [
        mutate,
        mutateLoading,
        api,
        extraMetadataRef,
        setAbortController,
        onFinish,
        onError,
        setError,
        streamProtocol,
        fetch2,
        throttleWaitMs
    ]);
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCompletion.useCallback2[stop]": ()=>{
            if (abortController) {
                abortController.abort();
                setAbortController(null);
            }
        }
    }["useCompletion.useCallback2[stop]"], [
        abortController
    ]);
    const setCompletion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCompletion.useCallback2[setCompletion]": (completion2)=>{
            mutate(completion2, false);
        }
    }["useCompletion.useCallback2[setCompletion]"], [
        mutate
    ]);
    const complete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCompletion.useCallback2[complete]": async (prompt, options)=>{
            return triggerRequest(prompt, options);
        }
    }["useCompletion.useCallback2[complete]"], [
        triggerRequest
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialInput);
    const handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCompletion.useCallback2[handleSubmit]": (event)=>{
            var _a;
            (_a = event == null ? void 0 : event.preventDefault) == null ? void 0 : _a.call(event);
            return input ? complete(input) : void 0;
        }
    }["useCompletion.useCallback2[handleSubmit]"], [
        input,
        complete
    ]);
    const handleInputChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCompletion.useCallback2[handleInputChange]": (e)=>{
            setInput(e.target.value);
        }
    }["useCompletion.useCallback2[handleInputChange]"], [
        setInput
    ]);
    return {
        completion,
        complete,
        error,
        setCompletion,
        stop,
        input,
        setInput,
        handleInputChange,
        handleSubmit,
        isLoading
    };
}
;
;
;
;
var getOriginalFetch = ()=>fetch;
function useObject({ api, id, schema, // required, in the future we will use it for validation
initialValue, fetch: fetch2, onError, onFinish, headers, credentials }) {
    const hookId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const completionId = id != null ? id : hookId;
    const { data, mutate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])([
        api,
        completionId
    ], null, {
        fallbackData: initialValue
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(void 0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useObject.useCallback3[stop]": ()=>{
            var _a;
            try {
                (_a = abortControllerRef.current) == null ? void 0 : _a.abort();
            } catch (ignored) {} finally{
                setIsLoading(false);
                abortControllerRef.current = null;
            }
        }
    }["useObject.useCallback3[stop]"], []);
    const submit = async (input)=>{
        var _a;
        try {
            clearObject();
            setIsLoading(true);
            const abortController = new AbortController();
            abortControllerRef.current = abortController;
            const actualFetch = fetch2 != null ? fetch2 : getOriginalFetch();
            const response = await actualFetch(api, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...headers
                },
                credentials,
                signal: abortController.signal,
                body: JSON.stringify(input)
            });
            if (!response.ok) {
                throw new Error((_a = await response.text()) != null ? _a : "Failed to fetch the response.");
            }
            if (response.body == null) {
                throw new Error("The response body is empty.");
            }
            let accumulatedText = "";
            let latestObject = void 0;
            await response.body.pipeThrough(new TextDecoderStream()).pipeTo(new WritableStream({
                async write (chunk) {
                    accumulatedText += chunk;
                    const { value } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parsePartialJson"])(accumulatedText);
                    const currentObject = value;
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isDeepEqualData"])(latestObject, currentObject)) {
                        latestObject = currentObject;
                        mutate(currentObject);
                    }
                },
                async close () {
                    setIsLoading(false);
                    abortControllerRef.current = null;
                    if (onFinish != null) {
                        const validationResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["safeValidateTypes"])({
                            value: latestObject,
                            schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["asSchema"])(schema)
                        });
                        onFinish(validationResult.success ? {
                            object: validationResult.value,
                            error: void 0
                        } : {
                            object: void 0,
                            error: validationResult.error
                        });
                    }
                }
            }));
        } catch (error2) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAbortError"])(error2)) {
                return;
            }
            if (onError && error2 instanceof Error) {
                onError(error2);
            }
            setIsLoading(false);
            setError(error2 instanceof Error ? error2 : new Error(String(error2)));
        }
    };
    const clear = ()=>{
        stop();
        clearObject();
    };
    const clearObject = ()=>{
        setError(void 0);
        setIsLoading(false);
        mutate(void 0);
    };
    return {
        submit,
        object: data,
        error,
        isLoading,
        stop,
        clear
    };
}
var experimental_useObject = useObject;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Send
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Send = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Send", [
    [
        "path",
        {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }
    ],
    [
        "path",
        {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }
    ]
]);
;
 //# sourceMappingURL=send.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Send",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Bot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Bot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Bot", [
    [
        "path",
        {
            d: "M12 8V4H8",
            key: "hb8ula"
        }
    ],
    [
        "rect",
        {
            width: "16",
            height: "12",
            x: "4",
            y: "8",
            rx: "2",
            key: "enze0r"
        }
    ],
    [
        "path",
        {
            d: "M2 14h2",
            key: "vft8re"
        }
    ],
    [
        "path",
        {
            d: "M20 14h2",
            key: "4cs60a"
        }
    ],
    [
        "path",
        {
            d: "M15 13v2",
            key: "1xurst"
        }
    ],
    [
        "path",
        {
            d: "M9 13v2",
            key: "rq6x2g"
        }
    ]
]);
;
 //# sourceMappingURL=bot.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>LoaderCircle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const LoaderCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("LoaderCircle", [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
]);
;
 //# sourceMappingURL=loader-circle.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Copy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Copy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Copy", [
    [
        "rect",
        {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea"
        }
    ],
    [
        "path",
        {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf"
        }
    ]
]);
;
 //# sourceMappingURL=copy.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Copy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Check
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Check", [
    [
        "path",
        {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
]);
;
 //# sourceMappingURL=check.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ChevronDown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ChevronDown", [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-down.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDownIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ChevronUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ChevronUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ChevronUp", [
    [
        "path",
        {
            d: "m18 15-6-6-6 6",
            key: "153udz"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-up.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUpIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronUpIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Download
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Download = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Download", [
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ],
    [
        "polyline",
        {
            points: "7 10 12 15 17 10",
            key: "2ggqvy"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "15",
            y2: "3",
            key: "1vk2je"
        }
    ]
]);
;
 //# sourceMappingURL=download.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Download",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Mic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Mic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Mic", [
    [
        "path",
        {
            d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",
            key: "131961"
        }
    ],
    [
        "path",
        {
            d: "M19 10v2a7 7 0 0 1-14 0v-2",
            key: "1vc78b"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "19",
            y2: "22",
            key: "x3vr5v"
        }
    ]
]);
;
 //# sourceMappingURL=mic.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mic",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Square
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Square = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Square", [
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            key: "afitv7"
        }
    ]
]);
;
 //# sourceMappingURL=square.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Square",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Play
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Play", [
    [
        "polygon",
        {
            points: "6 3 20 12 6 21 6 3",
            key: "1oa8hb"
        }
    ]
]);
;
 //# sourceMappingURL=play.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Play",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Pause
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Pause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Pause", [
    [
        "rect",
        {
            x: "14",
            y: "4",
            width: "4",
            height: "16",
            rx: "1",
            key: "zuxfzm"
        }
    ],
    [
        "rect",
        {
            x: "6",
            y: "4",
            width: "4",
            height: "16",
            rx: "1",
            key: "1okwgv"
        }
    ]
]);
;
 //# sourceMappingURL=pause.js.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pause",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/number/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/core/number/src/number.ts
__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
function clamp(value, [min, max]) {
    return Math.min(max, Math.max(min, value));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/core/primitive/src/primitive.tsx
__turbopack_context__.s([
    "composeEventHandlers",
    ()=>composeEventHandlers
]);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
    return function handleEvent(event) {
        originalEventHandler?.(event);
        if (checkForDefaultPrevented === false || !event.defaultPrevented) {
            return ourEventHandler?.(event);
        }
    };
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/context/src/createContext.tsx
__turbopack_context__.s([
    "createContext",
    ()=>createContext2,
    "createContextScope",
    ()=>createContextScope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
function createContext2(rootComponentName, defaultContext) {
    const Context = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
    const Provider = (props)=>{
        const { children, ...context } = props;
        const value = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
            "createContext2.Provider.useMemo[value]": ()=>context
        }["createContext2.Provider.useMemo[value]"], Object.values(context));
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
            value,
            children
        });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName) {
        const context = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](Context);
        if (context) return context;
        if (defaultContext !== void 0) return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [
        Provider,
        useContext2
    ];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext3(rootComponentName, defaultContext) {
        const BaseContext = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        const Provider = (props)=>{
            const { scope, children, ...context } = props;
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const value = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "createContextScope.createContext3.Provider.useMemo[value]": ()=>context
            }["createContextScope.createContext3.Provider.useMemo[value]"], Object.values(context));
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
                value,
                children
            });
        };
        Provider.displayName = rootComponentName + "Provider";
        function useContext2(consumerName, scope) {
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const context = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](Context);
            if (context) return context;
            if (defaultContext !== void 0) return defaultContext;
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        return [
            Provider,
            useContext2
        ];
    }
    const createScope = ()=>{
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        });
        return function useScope(scope) {
            const contexts = scope?.[scopeName] || scopeContexts;
            return __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "createContextScope.createScope.useScope.useMemo": ()=>({
                        [`__scope${scopeName}`]: {
                            ...scope,
                            [scopeName]: contexts
                        }
                    })
            }["createContextScope.createScope.useScope.useMemo"], [
                scope,
                contexts
            ]);
        };
    };
    createScope.scopeName = scopeName;
    return [
        createContext3,
        composeContextScopes(createScope, ...createContextScopeDeps)
    ];
}
function composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope = ()=>{
        const scopeHooks = scopes.map((createScope2)=>({
                useScope: createScope2(),
                scopeName: createScope2.scopeName
            }));
        return function useComposedScopes(overrideScopes) {
            const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName })=>{
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes2,
                    ...currentScope
                };
            }, {});
            return __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "composeContextScopes.createScope.useComposedScopes.useMemo": ()=>({
                        [`__scope${baseScope.scopeName}`]: nextScopes
                    })
            }["composeContextScopes.createScope.useComposedScopes.useMemo"], [
                nextScopes
            ]);
        };
    };
    createScope.scopeName = baseScope.scopeName;
    return createScope;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-collection/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCollection",
    ()=>createCollection
]);
// packages/react/collection/src/Collection.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function createCollection(name) {
    const PROVIDER_NAME = name + "CollectionProvider";
    const [createCollectionContext, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])(PROVIDER_NAME);
    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionRef: {
            current: null
        },
        itemMap: /* @__PURE__ */ new Map()
    });
    const CollectionProvider = (props)=>{
        const { scope, children } = props;
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
        const itemMap = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(/* @__PURE__ */ new Map()).current;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CollectionProviderImpl, {
            scope,
            itemMap,
            collectionRef: ref,
            children
        });
    };
    CollectionProvider.displayName = PROVIDER_NAME;
    const COLLECTION_SLOT_NAME = name + "CollectionSlot";
    const CollectionSlot = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
        const { scope, children } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.collectionRef);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"], {
            ref: composedRefs,
            children
        });
    });
    CollectionSlot.displayName = COLLECTION_SLOT_NAME;
    const ITEM_SLOT_NAME = name + "CollectionItemSlot";
    const ITEM_DATA_ATTR = "data-radix-collection-item";
    const CollectionItemSlot = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
        const { scope, children, ...itemData } = props;
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
        const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
            "createCollection.CollectionItemSlot.useEffect": ()=>{
                context.itemMap.set(ref, {
                    ref,
                    ...itemData
                });
                return ({
                    "createCollection.CollectionItemSlot.useEffect": ()=>void context.itemMap.delete(ref)
                })["createCollection.CollectionItemSlot.useEffect"];
            }
        }["createCollection.CollectionItemSlot.useEffect"]);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"], {
            ...{
                [ITEM_DATA_ATTR]: ""
            },
            ref: composedRefs,
            children
        });
    });
    CollectionItemSlot.displayName = ITEM_SLOT_NAME;
    function useCollection(scope) {
        const context = useCollectionContext(name + "CollectionConsumer", scope);
        const getItems = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
            "createCollection.useCollection.useCallback[getItems]": ()=>{
                const collectionNode = context.collectionRef.current;
                if (!collectionNode) return [];
                const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
                const items = Array.from(context.itemMap.values());
                const orderedItems = items.sort({
                    "createCollection.useCollection.useCallback[getItems].orderedItems": (a, b)=>orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
                }["createCollection.useCollection.useCallback[getItems].orderedItems"]);
                return orderedItems;
            }
        }["createCollection.useCollection.useCallback[getItems]"], [
            context.collectionRef,
            context.itemMap
        ]);
        return getItems;
    }
    return [
        {
            Provider: CollectionProvider,
            Slot: CollectionSlot,
            ItemSlot: CollectionItemSlot
        },
        useCollection,
        createCollectionScope
    ];
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-direction/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/direction/src/Direction.tsx
__turbopack_context__.s([
    "DirectionProvider",
    ()=>DirectionProvider,
    "Provider",
    ()=>Provider,
    "useDirection",
    ()=>useDirection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
var DirectionContext = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](void 0);
var DirectionProvider = (props)=>{
    const { dir, children } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DirectionContext.Provider, {
        value: dir,
        children
    });
};
function useDirection(localDir) {
    const globalDir = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DirectionContext);
    return localDir || globalDir || "ltr";
}
var Provider = DirectionProvider;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/primitive/src/Primitive.tsx
__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-callback-ref/src/useCallbackRef.tsx
__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useCallbackRef(callback) {
    const callbackRef = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](callback);
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useCallbackRef.useEffect": ()=>{
            callbackRef.current = callback;
        }
    }["useCallbackRef.useEffect"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useCallbackRef.useMemo": ()=>({
                "useCallbackRef.useMemo": (...args)=>callbackRef.current?.(...args)
            })["useCallbackRef.useMemo"]
    }["useCallbackRef.useMemo"], []);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-escape-keydown/src/useEscapeKeydown.tsx
__turbopack_context__.s([
    "useEscapeKeydown",
    ()=>useEscapeKeydown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
;
;
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
    const onEscapeKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onEscapeKeyDownProp);
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useEscapeKeydown.useEffect": ()=>{
            const handleKeyDown = {
                "useEscapeKeydown.useEffect.handleKeyDown": (event)=>{
                    if (event.key === "Escape") {
                        onEscapeKeyDown(event);
                    }
                }
            }["useEscapeKeydown.useEffect.handleKeyDown"];
            ownerDocument.addEventListener("keydown", handleKeyDown, {
                capture: true
            });
            return ({
                "useEscapeKeydown.useEffect": ()=>ownerDocument.removeEventListener("keydown", handleKeyDown, {
                        capture: true
                    })
            })["useEscapeKeydown.useEffect"];
        }
    }["useEscapeKeydown.useEffect"], [
        onEscapeKeyDown,
        ownerDocument
    ]);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Branch",
    ()=>Branch,
    "DismissableLayer",
    ()=>DismissableLayer,
    "DismissableLayerBranch",
    ()=>DismissableLayerBranch,
    "Root",
    ()=>Root
]);
// packages/react/dismissable-layer/src/DismissableLayer.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$escape$2d$keydown$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DismissableLayerContext);
    const [node, setNode] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const ownerDocument = node?.ownerDocument ?? globalThis?.document;
    const [, force] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({});
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, {
        "DismissableLayer.useComposedRefs[composedRefs]": (node2)=>setNode(node2)
    }["DismissableLayer.useComposedRefs[composedRefs]"]);
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [
        ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside({
        "DismissableLayer.usePointerDownOutside[pointerDownOutside]": (event)=>{
            const target = event.target;
            const isPointerDownOnBranch = [
                ...context.branches
            ].some({
                "DismissableLayer.usePointerDownOutside[pointerDownOutside].isPointerDownOnBranch": (branch)=>branch.contains(target)
            }["DismissableLayer.usePointerDownOutside[pointerDownOutside].isPointerDownOnBranch"]);
            if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
            onPointerDownOutside?.(event);
            onInteractOutside?.(event);
            if (!event.defaultPrevented) onDismiss?.();
        }
    }["DismissableLayer.usePointerDownOutside[pointerDownOutside]"], ownerDocument);
    const focusOutside = useFocusOutside({
        "DismissableLayer.useFocusOutside[focusOutside]": (event)=>{
            const target = event.target;
            const isFocusInBranch = [
                ...context.branches
            ].some({
                "DismissableLayer.useFocusOutside[focusOutside].isFocusInBranch": (branch)=>branch.contains(target)
            }["DismissableLayer.useFocusOutside[focusOutside].isFocusInBranch"]);
            if (isFocusInBranch) return;
            onFocusOutside?.(event);
            onInteractOutside?.(event);
            if (!event.defaultPrevented) onDismiss?.();
        }
    }["DismissableLayer.useFocusOutside[focusOutside]"], ownerDocument);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$escape$2d$keydown$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEscapeKeydown"])({
        "DismissableLayer.useEscapeKeydown": (event)=>{
            const isHighestLayer = index === context.layers.size - 1;
            if (!isHighestLayer) return;
            onEscapeKeyDown?.(event);
            if (!event.defaultPrevented && onDismiss) {
                event.preventDefault();
                onDismiss();
            }
        }
    }["DismissableLayer.useEscapeKeydown"], ownerDocument);
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DismissableLayer.useEffect": ()=>{
            if (!node) return;
            if (disableOutsidePointerEvents) {
                if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
                    originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
                    ownerDocument.body.style.pointerEvents = "none";
                }
                context.layersWithOutsidePointerEventsDisabled.add(node);
            }
            context.layers.add(node);
            dispatchUpdate();
            return ({
                "DismissableLayer.useEffect": ()=>{
                    if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
                        ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
                    }
                }
            })["DismissableLayer.useEffect"];
        }
    }["DismissableLayer.useEffect"], [
        node,
        ownerDocument,
        disableOutsidePointerEvents,
        context
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DismissableLayer.useEffect": ()=>{
            return ({
                "DismissableLayer.useEffect": ()=>{
                    if (!node) return;
                    context.layers.delete(node);
                    context.layersWithOutsidePointerEventsDisabled.delete(node);
                    dispatchUpdate();
                }
            })["DismissableLayer.useEffect"];
        }
    }["DismissableLayer.useEffect"], [
        node,
        context
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DismissableLayer.useEffect": ()=>{
            const handleUpdate = {
                "DismissableLayer.useEffect.handleUpdate": ()=>force({})
            }["DismissableLayer.useEffect.handleUpdate"];
            document.addEventListener(CONTEXT_UPDATE, handleUpdate);
            return ({
                "DismissableLayer.useEffect": ()=>document.removeEventListener(CONTEXT_UPDATE, handleUpdate)
            })["DismissableLayer.useEffect"];
        }
    }["DismissableLayer.useEffect"], []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...layerProps,
        ref: composedRefs,
        style: {
            pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
            ...props.style
        },
        onFocusCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
    });
});
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DismissableLayerContext);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DismissableLayerBranch.useEffect": ()=>{
            const node = ref.current;
            if (node) {
                context.branches.add(node);
                return ({
                    "DismissableLayerBranch.useEffect": ()=>{
                        context.branches.delete(node);
                    }
                })["DismissableLayerBranch.useEffect"];
            }
        }
    }["DismissableLayerBranch.useEffect"], [
        context.branches
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...props,
        ref: composedRefs
    });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis?.document) {
    const handlePointerDownOutside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onPointerDownOutside);
    const isPointerInsideReactTreeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const handleClickRef = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({
        "usePointerDownOutside.useRef[handleClickRef]": ()=>{}
    }["usePointerDownOutside.useRef[handleClickRef]"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "usePointerDownOutside.useEffect": ()=>{
            const handlePointerDown = {
                "usePointerDownOutside.useEffect.handlePointerDown": (event)=>{
                    if (event.target && !isPointerInsideReactTreeRef.current) {
                        let handleAndDispatchPointerDownOutsideEvent2 = {
                            "usePointerDownOutside.useEffect.handlePointerDown.handleAndDispatchPointerDownOutsideEvent2": function() {
                                handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
                                    discrete: true
                                });
                            }
                        }["usePointerDownOutside.useEffect.handlePointerDown.handleAndDispatchPointerDownOutsideEvent2"];
                        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
                        const eventDetail = {
                            originalEvent: event
                        };
                        if (event.pointerType === "touch") {
                            ownerDocument.removeEventListener("click", handleClickRef.current);
                            handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
                            ownerDocument.addEventListener("click", handleClickRef.current, {
                                once: true
                            });
                        } else {
                            handleAndDispatchPointerDownOutsideEvent2();
                        }
                    } else {
                        ownerDocument.removeEventListener("click", handleClickRef.current);
                    }
                    isPointerInsideReactTreeRef.current = false;
                }
            }["usePointerDownOutside.useEffect.handlePointerDown"];
            const timerId = window.setTimeout({
                "usePointerDownOutside.useEffect.timerId": ()=>{
                    ownerDocument.addEventListener("pointerdown", handlePointerDown);
                }
            }["usePointerDownOutside.useEffect.timerId"], 0);
            return ({
                "usePointerDownOutside.useEffect": ()=>{
                    window.clearTimeout(timerId);
                    ownerDocument.removeEventListener("pointerdown", handlePointerDown);
                    ownerDocument.removeEventListener("click", handleClickRef.current);
                }
            })["usePointerDownOutside.useEffect"];
        }
    }["usePointerDownOutside.useEffect"], [
        ownerDocument,
        handlePointerDownOutside
    ]);
    return {
        // ensures we check React component tree (not just DOM tree)
        onPointerDownCapture: ()=>isPointerInsideReactTreeRef.current = true
    };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
    const handleFocusOutside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onFocusOutside);
    const isFocusInsideReactTreeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useFocusOutside.useEffect": ()=>{
            const handleFocus = {
                "useFocusOutside.useEffect.handleFocus": (event)=>{
                    if (event.target && !isFocusInsideReactTreeRef.current) {
                        const eventDetail = {
                            originalEvent: event
                        };
                        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
                            discrete: false
                        });
                    }
                }
            }["useFocusOutside.useEffect.handleFocus"];
            ownerDocument.addEventListener("focusin", handleFocus);
            return ({
                "useFocusOutside.useEffect": ()=>ownerDocument.removeEventListener("focusin", handleFocus)
            })["useFocusOutside.useEffect"];
        }
    }["useFocusOutside.useEffect"], [
        ownerDocument,
        handleFocusOutside
    ]);
    return {
        onFocusCapture: ()=>isFocusInsideReactTreeRef.current = true,
        onBlurCapture: ()=>isFocusInsideReactTreeRef.current = false
    };
}
function dispatchUpdate() {
    const event = new CustomEvent(CONTEXT_UPDATE);
    document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
    const target = detail.originalEvent.target;
    const event = new CustomEvent(name, {
        bubbles: false,
        cancelable: true,
        detail
    });
    if (handler) target.addEventListener(name, handler, {
        once: true
    });
    if (discrete) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispatchDiscreteCustomEvent"])(target, event);
    } else {
        target.dispatchEvent(event);
    }
}
var Root = DismissableLayer;
var Branch = DismissableLayerBranch;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-focus-guards/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusGuards",
    ()=>FocusGuards,
    "Root",
    ()=>Root,
    "useFocusGuards",
    ()=>useFocusGuards
]);
// packages/react/focus-guards/src/FocusGuards.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
var count = 0;
function FocusGuards(props) {
    useFocusGuards();
    return props.children;
}
function useFocusGuards() {
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useFocusGuards.useEffect": ()=>{
            const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
            document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
            document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
            count++;
            return ({
                "useFocusGuards.useEffect": ()=>{
                    if (count === 1) {
                        document.querySelectorAll("[data-radix-focus-guard]").forEach({
                            "useFocusGuards.useEffect": (node)=>node.remove()
                        }["useFocusGuards.useEffect"]);
                    }
                    count--;
                }
            })["useFocusGuards.useEffect"];
        }
    }["useFocusGuards.useEffect"], []);
}
function createFocusGuard() {
    const element = document.createElement("span");
    element.setAttribute("data-radix-focus-guard", "");
    element.tabIndex = 0;
    element.style.outline = "none";
    element.style.opacity = "0";
    element.style.position = "fixed";
    element.style.pointerEvents = "none";
    return element;
}
var Root = FocusGuards;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusScope",
    ()=>FocusScope,
    "Root",
    ()=>Root
]);
// packages/react/focus-scope/src/FocusScope.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
    const [container, setContainer] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const onMountAutoFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onMountAutoFocusProp);
    const onUnmountAutoFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onUnmountAutoFocusProp);
    const lastFocusedElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, {
        "FocusScope.useComposedRefs[composedRefs]": (node)=>setContainer(node)
    }["FocusScope.useComposedRefs[composedRefs]"]);
    const focusScope = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({
        paused: false,
        pause () {
            this.paused = true;
        },
        resume () {
            this.paused = false;
        }
    }).current;
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "FocusScope.useEffect": ()=>{
            if (trapped) {
                let handleFocusIn2 = {
                    "FocusScope.useEffect.handleFocusIn2": function(event) {
                        if (focusScope.paused || !container) return;
                        const target = event.target;
                        if (container.contains(target)) {
                            lastFocusedElementRef.current = target;
                        } else {
                            focus(lastFocusedElementRef.current, {
                                select: true
                            });
                        }
                    }
                }["FocusScope.useEffect.handleFocusIn2"], handleFocusOut2 = {
                    "FocusScope.useEffect.handleFocusOut2": function(event) {
                        if (focusScope.paused || !container) return;
                        const relatedTarget = event.relatedTarget;
                        if (relatedTarget === null) return;
                        if (!container.contains(relatedTarget)) {
                            focus(lastFocusedElementRef.current, {
                                select: true
                            });
                        }
                    }
                }["FocusScope.useEffect.handleFocusOut2"], handleMutations2 = {
                    "FocusScope.useEffect.handleMutations2": function(mutations) {
                        const focusedElement = document.activeElement;
                        if (focusedElement !== document.body) return;
                        for (const mutation of mutations){
                            if (mutation.removedNodes.length > 0) focus(container);
                        }
                    }
                }["FocusScope.useEffect.handleMutations2"];
                var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
                document.addEventListener("focusin", handleFocusIn2);
                document.addEventListener("focusout", handleFocusOut2);
                const mutationObserver = new MutationObserver(handleMutations2);
                if (container) mutationObserver.observe(container, {
                    childList: true,
                    subtree: true
                });
                return ({
                    "FocusScope.useEffect": ()=>{
                        document.removeEventListener("focusin", handleFocusIn2);
                        document.removeEventListener("focusout", handleFocusOut2);
                        mutationObserver.disconnect();
                    }
                })["FocusScope.useEffect"];
            }
        }
    }["FocusScope.useEffect"], [
        trapped,
        container,
        focusScope.paused
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "FocusScope.useEffect": ()=>{
            if (container) {
                focusScopesStack.add(focusScope);
                const previouslyFocusedElement = document.activeElement;
                const hasFocusedCandidate = container.contains(previouslyFocusedElement);
                if (!hasFocusedCandidate) {
                    const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
                    container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                    container.dispatchEvent(mountEvent);
                    if (!mountEvent.defaultPrevented) {
                        focusFirst(removeLinks(getTabbableCandidates(container)), {
                            select: true
                        });
                        if (document.activeElement === previouslyFocusedElement) {
                            focus(container);
                        }
                    }
                }
                return ({
                    "FocusScope.useEffect": ()=>{
                        container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                        setTimeout({
                            "FocusScope.useEffect": ()=>{
                                const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
                                container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                                container.dispatchEvent(unmountEvent);
                                if (!unmountEvent.defaultPrevented) {
                                    focus(previouslyFocusedElement ?? document.body, {
                                        select: true
                                    });
                                }
                                container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                                focusScopesStack.remove(focusScope);
                            }
                        }["FocusScope.useEffect"], 0);
                    }
                })["FocusScope.useEffect"];
            }
        }
    }["FocusScope.useEffect"], [
        container,
        onMountAutoFocus,
        onUnmountAutoFocus,
        focusScope
    ]);
    const handleKeyDown = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "FocusScope.useCallback[handleKeyDown]": (event)=>{
            if (!loop && !trapped) return;
            if (focusScope.paused) return;
            const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
            const focusedElement = document.activeElement;
            if (isTabKey && focusedElement) {
                const container2 = event.currentTarget;
                const [first, last] = getTabbableEdges(container2);
                const hasTabbableElementsInside = first && last;
                if (!hasTabbableElementsInside) {
                    if (focusedElement === container2) event.preventDefault();
                } else {
                    if (!event.shiftKey && focusedElement === last) {
                        event.preventDefault();
                        if (loop) focus(first, {
                            select: true
                        });
                    } else if (event.shiftKey && focusedElement === first) {
                        event.preventDefault();
                        if (loop) focus(last, {
                            select: true
                        });
                    }
                }
            }
        }
    }["FocusScope.useCallback[handleKeyDown]"], [
        loop,
        trapped,
        focusScope.paused
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        tabIndex: -1,
        ...scopeProps,
        ref: composedRefs,
        onKeyDown: handleKeyDown
    });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(candidates, { select = false } = {}) {
    const previouslyFocusedElement = document.activeElement;
    for (const candidate of candidates){
        focus(candidate, {
            select
        });
        if (document.activeElement !== previouslyFocusedElement) return;
    }
}
function getTabbableEdges(container) {
    const candidates = getTabbableCandidates(container);
    const first = findVisible(candidates, container);
    const last = findVisible(candidates.reverse(), container);
    return [
        first,
        last
    ];
}
function getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node)=>{
            const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
            if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    while(walker.nextNode())nodes.push(walker.currentNode);
    return nodes;
}
function findVisible(elements, container) {
    for (const element of elements){
        if (!isHidden(element, {
            upTo: container
        })) return element;
    }
}
function isHidden(node, { upTo }) {
    if (getComputedStyle(node).visibility === "hidden") return true;
    while(node){
        if (upTo !== void 0 && node === upTo) return false;
        if (getComputedStyle(node).display === "none") return true;
        node = node.parentElement;
    }
    return false;
}
function isSelectableInput(element) {
    return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
    if (element && element.focus) {
        const previouslyFocusedElement = document.activeElement;
        element.focus({
            preventScroll: true
        });
        if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
    }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
    let stack = [];
    return {
        add (focusScope) {
            const activeFocusScope = stack[0];
            if (focusScope !== activeFocusScope) {
                activeFocusScope?.pause();
            }
            stack = arrayRemove(stack, focusScope);
            stack.unshift(focusScope);
        },
        remove (focusScope) {
            stack = arrayRemove(stack, focusScope);
            stack[0]?.resume();
        }
    };
}
function arrayRemove(array, item) {
    const updatedArray = [
        ...array
    ];
    const index = updatedArray.indexOf(item);
    if (index !== -1) {
        updatedArray.splice(index, 1);
    }
    return updatedArray;
}
function removeLinks(items) {
    return items.filter((item)=>item.tagName !== "A");
}
var Root = FocusScope;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-layout-effect/src/useLayoutEffect.tsx
__turbopack_context__.s([
    "useLayoutEffect",
    ()=>useLayoutEffect2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var useLayoutEffect2 = Boolean(globalThis?.document) ? __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : ()=>{};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-id/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/id/src/id.tsx
__turbopack_context__.s([
    "useId",
    ()=>useId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
;
;
var useReactId = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId".toString()] || (()=>void 0);
var count = 0;
function useId(deterministicId) {
    const [id, setId] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(useReactId());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useId.useLayoutEffect": ()=>{
            if (!deterministicId) setId({
                "useId.useLayoutEffect": (reactId)=>reactId ?? String(count++)
            }["useId.useLayoutEffect"]);
        }
    }["useId.useLayoutEffect"], [
        deterministicId
    ]);
    return deterministicId || (id ? `radix-${id}` : "");
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */ __turbopack_context__.s([
    "alignments",
    ()=>alignments,
    "clamp",
    ()=>clamp,
    "createCoords",
    ()=>createCoords,
    "evaluate",
    ()=>evaluate,
    "expandPaddingObject",
    ()=>expandPaddingObject,
    "floor",
    ()=>floor,
    "getAlignment",
    ()=>getAlignment,
    "getAlignmentAxis",
    ()=>getAlignmentAxis,
    "getAlignmentSides",
    ()=>getAlignmentSides,
    "getAxisLength",
    ()=>getAxisLength,
    "getExpandedPlacements",
    ()=>getExpandedPlacements,
    "getOppositeAlignmentPlacement",
    ()=>getOppositeAlignmentPlacement,
    "getOppositeAxis",
    ()=>getOppositeAxis,
    "getOppositeAxisPlacements",
    ()=>getOppositeAxisPlacements,
    "getOppositePlacement",
    ()=>getOppositePlacement,
    "getPaddingObject",
    ()=>getPaddingObject,
    "getSide",
    ()=>getSide,
    "getSideAxis",
    ()=>getSideAxis,
    "max",
    ()=>max,
    "min",
    ()=>min,
    "placements",
    ()=>placements,
    "rectToClientRect",
    ()=>rectToClientRect,
    "round",
    ()=>round,
    "sides",
    ()=>sides
]);
const sides = [
    'top',
    'right',
    'bottom',
    'left'
];
const alignments = [
    'start',
    'end'
];
const placements = /*#__PURE__*/ sides.reduce((acc, side)=>acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v)=>({
        x: v,
        y: v
    });
const oppositeSideMap = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
const oppositeAlignmentMap = {
    start: 'end',
    end: 'start'
};
function clamp(start, value, end) {
    return max(start, min(value, end));
}
function evaluate(value, param) {
    return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
    return placement.split('-')[0];
}
function getAlignment(placement) {
    return placement.split('-')[1];
}
function getOppositeAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
    return axis === 'y' ? 'height' : 'width';
}
const yAxisSides = /*#__PURE__*/ new Set([
    'top',
    'bottom'
]);
function getSideAxis(placement) {
    return yAxisSides.has(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
        rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
    if (rects.reference[length] > rects.floating[length]) {
        mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [
        mainAlignmentSide,
        getOppositePlacement(mainAlignmentSide)
    ];
}
function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [
        getOppositeAlignmentPlacement(placement),
        oppositePlacement,
        getOppositeAlignmentPlacement(oppositePlacement)
    ];
}
function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment)=>oppositeAlignmentMap[alignment]);
}
const lrPlacement = [
    'left',
    'right'
];
const rlPlacement = [
    'right',
    'left'
];
const tbPlacement = [
    'top',
    'bottom'
];
const btPlacement = [
    'bottom',
    'top'
];
function getSideList(side, isStart, rtl) {
    switch(side){
        case 'top':
        case 'bottom':
            if (rtl) return isStart ? rlPlacement : lrPlacement;
            return isStart ? lrPlacement : rlPlacement;
        case 'left':
        case 'right':
            return isStart ? tbPlacement : btPlacement;
        default:
            return [];
    }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === 'start', rtl);
    if (alignment) {
        list = list.map((side)=>side + "-" + alignment);
        if (flipAlignment) {
            list = list.concat(list.map(getOppositeAlignmentPlacement));
        }
    }
    return list;
}
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side)=>oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...padding
    };
}
function getPaddingObject(padding) {
    return typeof padding !== 'number' ? expandPaddingObject(padding) : {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
    };
}
function rectToClientRect(rect) {
    const { x, y, width, height } = rect;
    return {
        width,
        height,
        top: y,
        left: x,
        right: x + width,
        bottom: y + height,
        x,
        y
    };
}
;
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getComputedStyle",
    ()=>getComputedStyle,
    "getContainingBlock",
    ()=>getContainingBlock,
    "getDocumentElement",
    ()=>getDocumentElement,
    "getFrameElement",
    ()=>getFrameElement,
    "getNearestOverflowAncestor",
    ()=>getNearestOverflowAncestor,
    "getNodeName",
    ()=>getNodeName,
    "getNodeScroll",
    ()=>getNodeScroll,
    "getOverflowAncestors",
    ()=>getOverflowAncestors,
    "getParentNode",
    ()=>getParentNode,
    "getWindow",
    ()=>getWindow,
    "isContainingBlock",
    ()=>isContainingBlock,
    "isElement",
    ()=>isElement,
    "isHTMLElement",
    ()=>isHTMLElement,
    "isLastTraversableNode",
    ()=>isLastTraversableNode,
    "isNode",
    ()=>isNode,
    "isOverflowElement",
    ()=>isOverflowElement,
    "isShadowRoot",
    ()=>isShadowRoot,
    "isTableElement",
    ()=>isTableElement,
    "isTopLayer",
    ()=>isTopLayer,
    "isWebKit",
    ()=>isWebKit
]);
function hasWindow() {
    return typeof window !== 'undefined';
}
function getNodeName(node) {
    if (isNode(node)) {
        return (node.nodeName || '').toLowerCase();
    }
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
}
function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
    if (!hasWindow()) {
        return false;
    }
    return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
    if (!hasWindow()) {
        return false;
    }
    return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
    if (!hasWindow()) {
        return false;
    }
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === 'undefined') {
        return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
const invalidOverflowDisplayValues = /*#__PURE__*/ new Set([
    'inline',
    'contents'
]);
function isOverflowElement(element) {
    const { overflow, overflowX, overflowY, display } = getComputedStyle(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
const tableElements = /*#__PURE__*/ new Set([
    'table',
    'td',
    'th'
]);
function isTableElement(element) {
    return tableElements.has(getNodeName(element));
}
const topLayerSelectors = [
    ':popover-open',
    ':modal'
];
function isTopLayer(element) {
    return topLayerSelectors.some((selector)=>{
        try {
            return element.matches(selector);
        } catch (_e) {
            return false;
        }
    });
}
const transformProperties = [
    'transform',
    'translate',
    'scale',
    'rotate',
    'perspective'
];
const willChangeValues = [
    'transform',
    'translate',
    'scale',
    'rotate',
    'perspective',
    'filter'
];
const containValues = [
    'paint',
    'layout',
    'strict',
    'content'
];
function isContainingBlock(elementOrCss) {
    const webkit = isWebKit();
    const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    // https://drafts.csswg.org/css-transforms-2/#individual-transforms
    return transformProperties.some((value)=>css[value] ? css[value] !== 'none' : false) || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || willChangeValues.some((value)=>(css.willChange || '').includes(value)) || containValues.some((value)=>(css.contain || '').includes(value));
}
function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while(isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)){
        if (isContainingBlock(currentNode)) {
            return currentNode;
        } else if (isTopLayer(currentNode)) {
            return null;
        }
        currentNode = getParentNode(currentNode);
    }
    return null;
}
function isWebKit() {
    if (typeof CSS === 'undefined' || !CSS.supports) return false;
    return CSS.supports('-webkit-backdrop-filter', 'none');
}
const lastTraversableNodeNames = /*#__PURE__*/ new Set([
    'html',
    'body',
    '#document'
]);
function isLastTraversableNode(node) {
    return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
    if (isElement(element)) {
        return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
        };
    }
    return {
        scrollLeft: element.scrollX,
        scrollTop: element.scrollY
    };
}
function getParentNode(node) {
    if (getNodeName(node) === 'html') {
        return node;
    }
    const result = // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
        return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
        return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
        list = [];
    }
    if (traverseIframes === void 0) {
        traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
        const frameElement = getFrameElement(win);
        return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
;
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@floating-ui/core/dist/floating-ui.core.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrow",
    ()=>arrow,
    "autoPlacement",
    ()=>autoPlacement,
    "computePosition",
    ()=>computePosition,
    "detectOverflow",
    ()=>detectOverflow,
    "flip",
    ()=>flip,
    "hide",
    ()=>hide,
    "inline",
    ()=>inline,
    "limitShift",
    ()=>limitShift,
    "offset",
    ()=>offset,
    "shift",
    ()=>shift,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs [app-client] (ecmascript)");
;
;
function computeCoordsFromPlacement(_ref, placement, rtl) {
    let { reference, floating } = _ref;
    const sideAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement);
    const alignmentAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignmentAxis"])(placement);
    const alignLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAxisLength"])(alignmentAxis);
    const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement);
    const isVertical = sideAxis === 'y';
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch(side){
        case 'top':
            coords = {
                x: commonX,
                y: reference.y - floating.height
            };
            break;
        case 'bottom':
            coords = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 'right':
            coords = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 'left':
            coords = {
                x: reference.x - floating.width,
                y: commonY
            };
            break;
        default:
            coords = {
                x: reference.x,
                y: reference.y
            };
    }
    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement)){
        case 'start':
            coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
            break;
        case 'end':
            coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
            break;
    }
    return coords;
}
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */ const computePosition = async (reference, floating, config)=>{
    const { placement = 'bottom', strategy = 'absolute', middleware = [], platform } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
    let rects = await platform.getElementRects({
        reference,
        floating,
        strategy
    });
    let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for(let i = 0; i < validMiddleware.length; i++){
        const { name, fn } = validMiddleware[i];
        const { x: nextX, y: nextY, data, reset } = await fn({
            x,
            y,
            initialPlacement: placement,
            placement: statefulPlacement,
            strategy,
            middlewareData,
            rects,
            platform,
            elements: {
                reference,
                floating
            }
        });
        x = nextX != null ? nextX : x;
        y = nextY != null ? nextY : y;
        middlewareData = {
            ...middlewareData,
            [name]: {
                ...middlewareData[name],
                ...data
            }
        };
        if (reset && resetCount <= 50) {
            resetCount++;
            if (typeof reset === 'object') {
                if (reset.placement) {
                    statefulPlacement = reset.placement;
                }
                if (reset.rects) {
                    rects = reset.rects === true ? await platform.getElementRects({
                        reference,
                        floating,
                        strategy
                    }) : reset.rects;
                }
                ({ x, y } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
            }
            i = -1;
        }
    }
    return {
        x,
        y,
        placement: statefulPlacement,
        strategy,
        middlewareData
    };
};
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
        options = {};
    }
    const { x, y, platform, rects, elements, strategy } = state;
    const { boundary = 'clippingAncestors', rootBoundary = 'viewport', elementContext = 'floating', altBoundary = false, padding = 0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
    const paddingObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaddingObject"])(padding);
    const altContext = elementContext === 'floating' ? 'reference' : 'floating';
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(await platform.getClippingRect({
        element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
        boundary,
        rootBoundary,
        strategy
    }));
    const rect = elementContext === 'floating' ? {
        x,
        y,
        width: rects.floating.width,
        height: rects.floating.height
    } : rects.reference;
    const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
    const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) ? await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    };
    const elementClientRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements,
        rect,
        offsetParent,
        strategy
    }) : rect);
    return {
        top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
        bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
        left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
        right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
}
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = (options)=>({
        name: 'arrow',
        options,
        async fn (state) {
            const { x, y, placement, rects, platform, elements, middlewareData } = state;
            // Since `element` is required, we don't Partial<> the type.
            const { element, padding = 0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state) || {};
            if (element == null) {
                return {};
            }
            const paddingObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaddingObject"])(padding);
            const coords = {
                x,
                y
            };
            const axis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignmentAxis"])(placement);
            const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAxisLength"])(axis);
            const arrowDimensions = await platform.getDimensions(element);
            const isYAxis = axis === 'y';
            const minProp = isYAxis ? 'top' : 'left';
            const maxProp = isYAxis ? 'bottom' : 'right';
            const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
            const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
            const startDiff = coords[axis] - rects.reference[axis];
            const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
            let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
            // DOM platform can return `window` as the `offsetParent`.
            if (!clientSize || !await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) {
                clientSize = elements.floating[clientProp] || rects.floating[length];
            }
            const centerToReference = endDiff / 2 - startDiff / 2;
            // If the padding is large enough that it causes the arrow to no longer be
            // centered, modify the padding so that it is centered.
            const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
            const minPadding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(paddingObject[minProp], largestPossiblePadding);
            const maxPadding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(paddingObject[maxProp], largestPossiblePadding);
            // Make sure the arrow doesn't overflow the floating element if the center
            // point is outside the floating element's bounds.
            const min$1 = minPadding;
            const max = clientSize - arrowDimensions[length] - maxPadding;
            const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
            const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(min$1, center, max);
            // If the reference is small enough that the arrow's padding causes it to
            // to point to nothing for an aligned placement, adjust the offset of the
            // floating element itself. To ensure `shift()` continues to take action,
            // a single reset is performed when this is true.
            const shouldAddOffset = !middlewareData.arrow && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
            const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
            return {
                [axis]: coords[axis] + alignmentOffset,
                data: {
                    [axis]: offset,
                    centerOffset: center - offset - alignmentOffset,
                    ...shouldAddOffset && {
                        alignmentOffset
                    }
                },
                reset: shouldAddOffset
            };
        }
    });
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
    const allowedPlacementsSortedByAlignment = alignment ? [
        ...allowedPlacements.filter((placement)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement) === alignment),
        ...allowedPlacements.filter((placement)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement) !== alignment)
    ] : allowedPlacements.filter((placement)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement) === placement);
    return allowedPlacementsSortedByAlignment.filter((placement)=>{
        if (alignment) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement) === alignment || (autoAlignment ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositeAlignmentPlacement"])(placement) !== placement : false);
        }
        return true;
    });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'autoPlacement',
        options,
        async fn (state) {
            var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
            const { rects, middlewareData, placement, platform, elements } = state;
            const { crossAxis = false, alignment, allowedPlacements = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placements"], autoAlignment = true, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const placements$1 = alignment !== undefined || allowedPlacements === __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placements"] ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
            const currentPlacement = placements$1[currentIndex];
            if (currentPlacement == null) {
                return {};
            }
            const alignmentSides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignmentSides"])(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
            // Make `computeCoords` start from the right place.
            if (placement !== currentPlacement) {
                return {
                    reset: {
                        placement: placements$1[0]
                    }
                };
            }
            const currentOverflows = [
                overflow[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(currentPlacement)],
                overflow[alignmentSides[0]],
                overflow[alignmentSides[1]]
            ];
            const allOverflows = [
                ...((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || [],
                {
                    placement: currentPlacement,
                    overflows: currentOverflows
                }
            ];
            const nextPlacement = placements$1[currentIndex + 1];
            // There are more placements to check.
            if (nextPlacement) {
                return {
                    data: {
                        index: currentIndex + 1,
                        overflows: allOverflows
                    },
                    reset: {
                        placement: nextPlacement
                    }
                };
            }
            const placementsSortedByMostSpace = allOverflows.map((d)=>{
                const alignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(d.placement);
                return [
                    d.placement,
                    alignment && crossAxis ? // Check along the mainAxis and main crossAxis side.
                    d.overflows.slice(0, 2).reduce((acc, v)=>acc + v, 0) : // Check only the mainAxis.
                    d.overflows[0],
                    d.overflows
                ];
            }).sort((a, b)=>a[1] - b[1]);
            const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter((d)=>d[2].slice(0, // Aligned placements should not check their opposite crossAxis
                // side.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(d[0]) ? 2 : 3).every((v)=>v <= 0));
            const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
            if (resetPlacement !== placement) {
                return {
                    data: {
                        index: currentIndex + 1,
                        overflows: allOverflows
                    },
                    reset: {
                        placement: resetPlacement
                    }
                };
            }
            return {};
        }
    };
};
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'flip',
        options,
        async fn (state) {
            var _middlewareData$arrow, _middlewareData$flip;
            const { placement, middlewareData, rects, initialPlacement, platform, elements } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy = 'bestFit', fallbackAxisSideDirection = 'none', flipAlignment = true, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            // If a reset by the arrow was caused due to an alignment offset being
            // added, we should skip any logic now since `flip()` has already done its
            // work.
            // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
            if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
                return {};
            }
            const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement);
            const initialSideAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(initialPlacement);
            const isBasePlacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(initialPlacement) === initialPlacement;
            const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
            const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositePlacement"])(initialPlacement)
            ] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExpandedPlacements"])(initialPlacement));
            const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
            if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
                fallbackPlacements.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositeAxisPlacements"])(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
            }
            const placements = [
                initialPlacement,
                ...fallbackPlacements
            ];
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const overflows = [];
            let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
            if (checkMainAxis) {
                overflows.push(overflow[side]);
            }
            if (checkCrossAxis) {
                const sides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignmentSides"])(placement, rects, rtl);
                overflows.push(overflow[sides[0]], overflow[sides[1]]);
            }
            overflowsData = [
                ...overflowsData,
                {
                    placement,
                    overflows
                }
            ];
            // One or more sides is overflowing.
            if (!overflows.every((side)=>side <= 0)) {
                var _middlewareData$flip2, _overflowsData$filter;
                const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
                const nextPlacement = placements[nextIndex];
                if (nextPlacement) {
                    const ignoreCrossAxisOverflow = checkCrossAxis === 'alignment' ? initialSideAxis !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(nextPlacement) : false;
                    if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
                    // overflows the main axis.
                    overflowsData.every((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
                        // Try next placement and re-run the lifecycle.
                        return {
                            data: {
                                index: nextIndex,
                                overflows: overflowsData
                            },
                            reset: {
                                placement: nextPlacement
                            }
                        };
                    }
                }
                // First, find the candidates that fit on the mainAxis side of overflow,
                // then find the placement that fits the best on the main crossAxis side.
                let resetPlacement = (_overflowsData$filter = overflowsData.filter((d)=>d.overflows[0] <= 0).sort((a, b)=>a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
                // Otherwise fallback.
                if (!resetPlacement) {
                    switch(fallbackStrategy){
                        case 'bestFit':
                            {
                                var _overflowsData$filter2;
                                const placement = (_overflowsData$filter2 = overflowsData.filter((d)=>{
                                    if (hasFallbackAxisSideDirection) {
                                        const currentSideAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(d.placement);
                                        return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                                        // reading directions favoring greater width.
                                        currentSideAxis === 'y';
                                    }
                                    return true;
                                }).map((d)=>[
                                        d.placement,
                                        d.overflows.filter((overflow)=>overflow > 0).reduce((acc, overflow)=>acc + overflow, 0)
                                    ]).sort((a, b)=>a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                                if (placement) {
                                    resetPlacement = placement;
                                }
                                break;
                            }
                        case 'initialPlacement':
                            resetPlacement = initialPlacement;
                            break;
                    }
                }
                if (placement !== resetPlacement) {
                    return {
                        reset: {
                            placement: resetPlacement
                        }
                    };
                }
            }
            return {};
        }
    };
};
function getSideOffsets(overflow, rect) {
    return {
        top: overflow.top - rect.height,
        right: overflow.right - rect.width,
        bottom: overflow.bottom - rect.height,
        left: overflow.left - rect.width
    };
}
function isAnySideFullyClipped(overflow) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sides"].some((side)=>overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'hide',
        options,
        async fn (state) {
            const { rects } = state;
            const { strategy = 'referenceHidden', ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            switch(strategy){
                case 'referenceHidden':
                    {
                        const overflow = await detectOverflow(state, {
                            ...detectOverflowOptions,
                            elementContext: 'reference'
                        });
                        const offsets = getSideOffsets(overflow, rects.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: offsets,
                                referenceHidden: isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                case 'escaped':
                    {
                        const overflow = await detectOverflow(state, {
                            ...detectOverflowOptions,
                            altBoundary: true
                        });
                        const offsets = getSideOffsets(overflow, rects.floating);
                        return {
                            data: {
                                escapedOffsets: offsets,
                                escaped: isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                default:
                    {
                        return {};
                    }
            }
        }
    };
};
function getBoundingRect(rects) {
    const minX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(...rects.map((rect)=>rect.left));
    const minY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(...rects.map((rect)=>rect.top));
    const maxX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(...rects.map((rect)=>rect.right));
    const maxY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(...rects.map((rect)=>rect.bottom));
    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
    };
}
function getRectsByLine(rects) {
    const sortedRects = rects.slice().sort((a, b)=>a.y - b.y);
    const groups = [];
    let prevRect = null;
    for(let i = 0; i < sortedRects.length; i++){
        const rect = sortedRects[i];
        if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
            groups.push([
                rect
            ]);
        } else {
            groups[groups.length - 1].push(rect);
        }
        prevRect = rect;
    }
    return groups.map((rect)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'inline',
        options,
        async fn (state) {
            const { placement, elements, rects, platform, strategy } = state;
            // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
            // ClientRect's bounds, despite the event listener being triggered. A
            // padding of 2 seems to handle this issue.
            const { padding = 2, x, y } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const nativeClientRects = Array.from(await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference)) || []);
            const clientRects = getRectsByLine(nativeClientRects);
            const fallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(getBoundingRect(nativeClientRects));
            const paddingObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaddingObject"])(padding);
            function getBoundingClientRect() {
                // There are two rects and they are disjoined.
                if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
                    // Find the first rect in which the point is fully inside.
                    return clientRects.find((rect)=>x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
                }
                // There are 2 or more connected rects.
                if (clientRects.length >= 2) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement) === 'y') {
                        const firstRect = clientRects[0];
                        const lastRect = clientRects[clientRects.length - 1];
                        const isTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement) === 'top';
                        const top = firstRect.top;
                        const bottom = lastRect.bottom;
                        const left = isTop ? firstRect.left : lastRect.left;
                        const right = isTop ? firstRect.right : lastRect.right;
                        const width = right - left;
                        const height = bottom - top;
                        return {
                            top,
                            bottom,
                            left,
                            right,
                            width,
                            height,
                            x: left,
                            y: top
                        };
                    }
                    const isLeftSide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement) === 'left';
                    const maxRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(...clientRects.map((rect)=>rect.right));
                    const minLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(...clientRects.map((rect)=>rect.left));
                    const measureRects = clientRects.filter((rect)=>isLeftSide ? rect.left === minLeft : rect.right === maxRight);
                    const top = measureRects[0].top;
                    const bottom = measureRects[measureRects.length - 1].bottom;
                    const left = minLeft;
                    const right = maxRight;
                    const width = right - left;
                    const height = bottom - top;
                    return {
                        top,
                        bottom,
                        left,
                        right,
                        width,
                        height,
                        x: left,
                        y: top
                    };
                }
                return fallback;
            }
            const resetRects = await platform.getElementRects({
                reference: {
                    getBoundingClientRect
                },
                floating: elements.floating,
                strategy
            });
            if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
                return {
                    reset: {
                        rects: resetRects
                    }
                };
            }
            return {};
        }
    };
};
const originSides = /*#__PURE__*/ new Set([
    'left',
    'top'
]);
// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.
async function convertValueToCoords(state, options) {
    const { placement, platform, elements } = state;
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
    const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement);
    const alignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement);
    const isVertical = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement) === 'y';
    const mainAxisMulti = originSides.has(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
    // eslint-disable-next-line prefer-const
    let { mainAxis, crossAxis, alignmentAxis } = typeof rawValue === 'number' ? {
        mainAxis: rawValue,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: rawValue.mainAxis || 0,
        crossAxis: rawValue.crossAxis || 0,
        alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === 'number') {
        crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
        x: crossAxis * crossAxisMulti,
        y: mainAxis * mainAxisMulti
    } : {
        x: mainAxis * mainAxisMulti,
        y: crossAxis * crossAxisMulti
    };
}
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = function(options) {
    if (options === void 0) {
        options = 0;
    }
    return {
        name: 'offset',
        options,
        async fn (state) {
            var _middlewareData$offse, _middlewareData$arrow;
            const { x, y, placement, middlewareData } = state;
            const diffCoords = await convertValueToCoords(state, options);
            // If the placement is the same and the arrow caused an alignment offset
            // then we don't need to change the positioning coordinates.
            if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
                return {};
            }
            return {
                x: x + diffCoords.x,
                y: y + diffCoords.y,
                data: {
                    ...diffCoords,
                    placement
                }
            };
        }
    };
};
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'shift',
        options,
        async fn (state) {
            const { x, y, placement } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = false, limiter = {
                fn: (_ref)=>{
                    let { x, y } = _ref;
                    return {
                        x,
                        y
                    };
                }
            }, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const coords = {
                x,
                y
            };
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const crossAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement));
            const mainAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositeAxis"])(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            if (checkMainAxis) {
                const minSide = mainAxis === 'y' ? 'top' : 'left';
                const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
                const min = mainAxisCoord + overflow[minSide];
                const max = mainAxisCoord - overflow[maxSide];
                mainAxisCoord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(min, mainAxisCoord, max);
            }
            if (checkCrossAxis) {
                const minSide = crossAxis === 'y' ? 'top' : 'left';
                const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
                const min = crossAxisCoord + overflow[minSide];
                const max = crossAxisCoord - overflow[maxSide];
                crossAxisCoord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(min, crossAxisCoord, max);
            }
            const limitedCoords = limiter.fn({
                ...state,
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            });
            return {
                ...limitedCoords,
                data: {
                    x: limitedCoords.x - x,
                    y: limitedCoords.y - y,
                    enabled: {
                        [mainAxis]: checkMainAxis,
                        [crossAxis]: checkCrossAxis
                    }
                }
            };
        }
    };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        options,
        fn (state) {
            const { x, y, placement, rects, middlewareData } = state;
            const { offset = 0, mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const coords = {
                x,
                y
            };
            const crossAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement);
            const mainAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositeAxis"])(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            const rawOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(offset, state);
            const computedOffset = typeof rawOffset === 'number' ? {
                mainAxis: rawOffset,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...rawOffset
            };
            if (checkMainAxis) {
                const len = mainAxis === 'y' ? 'height' : 'width';
                const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
                const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
                if (mainAxisCoord < limitMin) {
                    mainAxisCoord = limitMin;
                } else if (mainAxisCoord > limitMax) {
                    mainAxisCoord = limitMax;
                }
            }
            if (checkCrossAxis) {
                var _middlewareData$offse, _middlewareData$offse2;
                const len = mainAxis === 'y' ? 'width' : 'height';
                const isOriginSide = originSides.has((0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement));
                const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
                const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
                if (crossAxisCoord < limitMin) {
                    crossAxisCoord = limitMin;
                } else if (crossAxisCoord > limitMax) {
                    crossAxisCoord = limitMax;
                }
            }
            return {
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            };
        }
    };
};
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'size',
        options,
        async fn (state) {
            var _state$middlewareData, _state$middlewareData2;
            const { placement, rects, platform, elements } = state;
            const { apply = ()=>{}, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement);
            const alignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement);
            const isYAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement) === 'y';
            const { width, height } = rects.floating;
            let heightSide;
            let widthSide;
            if (side === 'top' || side === 'bottom') {
                heightSide = side;
                widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? 'start' : 'end') ? 'left' : 'right';
            } else {
                widthSide = side;
                heightSide = alignment === 'end' ? 'top' : 'bottom';
            }
            const maximumClippingHeight = height - overflow.top - overflow.bottom;
            const maximumClippingWidth = width - overflow.left - overflow.right;
            const overflowAvailableHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(height - overflow[heightSide], maximumClippingHeight);
            const overflowAvailableWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(width - overflow[widthSide], maximumClippingWidth);
            const noShift = !state.middlewareData.shift;
            let availableHeight = overflowAvailableHeight;
            let availableWidth = overflowAvailableWidth;
            if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
                availableWidth = maximumClippingWidth;
            }
            if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
                availableHeight = maximumClippingHeight;
            }
            if (noShift && !alignment) {
                const xMin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.left, 0);
                const xMax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.right, 0);
                const yMin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.top, 0);
                const yMax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.bottom, 0);
                if (isYAxis) {
                    availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.left, overflow.right));
                } else {
                    availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.top, overflow.bottom));
                }
            }
            await apply({
                ...state,
                availableWidth,
                availableHeight
            });
            const nextDimensions = await platform.getDimensions(elements.floating);
            if (width !== nextDimensions.width || height !== nextDimensions.height) {
                return {
                    reset: {
                        rects: true
                    }
                };
            }
            return {};
        }
    };
};
;
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrow",
    ()=>arrow,
    "autoPlacement",
    ()=>autoPlacement,
    "autoUpdate",
    ()=>autoUpdate,
    "computePosition",
    ()=>computePosition,
    "detectOverflow",
    ()=>detectOverflow,
    "flip",
    ()=>flip,
    "hide",
    ()=>hide,
    "inline",
    ()=>inline,
    "limitShift",
    ()=>limitShift,
    "offset",
    ()=>offset,
    "platform",
    ()=>platform,
    "shift",
    ()=>shift,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@floating-ui/core/dist/floating-ui.core.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
;
;
;
;
function getCssDimensions(element) {
    const css = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(width) !== offsetWidth || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(height) !== offsetHeight;
    if (shouldFallback) {
        width = offsetWidth;
        height = offsetHeight;
    }
    return {
        width,
        height,
        $: shouldFallback
    };
}
function unwrapElement(element) {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(element) ? element.contextElement : element;
}
function getScale(element) {
    const domElement = unwrapElement(element);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(domElement)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(1);
    }
    const rect = domElement.getBoundingClientRect();
    const { width, height, $ } = getCssDimensions(domElement);
    let x = ($ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(rect.width) : rect.width) / width;
    let y = ($ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(rect.height) : rect.height) / height;
    // 0, NaN, or Infinity should always fallback to 1.
    if (!x || !Number.isFinite(x)) {
        x = 1;
    }
    if (!y || !Number.isFinite(y)) {
        y = 1;
    }
    return {
        x,
        y
    };
}
const noOffsets = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
function getVisualOffsets(element) {
    const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebKit"])() || !win.visualViewport) {
        return noOffsets;
    }
    return {
        x: win.visualViewport.offsetLeft,
        y: win.visualViewport.offsetTop
    };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
        isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element)) {
        return false;
    }
    return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
        includeScale = false;
    }
    if (isFixedStrategy === void 0) {
        isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(1);
    if (includeScale) {
        if (offsetParent) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(offsetParent)) {
                scale = getScale(offsetParent);
            }
        } else {
            scale = getScale(element);
        }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
        const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(domElement);
        const offsetWin = offsetParent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(offsetParent) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(offsetParent) : offsetParent;
        let currentWin = win;
        let currentIFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFrameElement"])(currentWin);
        while(currentIFrame && offsetParent && offsetWin !== currentWin){
            const iframeScale = getScale(currentIFrame);
            const iframeRect = currentIFrame.getBoundingClientRect();
            const css = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(currentIFrame);
            const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
            const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
            x *= iframeScale.x;
            y *= iframeScale.y;
            width *= iframeScale.x;
            height *= iframeScale.y;
            x += left;
            y += top;
            currentWin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(currentIFrame);
            currentIFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFrameElement"])(currentWin);
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])({
        width,
        height,
        x,
        y
    });
}
// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
    const leftScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeScroll"])(element).scrollLeft;
    if (!rect) {
        return getBoundingClientRect((0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element)).left + leftScroll;
    }
    return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
    const htmlRect = documentElement.getBoundingClientRect();
    const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
    const y = htmlRect.top + scroll.scrollTop;
    return {
        x,
        y
    };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let { elements, rect, offsetParent, strategy } = _ref;
    const isFixed = strategy === 'fixed';
    const documentElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(offsetParent);
    const topLayer = elements ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTopLayer"])(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) {
        return rect;
    }
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    let scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(1);
    const offsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    const isOffsetParentAnElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeName"])(offsetParent) !== 'body' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOverflowElement"])(documentElement)) {
            scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeScroll"])(offsetParent);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent)) {
            const offsetRect = getBoundingClientRect(offsetParent);
            scale = getScale(offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    return {
        width: rect.width * scale.x,
        height: rect.height * scale.y,
        x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
        y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
    };
}
function getClientRects(element) {
    return Array.from(element.getClientRects());
}
// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
    const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element);
    const scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeScroll"])(element);
    const body = element.ownerDocument.body;
    const width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(body).direction === 'rtl') {
        x += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(html.clientWidth, body.clientWidth) - width;
    }
    return {
        width,
        height,
        x,
        y
    };
}
// Safety check: ensure the scrollbar space is reasonable in case this
// calculation is affected by unusual styles.
// Most scrollbars leave 15-18px of space.
const SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
    const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element);
    const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        const visualViewportBased = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebKit"])();
        if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    const windowScrollbarX = getWindowScrollBarX(html);
    // <html> `overflow: hidden` + `scrollbar-gutter: stable` reduces the
    // visual width of the <html> but this is not considered in the size
    // of `html.clientWidth`.
    if (windowScrollbarX <= 0) {
        const doc = html.ownerDocument;
        const body = doc.body;
        const bodyStyles = getComputedStyle(body);
        const bodyMarginInline = doc.compatMode === 'CSS1Compat' ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
        const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
        if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
            width -= clippingStableScrollbarWidth;
        }
    } else if (windowScrollbarX <= SCROLLBAR_MAX) {
        // If the <body> scrollbar is on the left, the width needs to be extended
        // by the scrollbar amount so there isn't extra space on the right.
        width += windowScrollbarX;
    }
    return {
        width,
        height,
        x,
        y
    };
}
const absoluteOrFixed = /*#__PURE__*/ new Set([
    'absolute',
    'fixed'
]);
// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) ? getScale(element) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
        width,
        height,
        x,
        y
    };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === 'viewport') {
        rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === 'document') {
        rect = getDocumentRect((0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element));
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(clippingAncestor)) {
        rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
        const visualOffsets = getVisualOffsets(element);
        rect = {
            x: clippingAncestor.x - visualOffsets.x,
            y: clippingAncestor.y - visualOffsets.y,
            width: clippingAncestor.width,
            height: clippingAncestor.height
        };
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(element);
    if (parentNode === stopNode || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(parentNode) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(parentNode)) {
        return false;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}
// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
        return cachedResult;
    }
    let result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverflowAncestors"])(element, [], false).filter((el)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeName"])(el) !== 'body');
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).position === 'fixed';
    let currentNode = elementIsFixed ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(element) : element;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    while((0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(currentNode) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(currentNode)){
        const computedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(currentNode);
        const currentNodeIsContaining = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContainingBlock"])(currentNode);
        if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
            currentContainingBlockComputedStyle = null;
        }
        const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOverflowElement"])(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
        if (shouldDropCurrentNode) {
            // Drop non-containing blocks.
            result = result.filter((ancestor)=>ancestor !== currentNode);
        } else {
            // Record last containing block for next iteration.
            currentContainingBlockComputedStyle = computedStyle;
        }
        currentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(currentNode);
    }
    cache.set(element, result);
    return result;
}
// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
    let { element, boundary, rootBoundary, strategy } = _ref;
    const elementClippingAncestors = boundary === 'clippingAncestors' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTopLayer"])(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [
        ...elementClippingAncestors,
        rootBoundary
    ];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor)=>{
        const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
        accRect.top = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(rect.top, accRect.top);
        accRect.right = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(rect.right, accRect.right);
        accRect.bottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(rect.bottom, accRect.bottom);
        accRect.left = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
        width: clippingRect.right - clippingRect.left,
        height: clippingRect.bottom - clippingRect.top,
        x: clippingRect.left,
        y: clippingRect.top
    };
}
function getDimensions(element) {
    const { width, height } = getCssDimensions(element);
    return {
        width,
        height
    };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent);
    const documentElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(offsetParent);
    const isFixed = strategy === 'fixed';
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const offsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
    // Firefox with layout.scrollbar.side = 3 in about:config to test this.
    function setLeftRTLScrollbarOffset() {
        offsets.x = getWindowScrollBarX(documentElement);
    }
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeName"])(offsetParent) !== 'body' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOverflowElement"])(documentElement)) {
            scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeScroll"])(offsetParent);
        }
        if (isOffsetParentAnElement) {
            const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        } else if (documentElement) {
            setLeftRTLScrollbarOffset();
        }
    }
    if (isFixed && !isOffsetParentAnElement && documentElement) {
        setLeftRTLScrollbarOffset();
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
        x,
        y,
        width: rect.width,
        height: rect.height
    };
}
function isStaticPositioned(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).position === 'static';
}
function getTrueOffsetParent(element, polyfill) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).position === 'fixed') {
        return null;
    }
    if (polyfill) {
        return polyfill(element);
    }
    let rawOffsetParent = element.offsetParent;
    // Firefox returns the <html> element as the offsetParent if it's non-static,
    // while Chrome and Safari return the <body> element. The <body> element must
    // be used to perform the correct calculations even if the <html> element is
    // non-static.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element) === rawOffsetParent) {
        rawOffsetParent = rawOffsetParent.ownerDocument.body;
    }
    return rawOffsetParent;
}
// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
    const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTopLayer"])(element)) {
        return win;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element)) {
        let svgOffsetParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(element);
        while(svgOffsetParent && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(svgOffsetParent)){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
                return svgOffsetParent;
            }
            svgOffsetParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(svgOffsetParent);
        }
        return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while(offsetParent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTableElement"])(offsetParent) && isStaticPositioned(offsetParent)){
        offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(offsetParent) && isStaticPositioned(offsetParent) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContainingBlock"])(offsetParent)) {
        return win;
    }
    return offsetParent || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContainingBlock"])(element) || win;
}
const getElementRects = async function(data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data.floating);
    return {
        reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
        floating: {
            x: 0,
            y: 0,
            width: floatingDimensions.width,
            height: floatingDimensions.height
        }
    };
};
function isRTL(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).direction === 'rtl';
}
const platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"],
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"],
    isRTL
};
function rectsAreEqual(a, b) {
    return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element);
    function cleanup() {
        var _io;
        clearTimeout(timeoutId);
        (_io = io) == null || _io.disconnect();
        io = null;
    }
    function refresh(skip, threshold) {
        if (skip === void 0) {
            skip = false;
        }
        if (threshold === void 0) {
            threshold = 1;
        }
        cleanup();
        const elementRectForRootMargin = element.getBoundingClientRect();
        const { left, top, width, height } = elementRectForRootMargin;
        if (!skip) {
            onMove();
        }
        if (!width || !height) {
            return;
        }
        const insetTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"])(top);
        const insetRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"])(root.clientWidth - (left + width));
        const insetBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"])(root.clientHeight - (top + height));
        const insetLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"])(left);
        const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
        const options = {
            rootMargin,
            threshold: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(1, threshold)) || 1
        };
        let isFirstUpdate = true;
        function handleObserve(entries) {
            const ratio = entries[0].intersectionRatio;
            if (ratio !== threshold) {
                if (!isFirstUpdate) {
                    return refresh();
                }
                if (!ratio) {
                    // If the reference is clipped, the ratio is 0. Throttle the refresh
                    // to prevent an infinite loop of updates.
                    timeoutId = setTimeout(()=>{
                        refresh(false, 1e-7);
                    }, 1000);
                } else {
                    refresh(false, ratio);
                }
            }
            if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
                // It's possible that even though the ratio is reported as 1, the
                // element is not actually fully within the IntersectionObserver's root
                // area anymore. This can happen under performance constraints. This may
                // be a bug in the browser's IntersectionObserver implementation. To
                // work around this, we compare the element's bounding rect now with
                // what it was at the time we created the IntersectionObserver. If they
                // are not equal then the element moved, so we refresh.
                refresh();
            }
            isFirstUpdate = false;
        }
        // Older browsers don't support a `document` as the root and will throw an
        // error.
        try {
            io = new IntersectionObserver(handleObserve, {
                ...options,
                // Handle <iframe>s
                root: root.ownerDocument
            });
        } catch (_e) {
            io = new IntersectionObserver(handleObserve, options);
        }
        io.observe(element);
    }
    refresh(true);
    return cleanup;
}
/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */ function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
        options = {};
    }
    const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === 'function', layoutShift = typeof IntersectionObserver === 'function', animationFrame = false } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [
        ...referenceEl ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverflowAncestors"])(referenceEl) : [],
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverflowAncestors"])(floating)
    ] : [];
    ancestors.forEach((ancestor)=>{
        ancestorScroll && ancestor.addEventListener('scroll', update, {
            passive: true
        });
        ancestorResize && ancestor.addEventListener('resize', update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
        resizeObserver = new ResizeObserver((_ref)=>{
            let [firstEntry] = _ref;
            if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
                // Prevent update loops when using the `size` middleware.
                // https://github.com/floating-ui/floating-ui/issues/1740
                resizeObserver.unobserve(floating);
                cancelAnimationFrame(reobserveFrame);
                reobserveFrame = requestAnimationFrame(()=>{
                    var _resizeObserver;
                    (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
                });
            }
            update();
        });
        if (referenceEl && !animationFrame) {
            resizeObserver.observe(referenceEl);
        }
        resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
        frameLoop();
    }
    function frameLoop() {
        const nextRefRect = getBoundingClientRect(reference);
        if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
            update();
        }
        prevRefRect = nextRefRect;
        frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return ()=>{
        var _resizeObserver2;
        ancestors.forEach((ancestor)=>{
            ancestorScroll && ancestor.removeEventListener('scroll', update);
            ancestorResize && ancestor.removeEventListener('resize', update);
        });
        cleanupIo == null || cleanupIo();
        (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
        resizeObserver = null;
        if (animationFrame) {
            cancelAnimationFrame(frameId);
        }
    };
}
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ const detectOverflow = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["detectOverflow"];
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"];
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoPlacement"];
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"];
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"];
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["size"];
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hide"];
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"];
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["inline"];
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["limitShift"];
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */ const computePosition = (reference, floating, options)=>{
    // This caches the expensive `getClippingElementAncestors` function so that
    // multiple lifecycle resets re-use the same result. It only lives for a
    // single call. If other functions become expensive, we can add them as well.
    const cache = new Map();
    const mergedOptions = {
        platform,
        ...options
    };
    const platformWithCache = {
        ...mergedOptions.platform,
        _c: cache
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["computePosition"])(reference, floating, {
        ...mergedOptions,
        platform: platformWithCache
    });
};
;
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrow",
    ()=>arrow,
    "autoPlacement",
    ()=>autoPlacement,
    "flip",
    ()=>flip,
    "hide",
    ()=>hide,
    "inline",
    ()=>inline,
    "limitShift",
    ()=>limitShift,
    "offset",
    ()=>offset,
    "shift",
    ()=>shift,
    "size",
    ()=>size,
    "useFloating",
    ()=>useFloating
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
;
;
;
;
var isClient = typeof document !== 'undefined';
var noop = function noop() {};
var index = isClient ? __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : noop;
// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    if (typeof a === 'function' && a.toString() === b.toString()) {
        return true;
    }
    let length;
    let i;
    let keys;
    if (a && b && typeof a === 'object') {
        if (Array.isArray(a)) {
            length = a.length;
            if (length !== b.length) return false;
            for(i = length; i-- !== 0;){
                if (!deepEqual(a[i], b[i])) {
                    return false;
                }
            }
            return true;
        }
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) {
            return false;
        }
        for(i = length; i-- !== 0;){
            if (!({}).hasOwnProperty.call(b, keys[i])) {
                return false;
            }
        }
        for(i = length; i-- !== 0;){
            const key = keys[i];
            if (key === '_owner' && a.$$typeof) {
                continue;
            }
            if (!deepEqual(a[key], b[key])) {
                return false;
            }
        }
        return true;
    }
    return a !== a && b !== b;
}
function getDPR(element) {
    if (typeof window === 'undefined') {
        return 1;
    }
    const win = element.ownerDocument.defaultView || window;
    return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
    const dpr = getDPR(element);
    return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](value);
    index(()=>{
        ref.current = value;
    });
    return ref;
}
/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/useFloating
 */ function useFloating(options) {
    if (options === void 0) {
        options = {};
    }
    const { placement = 'bottom', strategy = 'absolute', middleware = [], platform, elements: { reference: externalReference, floating: externalFloating } = {}, transform = true, whileElementsMounted, open } = options;
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        x: 0,
        y: 0,
        strategy,
        placement,
        middlewareData: {},
        isPositioned: false
    });
    const [latestMiddleware, setLatestMiddleware] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](middleware);
    if (!deepEqual(latestMiddleware, middleware)) {
        setLatestMiddleware(middleware);
    }
    const [_reference, _setReference] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [_floating, _setFloating] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const setReference = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFloating.useCallback[setReference]": (node)=>{
            if (node !== referenceRef.current) {
                referenceRef.current = node;
                _setReference(node);
            }
        }
    }["useFloating.useCallback[setReference]"], []);
    const setFloating = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFloating.useCallback[setFloating]": (node)=>{
            if (node !== floatingRef.current) {
                floatingRef.current = node;
                _setFloating(node);
            }
        }
    }["useFloating.useCallback[setFloating]"], []);
    const referenceEl = externalReference || _reference;
    const floatingEl = externalFloating || _floating;
    const referenceRef = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const floatingRef = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const dataRef = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](data);
    const hasWhileElementsMounted = whileElementsMounted != null;
    const whileElementsMountedRef = useLatestRef(whileElementsMounted);
    const platformRef = useLatestRef(platform);
    const openRef = useLatestRef(open);
    const update = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFloating.useCallback[update]": ()=>{
            if (!referenceRef.current || !floatingRef.current) {
                return;
            }
            const config = {
                placement,
                strategy,
                middleware: latestMiddleware
            };
            if (platformRef.current) {
                config.platform = platformRef.current;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["computePosition"])(referenceRef.current, floatingRef.current, config).then({
                "useFloating.useCallback[update]": (data)=>{
                    const fullData = {
                        ...data,
                        // The floating element's position may be recomputed while it's closed
                        // but still mounted (such as when transitioning out). To ensure
                        // `isPositioned` will be `false` initially on the next open, avoid
                        // setting it to `true` when `open === false` (must be specified).
                        isPositioned: openRef.current !== false
                    };
                    if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
                        dataRef.current = fullData;
                        __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"]({
                            "useFloating.useCallback[update]": ()=>{
                                setData(fullData);
                            }
                        }["useFloating.useCallback[update]"]);
                    }
                }
            }["useFloating.useCallback[update]"]);
        }
    }["useFloating.useCallback[update]"], [
        latestMiddleware,
        placement,
        strategy,
        platformRef,
        openRef
    ]);
    index(()=>{
        if (open === false && dataRef.current.isPositioned) {
            dataRef.current.isPositioned = false;
            setData((data)=>({
                    ...data,
                    isPositioned: false
                }));
        }
    }, [
        open
    ]);
    const isMountedRef = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    index(()=>{
        isMountedRef.current = true;
        return ()=>{
            isMountedRef.current = false;
        };
    }, []);
    index(()=>{
        if (referenceEl) referenceRef.current = referenceEl;
        if (floatingEl) floatingRef.current = floatingEl;
        if (referenceEl && floatingEl) {
            if (whileElementsMountedRef.current) {
                return whileElementsMountedRef.current(referenceEl, floatingEl, update);
            }
            update();
        }
    }, [
        referenceEl,
        floatingEl,
        update,
        whileElementsMountedRef,
        hasWhileElementsMounted
    ]);
    const refs = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFloating.useMemo[refs]": ()=>({
                reference: referenceRef,
                floating: floatingRef,
                setReference,
                setFloating
            })
    }["useFloating.useMemo[refs]"], [
        setReference,
        setFloating
    ]);
    const elements = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFloating.useMemo[elements]": ()=>({
                reference: referenceEl,
                floating: floatingEl
            })
    }["useFloating.useMemo[elements]"], [
        referenceEl,
        floatingEl
    ]);
    const floatingStyles = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFloating.useMemo[floatingStyles]": ()=>{
            const initialStyles = {
                position: strategy,
                left: 0,
                top: 0
            };
            if (!elements.floating) {
                return initialStyles;
            }
            const x = roundByDPR(elements.floating, data.x);
            const y = roundByDPR(elements.floating, data.y);
            if (transform) {
                return {
                    ...initialStyles,
                    transform: "translate(" + x + "px, " + y + "px)",
                    ...getDPR(elements.floating) >= 1.5 && {
                        willChange: 'transform'
                    }
                };
            }
            return {
                position: strategy,
                left: x,
                top: y
            };
        }
    }["useFloating.useMemo[floatingStyles]"], [
        strategy,
        transform,
        elements.floating,
        data.x,
        data.y
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFloating.useMemo": ()=>({
                ...data,
                update,
                refs,
                elements,
                floatingStyles
            })
    }["useFloating.useMemo"], [
        data,
        update,
        refs,
        elements,
        floatingStyles
    ]);
}
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow$1 = (options)=>{
    function isRef(value) {
        return ({}).hasOwnProperty.call(value, 'current');
    }
    return {
        name: 'arrow',
        options,
        fn (state) {
            const { element, padding } = typeof options === 'function' ? options(state) : options;
            if (element && isRef(element)) {
                if (element.current != null) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
                        element: element.current,
                        padding
                    }).fn(state);
                }
                return {};
            }
            if (element) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
                    element,
                    padding
                }).fn(state);
            }
            return {};
        }
    };
};
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["limitShift"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["size"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoPlacement"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hide"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["inline"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = (options, deps)=>({
        ...arrow$1(options),
        options: [
            options,
            deps
        ]
    });
;
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-arrow/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/arrow/src/Arrow.tsx
__turbopack_context__.s([
    "Arrow",
    ()=>Arrow,
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
var NAME = "Arrow";
var Arrow = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, width = 10, height = 5, ...arrowProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].svg, {
        ...arrowProps,
        ref: forwardedRef,
        width,
        height,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: props.asChild ? children : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("polygon", {
            points: "0,0 30,0 15,10"
        })
    });
});
Arrow.displayName = NAME;
var Root = Arrow;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-use-size/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-size/src/useSize.tsx
__turbopack_context__.s([
    "useSize",
    ()=>useSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
;
;
function useSize(element) {
    const [size, setSize] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](void 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useSize.useLayoutEffect": ()=>{
            if (element) {
                setSize({
                    width: element.offsetWidth,
                    height: element.offsetHeight
                });
                const resizeObserver = new ResizeObserver({
                    "useSize.useLayoutEffect": (entries)=>{
                        if (!Array.isArray(entries)) {
                            return;
                        }
                        if (!entries.length) {
                            return;
                        }
                        const entry = entries[0];
                        let width;
                        let height;
                        if ("borderBoxSize" in entry) {
                            const borderSizeEntry = entry["borderBoxSize"];
                            const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
                            width = borderSize["inlineSize"];
                            height = borderSize["blockSize"];
                        } else {
                            width = element.offsetWidth;
                            height = element.offsetHeight;
                        }
                        setSize({
                            width,
                            height
                        });
                    }
                }["useSize.useLayoutEffect"]);
                resizeObserver.observe(element, {
                    box: "border-box"
                });
                return ({
                    "useSize.useLayoutEffect": ()=>resizeObserver.unobserve(element)
                })["useSize.useLayoutEffect"];
            } else {
                setSize(void 0);
            }
        }
    }["useSize.useLayoutEffect"], [
        element
    ]);
    return size;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-popper/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALIGN_OPTIONS",
    ()=>ALIGN_OPTIONS,
    "Anchor",
    ()=>Anchor,
    "Arrow",
    ()=>Arrow,
    "Content",
    ()=>Content,
    "Popper",
    ()=>Popper,
    "PopperAnchor",
    ()=>PopperAnchor,
    "PopperArrow",
    ()=>PopperArrow,
    "PopperContent",
    ()=>PopperContent,
    "Root",
    ()=>Root2,
    "SIDE_OPTIONS",
    ()=>SIDE_OPTIONS,
    "createPopperScope",
    ()=>createPopperScope
]);
// packages/react/popper/src/Popper.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$arrow$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-arrow/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$size$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-use-size/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
var SIDE_OPTIONS = [
    "top",
    "right",
    "bottom",
    "left"
];
var ALIGN_OPTIONS = [
    "start",
    "center",
    "end"
];
var POPPER_NAME = "Popper";
var [createPopperContext, createPopperScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])(POPPER_NAME);
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
var Popper = (props)=>{
    const { __scopePopper, children } = props;
    const [anchor, setAnchor] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PopperProvider, {
        scope: __scopePopper,
        anchor,
        onAnchorChange: setAnchor,
        children
    });
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME = "PopperAnchor";
var PopperAnchor = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopePopper, virtualRef, ...anchorProps } = props;
    const context = usePopperContext(ANCHOR_NAME, __scopePopper);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "PopperAnchor.useEffect": ()=>{
            context.onAnchorChange(virtualRef?.current || ref.current);
        }
    }["PopperAnchor.useEffect"]);
    return virtualRef ? null : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...anchorProps,
        ref: composedRefs
    });
});
PopperAnchor.displayName = ANCHOR_NAME;
var CONTENT_NAME = "PopperContent";
var [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME);
var PopperContent = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopePopper, side = "bottom", sideOffset = 0, align = "center", alignOffset = 0, arrowPadding = 0, avoidCollisions = true, collisionBoundary = [], collisionPadding: collisionPaddingProp = 0, sticky = "partial", hideWhenDetached = false, updatePositionStrategy = "optimized", onPlaced, ...contentProps } = props;
    const context = usePopperContext(CONTENT_NAME, __scopePopper);
    const [content, setContent] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, {
        "PopperContent.useComposedRefs[composedRefs]": (node)=>setContent(node)
    }["PopperContent.useComposedRefs[composedRefs]"]);
    const [arrow, setArrow] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const arrowSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$size$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSize"])(arrow);
    const arrowWidth = arrowSize?.width ?? 0;
    const arrowHeight = arrowSize?.height ?? 0;
    const desiredPlacement = side + (align !== "center" ? "-" + align : "");
    const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...collisionPaddingProp
    };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
        collisionBoundary
    ];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
        padding: collisionPadding,
        boundary: boundary.filter(isNotNull),
        // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
        altBoundary: hasExplicitBoundaries
    };
    const { refs, floatingStyles, placement, isPositioned, middlewareData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloating"])({
        // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
        strategy: "fixed",
        placement: desiredPlacement,
        whileElementsMounted: {
            "PopperContent.useFloating": (...args)=>{
                const cleanup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoUpdate"])(...args, {
                    animationFrame: updatePositionStrategy === "always"
                });
                return cleanup;
            }
        }["PopperContent.useFloating"],
        elements: {
            reference: context.anchor
        },
        middleware: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"])({
                mainAxis: sideOffset + arrowHeight,
                alignmentAxis: alignOffset
            }),
            avoidCollisions && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])({
                mainAxis: true,
                crossAxis: false,
                limiter: sticky === "partial" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["limitShift"])() : void 0,
                ...detectOverflowOptions
            }),
            avoidCollisions && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])({
                ...detectOverflowOptions
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["size"])({
                ...detectOverflowOptions,
                apply: {
                    "PopperContent.useFloating": ({ elements, rects, availableWidth, availableHeight })=>{
                        const { width: anchorWidth, height: anchorHeight } = rects.reference;
                        const contentStyle = elements.floating.style;
                        contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
                        contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
                        contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
                        contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
                    }
                }["PopperContent.useFloating"]
            }),
            arrow && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
                element: arrow,
                padding: arrowPadding
            }),
            transformOrigin({
                arrowWidth,
                arrowHeight
            }),
            hideWhenDetached && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hide"])({
                strategy: "referenceHidden",
                ...detectOverflowOptions
            })
        ]
    });
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const handlePlaced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onPlaced);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "PopperContent.useLayoutEffect": ()=>{
            if (isPositioned) {
                handlePlaced?.();
            }
        }
    }["PopperContent.useLayoutEffect"], [
        isPositioned,
        handlePlaced
    ]);
    const arrowX = middlewareData.arrow?.x;
    const arrowY = middlewareData.arrow?.y;
    const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
    const [contentZIndex, setContentZIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "PopperContent.useLayoutEffect": ()=>{
            if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
        }
    }["PopperContent.useLayoutEffect"], [
        content
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref: refs.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...floatingStyles,
            transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
            // keep off the page when measuring
            minWidth: "max-content",
            zIndex: contentZIndex,
            ["--radix-popper-transform-origin"]: [
                middlewareData.transformOrigin?.x,
                middlewareData.transformOrigin?.y
            ].join(" "),
            // hide the content if using the hide middleware and should be hidden
            // set visibility to hidden and disable pointer events so the UI behaves
            // as if the PopperContent isn't there at all
            ...middlewareData.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: props.dir,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PopperContentProvider, {
            scope: __scopePopper,
            placedSide,
            onArrowChange: setArrow,
            arrowX,
            arrowY,
            shouldHideArrow: cannotCenterArrow,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
                "data-side": placedSide,
                "data-align": placedAlign,
                ...contentProps,
                ref: composedRefs,
                style: {
                    ...contentProps.style,
                    // if the PopperContent hasn't been placed yet (not all measurements done)
                    // we prevent animations so that users's animation don't kick in too early referring wrong sides
                    animation: !isPositioned ? "none" : void 0
                }
            })
        })
    });
});
PopperContent.displayName = CONTENT_NAME;
var ARROW_NAME = "PopperArrow";
var OPPOSITE_SIDE = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
};
var PopperArrow = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function PopperArrow2(props, forwardedRef) {
    const { __scopePopper, ...arrowProps } = props;
    const contentContext = useContentContext(ARROW_NAME, __scopePopper);
    const baseSide = OPPOSITE_SIDE[contentContext.placedSide];
    return(// we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
        ref: contentContext.onArrowChange,
        style: {
            position: "absolute",
            left: contentContext.arrowX,
            top: contentContext.arrowY,
            [baseSide]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[contentContext.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: `rotate(180deg)`,
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[contentContext.placedSide],
            visibility: contentContext.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$arrow$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            ...arrowProps,
            ref: forwardedRef,
            style: {
                ...arrowProps.style,
                // ensures the element can be measured correctly (mostly for if SVG)
                display: "block"
            }
        })
    }));
});
PopperArrow.displayName = ARROW_NAME;
function isNotNull(value) {
    return value !== null;
}
var transformOrigin = (options)=>({
        name: "transformOrigin",
        options,
        fn (data) {
            const { placement, rects, middlewareData } = data;
            const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
            const isArrowHidden = cannotCenterArrow;
            const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
            const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
            const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
            const noArrowAlign = {
                start: "0%",
                center: "50%",
                end: "100%"
            }[placedAlign];
            const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
            const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
            let x = "";
            let y = "";
            if (placedSide === "bottom") {
                x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
                y = `${-arrowHeight}px`;
            } else if (placedSide === "top") {
                x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
                y = `${rects.floating.height + arrowHeight}px`;
            } else if (placedSide === "right") {
                x = `${-arrowHeight}px`;
                y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            } else if (placedSide === "left") {
                x = `${rects.floating.width + arrowHeight}px`;
                y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            }
            return {
                data: {
                    x,
                    y
                }
            };
        }
    });
function getSideAndAlignFromPlacement(placement) {
    const [side, align = "center"] = placement.split("-");
    return [
        side,
        align
    ];
}
var Root2 = Popper;
var Anchor = PopperAnchor;
var Content = PopperContent;
var Arrow = PopperArrow;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-portal/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Portal",
    ()=>Portal,
    "Root",
    ()=>Root
]);
// packages/react/portal/src/Portal.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
var PORTAL_NAME = "Portal";
var Portal = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { container: containerProp, ...portalProps } = props;
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Portal.useLayoutEffect": ()=>setMounted(true)
    }["Portal.useLayoutEffect"], []);
    const container = containerProp || mounted && globalThis?.document?.body;
    return container ? __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createPortal(/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...portalProps,
        ref: forwardedRef
    }), container) : null;
});
Portal.displayName = PORTAL_NAME;
var Root = Portal;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-controllable-state/src/useControllableState.tsx
__turbopack_context__.s([
    "useControllableState",
    ()=>useControllableState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
;
;
function useControllableState({ prop, defaultProp, onChange = ()=>{} }) {
    const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({
        defaultProp,
        onChange
    });
    const isControlled = prop !== void 0;
    const value = isControlled ? prop : uncontrolledProp;
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onChange);
    const setValue = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useControllableState.useCallback[setValue]": (nextValue)=>{
            if (isControlled) {
                const setter = nextValue;
                const value2 = typeof nextValue === "function" ? setter(prop) : nextValue;
                if (value2 !== prop) handleChange(value2);
            } else {
                setUncontrolledProp(nextValue);
            }
        }
    }["useControllableState.useCallback[setValue]"], [
        isControlled,
        prop,
        setUncontrolledProp,
        handleChange
    ]);
    return [
        value,
        setValue
    ];
}
function useUncontrolledState({ defaultProp, onChange }) {
    const uncontrolledState = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](defaultProp);
    const [value] = uncontrolledState;
    const prevValueRef = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](value);
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onChange);
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useUncontrolledState.useEffect": ()=>{
            if (prevValueRef.current !== value) {
                handleChange(value);
                prevValueRef.current = value;
            }
        }
    }["useUncontrolledState.useEffect"], [
        value,
        prevValueRef,
        handleChange
    ]);
    return uncontrolledState;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-use-previous/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-previous/src/usePrevious.tsx
__turbopack_context__.s([
    "usePrevious",
    ()=>usePrevious
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function usePrevious(value) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({
        value,
        previous: value
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "usePrevious.useMemo": ()=>{
            if (ref.current.value !== value) {
                ref.current.previous = ref.current.value;
                ref.current.value = value;
            }
            return ref.current.previous;
        }
    }["usePrevious.useMemo"], [
        value
    ]);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/visually-hidden/src/VisuallyHidden.tsx
__turbopack_context__.s([
    "Root",
    ()=>Root,
    "VisuallyHidden",
    ()=>VisuallyHidden
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
var NAME = "VisuallyHidden";
var VisuallyHidden = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].span, {
        ...props,
        ref: forwardedRef,
        style: {
            // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...props.style
        }
    });
});
VisuallyHidden.displayName = NAME;
var Root = VisuallyHidden;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Users/patie/Downloads/protonai/node_modules/aria-hidden/dist/es2015/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hideOthers",
    ()=>hideOthers,
    "inertOthers",
    ()=>inertOthers,
    "supportsInert",
    ()=>supportsInert,
    "suppressOthers",
    ()=>suppressOthers
]);
var getDefaultParent = function(originalTarget) {
    if (typeof document === 'undefined') {
        return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
    return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
    return targets.map(function(target) {
        if (parent.contains(target)) {
            return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
            return correctedTarget;
        }
        console.error('aria-hidden', target, 'in not contained inside', parent, '. Doing nothing');
        return null;
    }).filter(function(x) {
        return Boolean(x);
    });
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @param {String} [controlAttribute] - html Attribute to control
 * @return {Undo} undo command
 */ var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [
        originalTarget
    ]);
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = new Set();
    var elementsToStop = new Set(targets);
    var keep = function(el) {
        if (!el || elementsToKeep.has(el)) {
            return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function(parent) {
        if (!parent || elementsToStop.has(parent)) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function(node) {
            if (elementsToKeep.has(node)) {
                deep(node);
            } else {
                try {
                    var attr = node.getAttribute(controlAttribute);
                    var alreadyHidden = attr !== null && attr !== 'false';
                    var counterValue = (counterMap.get(node) || 0) + 1;
                    var markerValue = (markerCounter.get(node) || 0) + 1;
                    counterMap.set(node, counterValue);
                    markerCounter.set(node, markerValue);
                    hiddenNodes.push(node);
                    if (counterValue === 1 && alreadyHidden) {
                        uncontrolledNodes.set(node, true);
                    }
                    if (markerValue === 1) {
                        node.setAttribute(markerName, 'true');
                    }
                    if (!alreadyHidden) {
                        node.setAttribute(controlAttribute, 'true');
                    }
                } catch (e) {
                    console.error('aria-hidden: cannot operate on ', node, e);
                }
            }
        });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function() {
        hiddenNodes.forEach(function(node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute(controlAttribute);
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            // clear
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-aria-hidden';
    }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [
        originalTarget
    ]);
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function() {
            return null;
        };
    }
    // we should not hide aria-live elements - https://github.com/theKashey/aria-hidden/issues/10
    // and script elements, as they have no impact on accessibility.
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll('[aria-live], script')));
    return applyAttributeToOthers(targets, activeParentNode, markerName, 'aria-hidden');
};
var inertOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-inert-ed';
    }
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function() {
            return null;
        };
    }
    return applyAttributeToOthers(originalTarget, activeParentNode, markerName, 'inert');
};
var supportsInert = function() {
    return typeof HTMLElement !== 'undefined' && HTMLElement.prototype.hasOwnProperty('inert');
};
var suppressOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-suppressed';
    }
    return (supportsInert() ? inertOthers : hideOthers)(originalTarget, parentNode, markerName);
};
}),
"[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fullWidthClassName",
    ()=>fullWidthClassName,
    "noScrollbarsClassName",
    ()=>noScrollbarsClassName,
    "removedBarSizeVariable",
    ()=>removedBarSizeVariable,
    "zeroRightClassName",
    ()=>zeroRightClassName
]);
var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
var removedBarSizeVariable = '--removed-body-scroll-bar-size';
}),
"[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGapWidth",
    ()=>getGapWidth,
    "zeroGap",
    ()=>zeroGap
]);
var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
};
var parse = function(x) {
    return parseInt(x || '', 10) || 0;
};
var getOffset = function(gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [
        parse(left),
        parse(top),
        parse(right)
    ];
};
var getGapWidth = function(gapMode) {
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    if (typeof window === 'undefined') {
        return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
    };
};
}),
"[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollBar",
    ()=>RemoveScrollBar,
    "lockAttribute",
    ()=>lockAttribute,
    "useLockAttribute",
    ()=>useLockAttribute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-style-singleton/dist/es2015/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-client] (ecmascript)");
;
;
;
;
var Style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleSingleton"])();
var lockAttribute = 'data-scroll-locked';
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function(_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    return "\n  .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noScrollbarsClassName"], " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";")
    ].filter(Boolean).join(''), "\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removedBarSizeVariable"], ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
    var counter = parseInt(document.body.getAttribute(lockAttribute) || '0', 10);
    return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useLockAttribute.useEffect": function() {
            document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
            return ({
                "useLockAttribute.useEffect": function() {
                    var newCounter = getCurrentUseCounter() - 1;
                    if (newCounter <= 0) {
                        document.body.removeAttribute(lockAttribute);
                    } else {
                        document.body.setAttribute(lockAttribute, newCounter.toString());
                    }
                }
            })["useLockAttribute.useEffect"];
        }
    }["useLockAttribute.useEffect"], []);
};
var RemoveScrollBar = function(_a) {
    var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    useLockAttribute();
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */ var gap = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "RemoveScrollBar.useMemo[gap]": function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGapWidth"])(gapMode);
        }
    }["RemoveScrollBar.useMemo[gap]"], [
        gapMode
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '')
    });
};
}),
"[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-client] (ecmascript)");
;
;
;
;
}),
"[project]/Users/patie/Downloads/protonai/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */ __turbopack_context__.s([
    "assignRef",
    ()=>assignRef
]);
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
    return ref;
}
}),
"[project]/Users/patie/Downloads/protonai/node_modules/use-callback-ref/dist/es2015/useRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useCallbackRef(initialValue, callback) {
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useCallbackRef.useState": function() {
            return {
                // value
                value: initialValue,
                // last callback
                callback: callback,
                // "memoized" public interface
                facade: {
                    get current () {
                        return ref.value;
                    },
                    set current (value){
                        var last = ref.value;
                        if (last !== value) {
                            ref.value = value;
                            ref.callback(value, last);
                        }
                    }
                }
            };
        }
    }["useCallbackRef.useState"])[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}
}),
"[project]/Users/patie/Downloads/protonai/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMergeRefs",
    ()=>useMergeRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/use-callback-ref/dist/es2015/useRef.js [app-client] (ecmascript)");
;
;
;
var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
var currentValues = new WeakMap();
function useMergeRefs(refs, defaultValue) {
    var callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(defaultValue || null, {
        "useMergeRefs.useCallbackRef[callbackRef]": function(newValue) {
            return refs.forEach({
                "useMergeRefs.useCallbackRef[callbackRef]": function(ref) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignRef"])(ref, newValue);
                }
            }["useMergeRefs.useCallbackRef[callbackRef]"]);
        }
    }["useMergeRefs.useCallbackRef[callbackRef]"]);
    // handle refs changes - added or removed
    useIsomorphicLayoutEffect({
        "useMergeRefs.useIsomorphicLayoutEffect": function() {
            var oldValue = currentValues.get(callbackRef);
            if (oldValue) {
                var prevRefs_1 = new Set(oldValue);
                var nextRefs_1 = new Set(refs);
                var current_1 = callbackRef.current;
                prevRefs_1.forEach({
                    "useMergeRefs.useIsomorphicLayoutEffect": function(ref) {
                        if (!nextRefs_1.has(ref)) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignRef"])(ref, null);
                        }
                    }
                }["useMergeRefs.useIsomorphicLayoutEffect"]);
                nextRefs_1.forEach({
                    "useMergeRefs.useIsomorphicLayoutEffect": function(ref) {
                        if (!prevRefs_1.has(ref)) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignRef"])(ref, current_1);
                        }
                    }
                }["useMergeRefs.useIsomorphicLayoutEffect"]);
            }
            currentValues.set(callbackRef, refs);
        }
    }["useMergeRefs.useIsomorphicLayoutEffect"], [
        refs
    ]);
    return callbackRef;
}
}),
"[project]/Users/patie/Downloads/protonai/node_modules/use-sidecar/dist/es2015/medium.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMedium",
    ()=>createMedium,
    "createSidecarMedium",
    ()=>createSidecarMedium
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
;
function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function() {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function(data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function() {
                buffer = buffer.filter(function(x) {
                    return x !== item;
                });
            };
        },
        assignSyncMedium: function(cb) {
            assigned = true;
            while(buffer.length){
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function(x) {
                    return cb(x);
                },
                filter: function() {
                    return buffer;
                }
            };
        },
        assignMedium: function(cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function() {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function() {
                return Promise.resolve().then(executeQueue);
            };
            cycle();
            buffer = {
                push: function(x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function(filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                }
            };
        }
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
    if (options === void 0) {
        options = {};
    }
    var medium = innerCreateMedium(null);
    medium.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({
        async: true,
        ssr: false
    }, options);
    return medium;
}
}),
"[project]/Users/patie/Downloads/protonai/node_modules/use-sidecar/dist/es2015/exports.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportSidecar",
    ()=>exportSidecar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var SideCar = function(_a) {
    var sideCar = _a.sideCar, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__rest"])(_a, [
        "sideCar"
    ]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Target, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}
}),
"[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll/dist/es2015/medium.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "effectCar",
    ()=>effectCar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/use-sidecar/dist/es2015/medium.js [app-client] (ecmascript)");
;
var effectCar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSidecarMedium"])();
}),
"[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll/dist/es2015/UI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>RemoveScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll/dist/es2015/medium.js [app-client] (ecmascript)");
;
;
;
;
;
var nothing = function() {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */ var RemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function(props, parentRef) {
    var ref = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    var _a = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, gapMode = props.gapMode, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__rest"])(props, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode"
    ]);
    var SideCar = sideCar;
    var containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeRefs"])([
        ref,
        parentRef
    ]);
    var containerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, rest), callbacks);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, enabled && __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](SideCar, {
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effectCar"],
        removeScrollBar: removeScrollBar,
        shards: shards,
        noRelative: noRelative,
        noIsolation: noIsolation,
        inert: inert,
        setCallbacks: setCallbacks,
        allowPinchZoom: !!allowPinchZoom,
        lockRef: ref,
        gapMode: gapMode
    }), forwardProps ? __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(children), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps), {
        ref: containerRef
    })) : __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps, {
        className: className,
        ref: containerRef
    }), children));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
};
RemoveScroll.classNames = {
    fullWidth: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"],
    zeroRight: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"]
};
;
}),
"[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nonPassive",
    ()=>nonPassive
]);
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function() {
                passiveSupported = true;
                return true;
            }
        });
        // @ts-ignore
        window.addEventListener('test', options, options);
        // @ts-ignore
        window.removeEventListener('test', options, options);
    } catch (err) {
        passiveSupported = false;
    }
}
var nonPassive = passiveSupported ? {
    passive: false
} : false;
}),
"[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleScroll",
    ()=>handleScroll,
    "locationCouldBeScrolled",
    ()=>locationCouldBeScrolled
]);
var alwaysContainsScroll = function(node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function(node, overflow) {
    if (!(node instanceof Element)) {
        return false;
    }
    var styles = window.getComputedStyle(node);
    return(// not-not-scrollable
    styles[overflow] !== 'hidden' && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowY');
};
var elementCouldBeHScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowX');
};
var locationCouldBeScrolled = function(axis, node) {
    var ownerDocument = node.ownerDocument;
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
            if (scrollHeight > clientHeight) {
                return true;
            }
        }
        current = current.parentNode;
    }while (current && current !== ownerDocument.body)
    return false;
};
var getVScrollVariables = function(_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight
    ];
};
var getHScrollVariables = function(_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth
    ];
};
var elementCouldBeScrolled = function(axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */ return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        if (!target) {
            break;
        }
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        var parent_1 = target.parentNode;
        // we will "bubble" from ShadowDom in case we are, or just to the parent in normal case
        // this is the same logic used in focus-lock
        target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
    }while (// portaled content
    !targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target))
    // handle epsilon around 0 (non standard zoom levels)
    if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
        shouldCancelScroll = true;
    } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};
}),
"[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollSideCar",
    ()=>RemoveScrollSideCar,
    "getDeltaXY",
    ()=>getDeltaXY,
    "getTouchXY",
    ()=>getTouchXY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-style-singleton/dist/es2015/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-client] (ecmascript)");
;
;
;
;
;
;
var getTouchXY = function(event) {
    return 'changedTouches' in event ? [
        event.changedTouches[0].clientX,
        event.changedTouches[0].clientY
    ] : [
        0,
        0
    ];
};
var getDeltaXY = function(event) {
    return [
        event.deltaX,
        event.deltaY
    ];
};
var extractRef = function(ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
    return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
    return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]([]);
    var touchStartRef = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]([
        0,
        0
    ]);
    var activeAxis = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    var id = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](idCounter++)[0];
    var Style = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleSingleton"])[0];
    var lastProps = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](props);
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RemoveScrollSideCar.useEffect": function() {
            lastProps.current = props;
        }
    }["RemoveScrollSideCar.useEffect"], [
        props
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RemoveScrollSideCar.useEffect": function() {
            if (props.inert) {
                document.body.classList.add("block-interactivity-".concat(id));
                var allow_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
                    props.lockRef.current
                ], (props.shards || []).map(extractRef), true).filter(Boolean);
                allow_1.forEach({
                    "RemoveScrollSideCar.useEffect": function(el) {
                        return el.classList.add("allow-interactivity-".concat(id));
                    }
                }["RemoveScrollSideCar.useEffect"]);
                return ({
                    "RemoveScrollSideCar.useEffect": function() {
                        document.body.classList.remove("block-interactivity-".concat(id));
                        allow_1.forEach({
                            "RemoveScrollSideCar.useEffect": function(el) {
                                return el.classList.remove("allow-interactivity-".concat(id));
                            }
                        }["RemoveScrollSideCar.useEffect"]);
                    }
                })["RemoveScrollSideCar.useEffect"];
            }
            return;
        }
    }["RemoveScrollSideCar.useEffect"], [
        props.inert,
        props.lockRef.current,
        props.shards
    ]);
    var shouldCancelEvent = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[shouldCancelEvent]": function(event, parent) {
            if ('touches' in event && event.touches.length === 2 || event.type === 'wheel' && event.ctrlKey) {
                return !lastProps.current.allowPinchZoom;
            }
            var touch = getTouchXY(event);
            var touchStart = touchStartRef.current;
            var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
            var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
            var currentAxis;
            var target = event.target;
            var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
            // allow horizontal touch move on Range inputs. They will not cause any scroll
            if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
                return false;
            }
            var canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
            if (!canBeScrolledInMainDirection) {
                return true;
            }
            if (canBeScrolledInMainDirection) {
                currentAxis = moveDirection;
            } else {
                currentAxis = moveDirection === 'v' ? 'h' : 'v';
                canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
            // other axis might be not scrollable
            }
            if (!canBeScrolledInMainDirection) {
                return false;
            }
            if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
                activeAxis.current = currentAxis;
            }
            if (!currentAxis) {
                return true;
            }
            var cancelingAxis = activeAxis.current || currentAxis;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleScroll"])(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
        }
    }["RemoveScrollSideCar.useCallback[shouldCancelEvent]"], []);
    var shouldPrevent = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[shouldPrevent]": function(_event) {
            var event = _event;
            if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
                // not the last active
                return;
            }
            var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
            var sourceEvent = shouldPreventQueue.current.filter({
                "RemoveScrollSideCar.useCallback[shouldPrevent]": function(e) {
                    return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
                }
            }["RemoveScrollSideCar.useCallback[shouldPrevent]"])[0];
            // self event, and should be canceled
            if (sourceEvent && sourceEvent.should) {
                if (event.cancelable) {
                    event.preventDefault();
                }
                return;
            }
            // outside or shard event
            if (!sourceEvent) {
                var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter({
                    "RemoveScrollSideCar.useCallback[shouldPrevent].shardNodes": function(node) {
                        return node.contains(event.target);
                    }
                }["RemoveScrollSideCar.useCallback[shouldPrevent].shardNodes"]);
                var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
                if (shouldStop) {
                    if (event.cancelable) {
                        event.preventDefault();
                    }
                }
            }
        }
    }["RemoveScrollSideCar.useCallback[shouldPrevent]"], []);
    var shouldCancel = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[shouldCancel]": function(name, delta, target, should) {
            var event = {
                name: name,
                delta: delta,
                target: target,
                should: should,
                shadowParent: getOutermostShadowParent(target)
            };
            shouldPreventQueue.current.push(event);
            setTimeout({
                "RemoveScrollSideCar.useCallback[shouldCancel]": function() {
                    shouldPreventQueue.current = shouldPreventQueue.current.filter({
                        "RemoveScrollSideCar.useCallback[shouldCancel]": function(e) {
                            return e !== event;
                        }
                    }["RemoveScrollSideCar.useCallback[shouldCancel]"]);
                }
            }["RemoveScrollSideCar.useCallback[shouldCancel]"], 1);
        }
    }["RemoveScrollSideCar.useCallback[shouldCancel]"], []);
    var scrollTouchStart = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[scrollTouchStart]": function(event) {
            touchStartRef.current = getTouchXY(event);
            activeAxis.current = undefined;
        }
    }["RemoveScrollSideCar.useCallback[scrollTouchStart]"], []);
    var scrollWheel = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[scrollWheel]": function(event) {
            shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
        }
    }["RemoveScrollSideCar.useCallback[scrollWheel]"], []);
    var scrollTouchMove = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[scrollTouchMove]": function(event) {
            shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
        }
    }["RemoveScrollSideCar.useCallback[scrollTouchMove]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RemoveScrollSideCar.useEffect": function() {
            lockStack.push(Style);
            props.setCallbacks({
                onScrollCapture: scrollWheel,
                onWheelCapture: scrollWheel,
                onTouchMoveCapture: scrollTouchMove
            });
            document.addEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.addEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.addEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
            return ({
                "RemoveScrollSideCar.useEffect": function() {
                    lockStack = lockStack.filter({
                        "RemoveScrollSideCar.useEffect": function(inst) {
                            return inst !== Style;
                        }
                    }["RemoveScrollSideCar.useEffect"]);
                    document.removeEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
                    document.removeEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
                    document.removeEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
                }
            })["RemoveScrollSideCar.useEffect"];
        }
    }["RemoveScrollSideCar.useEffect"], []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, inert ? __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: generateStyle(id)
    }) : null, removeScrollBar ? __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScrollBar"], {
        noRelative: props.noRelative,
        gapMode: props.gapMode
    }) : null);
}
function getOutermostShadowParent(node) {
    var shadowParent = null;
    while(node !== null){
        if (node instanceof ShadowRoot) {
            shadowParent = node.host;
            node = node.host;
        }
        node = node.parentNode;
    }
    return shadowParent;
}
}),
"[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/use-sidecar/dist/es2015/exports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll/dist/es2015/medium.js [app-client] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportSidecar"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effectCar"], __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScrollSideCar"]);
}),
"[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll/dist/es2015/UI.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-client] (ecmascript)");
;
;
;
;
var ReactRemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function(props, ref) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScroll"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, props, {
        ref: ref,
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
});
ReactRemoveScroll.classNames = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScroll"].classNames;
const __TURBOPACK__default__export__ = ReactRemoveScroll;
}),
"[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript) <export default as RemoveScroll>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript)");
}),
"[project]/Users/patie/Downloads/protonai/node_modules/get-nonce/dist/es2015/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNonce",
    ()=>getNonce,
    "setNonce",
    ()=>setNonce
]);
var currentNonce;
var setNonce = function(nonce) {
    currentNonce = nonce;
};
var getNonce = function() {
    if (currentNonce) {
        return currentNonce;
    }
    if (typeof __webpack_nonce__ !== 'undefined') {
        return __webpack_nonce__;
    }
    return undefined;
};
}),
"[project]/Users/patie/Downloads/protonai/node_modules/react-style-singleton/dist/es2015/singleton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stylesheetSingleton",
    ()=>stylesheetSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/get-nonce/dist/es2015/index.js [app-client] (ecmascript)");
;
function makeStyleTag() {
    if (!document) return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNonce"])();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    } else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function() {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function(style) {
            if (counter == 0) {
                if (stylesheet = makeStyleTag()) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function() {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        }
    };
};
}),
"[project]/Users/patie/Downloads/protonai/node_modules/react-style-singleton/dist/es2015/hook.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleHookSingleton",
    ()=>styleHookSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-style-singleton/dist/es2015/singleton.js [app-client] (ecmascript)");
;
;
var styleHookSingleton = function() {
    var sheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stylesheetSingleton"])();
    return function(styles, isDynamic) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "styleHookSingleton.useEffect": function() {
                sheet.add(styles);
                return ({
                    "styleHookSingleton.useEffect": function() {
                        sheet.remove();
                    }
                })["styleHookSingleton.useEffect"];
            }
        }["styleHookSingleton.useEffect"], [
            styles && isDynamic
        ]);
    };
};
}),
"[project]/Users/patie/Downloads/protonai/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleSingleton",
    ()=>styleSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-style-singleton/dist/es2015/hook.js [app-client] (ecmascript)");
;
var styleSingleton = function() {
    var useStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleHookSingleton"])();
    var Sheet = function(_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};
}),
"[project]/Users/patie/Downloads/protonai/node_modules/react-style-singleton/dist/es2015/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-style-singleton/dist/es2015/singleton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-style-singleton/dist/es2015/hook.js [app-client] (ecmascript)");
;
;
;
}),
"[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Arrow",
    ()=>Arrow2,
    "Content",
    ()=>Content2,
    "Group",
    ()=>Group,
    "Icon",
    ()=>Icon,
    "Item",
    ()=>Item,
    "ItemIndicator",
    ()=>ItemIndicator,
    "ItemText",
    ()=>ItemText,
    "Label",
    ()=>Label,
    "Portal",
    ()=>Portal,
    "Root",
    ()=>Root2,
    "ScrollDownButton",
    ()=>ScrollDownButton,
    "ScrollUpButton",
    ()=>ScrollUpButton,
    "Select",
    ()=>Select,
    "SelectArrow",
    ()=>SelectArrow,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectIcon",
    ()=>SelectIcon,
    "SelectItem",
    ()=>SelectItem,
    "SelectItemIndicator",
    ()=>SelectItemIndicator,
    "SelectItemText",
    ()=>SelectItemText,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectPortal",
    ()=>SelectPortal,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue,
    "SelectViewport",
    ()=>SelectViewport,
    "Separator",
    ()=>Separator,
    "Trigger",
    ()=>Trigger,
    "Value",
    ()=>Value,
    "Viewport",
    ()=>Viewport,
    "createSelectScope",
    ()=>createSelectScope
]);
// packages/react/select/src/Select.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$number$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/number/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-collection/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-direction/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-focus-guards/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-id/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-popper/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-portal/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$previous$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-use-previous/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/aria-hidden/dist/es2015/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript) <export default as RemoveScroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/patie/Downloads/protonai/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var OPEN_KEYS = [
    " ",
    "Enter",
    "ArrowUp",
    "ArrowDown"
];
var SELECTION_KEYS = [
    " ",
    "Enter"
];
var SELECT_NAME = "Select";
var [Collection, useCollection, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCollection"])(SELECT_NAME);
var [createSelectContext, createSelectScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])(SELECT_NAME, [
    createCollectionScope,
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPopperScope"]
]);
var usePopperScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPopperScope"])();
var [SelectProvider, useSelectContext] = createSelectContext(SELECT_NAME);
var [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME);
var Select = (props)=>{
    const { __scopeSelect, children, open: openProp, defaultOpen, onOpenChange, value: valueProp, defaultValue, onValueChange, dir, name, autoComplete, disabled, required, form } = props;
    const popperScope = usePopperScope(__scopeSelect);
    const [trigger, setTrigger] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [valueNode, setValueNode] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [valueNodeHasChildren, setValueNodeHasChildren] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    const [open = false, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
    });
    const triggerPointerDownPosRef = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const isFormControl = trigger ? form || !!trigger.closest("form") : true;
    const [nativeOptionsSet, setNativeOptionsSet] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](/* @__PURE__ */ new Set());
    const nativeSelectKey = Array.from(nativeOptionsSet).map((option)=>option.props.value).join(";");
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ...popperScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(SelectProvider, {
            required,
            scope: __scopeSelect,
            trigger,
            onTriggerChange: setTrigger,
            valueNode,
            onValueNodeChange: setValueNode,
            valueNodeHasChildren,
            onValueNodeHasChildrenChange: setValueNodeHasChildren,
            contentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(),
            value,
            onValueChange: setValue,
            open,
            onOpenChange: setOpen,
            dir: direction,
            triggerPointerDownPosRef,
            disabled,
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Collection.Provider, {
                    scope: __scopeSelect,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SelectNativeOptionsProvider, {
                        scope: props.__scopeSelect,
                        onNativeOptionAdd: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
                            "Select.useCallback": (option)=>{
                                setNativeOptionsSet({
                                    "Select.useCallback": (prev)=>new Set(prev).add(option)
                                }["Select.useCallback"]);
                            }
                        }["Select.useCallback"], []),
                        onNativeOptionRemove: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
                            "Select.useCallback": (option)=>{
                                setNativeOptionsSet({
                                    "Select.useCallback": (prev)=>{
                                        const optionsSet = new Set(prev);
                                        optionsSet.delete(option);
                                        return optionsSet;
                                    }
                                }["Select.useCallback"]);
                            }
                        }["Select.useCallback"], []),
                        children
                    })
                }),
                isFormControl ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(BubbleSelect, {
                    "aria-hidden": true,
                    required,
                    tabIndex: -1,
                    name,
                    autoComplete,
                    value,
                    onChange: (event)=>setValue(event.target.value),
                    disabled,
                    form,
                    children: [
                        value === void 0 ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("option", {
                            value: ""
                        }) : null,
                        Array.from(nativeOptionsSet)
                    ]
                }, nativeSelectKey) : null
            ]
        })
    });
};
Select.displayName = SELECT_NAME;
var TRIGGER_NAME = "SelectTrigger";
var SelectTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, disabled = false, ...triggerProps } = props;
    const popperScope = usePopperScope(__scopeSelect);
    const context = useSelectContext(TRIGGER_NAME, __scopeSelect);
    const isDisabled = context.disabled || disabled;
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.onTriggerChange);
    const getItems = useCollection(__scopeSelect);
    const pointerTypeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]("touch");
    const [searchRef, handleTypeaheadSearch, resetTypeahead] = useTypeaheadSearch({
        "SelectTrigger.useTypeaheadSearch": (search)=>{
            const enabledItems = getItems().filter({
                "SelectTrigger.useTypeaheadSearch.enabledItems": (item)=>!item.disabled
            }["SelectTrigger.useTypeaheadSearch.enabledItems"]);
            const currentItem = enabledItems.find({
                "SelectTrigger.useTypeaheadSearch.currentItem": (item)=>item.value === context.value
            }["SelectTrigger.useTypeaheadSearch.currentItem"]);
            const nextItem = findNextItem(enabledItems, search, currentItem);
            if (nextItem !== void 0) {
                context.onValueChange(nextItem.value);
            }
        }
    }["SelectTrigger.useTypeaheadSearch"]);
    const handleOpen = (pointerEvent)=>{
        if (!isDisabled) {
            context.onOpenChange(true);
            resetTypeahead();
        }
        if (pointerEvent) {
            context.triggerPointerDownPosRef.current = {
                x: Math.round(pointerEvent.pageX),
                y: Math.round(pointerEvent.pageY)
            };
        }
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"], {
        asChild: true,
        ...popperScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].button, {
            type: "button",
            role: "combobox",
            "aria-controls": context.contentId,
            "aria-expanded": context.open,
            "aria-required": context.required,
            "aria-autocomplete": "none",
            dir: context.dir,
            "data-state": context.open ? "open" : "closed",
            disabled: isDisabled,
            "data-disabled": isDisabled ? "" : void 0,
            "data-placeholder": shouldShowPlaceholder(context.value) ? "" : void 0,
            ...triggerProps,
            ref: composedRefs,
            onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(triggerProps.onClick, (event)=>{
                event.currentTarget.focus();
                if (pointerTypeRef.current !== "mouse") {
                    handleOpen(event);
                }
            }),
            onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(triggerProps.onPointerDown, (event)=>{
                pointerTypeRef.current = event.pointerType;
                const target = event.target;
                if (target.hasPointerCapture(event.pointerId)) {
                    target.releasePointerCapture(event.pointerId);
                }
                if (event.button === 0 && event.ctrlKey === false && event.pointerType === "mouse") {
                    handleOpen(event);
                    event.preventDefault();
                }
            }),
            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(triggerProps.onKeyDown, (event)=>{
                const isTypingAhead = searchRef.current !== "";
                const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
                if (isTypingAhead && event.key === " ") return;
                if (OPEN_KEYS.includes(event.key)) {
                    handleOpen();
                    event.preventDefault();
                }
            })
        })
    });
});
SelectTrigger.displayName = TRIGGER_NAME;
var VALUE_NAME = "SelectValue";
var SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, className, style, children, placeholder = "", ...valueProps } = props;
    const context = useSelectContext(VALUE_NAME, __scopeSelect);
    const { onValueNodeHasChildrenChange } = context;
    const hasChildren = children !== void 0;
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.onValueNodeChange);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "SelectValue.useLayoutEffect": ()=>{
            onValueNodeHasChildrenChange(hasChildren);
        }
    }["SelectValue.useLayoutEffect"], [
        onValueNodeHasChildrenChange,
        hasChildren
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].span, {
        ...valueProps,
        ref: composedRefs,
        style: {
            pointerEvents: "none"
        },
        children: shouldShowPlaceholder(context.value) ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: placeholder
        }) : children
    });
});
SelectValue.displayName = VALUE_NAME;
var ICON_NAME = "SelectIcon";
var SelectIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, children, ...iconProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].span, {
        "aria-hidden": true,
        ...iconProps,
        ref: forwardedRef,
        children: children || "\u25BC"
    });
});
SelectIcon.displayName = ICON_NAME;
var PORTAL_NAME = "SelectPortal";
var SelectPortal = (props)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        asChild: true,
        ...props
    });
};
SelectPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "SelectContent";
var SelectContent = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useSelectContext(CONTENT_NAME, props.__scopeSelect);
    const [fragment, setFragment] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "SelectContent.useLayoutEffect": ()=>{
            setFragment(new DocumentFragment());
        }
    }["SelectContent.useLayoutEffect"], []);
    if (!context.open) {
        const frag = fragment;
        return frag ? __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"](/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SelectContentProvider, {
            scope: props.__scopeSelect,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Collection.Slot, {
                scope: props.__scopeSelect,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    children: props.children
                })
            })
        }), frag) : null;
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SelectContentImpl, {
        ...props,
        ref: forwardedRef
    });
});
SelectContent.displayName = CONTENT_NAME;
var CONTENT_MARGIN = 10;
var [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME);
var CONTENT_IMPL_NAME = "SelectContentImpl";
var SelectContentImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, position = "item-aligned", onCloseAutoFocus, onEscapeKeyDown, onPointerDownOutside, //
    // PopperContent props
    side, sideOffset, align, alignOffset, arrowPadding, collisionBoundary, collisionPadding, sticky, hideWhenDetached, avoidCollisions, //
    ...contentProps } = props;
    const context = useSelectContext(CONTENT_NAME, __scopeSelect);
    const [content, setContent] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [viewport, setViewport] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, {
        "SelectContentImpl.useComposedRefs[composedRefs]": (node)=>setContent(node)
    }["SelectContentImpl.useComposedRefs[composedRefs]"]);
    const [selectedItem, setSelectedItem] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [selectedItemText, setSelectedItemText] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const getItems = useCollection(__scopeSelect);
    const [isPositioned, setIsPositioned] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const firstValidItemFoundRef = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SelectContentImpl.useEffect": ()=>{
            if (content) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideOthers"])(content);
        }
    }["SelectContentImpl.useEffect"], [
        content
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusGuards"])();
    const focusFirst = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "SelectContentImpl.useCallback[focusFirst]": (candidates)=>{
            const [firstItem, ...restItems] = getItems().map({
                "SelectContentImpl.useCallback[focusFirst]": (item)=>item.ref.current
            }["SelectContentImpl.useCallback[focusFirst]"]);
            const [lastItem] = restItems.slice(-1);
            const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
            for (const candidate of candidates){
                if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
                candidate?.scrollIntoView({
                    block: "nearest"
                });
                if (candidate === firstItem && viewport) viewport.scrollTop = 0;
                if (candidate === lastItem && viewport) viewport.scrollTop = viewport.scrollHeight;
                candidate?.focus();
                if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
            }
        }
    }["SelectContentImpl.useCallback[focusFirst]"], [
        getItems,
        viewport
    ]);
    const focusSelectedItem = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "SelectContentImpl.useCallback[focusSelectedItem]": ()=>focusFirst([
                selectedItem,
                content
            ])
    }["SelectContentImpl.useCallback[focusSelectedItem]"], [
        focusFirst,
        selectedItem,
        content
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SelectContentImpl.useEffect": ()=>{
            if (isPositioned) {
                focusSelectedItem();
            }
        }
    }["SelectContentImpl.useEffect"], [
        isPositioned,
        focusSelectedItem
    ]);
    const { onOpenChange, triggerPointerDownPosRef } = context;
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SelectContentImpl.useEffect": ()=>{
            if (content) {
                let pointerMoveDelta = {
                    x: 0,
                    y: 0
                };
                const handlePointerMove = {
                    "SelectContentImpl.useEffect.handlePointerMove": (event)=>{
                        pointerMoveDelta = {
                            x: Math.abs(Math.round(event.pageX) - (triggerPointerDownPosRef.current?.x ?? 0)),
                            y: Math.abs(Math.round(event.pageY) - (triggerPointerDownPosRef.current?.y ?? 0))
                        };
                    }
                }["SelectContentImpl.useEffect.handlePointerMove"];
                const handlePointerUp = {
                    "SelectContentImpl.useEffect.handlePointerUp": (event)=>{
                        if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) {
                            event.preventDefault();
                        } else {
                            if (!content.contains(event.target)) {
                                onOpenChange(false);
                            }
                        }
                        document.removeEventListener("pointermove", handlePointerMove);
                        triggerPointerDownPosRef.current = null;
                    }
                }["SelectContentImpl.useEffect.handlePointerUp"];
                if (triggerPointerDownPosRef.current !== null) {
                    document.addEventListener("pointermove", handlePointerMove);
                    document.addEventListener("pointerup", handlePointerUp, {
                        capture: true,
                        once: true
                    });
                }
                return ({
                    "SelectContentImpl.useEffect": ()=>{
                        document.removeEventListener("pointermove", handlePointerMove);
                        document.removeEventListener("pointerup", handlePointerUp, {
                            capture: true
                        });
                    }
                })["SelectContentImpl.useEffect"];
            }
        }
    }["SelectContentImpl.useEffect"], [
        content,
        onOpenChange,
        triggerPointerDownPosRef
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SelectContentImpl.useEffect": ()=>{
            const close = {
                "SelectContentImpl.useEffect.close": ()=>onOpenChange(false)
            }["SelectContentImpl.useEffect.close"];
            window.addEventListener("blur", close);
            window.addEventListener("resize", close);
            return ({
                "SelectContentImpl.useEffect": ()=>{
                    window.removeEventListener("blur", close);
                    window.removeEventListener("resize", close);
                }
            })["SelectContentImpl.useEffect"];
        }
    }["SelectContentImpl.useEffect"], [
        onOpenChange
    ]);
    const [searchRef, handleTypeaheadSearch] = useTypeaheadSearch({
        "SelectContentImpl.useTypeaheadSearch": (search)=>{
            const enabledItems = getItems().filter({
                "SelectContentImpl.useTypeaheadSearch.enabledItems": (item)=>!item.disabled
            }["SelectContentImpl.useTypeaheadSearch.enabledItems"]);
            const currentItem = enabledItems.find({
                "SelectContentImpl.useTypeaheadSearch.currentItem": (item)=>item.ref.current === document.activeElement
            }["SelectContentImpl.useTypeaheadSearch.currentItem"]);
            const nextItem = findNextItem(enabledItems, search, currentItem);
            if (nextItem) {
                setTimeout({
                    "SelectContentImpl.useTypeaheadSearch": ()=>nextItem.ref.current.focus()
                }["SelectContentImpl.useTypeaheadSearch"]);
            }
        }
    }["SelectContentImpl.useTypeaheadSearch"]);
    const itemRefCallback = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "SelectContentImpl.useCallback[itemRefCallback]": (node, value, disabled)=>{
            const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
            const isSelectedItem = context.value !== void 0 && context.value === value;
            if (isSelectedItem || isFirstValidItem) {
                setSelectedItem(node);
                if (isFirstValidItem) firstValidItemFoundRef.current = true;
            }
        }
    }["SelectContentImpl.useCallback[itemRefCallback]"], [
        context.value
    ]);
    const handleItemLeave = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "SelectContentImpl.useCallback[handleItemLeave]": ()=>content?.focus()
    }["SelectContentImpl.useCallback[handleItemLeave]"], [
        content
    ]);
    const itemTextRefCallback = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "SelectContentImpl.useCallback[itemTextRefCallback]": (node, value, disabled)=>{
            const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
            const isSelectedItem = context.value !== void 0 && context.value === value;
            if (isSelectedItem || isFirstValidItem) {
                setSelectedItemText(node);
            }
        }
    }["SelectContentImpl.useCallback[itemTextRefCallback]"], [
        context.value
    ]);
    const SelectPosition = position === "popper" ? SelectPopperPosition : SelectItemAlignedPosition;
    const popperContentProps = SelectPosition === SelectPopperPosition ? {
        side,
        sideOffset,
        align,
        alignOffset,
        arrowPadding,
        collisionBoundary,
        collisionPadding,
        sticky,
        hideWhenDetached,
        avoidCollisions
    } : {};
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SelectContentProvider, {
        scope: __scopeSelect,
        content,
        viewport,
        onViewportChange: setViewport,
        itemRefCallback,
        selectedItem,
        onItemLeave: handleItemLeave,
        itemTextRefCallback,
        focusSelectedItem,
        selectedItemText,
        position,
        isPositioned,
        searchRef,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__["RemoveScroll"], {
            as: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"],
            allowPinchZoom: true,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusScope"], {
                asChild: true,
                trapped: context.open,
                onMountAutoFocus: (event)=>{
                    event.preventDefault();
                },
                onUnmountAutoFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onCloseAutoFocus, (event)=>{
                    context.trigger?.focus({
                        preventScroll: true
                    });
                    event.preventDefault();
                }),
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DismissableLayer"], {
                    asChild: true,
                    disableOutsidePointerEvents: true,
                    onEscapeKeyDown,
                    onPointerDownOutside,
                    onFocusOutside: (event)=>event.preventDefault(),
                    onDismiss: ()=>context.onOpenChange(false),
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SelectPosition, {
                        role: "listbox",
                        id: context.contentId,
                        "data-state": context.open ? "open" : "closed",
                        dir: context.dir,
                        onContextMenu: (event)=>event.preventDefault(),
                        ...contentProps,
                        ...popperContentProps,
                        onPlaced: ()=>setIsPositioned(true),
                        ref: composedRefs,
                        style: {
                            // flex layout so we can place the scroll buttons properly
                            display: "flex",
                            flexDirection: "column",
                            // reset the outline by default as the content MAY get focused
                            outline: "none",
                            ...contentProps.style
                        },
                        onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(contentProps.onKeyDown, (event)=>{
                            const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                            if (event.key === "Tab") event.preventDefault();
                            if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
                            if ([
                                "ArrowUp",
                                "ArrowDown",
                                "Home",
                                "End"
                            ].includes(event.key)) {
                                const items = getItems().filter((item)=>!item.disabled);
                                let candidateNodes = items.map((item)=>item.ref.current);
                                if ([
                                    "ArrowUp",
                                    "End"
                                ].includes(event.key)) {
                                    candidateNodes = candidateNodes.slice().reverse();
                                }
                                if ([
                                    "ArrowUp",
                                    "ArrowDown"
                                ].includes(event.key)) {
                                    const currentElement = event.target;
                                    const currentIndex = candidateNodes.indexOf(currentElement);
                                    candidateNodes = candidateNodes.slice(currentIndex + 1);
                                }
                                setTimeout(()=>focusFirst(candidateNodes));
                                event.preventDefault();
                            }
                        })
                    })
                })
            })
        })
    });
});
SelectContentImpl.displayName = CONTENT_IMPL_NAME;
var ITEM_ALIGNED_POSITION_NAME = "SelectItemAlignedPosition";
var SelectItemAlignedPosition = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, onPlaced, ...popperProps } = props;
    const context = useSelectContext(CONTENT_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(CONTENT_NAME, __scopeSelect);
    const [contentWrapper, setContentWrapper] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [content, setContent] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, {
        "SelectItemAlignedPosition.useComposedRefs[composedRefs]": (node)=>setContent(node)
    }["SelectItemAlignedPosition.useComposedRefs[composedRefs]"]);
    const getItems = useCollection(__scopeSelect);
    const shouldExpandOnScrollRef = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const shouldRepositionRef = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](true);
    const { viewport, selectedItem, selectedItemText, focusSelectedItem } = contentContext;
    const position = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "SelectItemAlignedPosition.useCallback[position]": ()=>{
            if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
                const triggerRect = context.trigger.getBoundingClientRect();
                const contentRect = content.getBoundingClientRect();
                const valueNodeRect = context.valueNode.getBoundingClientRect();
                const itemTextRect = selectedItemText.getBoundingClientRect();
                if (context.dir !== "rtl") {
                    const itemTextOffset = itemTextRect.left - contentRect.left;
                    const left = valueNodeRect.left - itemTextOffset;
                    const leftDelta = triggerRect.left - left;
                    const minContentWidth = triggerRect.width + leftDelta;
                    const contentWidth = Math.max(minContentWidth, contentRect.width);
                    const rightEdge = window.innerWidth - CONTENT_MARGIN;
                    const clampedLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$number$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(left, [
                        CONTENT_MARGIN,
                        // Prevents the content from going off the starting edge of the
                        // viewport. It may still go off the ending edge, but this can be
                        // controlled by the user since they may want to manage overflow in a
                        // specific way.
                        // https://github.com/radix-ui/primitives/issues/2049
                        Math.max(CONTENT_MARGIN, rightEdge - contentWidth)
                    ]);
                    contentWrapper.style.minWidth = minContentWidth + "px";
                    contentWrapper.style.left = clampedLeft + "px";
                } else {
                    const itemTextOffset = contentRect.right - itemTextRect.right;
                    const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
                    const rightDelta = window.innerWidth - triggerRect.right - right;
                    const minContentWidth = triggerRect.width + rightDelta;
                    const contentWidth = Math.max(minContentWidth, contentRect.width);
                    const leftEdge = window.innerWidth - CONTENT_MARGIN;
                    const clampedRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$number$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(right, [
                        CONTENT_MARGIN,
                        Math.max(CONTENT_MARGIN, leftEdge - contentWidth)
                    ]);
                    contentWrapper.style.minWidth = minContentWidth + "px";
                    contentWrapper.style.right = clampedRight + "px";
                }
                const items = getItems();
                const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
                const itemsHeight = viewport.scrollHeight;
                const contentStyles = window.getComputedStyle(content);
                const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
                const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
                const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
                const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
                const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
                const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
                const viewportStyles = window.getComputedStyle(viewport);
                const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
                const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
                const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - CONTENT_MARGIN;
                const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
                const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
                const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
                const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
                const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
                const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
                if (willAlignWithoutTopOverflow) {
                    const isLastItem = items.length > 0 && selectedItem === items[items.length - 1].ref.current;
                    contentWrapper.style.bottom = "0px";
                    const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
                    const clampedTriggerMiddleToBottomEdge = Math.max(triggerMiddleToBottomEdge, selectedItemHalfHeight + // viewport might have padding bottom, include it to avoid a scrollable viewport
                    (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth);
                    const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
                    contentWrapper.style.height = height + "px";
                } else {
                    const isFirstItem = items.length > 0 && selectedItem === items[0].ref.current;
                    contentWrapper.style.top = "0px";
                    const clampedTopEdgeToTriggerMiddle = Math.max(topEdgeToTriggerMiddle, contentBorderTopWidth + viewport.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
                    (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight);
                    const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
                    contentWrapper.style.height = height + "px";
                    viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
                }
                contentWrapper.style.margin = `${CONTENT_MARGIN}px 0`;
                contentWrapper.style.minHeight = minContentHeight + "px";
                contentWrapper.style.maxHeight = availableHeight + "px";
                onPlaced?.();
                requestAnimationFrame({
                    "SelectItemAlignedPosition.useCallback[position]": ()=>shouldExpandOnScrollRef.current = true
                }["SelectItemAlignedPosition.useCallback[position]"]);
            }
        }
    }["SelectItemAlignedPosition.useCallback[position]"], [
        getItems,
        context.trigger,
        context.valueNode,
        contentWrapper,
        content,
        viewport,
        selectedItem,
        selectedItemText,
        context.dir,
        onPlaced
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "SelectItemAlignedPosition.useLayoutEffect": ()=>position()
    }["SelectItemAlignedPosition.useLayoutEffect"], [
        position
    ]);
    const [contentZIndex, setContentZIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "SelectItemAlignedPosition.useLayoutEffect": ()=>{
            if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
        }
    }["SelectItemAlignedPosition.useLayoutEffect"], [
        content
    ]);
    const handleScrollButtonChange = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "SelectItemAlignedPosition.useCallback[handleScrollButtonChange]": (node)=>{
            if (node && shouldRepositionRef.current === true) {
                position();
                focusSelectedItem?.();
                shouldRepositionRef.current = false;
            }
        }
    }["SelectItemAlignedPosition.useCallback[handleScrollButtonChange]"], [
        position,
        focusSelectedItem
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SelectViewportProvider, {
        scope: __scopeSelect,
        contentWrapper,
        shouldExpandOnScrollRef,
        onScrollButtonChange: handleScrollButtonChange,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            ref: setContentWrapper,
            style: {
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                zIndex: contentZIndex
            },
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
                ...popperProps,
                ref: composedRefs,
                style: {
                    // When we get the height of the content, it includes borders. If we were to set
                    // the height without having `boxSizing: 'border-box'` it would be too big.
                    boxSizing: "border-box",
                    // We need to ensure the content doesn't get taller than the wrapper
                    maxHeight: "100%",
                    ...popperProps.style
                }
            })
        })
    });
});
SelectItemAlignedPosition.displayName = ITEM_ALIGNED_POSITION_NAME;
var POPPER_POSITION_NAME = "SelectPopperPosition";
var SelectPopperPosition = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, align = "start", collisionPadding = CONTENT_MARGIN, ...popperProps } = props;
    const popperScope = usePopperScope(__scopeSelect);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        ...popperScope,
        ...popperProps,
        ref: forwardedRef,
        align,
        collisionPadding,
        style: {
            // Ensure border-box for floating-ui calculations
            boxSizing: "border-box",
            ...popperProps.style,
            // re-namespace exposed content custom properties
            ...{
                "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
            }
        }
    });
});
SelectPopperPosition.displayName = POPPER_POSITION_NAME;
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME, {});
var VIEWPORT_NAME = "SelectViewport";
var SelectViewport = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, nonce, ...viewportProps } = props;
    const contentContext = useSelectContentContext(VIEWPORT_NAME, __scopeSelect);
    const viewportContext = useSelectViewportContext(VIEWPORT_NAME, __scopeSelect);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, contentContext.onViewportChange);
    const prevScrollTopRef = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
                },
                nonce
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Collection.Slot, {
                scope: __scopeSelect,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
                    "data-radix-select-viewport": "",
                    role: "presentation",
                    ...viewportProps,
                    ref: composedRefs,
                    style: {
                        // we use position: 'relative' here on the `viewport` so that when we call
                        // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
                        // (independent of the scrollUpButton).
                        position: "relative",
                        flex: 1,
                        // Viewport should only be scrollable in the vertical direction.
                        // This won't work in vertical writing modes, so we'll need to
                        // revisit this if/when that is supported
                        // https://developer.chrome.com/blog/vertical-form-controls
                        overflow: "hidden auto",
                        ...viewportProps.style
                    },
                    onScroll: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(viewportProps.onScroll, (event)=>{
                        const viewport = event.currentTarget;
                        const { contentWrapper, shouldExpandOnScrollRef } = viewportContext;
                        if (shouldExpandOnScrollRef?.current && contentWrapper) {
                            const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
                            if (scrolledBy > 0) {
                                const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
                                const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
                                const cssHeight = parseFloat(contentWrapper.style.height);
                                const prevHeight = Math.max(cssMinHeight, cssHeight);
                                if (prevHeight < availableHeight) {
                                    const nextHeight = prevHeight + scrolledBy;
                                    const clampedNextHeight = Math.min(availableHeight, nextHeight);
                                    const heightDiff = nextHeight - clampedNextHeight;
                                    contentWrapper.style.height = clampedNextHeight + "px";
                                    if (contentWrapper.style.bottom === "0px") {
                                        viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
                                        contentWrapper.style.justifyContent = "flex-end";
                                    }
                                }
                            }
                        }
                        prevScrollTopRef.current = viewport.scrollTop;
                    })
                })
            })
        ]
    });
});
SelectViewport.displayName = VIEWPORT_NAME;
var GROUP_NAME = "SelectGroup";
var [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext(GROUP_NAME);
var SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, ...groupProps } = props;
    const groupId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SelectGroupContextProvider, {
        scope: __scopeSelect,
        id: groupId,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
            role: "group",
            "aria-labelledby": groupId,
            ...groupProps,
            ref: forwardedRef
        })
    });
});
SelectGroup.displayName = GROUP_NAME;
var LABEL_NAME = "SelectLabel";
var SelectLabel = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, ...labelProps } = props;
    const groupContext = useSelectGroupContext(LABEL_NAME, __scopeSelect);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        id: groupContext.id,
        ...labelProps,
        ref: forwardedRef
    });
});
SelectLabel.displayName = LABEL_NAME;
var ITEM_NAME = "SelectItem";
var [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME);
var SelectItem = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, value, disabled = false, textValue: textValueProp, ...itemProps } = props;
    const context = useSelectContext(ITEM_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ITEM_NAME, __scopeSelect);
    const isSelected = context.value === value;
    const [textValue, setTextValue] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](textValueProp ?? "");
    const [isFocused, setIsFocused] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, {
        "SelectItem.useComposedRefs[composedRefs]": (node)=>contentContext.itemRefCallback?.(node, value, disabled)
    }["SelectItem.useComposedRefs[composedRefs]"]);
    const textId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const pointerTypeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]("touch");
    const handleSelect = ()=>{
        if (!disabled) {
            context.onValueChange(value);
            context.onOpenChange(false);
        }
    };
    if (value === "") {
        throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SelectItemContextProvider, {
        scope: __scopeSelect,
        value,
        disabled,
        textId,
        isSelected,
        onItemTextChange: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "SelectItem.useCallback": (node)=>{
                setTextValue({
                    "SelectItem.useCallback": (prevTextValue)=>prevTextValue || (node?.textContent ?? "").trim()
                }["SelectItem.useCallback"]);
            }
        }["SelectItem.useCallback"], []),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Collection.ItemSlot, {
            scope: __scopeSelect,
            value,
            disabled,
            textValue,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
                role: "option",
                "aria-labelledby": textId,
                "data-highlighted": isFocused ? "" : void 0,
                "aria-selected": isSelected && isFocused,
                "data-state": isSelected ? "checked" : "unchecked",
                "aria-disabled": disabled || void 0,
                "data-disabled": disabled ? "" : void 0,
                tabIndex: disabled ? void 0 : -1,
                ...itemProps,
                ref: composedRefs,
                onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onFocus, ()=>setIsFocused(true)),
                onBlur: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onBlur, ()=>setIsFocused(false)),
                onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onClick, ()=>{
                    if (pointerTypeRef.current !== "mouse") handleSelect();
                }),
                onPointerUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onPointerUp, ()=>{
                    if (pointerTypeRef.current === "mouse") handleSelect();
                }),
                onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onPointerDown, (event)=>{
                    pointerTypeRef.current = event.pointerType;
                }),
                onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onPointerMove, (event)=>{
                    pointerTypeRef.current = event.pointerType;
                    if (disabled) {
                        contentContext.onItemLeave?.();
                    } else if (pointerTypeRef.current === "mouse") {
                        event.currentTarget.focus({
                            preventScroll: true
                        });
                    }
                }),
                onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onPointerLeave, (event)=>{
                    if (event.currentTarget === document.activeElement) {
                        contentContext.onItemLeave?.();
                    }
                }),
                onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onKeyDown, (event)=>{
                    const isTypingAhead = contentContext.searchRef?.current !== "";
                    if (isTypingAhead && event.key === " ") return;
                    if (SELECTION_KEYS.includes(event.key)) handleSelect();
                    if (event.key === " ") event.preventDefault();
                })
            })
        })
    });
});
SelectItem.displayName = ITEM_NAME;
var ITEM_TEXT_NAME = "SelectItemText";
var SelectItemText = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, className, style, ...itemTextProps } = props;
    const context = useSelectContext(ITEM_TEXT_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ITEM_TEXT_NAME, __scopeSelect);
    const itemContext = useSelectItemContext(ITEM_TEXT_NAME, __scopeSelect);
    const nativeOptionsContext = useSelectNativeOptionsContext(ITEM_TEXT_NAME, __scopeSelect);
    const [itemTextNode, setItemTextNode] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, {
        "SelectItemText.useComposedRefs[composedRefs]": (node)=>setItemTextNode(node)
    }["SelectItemText.useComposedRefs[composedRefs]"], itemContext.onItemTextChange, {
        "SelectItemText.useComposedRefs[composedRefs]": (node)=>contentContext.itemTextRefCallback?.(node, itemContext.value, itemContext.disabled)
    }["SelectItemText.useComposedRefs[composedRefs]"]);
    const textContent = itemTextNode?.textContent;
    const nativeOption = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SelectItemText.useMemo[nativeOption]": ()=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("option", {
                value: itemContext.value,
                disabled: itemContext.disabled,
                children: textContent
            }, itemContext.value)
    }["SelectItemText.useMemo[nativeOption]"], [
        itemContext.disabled,
        itemContext.value,
        textContent
    ]);
    const { onNativeOptionAdd, onNativeOptionRemove } = nativeOptionsContext;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "SelectItemText.useLayoutEffect": ()=>{
            onNativeOptionAdd(nativeOption);
            return ({
                "SelectItemText.useLayoutEffect": ()=>onNativeOptionRemove(nativeOption)
            })["SelectItemText.useLayoutEffect"];
        }
    }["SelectItemText.useLayoutEffect"], [
        onNativeOptionAdd,
        onNativeOptionRemove,
        nativeOption
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].span, {
                id: itemContext.textId,
                ...itemTextProps,
                ref: composedRefs
            }),
            itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren ? __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"](itemTextProps.children, context.valueNode) : null
        ]
    });
});
SelectItemText.displayName = ITEM_TEXT_NAME;
var ITEM_INDICATOR_NAME = "SelectItemIndicator";
var SelectItemIndicator = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, ...itemIndicatorProps } = props;
    const itemContext = useSelectItemContext(ITEM_INDICATOR_NAME, __scopeSelect);
    return itemContext.isSelected ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].span, {
        "aria-hidden": true,
        ...itemIndicatorProps,
        ref: forwardedRef
    }) : null;
});
SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
var SelectScrollUpButton = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const contentContext = useSelectContentContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
    const viewportContext = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
    const [canScrollUp, setCanScrollUp] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, viewportContext.onScrollButtonChange);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "SelectScrollUpButton.useLayoutEffect": ()=>{
            if (contentContext.viewport && contentContext.isPositioned) {
                let handleScroll2 = {
                    "SelectScrollUpButton.useLayoutEffect.handleScroll2": function() {
                        const canScrollUp2 = viewport.scrollTop > 0;
                        setCanScrollUp(canScrollUp2);
                    }
                }["SelectScrollUpButton.useLayoutEffect.handleScroll2"];
                var handleScroll = handleScroll2;
                const viewport = contentContext.viewport;
                handleScroll2();
                viewport.addEventListener("scroll", handleScroll2);
                return ({
                    "SelectScrollUpButton.useLayoutEffect": ()=>viewport.removeEventListener("scroll", handleScroll2)
                })["SelectScrollUpButton.useLayoutEffect"];
            }
        }
    }["SelectScrollUpButton.useLayoutEffect"], [
        contentContext.viewport,
        contentContext.isPositioned
    ]);
    return canScrollUp ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SelectScrollButtonImpl, {
        ...props,
        ref: composedRefs,
        onAutoScroll: ()=>{
            const { viewport, selectedItem } = contentContext;
            if (viewport && selectedItem) {
                viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
            }
        }
    }) : null;
});
SelectScrollUpButton.displayName = SCROLL_UP_BUTTON_NAME;
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
var SelectScrollDownButton = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const contentContext = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
    const viewportContext = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
    const [canScrollDown, setCanScrollDown] = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, viewportContext.onScrollButtonChange);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "SelectScrollDownButton.useLayoutEffect": ()=>{
            if (contentContext.viewport && contentContext.isPositioned) {
                let handleScroll2 = {
                    "SelectScrollDownButton.useLayoutEffect.handleScroll2": function() {
                        const maxScroll = viewport.scrollHeight - viewport.clientHeight;
                        const canScrollDown2 = Math.ceil(viewport.scrollTop) < maxScroll;
                        setCanScrollDown(canScrollDown2);
                    }
                }["SelectScrollDownButton.useLayoutEffect.handleScroll2"];
                var handleScroll = handleScroll2;
                const viewport = contentContext.viewport;
                handleScroll2();
                viewport.addEventListener("scroll", handleScroll2);
                return ({
                    "SelectScrollDownButton.useLayoutEffect": ()=>viewport.removeEventListener("scroll", handleScroll2)
                })["SelectScrollDownButton.useLayoutEffect"];
            }
        }
    }["SelectScrollDownButton.useLayoutEffect"], [
        contentContext.viewport,
        contentContext.isPositioned
    ]);
    return canScrollDown ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SelectScrollButtonImpl, {
        ...props,
        ref: composedRefs,
        onAutoScroll: ()=>{
            const { viewport, selectedItem } = contentContext;
            if (viewport && selectedItem) {
                viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
            }
        }
    }) : null;
});
SelectScrollDownButton.displayName = SCROLL_DOWN_BUTTON_NAME;
var SelectScrollButtonImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, onAutoScroll, ...scrollIndicatorProps } = props;
    const contentContext = useSelectContentContext("SelectScrollButton", __scopeSelect);
    const autoScrollTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const getItems = useCollection(__scopeSelect);
    const clearAutoScrollTimer = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "SelectScrollButtonImpl.useCallback[clearAutoScrollTimer]": ()=>{
            if (autoScrollTimerRef.current !== null) {
                window.clearInterval(autoScrollTimerRef.current);
                autoScrollTimerRef.current = null;
            }
        }
    }["SelectScrollButtonImpl.useCallback[clearAutoScrollTimer]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SelectScrollButtonImpl.useEffect": ()=>{
            return ({
                "SelectScrollButtonImpl.useEffect": ()=>clearAutoScrollTimer()
            })["SelectScrollButtonImpl.useEffect"];
        }
    }["SelectScrollButtonImpl.useEffect"], [
        clearAutoScrollTimer
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "SelectScrollButtonImpl.useLayoutEffect": ()=>{
            const activeItem = getItems().find({
                "SelectScrollButtonImpl.useLayoutEffect.activeItem": (item)=>item.ref.current === document.activeElement
            }["SelectScrollButtonImpl.useLayoutEffect.activeItem"]);
            activeItem?.ref.current?.scrollIntoView({
                block: "nearest"
            });
        }
    }["SelectScrollButtonImpl.useLayoutEffect"], [
        getItems
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        "aria-hidden": true,
        ...scrollIndicatorProps,
        ref: forwardedRef,
        style: {
            flexShrink: 0,
            ...scrollIndicatorProps.style
        },
        onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(scrollIndicatorProps.onPointerDown, ()=>{
            if (autoScrollTimerRef.current === null) {
                autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
            }
        }),
        onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(scrollIndicatorProps.onPointerMove, ()=>{
            contentContext.onItemLeave?.();
            if (autoScrollTimerRef.current === null) {
                autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
            }
        }),
        onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(scrollIndicatorProps.onPointerLeave, ()=>{
            clearAutoScrollTimer();
        })
    });
});
var SEPARATOR_NAME = "SelectSeparator";
var SelectSeparator = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, ...separatorProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        "aria-hidden": true,
        ...separatorProps,
        ref: forwardedRef
    });
});
SelectSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "SelectArrow";
var SelectArrow = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeSelect);
    const context = useSelectContext(ARROW_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ARROW_NAME, __scopeSelect);
    return context.open && contentContext.position === "popper" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
        ...popperScope,
        ...arrowProps,
        ref: forwardedRef
    }) : null;
});
SelectArrow.displayName = ARROW_NAME;
function shouldShowPlaceholder(value) {
    return value === "" || value === void 0;
}
var BubbleSelect = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { value, ...selectProps } = props;
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const prevValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$previous$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevious"])(value);
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "BubbleSelect.useEffect": ()=>{
            const select = ref.current;
            const selectProto = window.HTMLSelectElement.prototype;
            const descriptor = Object.getOwnPropertyDescriptor(selectProto, "value");
            const setValue = descriptor.set;
            if (prevValue !== value && setValue) {
                const event = new Event("change", {
                    bubbles: true
                });
                setValue.call(select, value);
                select.dispatchEvent(event);
            }
        }
    }["BubbleSelect.useEffect"], [
        prevValue,
        value
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisuallyHidden"], {
        asChild: true,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("select", {
            ...selectProps,
            ref: composedRefs,
            defaultValue: value
        })
    });
});
BubbleSelect.displayName = "BubbleSelect";
function useTypeaheadSearch(onSearchChange) {
    const handleSearchChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onSearchChange);
    const searchRef = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]("");
    const timerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const handleTypeaheadSearch = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useTypeaheadSearch.useCallback[handleTypeaheadSearch]": (key)=>{
            const search = searchRef.current + key;
            handleSearchChange(search);
            (function updateSearch(value) {
                searchRef.current = value;
                window.clearTimeout(timerRef.current);
                if (value !== "") timerRef.current = window.setTimeout({
                    "useTypeaheadSearch.useCallback[handleTypeaheadSearch].updateSearch": ()=>updateSearch("")
                }["useTypeaheadSearch.useCallback[handleTypeaheadSearch].updateSearch"], 1e3);
            })(search);
        }
    }["useTypeaheadSearch.useCallback[handleTypeaheadSearch]"], [
        handleSearchChange
    ]);
    const resetTypeahead = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useTypeaheadSearch.useCallback[resetTypeahead]": ()=>{
            searchRef.current = "";
            window.clearTimeout(timerRef.current);
        }
    }["useTypeaheadSearch.useCallback[resetTypeahead]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$patie$2f$Downloads$2f$protonai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useTypeaheadSearch.useEffect": ()=>{
            return ({
                "useTypeaheadSearch.useEffect": ()=>window.clearTimeout(timerRef.current)
            })["useTypeaheadSearch.useEffect"];
        }
    }["useTypeaheadSearch.useEffect"], []);
    return [
        searchRef,
        handleTypeaheadSearch,
        resetTypeahead
    ];
}
function findNextItem(items, search, currentItem) {
    const isRepeated = search.length > 1 && Array.from(search).every((char)=>char === search[0]);
    const normalizedSearch = isRepeated ? search[0] : search;
    const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
    let wrappedItems = wrapArray(items, Math.max(currentItemIndex, 0));
    const excludeCurrentItem = normalizedSearch.length === 1;
    if (excludeCurrentItem) wrappedItems = wrappedItems.filter((v)=>v !== currentItem);
    const nextItem = wrappedItems.find((item)=>item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
    return nextItem !== currentItem ? nextItem : void 0;
}
function wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]);
}
var Root2 = Select;
var Trigger = SelectTrigger;
var Value = SelectValue;
var Icon = SelectIcon;
var Portal = SelectPortal;
var Content2 = SelectContent;
var Viewport = SelectViewport;
var Group = SelectGroup;
var Label = SelectLabel;
var Item = SelectItem;
var ItemText = SelectItemText;
var ItemIndicator = SelectItemIndicator;
var ScrollUpButton = SelectScrollUpButton;
var ScrollDownButton = SelectScrollDownButton;
var Separator = SelectSeparator;
var Arrow2 = SelectArrow;
;
 //# sourceMappingURL=index.mjs.map
}),
]);

//# sourceMappingURL=ff141_329d3a81._.js.map