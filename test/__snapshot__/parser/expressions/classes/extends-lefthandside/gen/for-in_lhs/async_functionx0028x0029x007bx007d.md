# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\classes\extends-lefthandside\gen\for-in_lhs
> :: test: for-in lhs
> :: case: async function(){}
## Input

`````js
for (async function(){} in x) ;
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
                "generatorToken": null,
                "name": null,
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 19,
                    "end": 21
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 22,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 21,
                    "end": 23
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 160,
                "start": 5,
                "end": 23
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 23,
                "end": 26
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 26,
                "end": 28
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 29,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "for (async function(){} in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 26, end: 28

```

