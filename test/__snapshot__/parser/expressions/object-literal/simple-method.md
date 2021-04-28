# Kataw parser test case

## Input

`````js
x = { method(test) { } };

x = { method(test: string) { } };

`````

## Output

### Hybrid CST

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
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 96,
                                    "start": 5,
                                    "end": 12
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "test",
                                                "rawText": "test",
                                                "flags": 96,
                                                "start": 13,
                                                "end": 17
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 13,
                                            "end": 17
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 13,
                                    "end": 18
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 32,
                                        "start": 20,
                                        "end": 20
                                    },
                                    "flags": 32,
                                    "start": 18,
                                    "end": 22
                                },
                                "flags": 32,
                                "start": 12,
                                "end": 22
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 5,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 24
                },
                "flags": 32,
                "start": 0,
                "end": 24
            },
            "flags": 16,
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
                    "flags": 96,
                    "start": 25,
                    "end": 28
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 28,
                    "end": 30
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 96,
                                    "start": 32,
                                    "end": 39
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "test",
                                                "rawText": "test",
                                                "flags": 96,
                                                "start": 40,
                                                "end": 44
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 40,
                                            "end": 44
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 40,
                                    "end": 45
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 32,
                                        "start": 44,
                                        "end": 44
                                    },
                                    "flags": 32,
                                    "start": 44,
                                    "end": 44
                                },
                                "flags": 32,
                                "start": 39,
                                "end": 44
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 32,
                        "end": 44
                    },
                    "flags": 32,
                    "start": 30,
                    "end": 44
                },
                "flags": 32,
                "start": 25,
                "end": 44
            },
            "flags": 16,
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
                "start": 45,
                "end": 52
            },
            "flags": 16,
            "start": 45,
            "end": 52
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 16,
                "start": 55,
                "end": 55
            },
            "flags": 16,
            "start": 53,
            "end": 57
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 59,
            "end": 60
        }
    ],
    "isModule": false,
    "text": "x = { method(test) { } };\n\nx = { method(test: string) { } };\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 44, end: 45
✖ Unexpected token. - start: 44, end: 45
✖ ',' expected - start: 44, end: 45
✖ Statement expected - start: 44, end: 45
✖ Statement expected - start: 52, end: 53
✖ Statement expected - start: 57, end: 59

```

