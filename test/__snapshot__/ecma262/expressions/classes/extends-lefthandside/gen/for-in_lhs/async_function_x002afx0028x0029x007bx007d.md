# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/gen/for-in_lhs
> :: test: for-in lhs
> :: case: async function *f(){}
## Options

`````js
{}
`````
## Input

`````js
for (async function *f(){} in x) ;
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
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 177,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 10
                },
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 19
                },
                "asteriskToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 21
                },
                "name": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 22
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 23
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 25
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 26
                },
                "returnType": null,
                "flags": 416,
                "transformFlags": 0,
                "start": 5,
                "end": 26
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "transformFlags": 8192,
                "start": 26,
                "end": 29
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 29,
                "end": 31
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 32,
                "end": 34
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "for (async function *f(){} in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 29, end: 31

```

