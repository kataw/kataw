# Kataw parser test case

## Input

`````js
async <T>(fn: () => T) => fn;

`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": {
                    "kind": 307,
                    "declarations": {
                        "kind": 337,
                        "parameters": [
                            {
                                "kind": 146,
                                "name": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 7,
                                    "end": 8
                                },
                                "type": null,
                                "defaultType": null,
                                "flags": 2097152,
                                "start": 7,
                                "end": 9
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 0,
                        "end": 9
                    },
                    "flags": 2097152,
                    "start": 0,
                    "end": 9
                },
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "fn",
                                "rawText": "fn",
                                "flags": 96,
                                "start": 10,
                                "end": 12
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 288,
                                    "arrowTypeParameterList": {
                                        "kind": 292,
                                        "parameters": [],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 15,
                                        "end": 15
                                    },
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "start": 16,
                                        "end": 19
                                    },
                                    "returnType": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 19,
                                                "end": 21
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 19,
                                            "end": 21
                                        },
                                        "flags": 2097152,
                                        "start": 19,
                                        "end": 21
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 13,
                                    "end": 21
                                },
                                "flags": 2097152,
                                "start": 13,
                                "end": 21
                            },
                            "right": null,
                            "flags": 32,
                            "start": 10,
                            "end": 21
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 10,
                    "end": 22
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 22,
                    "end": 25
                },
                "contents": {
                    "kind": 134299649,
                    "text": "fn",
                    "rawText": "fn",
                    "flags": 96,
                    "start": 25,
                    "end": 28
                },
                "flags": 288,
                "start": 0,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "async <T>(fn: () => T) => fn;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

async  =>  fn;
```

### Diagnostics

```javascript
✔ No errors
```

