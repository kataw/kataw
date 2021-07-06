# Kataw parser test case

## Input

`````js
async <T: U,>(x) => y;

(async <T: U,>(x) => y);
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
                    "transformFlags": 0,
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
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 8
                                },
                                "type": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "U",
                                            "rawText": "U",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 11
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 11
                                },
                                "assignToken": null,
                                "defaultType": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 0,
                                "end": 11
                            }
                        ],
                        "trailingComma": true,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 13
                    },
                    "flags": 2097152,
                    "transformFlags": 512,
                    "start": 0,
                    "end": 13
                },
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 15
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 16
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 19
                },
                "contents": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 21
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 271,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 30
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
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 33
                                    },
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "U",
                                                "rawText": "U",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 34,
                                                "end": 36
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 34,
                                            "end": 36
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 36
                                    },
                                    "assignToken": null,
                                    "defaultType": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 36
                                }
                            ],
                            "trailingComma": true,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 38
                        },
                        "flags": 2097152,
                        "transformFlags": 512,
                        "start": 25,
                        "end": 38
                    },
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 40
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 41
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 44
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 44,
                        "end": 46
                    },
                    "flags": 288,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 46
                },
                "flags": 22,
                "transformFlags": 0,
                "start": 33,
                "end": 47
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 22,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "async <T: U,>(x) => y;\n\n(async <T: U,>(x) => y);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
async <T: U>(x) => y;
(async <T: U>(x) => y);

```

### Diagnostics

```javascript
✔ No errors
```

