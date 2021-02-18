# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export interface IValidationError {
    message: string;
}

export default class Operation {
    validateParameters(parameterValues: any) : IValidationError[] | null {
        let result: IValidationError[] | null = null;
        for(const parameterLocation of Object.keys(parameterValues)) {
            const parameter: any = (this as any).getParameter();;
            const values = (this as any).getValues();

            const innerResult = parameter.validate(values[parameter.oaParameter.name]);
            if(innerResult && innerResult.length > 0) {
                // Commenting out this line will fix the problem.
                result = (result || []).concat(innerResult);
            }
        }

        return result;
    }
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export interface IValidationError {\n    message: string;\n}\n\nexport default class Operation {\n    validateParameters(parameterValues: any) : IValidationError[] | null {\n        let result: IValidationError[] | null = null;\n        for(const parameterLocation of Object.keys(parameterValues)) {\n            const parameter: any = (this as any).getParameter();;\n            const values = (this as any).getValues();\n\n            const innerResult = parameter.validate(values[parameter.oaParameter.name]);\n            if(innerResult && innerResult.length > 0) {\n                // Commenting out this line will fix the problem.\n                result = (result || []).concat(innerResult);\n            }\n        }\n\n        return result;\n    }\n}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 119,
                "name": {
                    "kind": 196712,
                    "text": "IValidationError",
                    "rawText": "IValidationError",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 16,
                    "end": 33
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 188,
                            "name": {
                                "kind": 196711,
                                "text": "message",
                                "rawText": "message",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 35,
                                "end": 47
                            },
                            "isOptional": false,
                            "accessModifier": null,
                            "type": {
                                "kind": 4194510,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 48,
                                "end": 55
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 35,
                            "end": 56
                        }
                    ],
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 35,
                    "end": 56
                },
                "flags": 81952,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 6,
                "end": 58
            },
            {
                "kind": 77,
                "declaration": {
                    "kind": 48,
                    "name": {
                        "kind": 131102,
                        "text": "Operation",
                        "rawText": "Operation",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 1025,
                        "parent": null,
                        "emitNode": null,
                        "start": 80,
                        "end": 90
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
                                        "text": "validateParameters",
                                        "rawText": "validateParameters",
                                        "flags": 81920,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 92,
                                        "end": 115
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [
                                            {
                                                "kind": 89,
                                                "ellipsis": false,
                                                "binding": {
                                                    "kind": 131102,
                                                    "text": "parameterValues",
                                                    "rawText": "parameterValues",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 116,
                                                    "end": 131
                                                },
                                                "isOptional": false,
                                                "type": {
                                                    "kind": 4194306,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 132,
                                                    "end": 136
                                                },
                                                "initializer": null,
                                                "decorators": null,
                                                "accessModifier": null,
                                                "isReadOnly": false,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 116,
                                                "end": 136
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 116,
                                        "end": 137
                                    },
                                    "isSetter": false,
                                    "isGetter": false,
                                    "contents": {
                                        "kind": 91,
                                        "functionStatementList": {
                                            "kind": 94,
                                            "statements": [
                                                {
                                                    "kind": 142,
                                                    "isConst": false,
                                                    "binding": {
                                                        "kind": 31,
                                                        "bindingList": [
                                                            {
                                                                "kind": 141,
                                                                "binding": {
                                                                    "kind": 131102,
                                                                    "text": "result",
                                                                    "rawText": "result",
                                                                    "flags": 65536,
                                                                    "intersects": false,
                                                                    "transformFlags": 1025,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 179,
                                                                    "end": 186
                                                                },
                                                                "exclamation": false,
                                                                "type": {
                                                                    "kind": 240,
                                                                    "types": [
                                                                        {
                                                                            "kind": 7,
                                                                            "elementType": {
                                                                                "kind": 236,
                                                                                "typeName": {
                                                                                    "kind": 196711,
                                                                                    "text": "IValidationError",
                                                                                    "rawText": "IValidationError",
                                                                                    "flags": 65536,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 187,
                                                                                    "end": 204
                                                                                },
                                                                                "typeArguments": null,
                                                                                "flags": 65536,
                                                                                "intersects": false,
                                                                                "transformFlags": 2097152,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 187,
                                                                                "end": 205
                                                                            },
                                                                            "flags": 65536,
                                                                            "intersects": false,
                                                                            "transformFlags": 2097152,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 187,
                                                                            "end": 208
                                                                        },
                                                                        {
                                                                            "kind": 4194463,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 2097152,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 208,
                                                                            "end": 213
                                                                        }
                                                                    ],
                                                                    "flags": 65536,
                                                                    "intersects": false,
                                                                    "transformFlags": 2097152,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 206,
                                                                    "end": 213
                                                                },
                                                                "initializer": {
                                                                    "kind": 4260512,
                                                                    "text": null,
                                                                    "flags": 65536,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 215,
                                                                    "end": 220
                                                                },
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 179,
                                                                "end": 220
                                                            }
                                                        ],
                                                        "flags": 65552,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 179,
                                                        "end": 220
                                                    },
                                                    "flags": 81936,
                                                    "intersects": false,
                                                    "transformFlags": 769,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 167,
                                                    "end": 221
                                                },
                                                {
                                                    "kind": 2099287,
                                                    "initializer": {
                                                        "kind": 142,
                                                        "isConst": true,
                                                        "binding": {
                                                            "kind": 31,
                                                            "bindingList": [
                                                                {
                                                                    "kind": 141,
                                                                    "binding": {
                                                                        "kind": 131102,
                                                                        "text": "parameterLocation",
                                                                        "rawText": "parameterLocation",
                                                                        "flags": 65536,
                                                                        "intersects": false,
                                                                        "transformFlags": 1025,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 239,
                                                                        "end": 257
                                                                    },
                                                                    "exclamation": false,
                                                                    "type": null,
                                                                    "initializer": null,
                                                                    "flags": 65536,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 239,
                                                                    "end": 257
                                                                }
                                                            ],
                                                            "flags": 65552,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 239,
                                                            "end": 257
                                                        },
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 256,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 234,
                                                        "end": 257
                                                    },
                                                    "expression": {
                                                        "kind": 66091,
                                                        "expression": {
                                                            "kind": 74424,
                                                            "member": {
                                                                "kind": 196712,
                                                                "text": "Object",
                                                                "rawText": "Object",
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 260,
                                                                "end": 267
                                                            },
                                                            "expression": {
                                                                "kind": 196711,
                                                                "text": "keys",
                                                                "rawText": "keys",
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 268,
                                                                "end": 272
                                                            },
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 267,
                                                            "end": 272
                                                        },
                                                        "typeArguments": null,
                                                        "argumentList": {
                                                            "kind": 3,
                                                            "elements": [
                                                                {
                                                                    "kind": 196712,
                                                                    "text": "parameterValues",
                                                                    "rawText": "parameterValues",
                                                                    "flags": 65536,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 273,
                                                                    "end": 288
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "transformFlags": 0,
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 288,
                                                            "end": 289
                                                        },
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 272,
                                                        "end": 289
                                                    },
                                                    "statement": {
                                                        "kind": 2099237,
                                                        "block": {
                                                            "kind": 2084,
                                                            "statements": [
                                                                {
                                                                    "kind": 142,
                                                                    "isConst": true,
                                                                    "binding": {
                                                                        "kind": 31,
                                                                        "bindingList": [
                                                                            {
                                                                                "kind": 141,
                                                                                "binding": {
                                                                                    "kind": 131102,
                                                                                    "text": "parameter",
                                                                                    "rawText": "parameter",
                                                                                    "flags": 65536,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 1025,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 310,
                                                                                    "end": 320
                                                                                },
                                                                                "exclamation": false,
                                                                                "type": {
                                                                                    "kind": 4194306,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 2097152,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 321,
                                                                                    "end": 325
                                                                                },
                                                                                "initializer": {
                                                                                    "kind": 66091,
                                                                                    "expression": {
                                                                                        "kind": 74424,
                                                                                        "member": {
                                                                                            "kind": 66224,
                                                                                            "expression": {
                                                                                                "kind": 65546,
                                                                                                "expression": {
                                                                                                    "kind": 4260571,
                                                                                                    "flags": 65536,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 0,
                                                                                                    "parent": null,
                                                                                                    "emitNode": null,
                                                                                                    "start": 329,
                                                                                                    "end": 333
                                                                                                },
                                                                                                "type": {
                                                                                                    "kind": 4194306,
                                                                                                    "flags": 0,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 2097152,
                                                                                                    "parent": null,
                                                                                                    "emitNode": null,
                                                                                                    "start": 336,
                                                                                                    "end": 340
                                                                                                },
                                                                                                "flags": 65536,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 2097152,
                                                                                                "parent": null,
                                                                                                "emitNode": null,
                                                                                                "start": 333,
                                                                                                "end": 340
                                                                                            },
                                                                                            "flags": 65536,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 327,
                                                                                            "end": 341
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 196711,
                                                                                            "text": "getParameter",
                                                                                            "rawText": "getParameter",
                                                                                            "flags": 65536,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 342,
                                                                                            "end": 354
                                                                                        },
                                                                                        "flags": 65536,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 341,
                                                                                        "end": 354
                                                                                    },
                                                                                    "typeArguments": null,
                                                                                    "argumentList": {
                                                                                        "kind": 3,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "transformFlags": 0,
                                                                                        "flags": 65536,
                                                                                        "intersects": false,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 356,
                                                                                        "end": 356
                                                                                    },
                                                                                    "flags": 65536,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 354,
                                                                                    "end": 356
                                                                                },
                                                                                "flags": 65536,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 310,
                                                                                "end": 356
                                                                            }
                                                                        ],
                                                                        "flags": 65552,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 310,
                                                                        "end": 356
                                                                    },
                                                                    "flags": 81936,
                                                                    "intersects": false,
                                                                    "transformFlags": 769,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 292,
                                                                    "end": 357
                                                                },
                                                                {
                                                                    "kind": 6291526,
                                                                    "flags": 81920,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 357,
                                                                    "end": 358
                                                                },
                                                                {
                                                                    "kind": 142,
                                                                    "isConst": true,
                                                                    "binding": {
                                                                        "kind": 31,
                                                                        "bindingList": [
                                                                            {
                                                                                "kind": 141,
                                                                                "binding": {
                                                                                    "kind": 131102,
                                                                                    "text": "values",
                                                                                    "rawText": "values",
                                                                                    "flags": 65536,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 1025,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 376,
                                                                                    "end": 383
                                                                                },
                                                                                "exclamation": false,
                                                                                "type": null,
                                                                                "initializer": {
                                                                                    "kind": 66091,
                                                                                    "expression": {
                                                                                        "kind": 74424,
                                                                                        "member": {
                                                                                            "kind": 66224,
                                                                                            "expression": {
                                                                                                "kind": 65546,
                                                                                                "expression": {
                                                                                                    "kind": 4260571,
                                                                                                    "flags": 65536,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 0,
                                                                                                    "parent": null,
                                                                                                    "emitNode": null,
                                                                                                    "start": 387,
                                                                                                    "end": 391
                                                                                                },
                                                                                                "type": {
                                                                                                    "kind": 4194306,
                                                                                                    "flags": 0,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 2097152,
                                                                                                    "parent": null,
                                                                                                    "emitNode": null,
                                                                                                    "start": 394,
                                                                                                    "end": 398
                                                                                                },
                                                                                                "flags": 65536,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 2097152,
                                                                                                "parent": null,
                                                                                                "emitNode": null,
                                                                                                "start": 391,
                                                                                                "end": 398
                                                                                            },
                                                                                            "flags": 65536,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 385,
                                                                                            "end": 399
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 196711,
                                                                                            "text": "getValues",
                                                                                            "rawText": "getValues",
                                                                                            "flags": 65536,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 400,
                                                                                            "end": 409
                                                                                        },
                                                                                        "flags": 65536,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 399,
                                                                                        "end": 409
                                                                                    },
                                                                                    "typeArguments": null,
                                                                                    "argumentList": {
                                                                                        "kind": 3,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "transformFlags": 0,
                                                                                        "flags": 65536,
                                                                                        "intersects": false,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 411,
                                                                                        "end": 411
                                                                                    },
                                                                                    "flags": 65536,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 409,
                                                                                    "end": 411
                                                                                },
                                                                                "flags": 65536,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 376,
                                                                                "end": 411
                                                                            }
                                                                        ],
                                                                        "flags": 65552,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 376,
                                                                        "end": 411
                                                                    },
                                                                    "flags": 81936,
                                                                    "intersects": false,
                                                                    "transformFlags": 769,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 358,
                                                                    "end": 412
                                                                },
                                                                {
                                                                    "kind": 142,
                                                                    "isConst": true,
                                                                    "binding": {
                                                                        "kind": 31,
                                                                        "bindingList": [
                                                                            {
                                                                                "kind": 141,
                                                                                "binding": {
                                                                                    "kind": 131102,
                                                                                    "text": "innerResult",
                                                                                    "rawText": "innerResult",
                                                                                    "flags": 65536,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 1025,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 431,
                                                                                    "end": 443
                                                                                },
                                                                                "exclamation": false,
                                                                                "type": null,
                                                                                "initializer": {
                                                                                    "kind": 66091,
                                                                                    "expression": {
                                                                                        "kind": 74424,
                                                                                        "member": {
                                                                                            "kind": 196712,
                                                                                            "text": "parameter",
                                                                                            "rawText": "parameter",
                                                                                            "flags": 65536,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 445,
                                                                                            "end": 455
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 196711,
                                                                                            "text": "validate",
                                                                                            "rawText": "validate",
                                                                                            "flags": 65536,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 456,
                                                                                            "end": 464
                                                                                        },
                                                                                        "flags": 65536,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 455,
                                                                                        "end": 464
                                                                                    },
                                                                                    "typeArguments": null,
                                                                                    "argumentList": {
                                                                                        "kind": 3,
                                                                                        "elements": [
                                                                                            {
                                                                                                "kind": 74308,
                                                                                                "member": {
                                                                                                    "kind": 196712,
                                                                                                    "text": "values",
                                                                                                    "rawText": "values",
                                                                                                    "flags": 65536,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 0,
                                                                                                    "parent": null,
                                                                                                    "emitNode": null,
                                                                                                    "start": 465,
                                                                                                    "end": 471
                                                                                                },
                                                                                                "expression": {
                                                                                                    "kind": 74424,
                                                                                                    "member": {
                                                                                                        "kind": 74424,
                                                                                                        "member": {
                                                                                                            "kind": 196712,
                                                                                                            "text": "parameter",
                                                                                                            "rawText": "parameter",
                                                                                                            "flags": 65536,
                                                                                                            "intersects": false,
                                                                                                            "transformFlags": 0,
                                                                                                            "parent": null,
                                                                                                            "emitNode": null,
                                                                                                            "start": 472,
                                                                                                            "end": 481
                                                                                                        },
                                                                                                        "expression": {
                                                                                                            "kind": 196711,
                                                                                                            "text": "oaParameter",
                                                                                                            "rawText": "oaParameter",
                                                                                                            "flags": 65536,
                                                                                                            "intersects": false,
                                                                                                            "transformFlags": 0,
                                                                                                            "parent": null,
                                                                                                            "emitNode": null,
                                                                                                            "start": 482,
                                                                                                            "end": 493
                                                                                                        },
                                                                                                        "flags": 65536,
                                                                                                        "intersects": false,
                                                                                                        "transformFlags": 0,
                                                                                                        "parent": null,
                                                                                                        "emitNode": null,
                                                                                                        "start": 481,
                                                                                                        "end": 493
                                                                                                    },
                                                                                                    "expression": {
                                                                                                        "kind": 196711,
                                                                                                        "text": "name",
                                                                                                        "rawText": "name",
                                                                                                        "flags": 65536,
                                                                                                        "intersects": false,
                                                                                                        "transformFlags": 0,
                                                                                                        "parent": null,
                                                                                                        "emitNode": null,
                                                                                                        "start": 494,
                                                                                                        "end": 498
                                                                                                    },
                                                                                                    "flags": 65536,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 0,
                                                                                                    "parent": null,
                                                                                                    "emitNode": null,
                                                                                                    "start": 493,
                                                                                                    "end": 498
                                                                                                },
                                                                                                "flags": 65536,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 0,
                                                                                                "parent": null,
                                                                                                "emitNode": null,
                                                                                                "start": 471,
                                                                                                "end": 499
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "transformFlags": 0,
                                                                                        "flags": 65536,
                                                                                        "intersects": false,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 471,
                                                                                        "end": 500
                                                                                    },
                                                                                    "flags": 65536,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 464,
                                                                                    "end": 500
                                                                                },
                                                                                "flags": 65536,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 431,
                                                                                "end": 500
                                                                            }
                                                                        ],
                                                                        "flags": 65552,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 431,
                                                                        "end": 500
                                                                    },
                                                                    "flags": 81936,
                                                                    "intersects": false,
                                                                    "transformFlags": 769,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 412,
                                                                    "end": 501
                                                                },
                                                                {
                                                                    "kind": 2097257,
                                                                    "expression": {
                                                                        "kind": 65563,
                                                                        "left": {
                                                                            "kind": 196712,
                                                                            "text": "innerResult",
                                                                            "rawText": "innerResult",
                                                                            "flags": 65536,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 517,
                                                                            "end": 528
                                                                        },
                                                                        "operator": "&&",
                                                                        "right": {
                                                                            "kind": 65563,
                                                                            "left": {
                                                                                "kind": 74424,
                                                                                "member": {
                                                                                    "kind": 196712,
                                                                                    "text": "innerResult",
                                                                                    "rawText": "innerResult",
                                                                                    "flags": 65536,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 531,
                                                                                    "end": 543
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 196711,
                                                                                    "text": "length",
                                                                                    "rawText": "length",
                                                                                    "flags": 65536,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 544,
                                                                                    "end": 550
                                                                                },
                                                                                "flags": 65536,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 543,
                                                                                "end": 550
                                                                            },
                                                                            "operator": ">",
                                                                            "right": {
                                                                                "kind": 4261540,
                                                                                "text": 0,
                                                                                "rawText": "0",
                                                                                "flags": 65536,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 552,
                                                                                "end": 554
                                                                            },
                                                                            "flags": 65536,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 550,
                                                                            "end": 554
                                                                        },
                                                                        "flags": 65536,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 517,
                                                                        "end": 554
                                                                    },
                                                                    "consequent": {
                                                                        "kind": 2099237,
                                                                        "block": {
                                                                            "kind": 2084,
                                                                            "statements": [
                                                                                {
                                                                                    "kind": 2097233,
                                                                                    "expression": {
                                                                                        "kind": 65550,
                                                                                        "left": {
                                                                                            "kind": 196712,
                                                                                            "text": "result",
                                                                                            "rawText": "result",
                                                                                            "flags": 81920,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 557,
                                                                                            "end": 646
                                                                                        },
                                                                                        "operator": "=",
                                                                                        "right": {
                                                                                            "kind": 66091,
                                                                                            "expression": {
                                                                                                "kind": 74424,
                                                                                                "member": {
                                                                                                    "kind": 66224,
                                                                                                    "expression": {
                                                                                                        "kind": 65563,
                                                                                                        "left": {
                                                                                                            "kind": 196712,
                                                                                                            "text": "result",
                                                                                                            "rawText": "result",
                                                                                                            "flags": 65536,
                                                                                                            "intersects": false,
                                                                                                            "transformFlags": 0,
                                                                                                            "parent": null,
                                                                                                            "emitNode": null,
                                                                                                            "start": 650,
                                                                                                            "end": 656
                                                                                                        },
                                                                                                        "operator": "||",
                                                                                                        "right": {
                                                                                                            "kind": 67207686,
                                                                                                            "elementList": {
                                                                                                                "kind": 65605,
                                                                                                                "elements": [],
                                                                                                                "trailingComma": false,
                                                                                                                "multiline": false,
                                                                                                                "flags": 65536,
                                                                                                                "intersects": false,
                                                                                                                "transformFlags": 0,
                                                                                                                "parent": null,
                                                                                                                "emitNode": null,
                                                                                                                "start": 661,
                                                                                                                "end": 661
                                                                                                            },
                                                                                                            "flags": 65536,
                                                                                                            "intersects": false,
                                                                                                            "transformFlags": 0,
                                                                                                            "parent": null,
                                                                                                            "emitNode": null,
                                                                                                            "start": 659,
                                                                                                            "end": 662
                                                                                                        },
                                                                                                        "flags": 65536,
                                                                                                        "intersects": false,
                                                                                                        "transformFlags": 0,
                                                                                                        "parent": null,
                                                                                                        "emitNode": null,
                                                                                                        "start": 648,
                                                                                                        "end": 662
                                                                                                    },
                                                                                                    "flags": 65536,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 0,
                                                                                                    "parent": null,
                                                                                                    "emitNode": null,
                                                                                                    "start": 648,
                                                                                                    "end": 663
                                                                                                },
                                                                                                "expression": {
                                                                                                    "kind": 196711,
                                                                                                    "text": "concat",
                                                                                                    "rawText": "concat",
                                                                                                    "flags": 65536,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 0,
                                                                                                    "parent": null,
                                                                                                    "emitNode": null,
                                                                                                    "start": 664,
                                                                                                    "end": 670
                                                                                                },
                                                                                                "flags": 65536,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 0,
                                                                                                "parent": null,
                                                                                                "emitNode": null,
                                                                                                "start": 663,
                                                                                                "end": 670
                                                                                            },
                                                                                            "typeArguments": null,
                                                                                            "argumentList": {
                                                                                                "kind": 3,
                                                                                                "elements": [
                                                                                                    {
                                                                                                        "kind": 196712,
                                                                                                        "text": "innerResult",
                                                                                                        "rawText": "innerResult",
                                                                                                        "flags": 65536,
                                                                                                        "intersects": false,
                                                                                                        "transformFlags": 0,
                                                                                                        "parent": null,
                                                                                                        "emitNode": null,
                                                                                                        "start": 671,
                                                                                                        "end": 682
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "transformFlags": 0,
                                                                                                "flags": 65536,
                                                                                                "intersects": false,
                                                                                                "parent": null,
                                                                                                "emitNode": null,
                                                                                                "start": 682,
                                                                                                "end": 683
                                                                                            },
                                                                                            "flags": 65536,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 670,
                                                                                            "end": 683
                                                                                        },
                                                                                        "flags": 65536,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 557,
                                                                                        "end": 683
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 557,
                                                                                    "end": 684
                                                                                }
                                                                            ],
                                                                            "multiline": true,
                                                                            "flags": 81920,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 557,
                                                                            "end": 684
                                                                        },
                                                                        "flags": 81920,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 555,
                                                                        "end": 698
                                                                    },
                                                                    "alternate": null,
                                                                    "isWebCompat": false,
                                                                    "flags": 81920,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 501,
                                                                    "end": 698
                                                                }
                                                            ],
                                                            "multiline": true,
                                                            "flags": 81920,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 292,
                                                            "end": 698
                                                        },
                                                        "flags": 81920,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 290,
                                                        "end": 708
                                                    },
                                                    "isAwait": false,
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 221,
                                                    "end": 708
                                                },
                                                {
                                                    "kind": 2097346,
                                                    "expression": {
                                                        "kind": 196712,
                                                        "text": "result",
                                                        "rawText": "result",
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 724,
                                                        "end": 731
                                                    },
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 708,
                                                    "end": 732
                                                }
                                            ],
                                            "multiline": true,
                                            "flags": 81920,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 167,
                                            "end": 732
                                        },
                                        "flags": 81920,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 165,
                                        "end": 738
                                    },
                                    "decorators": null,
                                    "type": {
                                        "kind": 240,
                                        "types": [
                                            {
                                                "kind": 7,
                                                "elementType": {
                                                    "kind": 236,
                                                    "typeName": {
                                                        "kind": 196711,
                                                        "text": "IValidationError",
                                                        "rawText": "IValidationError",
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 139,
                                                        "end": 156
                                                    },
                                                    "typeArguments": null,
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 139,
                                                    "end": 157
                                                },
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 139,
                                                "end": 160
                                            },
                                            {
                                                "kind": 4194463,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 160,
                                                "end": 165
                                            }
                                        ],
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 158,
                                        "end": 165
                                    },
                                    "accessModifier": null,
                                    "typeParameters": null,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 115,
                                    "end": 738
                                },
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 1,
                                "parent": null,
                                "emitNode": null,
                                "start": 92,
                                "end": 738
                            }
                        ],
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 1,
                        "parent": null,
                        "emitNode": null,
                        "start": 92,
                        "end": 740
                    },
                    "decorators": null,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1,
                    "parent": null,
                    "emitNode": null,
                    "start": 74,
                    "end": 740
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 58,
                "end": 740
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 740
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 740
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
