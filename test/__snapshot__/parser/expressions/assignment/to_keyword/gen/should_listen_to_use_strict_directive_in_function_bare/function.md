# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: e
> :: test: should listen to use strict directive in function bare
> :: case: function
## Options

`````js
{}
`````
## Input

`````js
function f() {
  "use strict";
  function = x
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
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 65,
                                "start": 30,
                                "end": 41
                            },
                            "asteriskToken": null,
                            "name": null,
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 41,
                                "end": 41
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 41,
                                    "end": 41
                                },
                                "flags": 32,
                                "start": 41,
                                "end": 41
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 30,
                            "end": 41
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 41
                },
                "flags": 32,
                "start": 12,
                "end": 41
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 43,
                "end": 45
            },
            "flags": 16,
            "start": 43,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "function f() {\n  \"use strict\";\n  function = x\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 41, end: 43
✖ Missing an opening parentheses - '( - start: 42, end: 43
✖ Declaration or statement expected - start: 45, end: 47

```

