# Kataw parser test case

## Input

`````js
function f() {
    let
    yield 0;
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 12
            },
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
                                "flags": 81,
                                "start": 14,
                                "end": 22
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 96,
                                            "start": 22,
                                            "end": 32
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 22,
                                        "end": 32
                                    }
                                ],
                                "flags": 17,
                                "start": 22,
                                "end": 32
                            },
                            "flags": 33554448,
                            "start": 14,
                            "end": 32
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 32,
                                "end": 34
                            },
                            "flags": 16,
                            "start": 32,
                            "end": 35
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 35
                },
                "flags": 32,
                "start": 12,
                "end": 37
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "function f() {\n    let\n    yield 0;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 32, end: 34
✖ Expected a `;` - start: 32, end: 34

```

