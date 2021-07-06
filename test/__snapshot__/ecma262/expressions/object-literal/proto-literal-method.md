# Kataw parser test case

## Input

`````js
({ "__proto__": null, __proto__(){}, })
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
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392131,
                                    "text": "__proto__",
                                    "rawText": "\"__proto__\"",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 14
                                },
                                "right": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 20
                                },
                                "flags": 36,
                                "transformFlags": 128,
                                "start": 2,
                                "end": 20
                            },
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
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 31
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 36,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 33
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
                                            "start": 34,
                                            "end": 34
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 35
                                    },
                                    "flags": 36,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 35
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 35
                            }
                        ],
                        "trailingComma": true,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 36
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 38
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 39
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "({ \"__proto__\": null, __proto__(){}, })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

({"\"__proto__\"": null, __proto__() {}});
```

### Diagnostics

```javascript
✔ No errors
```

