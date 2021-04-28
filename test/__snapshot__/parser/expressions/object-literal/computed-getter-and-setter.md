# Kataw parser test case

## Input

`````js
({get [x]() {}, set [x](v) {}});
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
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "get",
                                "rawText": "get",
                                "flags": 96,
                                "start": 2,
                                "end": 5
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 7,
                                        "end": 8
                                    },
                                    "flags": 32,
                                    "start": 5,
                                    "end": 9
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 10,
                                    "end": 11
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
                                        "start": 13,
                                        "end": 13
                                    },
                                    "flags": 32,
                                    "start": 11,
                                    "end": 14
                                },
                                "flags": 32,
                                "start": 9,
                                "end": 14
                            },
                            {
                                "kind": 134299649,
                                "text": "set",
                                "rawText": "set",
                                "flags": 96,
                                "start": 15,
                                "end": 19
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 21,
                                        "end": 22
                                    },
                                    "flags": 32,
                                    "start": 19,
                                    "end": 23
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
                                                "text": "v",
                                                "rawText": "v",
                                                "flags": 96,
                                                "start": 24,
                                                "end": 25
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 24,
                                            "end": 25
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 24,
                                    "end": 26
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
                                        "start": 28,
                                        "end": 28
                                    },
                                    "flags": 32,
                                    "start": 26,
                                    "end": 29
                                },
                                "flags": 32,
                                "start": 23,
                                "end": 29
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 29
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 30
                },
                "flags": 32,
                "start": 0,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "({get [x]() {}, set [x](v) {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 5, end: 7
✖ ',' expected - start: 19, end: 21

```

