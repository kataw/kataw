# Kataw parser test case

## Input

`````js
function *a(){({yi\u0065ld: 0})}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "yield",
                                                    "rawText": "yi\\u0065ld",
                                                    "flags": 96,
                                                    "start": 16,
                                                    "end": 26
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 0,
                                                    "rawText": "0",
                                                    "flags": 96,
                                                    "start": 27,
                                                    "end": 29
                                                },
                                                "flags": 16416,
                                                "start": 16,
                                                "end": 29
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16400,
                                        "start": 16,
                                        "end": 29
                                    },
                                    "flags": 16432,
                                    "start": 15,
                                    "end": 30
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 31
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 31
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 31
                },
                "flags": 32,
                "start": 13,
                "end": 32
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "function *a(){({yi\\u0065ld: 0})}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

function* a() { ({ yi\u0065ld : 0 }); }

```

### Diagnostics

```javascript
✔ No errors
```

