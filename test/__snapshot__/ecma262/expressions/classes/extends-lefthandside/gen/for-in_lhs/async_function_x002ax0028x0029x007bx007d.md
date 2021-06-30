# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/gen/for-in_lhs
> :: test: for-in lhs
> :: case: async function *(){}
## Options

`````js
{}
`````
## Input

`````js
for (async function *(){} in x) ;
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
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 5,
                    "end": 10
                },
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 10,
                    "end": 19
                },
                "asteriskToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "start": 19,
                    "end": 21
                },
                "name": null,
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 22,
                    "end": 22
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 24,
                        "end": 24
                    },
                    "flags": 32,
                    "start": 23,
                    "end": 25
                },
                "returnType": null,
                "flags": 416,
                "start": 5,
                "end": 25
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 25,
                "end": 28
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 28,
                "end": 30
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 31,
                "end": 33
            },
            "flags": 80,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "for (async function *(){} in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 28, end: 30

```

