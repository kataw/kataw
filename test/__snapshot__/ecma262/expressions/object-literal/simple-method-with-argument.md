# Kataw parser test case

## Input

`````js
x = {
    method(test) {

    }
};;
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
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
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
                                        "kind": 134299649,
                                        "text": "method",
                                        "rawText": "method",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 16
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "test",
                                                "rawText": "test",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 17,
                                                "end": 21
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 22
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 33,
                                            "transformFlags": 0,
                                            "start": 24,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 31
                                    },
                                    "flags": 33,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 31
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 31
                            }
                        ],
                        "trailingComma": false,
                        "flags": 17,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 31
                    },
                    "flags": 49,
                    "transformFlags": 8,
                    "start": 3,
                    "end": 33
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 34
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 34,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "x = {\n    method(test) {\n\n    }\n};;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
x = { method(test) {} };
```

### Diagnostics

```javascript
✔ No errors
```

