# Kataw parser test case

## Input

`````js
x = { method(test) { } };

x = { method(test: string) { } };

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
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 12
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
                                                "start": 13,
                                                "end": 17
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 18
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
                                            "start": 20,
                                            "end": 20
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 18,
                                        "end": 22
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 22
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 22
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 22
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 3,
                    "end": 24
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 28
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 30
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
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 39
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 281,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "test",
                                                    "rawText": "test",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 40,
                                                    "end": 44
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": null,
                                                "flags": 32,
                                                "transformFlags": 4096,
                                                "start": 40,
                                                "end": 44
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 45
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
                                            "start": 44,
                                            "end": 44
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 44,
                                        "end": 44
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 44
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 44
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 44
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 30,
                    "end": 44
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 25,
                "end": 44
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 25,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "transformFlags": 0,
                "start": 45,
                "end": 52
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 45,
            "end": 52
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 55,
                "end": 55
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 53,
            "end": 57
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 59,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "x = { method(test) { } };\n\nx = { method(test: string) { } };\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 44, end: 45
✖ Expected a ')' to match the '(' token here - start: 44, end: 45
✖ ')' is not allowed here. Did you mean ';'? - start: 52, end: 53
✖ Declaration or statement expected - start: 57, end: 59

```

