# Kataw parser test case

## Input

`````js
o = {f(x) { let x }}
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
                    "text": "o",
                    "rawText": "o",
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
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 7,
                                                "end": 8
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 96,
                                        "start": 7,
                                        "end": 9
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 162,
                                                    "lexicalKeyword": {
                                                        "kind": 41951307,
                                                        "flags": 80,
                                                        "start": 11,
                                                        "end": 15
                                                    },
                                                    "binding": {
                                                        "kind": 151,
                                                        "bindingList": [
                                                            {
                                                                "kind": 190,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 15,
                                                                    "end": 17
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "start": 15,
                                                                "end": 17
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 15,
                                                        "end": 17
                                                    },
                                                    "flags": 33554448,
                                                    "start": 11,
                                                    "end": 17
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 11,
                                            "end": 17
                                        },
                                        "flags": 32,
                                        "start": 9,
                                        "end": 19
                                    },
                                    "flags": 32,
                                    "start": 6,
                                    "end": 19
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 19
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 5,
                        "end": 19
                    },
                    "flags": 48,
                    "start": 3,
                    "end": 20
                },
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "o = {f(x) { let x }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot redeclare block-scoped variable - start: 15, end: 17

```

