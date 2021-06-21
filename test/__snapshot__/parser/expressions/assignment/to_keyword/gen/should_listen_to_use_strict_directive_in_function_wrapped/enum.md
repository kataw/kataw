# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: d
> :: test: should listen to use strict directive in function wrapped
> :: case: enum
## Options

`````js
{}
`````
## Input

`````js
function f() {
  "use strict";
  (enum = x);
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
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "enum",
                                        "rawText": "enum",
                                        "flags": 96,
                                        "start": 34,
                                        "end": 38
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 38,
                                        "end": 40
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 40,
                                        "end": 42
                                    },
                                    "flags": 32,
                                    "start": 30,
                                    "end": 42
                                },
                                "flags": 32,
                                "start": 30,
                                "end": 43
                            },
                            "flags": 16,
                            "start": 30,
                            "end": 44
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 44
                },
                "flags": 32,
                "start": 12,
                "end": 46
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "function f() {\n  \"use strict\";\n  (enum = x);\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

 function f() {
(enum=x);
} 
```

### Diagnostics

```javascript
✔ No errors
```

