# Kataw parser test case

## Input

`````js
declare var NaN: number;
declare function eval(x: string): any;
declare function parseInt(s: string, radix?: number): number;
declare function parseFloat(string: string): number;
declare function isNaN(number: number): boolean;
declare function isFinite(number: number): boolean;
declare function decodeURI(encodedURI: string): string;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "declare var NaN: number;\ndeclare function eval(x: string): any;\ndeclare function parseInt(s: string, radix?: number): number;\ndeclare function parseFloat(string: string): number;\ndeclare function isNaN(number: number): boolean;\ndeclare function isFinite(number: number): boolean;\ndeclare function decodeURI(encodedURI: string): string;",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "NaN",
                            "rawText": "NaN",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 11,
                            "end": 15
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 16,
                            "end": 23
                        },
                        "initializer": null,
                        "flags": 11,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 23
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 23
            },
            "flags": 402685952,
            "symbol": null,
            "transformFlags": 0,
            "start": 7,
            "end": 24
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "eval",
                "rawText": "eval",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 41,
                "end": 46
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 47,
                            "end": 48
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 49,
                            "end": 56
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 47,
                        "end": 56
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 47,
                "end": 57
            },
            "type": {
                "kind": 4202498,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 58,
                "end": 62
            },
            "contents": null,
            "typeParameters": null,
            "flags": 402685952,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 32,
            "end": 63
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "parseInt",
                "rawText": "parseInt",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 80,
                "end": 89
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "s",
                            "rawText": "s",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 90,
                            "end": 91
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 92,
                            "end": 99
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 90,
                        "end": 99
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "radix",
                            "rawText": "radix",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 100,
                            "end": 106
                        },
                        "isOptional": true,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 108,
                            "end": 115
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 100,
                        "end": 115
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 90,
                "end": 116
            },
            "type": {
                "kind": 4202657,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 117,
                "end": 124
            },
            "contents": null,
            "typeParameters": null,
            "flags": 402685952,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 71,
            "end": 125
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "parseFloat",
                "rawText": "parseFloat",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 142,
                "end": 153
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "string",
                            "rawText": "string",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 154,
                            "end": 160
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 161,
                            "end": 168
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 154,
                        "end": 168
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 154,
                "end": 169
            },
            "type": {
                "kind": 4202657,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 170,
                "end": 177
            },
            "contents": null,
            "typeParameters": null,
            "flags": 402685952,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 133,
            "end": 178
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "isNaN",
                "rawText": "isNaN",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 195,
                "end": 201
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "number",
                            "rawText": "number",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 202,
                            "end": 208
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 209,
                            "end": 216
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 202,
                        "end": 216
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 202,
                "end": 217
            },
            "type": {
                "kind": 4268070,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 218,
                "end": 226
            },
            "contents": null,
            "typeParameters": null,
            "flags": 402685952,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 186,
            "end": 227
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "isFinite",
                "rawText": "isFinite",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 244,
                "end": 253
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "number",
                            "rawText": "number",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 254,
                            "end": 260
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 261,
                            "end": 268
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 254,
                        "end": 268
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 254,
                "end": 269
            },
            "type": {
                "kind": 4268070,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 270,
                "end": 278
            },
            "contents": null,
            "typeParameters": null,
            "flags": 402685952,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 235,
            "end": 279
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "decodeURI",
                "rawText": "decodeURI",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 296,
                "end": 306
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "encodedURI",
                            "rawText": "encodedURI",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 307,
                            "end": 317
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 318,
                            "end": 325
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 307,
                        "end": 325
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 307,
                "end": 326
            },
            "type": {
                "kind": 4202702,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 327,
                "end": 334
            },
            "contents": null,
            "typeParameters": null,
            "flags": 402653184,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 287,
            "end": 335
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 335
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

