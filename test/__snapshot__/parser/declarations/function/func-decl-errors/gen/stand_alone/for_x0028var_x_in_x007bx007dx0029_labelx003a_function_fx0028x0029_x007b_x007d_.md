# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/declarations/function/func-decl-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\func-decl-errors\gen\stand_alone
> :: test: stand alone
> :: case: for (var x in {}) label: function f() { };
## Input

`````js
for (var x in {}) label: function f() { };
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 8,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 8,
                        "end": 10
                    }
                ],
                "flags": 16,
                "start": 8,
                "end": 10
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 10,
                "end": 13
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 15,
                    "end": 15
                },
                "flags": 48,
                "start": 13,
                "end": 16
            },
            "statement": {
                "kind": 163,
                "label": {
                    "kind": 134299649,
                    "text": "label",
                    "rawText": "label",
                    "flags": 96,
                    "start": 17,
                    "end": 23
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 23,
                    "end": 24
                },
                "statement": {
                    "kind": 176,
                    "declareKeyword": null,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 24,
                        "end": 33
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 33,
                        "end": 35
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 35,
                        "end": 37
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 39,
                            "end": 39
                        },
                        "flags": 32,
                        "start": 37,
                        "end": 41
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 16,
                    "start": 24,
                    "end": 41
                },
                "flags": 16,
                "start": 17,
                "end": 41
            },
            "flags": 80,
            "start": 0,
            "end": 41
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 41,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "for (var x in {}) label: function f() { };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 24, end: 33

```

