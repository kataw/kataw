# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/gen/for-in_lhs
> :: test: for-in lhs
> :: case: function f(){}
## Options

`````js
{}
`````
## Input

`````js
for (function f(){} in x) ;
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
                "kind": 177,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 5,
                    "end": 13
                },
                "asteriskToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 13,
                    "end": 15
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 16,
                    "end": 16
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 18,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 17,
                    "end": 19
                },
                "returnType": null,
                "flags": 32,
                "start": 5,
                "end": 19
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 19,
                "end": 22
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 22,
                "end": 24
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 25,
                "end": 27
            },
            "flags": 80,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "for (function f(){} in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 22, end: 24

```

