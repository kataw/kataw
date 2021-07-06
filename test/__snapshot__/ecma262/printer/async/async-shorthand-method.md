# Kataw parser test case

## Input

`````js
({
  async get() {},
  async set() {}
});
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
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 353,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 10
                                },
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "get",
                                        "rawText": "get",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 14
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 289,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 16
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
                                            "start": 18,
                                            "end": 18
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 19
                                    },
                                    "flags": 289,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 19
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 19
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 353,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 28
                                },
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "set",
                                        "rawText": "set",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 28,
                                        "end": 32
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 289,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 34
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
                                            "start": 36,
                                            "end": 36
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 37
                                    },
                                    "flags": 289,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 37
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 37
                            }
                        ],
                        "trailingComma": false,
                        "flags": 17,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 37
                    },
                    "flags": 49,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 39
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 40
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "({\n  async get() {},\n  async set() {}\n});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
({ async get() {}, async set() {} });
```

### Diagnostics

```javascript
✔ No errors
```

