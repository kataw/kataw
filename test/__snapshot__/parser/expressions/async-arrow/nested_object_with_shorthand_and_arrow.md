# Kataw parser test case

## Input

`````js
async ({ident: {x}}) => x
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 20,
                "end": 23
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 16,
                                                "end": 17
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "flags": 32,
                                    "start": 14,
                                    "end": 18
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "ident",
                                    "rawText": "ident",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 13
                                },
                                "flags": 32,
                                "start": 8,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 8,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 19
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 23,
                "end": 25
            },
            "flags": 290,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "async ({ident: {x}}) => x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

