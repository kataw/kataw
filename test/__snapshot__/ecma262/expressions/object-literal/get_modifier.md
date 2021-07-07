# Kataw parser test case

## Input

`````js
({get * bar(){}})
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
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 5,
                                    "end": 7
                                },
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 5
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 7,
                                        "end": 11
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 13
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
                                            "start": 14,
                                            "end": 14
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 15
                                    },
                                    "flags": 1056,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 15
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 15
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 15
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 16
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "({get * bar(){}})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A get accessor cannot be a generator - start: 2, end: 11

```

