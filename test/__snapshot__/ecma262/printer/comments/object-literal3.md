# Kataw parser test case

## Input

`````js
({/*1*/x/*2*/(){}})
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
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 8
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 15
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 16
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 17
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 17
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 18
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "({/*1*/x/*2*/(){}})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
({ /*1*/ x /*2*/() {} });
```

### Diagnostics

```javascript
✔ No errors
```

