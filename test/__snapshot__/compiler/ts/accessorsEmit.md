# Kataw parser test case

## Input

`````js
//// [accessorsEmit.ts]
class Result { }

class Test {
    get Property(): Result {
        var x = 1;
        return null;
    }
}

class Test2 {
    get Property() {
        var x = 1;
        return null;
    }
}

//// [accessorsEmit.js]
var Result = (function () {
    function Result() {
    }
    return Result;
})();
var Test = (function () {
    function Test() {
    }
    Object.defineProperty(Test.prototype, "Property", {
        get: function () {
            var x = 1;
            return null;
        },
        enumerable: true,
        configurable: true
    });
    return Test;
})();
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "//// [accessorsEmit.ts]\nclass Result { }\n\nclass Test {\n    get Property(): Result {\n        var x = 1;\n        return null;\n    }\n}\n\nclass Test2 {\n    get Property() {\n        var x = 1;\n        return null;\n    }\n}\n\n//// [accessorsEmit.js]\nvar Result = (function () {\n    function Result() {\n    }\n    return Result;\n})();\nvar Test = (function () {\n    function Test() {\n    }\n    Object.defineProperty(Test.prototype, \"Property\", {\n        get: function () {\n            var x = 1;\n            return null;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return Test;\n})();",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "Result",
                    "rawText": "Result",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 29,
                    "end": 36
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "parent": null,
                    "emitNode": null,
                    "start": 38,
                    "end": 40
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 40
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "Test",
                    "rawText": "Test",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 47,
                    "end": 52
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "Property",
                                    "rawText": "Property",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 62,
                                    "end": 71
                                },
                                "propertySetParameterList": null,
                                "uniqueFormalParameters": null,
                                "isSetter": false,
                                "isGetter": true,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [
                                            {
                                                "kind": 2097397,
                                                "declarationList": {
                                                    "kind": 244,
                                                    "declarations": [
                                                        {
                                                            "kind": 243,
                                                            "binding": {
                                                                "kind": 131102,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1025,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 95,
                                                                "end": 97
                                                            },
                                                            "exclamation": false,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 4261540,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 99,
                                                                "end": 101
                                                            },
                                                            "flags": 95,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 0,
                                                            "end": 101
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 95,
                                                    "end": 101
                                                },
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 83,
                                                "end": 102
                                            },
                                            {
                                                "kind": 2097346,
                                                "expression": {
                                                    "kind": 4260512,
                                                    "text": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 117,
                                                    "end": 122
                                                },
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 102,
                                                "end": 123
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 83,
                                        "end": 123
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 81,
                                    "end": 129
                                },
                                "decorators": null,
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "Result",
                                        "rawText": "Result",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 74,
                                        "end": 81
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 74,
                                    "end": 83
                                },
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 71,
                                "end": 129
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "parent": null,
                            "emitNode": null,
                            "start": 54,
                            "end": 129
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "parent": null,
                    "emitNode": null,
                    "start": 54,
                    "end": 131
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "parent": null,
                "emitNode": null,
                "start": 40,
                "end": 131
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "Test2",
                    "rawText": "Test2",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 138,
                    "end": 144
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "Property",
                                    "rawText": "Property",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 154,
                                    "end": 163
                                },
                                "propertySetParameterList": null,
                                "uniqueFormalParameters": null,
                                "isSetter": false,
                                "isGetter": true,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [
                                            {
                                                "kind": 2097397,
                                                "declarationList": {
                                                    "kind": 244,
                                                    "declarations": [
                                                        {
                                                            "kind": 243,
                                                            "binding": {
                                                                "kind": 131102,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1025,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 179,
                                                                "end": 181
                                                            },
                                                            "exclamation": false,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 4261540,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 183,
                                                                "end": 185
                                                            },
                                                            "flags": 179,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 0,
                                                            "end": 185
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 179,
                                                    "end": 185
                                                },
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 167,
                                                "end": 186
                                            },
                                            {
                                                "kind": 2097346,
                                                "expression": {
                                                    "kind": 4260512,
                                                    "text": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 201,
                                                    "end": 206
                                                },
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 186,
                                                "end": 207
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 167,
                                        "end": 207
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 165,
                                    "end": 213
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 163,
                                "end": 213
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "parent": null,
                            "emitNode": null,
                            "start": 146,
                            "end": 213
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "parent": null,
                    "emitNode": null,
                    "start": 146,
                    "end": 215
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "parent": null,
                "emitNode": null,
                "start": 131,
                "end": 215
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "Result",
                                "rawText": "Result",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 244,
                                "end": 251
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 66224,
                                    "expression": {
                                        "kind": 8456285,
                                        "name": null,
                                        "formalParameters": {
                                            "kind": 90,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 265,
                                            "end": 266
                                        },
                                        "contents": {
                                            "kind": 91,
                                            "functionStatementList": {
                                                "kind": 94,
                                                "statements": [
                                                    {
                                                        "kind": 264284,
                                                        "name": {
                                                            "kind": 131102,
                                                            "text": "Result",
                                                            "rawText": "Result",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 281,
                                                            "end": 288
                                                        },
                                                        "formalParameters": {
                                                            "kind": 90,
                                                            "formalParameterList": [],
                                                            "trailingComma": false,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 289,
                                                            "end": 290
                                                        },
                                                        "type": null,
                                                        "contents": {
                                                            "kind": 91,
                                                            "functionStatementList": {
                                                                "kind": 94,
                                                                "statements": [],
                                                                "multiline": true,
                                                                "flags": 16384,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 292,
                                                                "end": 292
                                                            },
                                                            "flags": 16384,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 290,
                                                            "end": 298
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 16384,
                                                        "intersects": false,
                                                        "transformFlags": 256,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 268,
                                                        "end": 298
                                                    },
                                                    {
                                                        "kind": 2097346,
                                                        "expression": {
                                                            "kind": 196712,
                                                            "text": "Result",
                                                            "rawText": "Result",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 309,
                                                            "end": 316
                                                        },
                                                        "flags": 16384,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 298,
                                                        "end": 317
                                                    }
                                                ],
                                                "multiline": true,
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 268,
                                                "end": 317
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 266,
                                            "end": 319
                                        },
                                        "typeParameters": null,
                                        "type": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 255,
                                        "end": 319
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 253,
                                    "end": 320
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 322,
                                    "end": 322
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 320,
                                "end": 322
                            },
                            "flags": 244,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 322
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 244,
                    "end": 322
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 215,
                "end": 323
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "Test",
                                "rawText": "Test",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 327,
                                "end": 332
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 66224,
                                    "expression": {
                                        "kind": 8456285,
                                        "name": null,
                                        "formalParameters": {
                                            "kind": 90,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 346,
                                            "end": 347
                                        },
                                        "contents": {
                                            "kind": 91,
                                            "functionStatementList": {
                                                "kind": 94,
                                                "statements": [
                                                    {
                                                        "kind": 264284,
                                                        "name": {
                                                            "kind": 131102,
                                                            "text": "Test",
                                                            "rawText": "Test",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 362,
                                                            "end": 367
                                                        },
                                                        "formalParameters": {
                                                            "kind": 90,
                                                            "formalParameterList": [],
                                                            "trailingComma": false,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 368,
                                                            "end": 369
                                                        },
                                                        "type": null,
                                                        "contents": {
                                                            "kind": 91,
                                                            "functionStatementList": {
                                                                "kind": 94,
                                                                "statements": [],
                                                                "multiline": true,
                                                                "flags": 16384,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 371,
                                                                "end": 371
                                                            },
                                                            "flags": 16384,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 369,
                                                            "end": 377
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 16384,
                                                        "intersects": false,
                                                        "transformFlags": 256,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 349,
                                                        "end": 377
                                                    },
                                                    {
                                                        "kind": 2097233,
                                                        "expression": {
                                                            "kind": 66091,
                                                            "expression": {
                                                                "kind": 74424,
                                                                "member": {
                                                                    "kind": 196712,
                                                                    "text": "Object",
                                                                    "rawText": "Object",
                                                                    "flags": 16384,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 377,
                                                                    "end": 388
                                                                },
                                                                "expression": {
                                                                    "kind": 196711,
                                                                    "text": "defineProperty",
                                                                    "rawText": "defineProperty",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 389,
                                                                    "end": 403
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 388,
                                                                "end": 403
                                                            },
                                                            "typeArguments": null,
                                                            "argumentList": {
                                                                "kind": 3,
                                                                "elements": [
                                                                    {
                                                                        "kind": 74424,
                                                                        "member": {
                                                                            "kind": 196712,
                                                                            "text": "Test",
                                                                            "rawText": "Test",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 404,
                                                                            "end": 408
                                                                        },
                                                                        "expression": {
                                                                            "kind": 196711,
                                                                            "text": "prototype",
                                                                            "rawText": "prototype",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 409,
                                                                            "end": 418
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 408,
                                                                        "end": 418
                                                                    },
                                                                    {
                                                                        "kind": 67279,
                                                                        "text": "Property",
                                                                        "rawText": "Property",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 419,
                                                                        "end": 430
                                                                    },
                                                                    {
                                                                        "kind": 67224232,
                                                                        "propertyList": {
                                                                            "kind": 65722,
                                                                            "properties": [
                                                                                {
                                                                                    "kind": 65721,
                                                                                    "left": {
                                                                                        "kind": 196711,
                                                                                        "text": "get",
                                                                                        "rawText": "get",
                                                                                        "flags": 16384,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 433,
                                                                                        "end": 445
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 8456285,
                                                                                        "name": null,
                                                                                        "formalParameters": {
                                                                                            "kind": 90,
                                                                                            "formalParameterList": [],
                                                                                            "trailingComma": false,
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 457,
                                                                                            "end": 458
                                                                                        },
                                                                                        "contents": {
                                                                                            "kind": 91,
                                                                                            "functionStatementList": {
                                                                                                "kind": 94,
                                                                                                "statements": [
                                                                                                    {
                                                                                                        "kind": 2097397,
                                                                                                        "declarationList": {
                                                                                                            "kind": 244,
                                                                                                            "declarations": [
                                                                                                                {
                                                                                                                    "kind": 243,
                                                                                                                    "binding": {
                                                                                                                        "kind": 131102,
                                                                                                                        "text": "x",
                                                                                                                        "rawText": "x",
                                                                                                                        "flags": 0,
                                                                                                                        "intersects": false,
                                                                                                                        "transformFlags": 1025,
                                                                                                                        "parent": null,
                                                                                                                        "emitNode": null,
                                                                                                                        "start": 476,
                                                                                                                        "end": 478
                                                                                                                    },
                                                                                                                    "exclamation": false,
                                                                                                                    "type": null,
                                                                                                                    "initializer": {
                                                                                                                        "kind": 4261540,
                                                                                                                        "text": 1,
                                                                                                                        "rawText": "1",
                                                                                                                        "flags": 0,
                                                                                                                        "intersects": false,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "parent": null,
                                                                                                                        "emitNode": null,
                                                                                                                        "start": 480,
                                                                                                                        "end": 482
                                                                                                                    },
                                                                                                                    "flags": 476,
                                                                                                                    "intersects": false,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "parent": null,
                                                                                                                    "emitNode": null,
                                                                                                                    "start": 0,
                                                                                                                    "end": 482
                                                                                                                }
                                                                                                            ],
                                                                                                            "flags": 0,
                                                                                                            "intersects": false,
                                                                                                            "transformFlags": 0,
                                                                                                            "parent": null,
                                                                                                            "emitNode": null,
                                                                                                            "start": 476,
                                                                                                            "end": 482
                                                                                                        },
                                                                                                        "flags": 16384,
                                                                                                        "intersects": false,
                                                                                                        "transformFlags": 0,
                                                                                                        "parent": null,
                                                                                                        "emitNode": null,
                                                                                                        "start": 460,
                                                                                                        "end": 483
                                                                                                    },
                                                                                                    {
                                                                                                        "kind": 2097346,
                                                                                                        "expression": {
                                                                                                            "kind": 4260512,
                                                                                                            "text": null,
                                                                                                            "flags": 0,
                                                                                                            "intersects": false,
                                                                                                            "transformFlags": 0,
                                                                                                            "parent": null,
                                                                                                            "emitNode": null,
                                                                                                            "start": 502,
                                                                                                            "end": 507
                                                                                                        },
                                                                                                        "flags": 16384,
                                                                                                        "intersects": false,
                                                                                                        "transformFlags": 0,
                                                                                                        "parent": null,
                                                                                                        "emitNode": null,
                                                                                                        "start": 483,
                                                                                                        "end": 508
                                                                                                    }
                                                                                                ],
                                                                                                "multiline": true,
                                                                                                "flags": 16384,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 0,
                                                                                                "parent": null,
                                                                                                "emitNode": null,
                                                                                                "start": 460,
                                                                                                "end": 508
                                                                                            },
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 458,
                                                                                            "end": 518
                                                                                        },
                                                                                        "typeParameters": null,
                                                                                        "type": null,
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 446,
                                                                                        "end": 518
                                                                                    },
                                                                                    "accessModifier": null,
                                                                                    "decorators": null,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 433,
                                                                                    "end": 518
                                                                                },
                                                                                {
                                                                                    "kind": 65721,
                                                                                    "left": {
                                                                                        "kind": 196711,
                                                                                        "text": "enumerable",
                                                                                        "rawText": "enumerable",
                                                                                        "flags": 16384,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 519,
                                                                                        "end": 538
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 4260391,
                                                                                        "text": true,
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 539,
                                                                                        "end": 544
                                                                                    },
                                                                                    "accessModifier": null,
                                                                                    "decorators": null,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 519,
                                                                                    "end": 544
                                                                                },
                                                                                {
                                                                                    "kind": 65721,
                                                                                    "left": {
                                                                                        "kind": 196711,
                                                                                        "text": "configurable",
                                                                                        "rawText": "configurable",
                                                                                        "flags": 16384,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 545,
                                                                                        "end": 566
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 4260391,
                                                                                        "text": true,
                                                                                        "flags": 16384,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 567,
                                                                                        "end": 572
                                                                                    },
                                                                                    "accessModifier": null,
                                                                                    "decorators": null,
                                                                                    "flags": 16384,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 545,
                                                                                    "end": 572
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "multiline": true,
                                                                            "flags": 16384,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 433,
                                                                            "end": 572
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 431,
                                                                        "end": 578
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "transformFlags": 0,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 408,
                                                                "end": 579
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 403,
                                                            "end": 579
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 377,
                                                        "end": 580
                                                    },
                                                    {
                                                        "kind": 2097346,
                                                        "expression": {
                                                            "kind": 196712,
                                                            "text": "Test",
                                                            "rawText": "Test",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 591,
                                                            "end": 596
                                                        },
                                                        "flags": 16384,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 580,
                                                        "end": 597
                                                    }
                                                ],
                                                "multiline": true,
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 349,
                                                "end": 597
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 347,
                                            "end": 599
                                        },
                                        "typeParameters": null,
                                        "type": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 336,
                                        "end": 599
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 334,
                                    "end": 600
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 602,
                                    "end": 602
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 600,
                                "end": 602
                            },
                            "flags": 327,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 602
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 327,
                    "end": 602
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 323,
                "end": 603
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 603
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 603
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

