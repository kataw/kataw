# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: d
> :: test: should listen to use strict directive in function wrapped
> :: case: return
## Options

`````js
{}
`````
## Input

`````js
function f() {
  "use strict";
  (return = x);
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
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "\"use strict\"",
                            "flags": 97,
                            "start": 14,
                            "end": 29
                        }
                    ],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "start": 34,
                                    "end": 34
                                },
                                "flags": 32,
                                "start": 30,
                                "end": 34
                            },
                            "flags": 16,
                            "start": 30,
                            "end": 34
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 80,
                                "start": 34,
                                "end": 40
                            },
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "start": 40,
                                    "end": 40
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 40,
                                    "end": 42
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 42,
                                    "end": 44
                                },
                                "flags": 32,
                                "start": 40,
                                "end": 44
                            },
                            "flags": 80,
                            "start": 34,
                            "end": 44
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 44
                },
                "flags": 32,
                "start": 12,
                "end": 44
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 44
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 45,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "function f() {\n  \"use strict\";\n  (return = x);\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 34, end: 40
✖ Identifier expected - start: 40, end: 42
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 40, end: 42
✖ Expected a `;` - start: 44, end: 45
✖ Declaration or statement expected - start: 46, end: 48

```

