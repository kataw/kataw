# Kataw parser test case

## Input

`````js
x = {0xabc(){}}
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 201392130,
                                        "text": 2748,
                                        "rawText": "0xabc",
                                        "flags": 1048672,
                                        "start": 5,
                                        "end": 10
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1048608,
                                        "start": 11,
                                        "end": 12
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 13,
                                            "end": 13
                                        },
                                        "flags": 32,
                                        "start": 12,
                                        "end": 14
                                    },
                                    "flags": 1048608,
                                    "start": 10,
                                    "end": 14
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "flags": 1048592,
                        "start": 5,
                        "end": 14
                    },
                    "flags": 1048624,
                    "start": 3,
                    "end": 15
                },
                "flags": 32,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "x = {0xabc(){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

x = { 0xabc() {} };

```

### Diagnostics

```javascript
✔ No errors
```

