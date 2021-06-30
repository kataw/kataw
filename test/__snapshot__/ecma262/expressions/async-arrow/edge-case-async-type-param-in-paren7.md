# Kataw parser test case

## Input

`````js
(async <T, U>(x) => y);
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
                "kind": 121,
                "expression": {
                    "kind": 271,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 1,
                        "end": 6
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
                                        "start": 8,
                                        "end": 9
                                    },
                                    "type": null,
                                    "assignToken": null,
                                    "defaultType": null,
                                    "flags": 2097152,
                                    "start": 1,
                                    "end": 9
                                },
                                {
                                    "kind": 146,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "U",
                                        "rawText": "U",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "type": null,
                                    "assignToken": null,
                                    "defaultType": null,
                                    "flags": 2097152,
                                    "start": 10,
                                    "end": 12
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 1,
                            "end": 12
                        },
                        "flags": 2097152,
                        "start": 1,
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
                                "start": 14,
                                "end": 15
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 14,
                        "end": 16
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 16,
                        "end": 19
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 19,
                        "end": 21
                    },
                    "flags": 288,
                    "start": 1,
                    "end": 21
                },
                "flags": 32,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "(async <T, U>(x) => y);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

(async <T, U>(x) => y);

```

### Diagnostics

```javascript
✔ No errors
```

